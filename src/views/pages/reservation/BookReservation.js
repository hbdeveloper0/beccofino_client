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
        <Container maxWidth="md">
        <Typography sx={{fontWeight:'bold' ,fontSize:"17px",pt:3}}>Kindly call for same-day or last-minute bookings, as our kitchen may be busy preparing fresh meals.<Link href="#" style={{color:'#ed1d24',fontSize:"19px",textDecoration:"underline" }} underline="always">Call Us.</Link> </Typography>
        <Typography sx={{fontWeight:'bold',fontSize:"17px",pt:2}}>To support our staff, a $30 per person fee will apply for no-show reservations.</Typography>
        </Container>
        </Grid>
  
        </Grid>

        {/*<Container maxWidth="md">
        <Grid  sx={{pt:2,pb:10,pl:5}}>
        <Tabs
        aria-label="Vertical tabs"
        orientation="vertical"
        sx={{ minWidth: 300, height: 500 }}
      >
        <TabList sx={{width:"200px",background:"red"}}>
          <Tab>First tab</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <TabPanel value={0}>
          <b>First</b> tab panel
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
        </Grid>
    </Container>*/}
        </Container>

       
    )
}

export default BookRreservation