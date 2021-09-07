import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const cartDataFromDB = [
    {
        'name': 'Apple Watch SE',
        'id': 1,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 3195,
        'quantity': 2,
    },
    {
        'name': 'Apple Watch SE',
        'id': 2,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 149,
        'quantity': 1,
    },
    {
        'name': 'Apple Watch SE Special Ed.',
        'id': 3,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 3195,
        'quantity': 3,
    },
    {
        'name': 'Apple Watch SE',
        'id': 4,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 3195,
        'quantity': 1,
    },
    {
        'name': 'Apple Watch SE',
        'id': 5,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 3195,
        'quantity': 1,
    },
    {
        'name': 'Apple Watch SE',
        'id': 6,
        'shortDesc': 'Aluminiumboett i guld 40 mm sandrosa sportband',
        'desc': 'Apple Watch SE är fylld med nya funktioner som gör användningen ännu roligare: Retina skärm, kompass, cykelkoll & mycket mer! Naturligtvis hittar du alla gamla, användbara funktioner också. Apple Music, Apple Pay och Siri, bara för att nämna några. Du kan ändra klockans utseende snyggt och enkelt, välj mellan olika materialer och ett nytt armband utan spänne som gör användning extra bekvämt. Armbandet finns i två olika materialer och nio olika storlekar för att passa alla handleder. Denna klockan har ett rosa sportband som känns bekvämt mot handleden och 40mm aluminiumboett.',
        'category': 'St Moritz Sport',
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'price': 1195,
        'quantity': 4,
    },
]

function Cart() {
    const [productsInCart, setProductsInCart] = useState([]);
    const [costs, setCosts] = useState({});

    useEffect(() => {
        // Gör en fetch till databasen, hämta den sparade varukorgen.
        // Ersätt "cartDataFromDB" nedan mot fetch-resultatet.
        setProductsInCart(cartDataFromDB);
    }, []);

    // Räkna ut totaler
    useEffect(() => {
            let subTotalCost = 0;
            let shippingCost = 0;
            let totalCost = 0;
            let percentageVAT = 25;
            let calcVAT = 0;
            for (let product of productsInCart) {
                subTotalCost += product.quantity * product.price;
            }
            totalCost = subTotalCost + shippingCost;
            calcVAT = totalCost * (percentageVAT / 100);
            setCosts({
                'subTotalCost': subTotalCost,
                'shippingCost': shippingCost,
                'totalCost': totalCost,
                'calcVAT': calcVAT
            })
    }, [productsInCart])

    const displayCost = (cost) => {
        if (cost === undefined) {
            return;
        }
        let costStr = cost.toString();
        let dotPos = costStr.indexOf('.');
        if (dotPos < 0) {
            return costStr + '.00';
        } else {
            return costStr.split('.').map((v, i) => {
                if (i === 1) {
                    return v.padEnd(2, '0');
                } else {
                    return v;
                }
            }).join('.');
        }
    }

    const itemPrice = (item) => {
        if (item.quantity > 1) {
            return `${item.quantity} x ${displayCost(item.price)}`;
        } else if (item.quantity === 0) {
            return displayCost(0);
        } else {
            return displayCost(item.price);
        }
    }

    const insertLine = (items, index) => {
        if (items.length > 1) {
            if (index === items.length - 1) {
                return;
            }
            return <Line></Line>;
        }
    }

    const shortenText = (text, maxlength) => {
        if (text.length < maxlength) return text;
        return text.substring(0,maxlength).concat('...');
    }

    const handleXButton = () => {
        alert('X-button pressed');
    }
    const handleQuantityButton = (item, addOrSub) => {
        switch (addOrSub) {
            case 'add':
                //fake fetch request to change quantity
                for (let inCart of cartDataFromDB) {
                    if (inCart.id === item.id) {
                        inCart.quantity += 1;
                    }
                }
                setProductsInCart([...cartDataFromDB]);
                break;
            case 'subtract':
                //fake fetch request to change quantity
                for (let inCart of cartDataFromDB) {
                    if (inCart.id === item.id) {
                        if (inCart.quantity === 1) return;
                        inCart.quantity -= 1;
                    }
                }
                setProductsInCart([...cartDataFromDB]);
                break;
        
            default:
                break;
        }
    }
    const handleTrashcanButton = (item) => {
        alert('pressed trashcanbutton for product with id: ' + item.id);
    }
    const handleOrderButton = () => {
        alert('orderbutton pressed');
    }

    return (
        <ReturnDiv>
            <TopBar>
                <DivLR>
                    <p>Din varukorg</p>
                    <p onClick={handleXButton}>X</p>
                </DivLR>
            </TopBar>
            {/* map out cart items */}
            <ProductsContainer className="rowMargin">
                {productsInCart.map((product, index) => (
                    <div key={product.id}>
                        <ProductDiv>
                            <span>
                                <img src={process.env.PUBLIC_URL + '/images/' + product.image} alt={product.name} />
                            </span>
                            <ProductInfo>
                                <ProductRow1>
                                    <p className="boldText">{shortenText(product.name, 16)}</p>
                                    <p className="boldText">{itemPrice(product)} SEK</p>
                                </ProductRow1>
                                <ProductRow2>
                                    <p>{shortenText(product.shortDesc, 40)}</p>
                                </ProductRow2>
                                <ProductRow3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td onClick={() => { handleQuantityButton(product, 'subtract') }}>-</td>
                                                <td>{product.quantity}</td>
                                                <td onClick={() => { handleQuantityButton(product, 'add') }}>+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <span><p onClick={() => { handleTrashcanButton(product) }}>trashcan</p></span>
                                </ProductRow3>
                            </ProductInfo>
                        </ProductDiv>
                        {insertLine(productsInCart, index)}
                    </div>
                ))}
            </ProductsContainer>
            <CostBreakdown>
                <DivLR>
                    <p>Summa artiklar</p>
                    <p className="boldText">{displayCost(costs.subTotalCost)} SEK</p>
                </DivLR>
                <DivLR>
                    <p>Fraktavgift</p>
                    <p className="boldText">{displayCost(costs.shippingCost)} SEK</p>
                </DivLR>
                <DivLR>
                    <p className="boldText">Totalt inkl. moms</p>
                    <p className="boldText">{displayCost(costs.totalCost)} SEK</p>
                </DivLR>
                <DivLR>
                    <p>Varav 25% moms</p>
                    <p className="boldText">{displayCost(costs.calcVAT)} SEK</p>
                </DivLR>
            </CostBreakdown>
            <OrderButtonContainer>
                    <button onClick={handleOrderButton}>BESTÄLL</button>
            </OrderButtonContainer>
        </ReturnDiv>
    )
}

export default Cart

const ReturnDiv = styled.div`
    --padding: 20px;
    height: 100vh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    p {
        margin: 2px 0;
        text-align: left;
    }
    .boldText {
        font-weight: bold;
    }
    .rowMargin {
        margin-bottom: 20px;
    }
`
const DivLR = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopBar = styled.div`
    padding: var(--padding);
`
const ProductsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 var(--padding);
    overflow-y: scroll;
`
const ProductDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    img {
        height: 100%;
        width: auto;
    }

`
const ProductInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`
const ProductRow1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductRow2 = styled.div`
    flex-grow: 1;
`
const ProductRow3 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    table {
        border-collapse: collapse;
    }
    table, tr, td {
        border: 1px solid #EFEFEF;
    }
    tr > td:first-of-type, tr > td:last-of-type {
        cursor: pointer;
    }
    td {
        width: 1.5em;
        height: 1.5em;
    }
`
const CostBreakdown = styled.div`
    padding: 0 var(--padding);
    > * {
        margin-bottom: 10px;
    }
`
const OrderButtonContainer = styled.div`
    padding: 0 var(--padding) var(--padding) var(--padding);
    margin-top: 10px;
    button {
        width: 100%;
        height: 40px;
        color: #FFF;
        background-color: #000;
        border: 0;
    }
`
const Line = styled.div`
    border-bottom: 1px solid #EFEFEF;
    margin: 20px 0;
`