import React from 'react'
import Common from './Common'
import AboutImage from '../images/About-Img.gif'

const About = () => {
    return (
        <>
           <Common name="Welcome to About page" disc="Lernology is an outcome driven career education platform. Our mission is to skill India’s untapped and underutilized talent, and to train them for some of the most in-demand jobs in the world." imgsrc={AboutImage} visit="/contact" btname="Contact Now"/>
        </>
    )
}

export default About