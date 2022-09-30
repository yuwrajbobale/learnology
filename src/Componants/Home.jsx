import React from 'react'
import Common from './Common'
import HomeImage from '../images/HomeDesign.gif'

const Home = () => {
    return (
        <>
            <Common name="Kickstart your dream career with" disc="Learn industry-relevant skills and crack the interview to work at India's finest Companies." imgsrc={HomeImage} visit="/courses" btname="Get Started"/>
        </>
    )
}

export default Home