import React from 'react'
import './Slider.css'

import Grid from 'antd/es/card/Grid'
import sliderImg1 from '../../../../../assets/images/homePage/sliderImages/slider-img1-marquee-figure.jpg'
import sliderImg2 from '../../../../../assets/images/homePage/sliderImages/slider-img2-grill-pesce.jpg'
import sliderImg3 from '../../../../../assets/images/homePage/sliderImages/slider-img3-marquee-figure.jpg'


const Slider = () => {
    return (
        <Grid container>
            <Grid id="carousel1ExampleControls" className="carousel slide"  data-ride="carousel">
                <Grid className="carousel-inner">
                    <Grid className="carousel-item active">
                        <Grid className='sliderBgImg1'>
                            <Grid className='slider-bg-color'>
                                <Grid className='container'>
                                    <Grid className='row'>
                                        <Grid className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className="carousel-item">
                        <Grid className='sliderBgImg2'>
                            <Grid className='slider-bg-color'>
                                <Grid className='container'>
                                    <Grid className='row'>
                                        <Grid className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className="carousel-item">
                        <Grid className='sliderBgImg3'>
                            <Grid className='slider-bg-color'>
                                <Grid className='container'>
                                    <Grid className='row'>
                                        <Grid className='col-lg-12'>
                                            <h1 className='main-slider-txt'>A Bite Away .....<br/> From Italy</h1>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <a className="carousel-control-prev" href="#carousel1ExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1ExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </Grid>
        </Grid>
    )
}

export default Slider