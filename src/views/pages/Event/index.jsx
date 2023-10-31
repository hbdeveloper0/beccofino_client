import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SubSlider from '../../components/SubSlider/SubSlider'
import Footer from '../../components/footer/Footer'
import SliderImg from '../../../assets/images/eventPage/eventSlider.jpg'
import navLogo from '../../../assets/images/logos/navLogoBlack.png'
import EventContent from './EventContent'

const Media = () => {
    return (
        <div>
            <Navbar logo={navLogo} bgColor={'#f0edea'} textColor={'#111010'}/>
            <SubSlider img={SliderImg} name='Events' />
            <EventContent/>
            <Footer/>
        </div>
    )
}

export default Media