import React from 'react'
import './Content2.css'
import c2Img1 from '../../../../../assets/images/homePage/content2/c2-p1-Medium-2-1.jpg'
import c2Img2 from '../../../../../assets/images/homePage/content2/c2-p2-forage-wine-dinner-780x439-1.jpg'
import c2Img3 from '../../../../../assets/images/homePage/content2/c2p3-Medium-4-1.jpg'
import c2MainImg from '../../../../../assets/images/homePage/content2/c2-main-img-20230309_214444-Large-1.jpg'

import GlobelButton from '../../../../../components/GlobelButton'

const Content2 = () => {
    return (
        <div className='container-fluid c2-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 top-col-set mt-5'>
                        <h2 className='event-txt'>Events</h2>
                        <p className='more-txt'>More Events Are Waiting!</p>
                        <p className='do-txt'>Do You Want To Know The Time Schedule?</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='img-bg-set'>
                            <img src={c2Img1} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4'>San Valentino</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='img-bg-set'>
                            <img src={c2Img2} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4'>Wine Dinners</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='img-bg-set'>
                            <img src={c2Img3} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4'>New Year 2024</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-lg-12  btn-bg-set'>
                        <GlobelButton value={'View More'}/>
                    </div>
                </div>

                <div className='row main-img-bg'>
                    <div className='col-lg-12 '>
                        <img src={c2MainImg} alt='mainImg' className='img-fluid' style={{ position: 'relative', top: 150}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content2