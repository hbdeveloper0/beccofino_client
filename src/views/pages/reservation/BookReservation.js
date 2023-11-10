import { Box, Container, Grid, Typography } from '@mui/material'

import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Link } from 'react-router-dom'



const BookRreservation = () => {
    return (
        <Container maxWidth="xl" >
        <Grid sx={{p:8}}>
        <Grid sx={{p:5,border:"1px dashed  red",background:"#ffffff",textAlign:"center"}}>
        <Typography sx={{fontSize:'40px'}}>Book a Reservation</Typography>
        <Container maxWidth="md" sx={{p:'0px !important'}}>
        <Typography sx={{fontWeight:'bold' ,fontSize:"17px",pt:3}}>Kindly call for same-day or last-minute bookings, as our kitchen may be busy preparing fresh meals.<Link href="#" style={{color:'#ed1d24',fontSize:"19px",textDecoration:"underline" }} underline="always">Call Us.</Link> </Typography>
        <Typography sx={{fontWeight:'bold',fontSize:"17px",pt:2}}>To support our staff, a $30 per person fee will apply for no-show reservations.</Typography>
        </Container>
        </Grid>
  
        </Grid></Container>

       
    )
}

export default BookRreservation