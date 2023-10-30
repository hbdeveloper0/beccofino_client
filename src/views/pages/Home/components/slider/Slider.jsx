import React from 'react'
import './Slider.css'

const Slider = () => {
    return (
        <div className='container-fluid p-0'>
            <div id="carousel1ExampleControls" className="carousel slide"  data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='sliderBgImg1'>
                            <div className='slider-bg-color'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='sliderBgImg2'>
                            <div className='slider-bg-color'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='sliderBgImg3'>
                            <div className='slider-bg-color'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel1ExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1ExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slider