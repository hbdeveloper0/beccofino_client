import React from 'react'
import './Content5.css'

import c5Img1 from '../../../../../assets/images/homePage/content5/croped/20200813_194604-Medium.jpg'
import c5Img2 from '../../../../../assets/images/homePage/content5/croped/20200820_205552-Medium.jpg'
import c5Img3 from '../../../../../assets/images/homePage/content5/croped/IMG_4886-Medium.jpg'
import c5Img4 from '../../../../../assets/images/homePage/content5/croped/IMG_4904-Medium.jpg'

import GlobelButton from '../../../../components/GlobalButton/GlobelButton'

const Content5 = () => {
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='h2-media-txt'>Media</h2>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-3'>
                        <img src={c5Img1} alt='c5Img1' className='img-fluid'/>
                    </div>
                    <div className='col-lg-3'>
                        <img src={c5Img2} alt='c5Img2' className='img-fluid'/>
                    </div>
                    <div className='col-lg-3'>
                        <img src={c5Img3} alt='c5Img3' className='img-fluid'/>
                    </div>
                    <div className='col-lg-3'>
                        <img src={c5Img4} alt='c5Img4' className='img-fluid'/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 view-btn-set mt-5'>
                        <GlobelButton value={'View All'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content5