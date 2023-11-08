import React from 'react'
import './Content2.css'
import c2Img1 from '../../../../../assets/images/homePage/content2/c2-p1-Medium-2-1.jpg'
import c2Img2 from '../../../../../assets/images/homePage/content2/c2-p2-forage-wine-dinner-780x439-1.jpg'
import c2Img3 from '../../../../../assets/images/homePage/content2/c2p3-Medium-4-1.jpg'
import c2MainImg from '../../../../../assets/images/homePage/content2/c2-main-img-20230309_214444-Large-1.jpg'

import GlobelButton from '../../../../components/GlobalButton/GlobelButton'
import { Container, Grid, Typography } from '@mui/material'


const Content2 = () => {
    return (
        <Grid container className='c2-bg'>
            <Container>
                <Grid>
                    <Grid className='top-col-set mt-5'>
                        <Typography variant='h2' sx={{  fontSize:{xs:'35px',md:"50px"}, fontFamily: 'Marecellus, sans-serif',color: '#FFFFFF'}} >Events</Typography>
                        <p className='more-txt'>More Events Are Waiting!</p>
                        <p className='do-txt'>Do You Want To Know The Time Schedule?</p>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} >
                        <Grid className='img-bg-set'>
                            <img src={c2Img1} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4' >San Valentino</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Grid className='img-bg-set'>
                            <img src={c2Img2} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4'>Wine Dinners</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Grid className='img-bg-set'>
                            <img src={c2Img3} alt='img1' className='img-fluid'/>
                            <h3 className='h3-san-txt pt-4'>New Year 2024</h3>
                            <p className='lorem-txt pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid sx={{mt:4}}>
                    <Grid className='btn-bg-set'>
                        <GlobelButton value={'View More'}/>
                    </Grid>
                </Grid>

                
                    <Grid>
                        <img src={c2MainImg} alt='mainImg' className='img-fluid' style={{ position: 'relative', top: 150}}/>
                    </Grid>
                
            </Container>
        </Grid>
    )
}

export default Content2