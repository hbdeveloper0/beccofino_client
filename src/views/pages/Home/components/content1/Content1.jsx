import React from 'react'
import './Content1.css'

import rightImg from '../../../../../assets/images/homePage/content1/20210807_235139-Medium-1-1-1024x597.jpg'
import leftImg from '../../../../../assets/images/homePage/content1/20191203_181803-Medium-1.jpg'

import GlobelButton from '../../../../components/GlobalButton/GlobelButton'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)
`color: #5D5D5D;
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
 &:hover {
    color: red;
  }`;

const Content1 = () => {
    return (
        <>
            <Grid container sx={{backgroundColor: '#f0edea',height:'100%'}} >
                <Container>
                    <Grid container spacing={2} sx={{py:'70px'}} >
                        <Grid data-aos="fade-up"
                        data-aos-duration="3000" item xs={12} sm={6} sx={{m:'auto'}} >
                            <Typography variant='h2' sx={{fontSize: {xs:'30px',sm:"50"},fontFamily: 'Marecellus sans-serif',color: '#111010'}} >Welcome to Beccofino!</Typography>
                            <Typography variant='p' sx={{fontSize:'18px',fontFamily: 'Montserrat sans-serif',color: '#111010',margin:'0px 0px 18px'}} >Sit back and relax you’re on a journey for an unique taste-buds adventure with exceptional handcrafted Italian specialties just made in-house…</Typography>
                            <Typography variant='p' sx={{fontSize:'18px',fontFamily: 'Montserrat sans-serif',color: '#111010',fontWeight: 'bold'}} >Beccofino is born!</Typography>
                            <GlobelButton value={'Discover Menu'}/>
                        </Grid>
                        <Grid 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                         item xs={12} sm={6} >
                            <img alt='rightImg' src={rightImg} className='img-fluid'/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid container sx={{ height: '100%'}} >
                <Container>
                    <Grid container spacing={2} sx={{py:'70px'}} >
                        <Grid data-aos="fade-up"
                        data-aos-duration="3000"
                         item xs={12} sm={6} >
                            <img alt='leftImg' src={leftImg} className='img-fluid'/>
                        </Grid>
                        <Grid 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                         item xs={12} sm={6} sx={{m:'auto'}}>
                            <Typography variant='h2'  sx={{fontSize: {xs:'30px',sm:"50"},fontFamily: 'Marecellus sans-serif',color: '#111010'}} >Reservations</Typography>
                            <Grid><Typography variant='p' sx={{fontSize:'18px',fontFamily: 'Montserrat sans-serif',color: '#111010',fontWeight: 'bold'}}>Want To Reserve Your Table?</Typography></Grid>
                          <Grid sx={{display:'flex'}}><Typography variant='p' sx={{fontSize:'18px',fontFamily: 'Montserrat sans-serif',color: '#111010',margin:'0px 0px 18px'}} >Call Us On <StyledLink to="/">813-473-2105</StyledLink> Or Fill Up The Form For Online Booking</Typography></Grid>
                            <GlobelButton value={'Book Now'}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
        

        
    )
}

export default Content1