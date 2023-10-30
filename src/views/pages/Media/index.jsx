import React from 'react'
import MediaSlider from './components/slider/MediaSlider'
import Footer from '../../components/footer/Footer'
import SliderImg from '../../../assets/images/mediaPage/mediaSlider/sliderImg.jpg'

const Media = () => {
    return (
        <div>
            <MediaSlider img={SliderImg} name='Media' />
            <Footer/>
        </div>
    )
}

export default Media