import React from 'react'
import './Content5.css'

import c5Img1 from '../../../../../assets/images/homePage/content5/croped/20200813_194604-Medium.jpg'
import c5Img2 from '../../../../../assets/images/homePage/content5/croped/20200820_205552-Medium.jpg'
import c5Img3 from '../../../../../assets/images/homePage/content5/croped/IMG_4886-Medium.jpg'
import c5Img4 from '../../../../../assets/images/homePage/content5/croped/IMG_4904-Medium.jpg'

import GlobelButton from '../../../../components/GlobalButton/GlobelButton'
import { Container, Grid } from '@mui/material'

const Content5 = () => {
    return (
        <Grid container className='mt-5'>
            <Container>
                <Grid >
                    <Grid >
                        <h2 className='h2-media-txt'>Media</h2>
                    </Grid>
                </Grid>

                <Grid data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                container spacing={3} sx={{mt:3}} >
                    <Grid item sx={{}} xs={12} sm={3} >
                        <img src={c5Img1} alt='c5Img1' className='img-fluid'/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img src={c5Img2} alt='c5Img2' className='img-fluid'/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img src={c5Img3} alt='c5Img3' className='img-fluid'/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img src={c5Img4} alt='c5Img4' className='img-fluid'/>
                    </Grid>
                </Grid>

                <Grid>
                    <Grid sx={{mt:5,mb:3}} className='view-btn-set'>
                        <GlobelButton value={'View All'}/>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Content5