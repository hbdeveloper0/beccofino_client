import React from 'react'
import './Content1.css'

import rightImg from '../../../../../assets/images/homePage/content1/20210807_235139-Medium-1-1-1024x597.jpg'
import leftImg from '../../../../../assets/images/homePage/content1/20191203_181803-Medium-1.jpg'

import GlobelButton from '../../../../../components/GlobelButton'

const Content1 = () => {
    return (
        <>
            <div className='container-fluid content1-bg'>
                <div className='container'>
                    <div className='row c1-row-set'>
                        <div className='col-sm-6 col-xs-12 col-margin-set'>
                            <h2 className='welcome-txt'>Welcome to Beccofino!</h2>
                            <p className='sit-txt'>Sit back and relax you’re on a journey for an unique taste-buds adventure with exceptional handcrafted Italian specialties just made in-house…</p>
                            <p className='becco-txt'>Beccofino is born!</p>
                            <GlobelButton value={'Discover Menu'}/>
                        </div>
                        <div className='col-sm-6 col-xs-12'>
                            <img alt='rightImg' src={rightImg} className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid content1-p2-bg'>
                <div className='container'>
                    <div className='row c1-row-set'>
                        <div className='col-sm-6 col-xs-12'>
                            <img alt='leftImg' src={leftImg} className='img-fluid'/>
                        </div>
                        <div className='col-sm-6 col-xs-12 col-margin-set'>
                            <h2 className='welcome-txt'>Reservations</h2>
                            <p className='becco-txt'>Want To Reserve Your Table?</p>
                            <p className='sit-txt'>Call Us On <a role='button' href='/'>813-473-2105</a> Or Fill Up The Form For Online Booking</p>
                            <GlobelButton value={'Book Now'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
        

        
    )
}

export default Content1