import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const watchesImg = [
    {
        'id': 1,
        'image': 'London_Classic/2371_85dae26011-fast119-me021212-1.png',
        'cat': 'London'
    },
    {
        'id': 2,
        'image': 'London_Classic/3067_17f2e62f2f.png',
        'cat': 'London'

    },
    {
        'id': 3,
        'image': 'London_Classic/3074_98030549cb-nes.png',
        'cat': 'London'
    },

    {
        'id': 4,
        'image': 'London_Classic/3082_1f48525a62-fast.png',
        'cat': 'London'
    },
    {
        'id': 5,
        'image': 'Dubai_Luxury/Audemars_Piguet-Royal_Oak_Concept.jpg',
        'cat': 'Dubai'
    },
    {
        'id': 6,
        'image': 'Dubai_Luxury/jaeger-lecoultre-4122520.jpeg',
        'cat': 'Dubai'
    },
    {
        'id': 7,
        'image': 'Dubai_Luxury/omega-de-ville-tresor-43553402109001-l.jpg',
        'cat': 'Dubai'
    },

    {
        'id': 8,
        'image': 'Dubai_Luxury/omega-de-ville-tresor-43553402109001-l.jpg',
        'cat': 'Dubai'
    },
    {
        'id': 9,
        'image': 'St_Moritz_Sport/42apple_watch_series_3_gps_42mm_space_gray_aluminum_black_sport_band_pure_front_vertical_us-en_screen.jpg',
        'cat': 'Moritz'
    },
    {
        'id': 10,
        'image': 'St_Moritz_Sport/apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pure_front_screen__usen.jpg',
        'cat': 'Moritz'
    },
    {
        'id': 11,
        'image': 'St_Moritz_Sport/citizen_satellite.jpg',
        'cat': 'Moritz'
    },

    {
        'id': 12,
        'image': 'St_Moritz_Sport/garmin_vivoactive_010-02172-22_2.jpg',
        'cat': 'Moritz'
    }
]

function Home() {

    const [watches, setWatches] = useState([]);

    useEffect(() => {
        setWatches(watchesImg)
    }, [])

    return (
        <div>
            <Hero>
                <div>
                    <p>Best Watches</p>
                    <h1>Nice Watch</h1>
                </div>
                <Button>Explore</Button>
            </Hero>
            <div>
                <div>
                    <TextLondon>London Classic</TextLondon>
                    <London>
                        {watchesImg.filter(obj => obj.cat === 'London').map((watch) => (
                            <div key={watch.id} className="card">
                                    <img src={process.env.PUBLIC_URL + '/images/' + watch.image} alt="" />
                            </div>
                        ))}
                    </London>
                </div>
                <div>
                    <TextDubai>Dubai Luxury</TextDubai>
                    <Dubai>
                        {watchesImg.filter(obj => obj.cat === 'Dubai').map((watch) => (
                            <div key={watch.id} className="card">
                                    <img src={process.env.PUBLIC_URL + '/images/' + watch.image} alt="" />
                            </div>
                        ))}
                    </Dubai>
                </div>
                <div>
                    <TextSt>St Moritz Sport</TextSt>
                    <Moritz>
                        {watchesImg.filter(obj => obj.cat === 'Moritz').map((watch) => (
                            <div key={watch.id} className="card">
                                    <img src={process.env.PUBLIC_URL + '/images/' + watch.image} alt="" />
                            </div>
                        ))}
                    </Moritz>
                </div>
            </div>
        </div>
    )
}

const London = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    img {
        height: 180px;
        width: auto;
        
    }
`
const Dubai = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;


    img {
        height: 180px;
        width: auto;
    }
`

const Moritz = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;


    img {
        height: 180px;
        width: auto;
    }
`
const TextLondon = styled.div`
   margin: 10px 0 10px 10px;
   font-size: 22px;
`
const TextDubai = styled.div`
   margin: 10px 0 10px 10px;
   font-size: 22px;
`
const TextSt = styled.div`
   margin: 10px 0 10px 10px;
   font-size: 22px;
`
const Hero = styled.div`
margin-top: 4rem;
    background-image: url('${process.env.PUBLIC_URL + '/images/josh-miller-83DnGfaWV24-unsplash.jpg'}');
    height: 30.8vh;
    width: 100%;
    background-size: contain;

    h1,p{
        margin: 0;
        padding: 0;
    }

    div:first-of-type {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p,h1{
            margin: 0 auto;
            text-align: center;
        }
    }
`

const Button = styled.div`
    width: 100px;
    height: 50px;
    border: 1px solid white;
`

export default Home
