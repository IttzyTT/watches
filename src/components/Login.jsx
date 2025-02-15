import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../App';
import { cartCheckoutDB } from '../helperFunctions/cartDBfunctions';
import { ThemeContext } from '../App';
import {isMobile} from 'react-device-detect';

export const Login = ({ toggleLogIn, setToggleLogIn, isLoggedIn, setIsLoggedIn }) => {
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const { setUserName, setUserCartId } = useContext(UserContext);

  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme ? 'white' : '#202124',
    color: theme ? 'black' : 'white',
  };
  const para = {
    color: theme ? 'black' : 'white',
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };
    if (isMobile) {
      (async () => {
        const loggedInAlready = localStorage.getItem('loggedInUserId');
        if (!loggedInAlready) {
          return;
        } else {
          //fetch med hashade user ID't
          try {
            let encodedId = encodeURIComponent(loggedInAlready);
            let loggedInUser = await (await fetch(`/api/registration/getoneuser/hash/${encodedId}`, opts)).json();
            setUserName(loggedInUser.userName);
            setUserCartId(loggedInUser.cartId);
            setIsLoggedIn(true);
          } catch (error) {
            console.error(error);
          }
        }
      })(opts)
    }
    return () => abortCtrl.abort();
  }, []);

  function Success() {
    setIsLoggedIn(!isLoggedIn);
    console.log('Success.');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userNameEnc = encodeURIComponent(user_name);
    let passwordEnc = encodeURIComponent(password);

    let response = await (await fetch(`/api/registration/${userNameEnc}/${passwordEnc}`)).json();

    if (response.loginSuccess) {
      let cartIdLocalSt = window.localStorage.getItem('cartId');
      if (cartIdLocalSt) {
        try {
          let patchReq = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cartIdLocalSt: cartIdLocalSt,
              cartIdPersonal: response.userCartId,
            }),
          };
          await fetch('/api/cart/movetopersonalcart', patchReq);
        } catch (error) {
          console.error('Error on cart-patch to /api/cart/movetopersonalcart\n' + error);
        }
        try {
          await cartCheckoutDB();
          window.localStorage.removeItem('cartId');
        } catch (error) {
          console.error('Error on cartCheckoutDB\n' + error);
        }
      }
      Success();

      setUserName(response.user_name);
      setUserCartId(response.userCartId);
      if (isMobile) {
        localStorage.setItem('loggedInUserId', response.cryptedUserId);
      }

    } else {
      return; //byt ut mot att skicka errormeddelande
    }
  };

  return (
    <FormContainer style={styles}>
      <Form onSubmit={handleSubmit}>
        <FormInputContainer>
          <InputCont>
            <input placeholder="användarnamn" type="text" name="username" value={user_name} onChange={(e) => setUser_name(e.target.value)} />
          </InputCont>
          <InputCont>
            <input placeholder="Lösenord" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputCont>
        </FormInputContainer>
        <LoginButton type="submit" style={para}>
          logga in
        </LoginButton>
      </Form>

      <RegisterContainer>
        <div>
          <p>Inte medlem?</p>
          <a href="#" onClick={() => setToggleLogIn(!toggleLogIn)}>
            Registrera
          </a>
        </div>
      </RegisterContainer>
    </FormContainer>
  );
};

export default Login;

// Styleing -----------------------------------

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  max-width: 19rem;

  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    padding: 5px;
    border: 1px solid #000;
    margin-right: 7px;
  }
`;

const FormInputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    margin-bottom: 3px;
    width: 9.5rem;
  }
  @media screen and (max-width: 420px) {
    margin-bottom: 3px;
    width: 15rem;
  }
`;

const LoginButton = styled.button`
  height: 45px;
  width: 146px;
  font-family: 'Libre Franklin', sans-serif;
  border: 2px solid #292929;
  text-align: center;
  background-color: transparent;
  color: #292929;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    background-color: #292929;
    color: whitesmoke;
  }

  @media screen and (max-width: 420px) {
    width: 14.6rem;
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: 'Libre Franklin', sans-serif;
    font-size: 0.8rem;
    margin-right: 6px;
  }

  a {
    font-size: 0.8rem;
    color: #4e5da3;
    font-family: 'Montserrat';
    text-decoration: none;
    letter-spacing: 1px;
    margin-bottom: 13px;

    &:hover {
      border-bottom: 1px solid #4e5da3;
    }
  }
  div {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    p,
    a {
      font-size: 0.6rem;
    }
  }
`;
