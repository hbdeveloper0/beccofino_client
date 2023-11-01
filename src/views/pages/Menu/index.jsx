import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SubSlider from '../../components/SubSlider/SubSlider'
import Footer from '../../components/footer/Footer'
import SliderImg from '../../../assets/images/menuPage/menuSliderImg.jpg'
import navLogo from '../../../assets/images/logos/navLogoBlack.png'
import MenuContent from './MenuContent'

const Menu = () => {
    return (
        <div>
            <Navbar logo={navLogo} bgColor={'#f0edea'} textColor={'#111010'}/>
            <SubSlider img={SliderImg} name='Menu' />
            <MenuContent/>
            <Footer/>
        </div>
    )
}

export default Menu