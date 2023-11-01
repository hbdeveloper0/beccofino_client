import React from 'react'

import Footer from '../../components/footer/Footer'
import SubSlider from '../../components/SubSlider/SubSlider'
import Navbar from '../../components/navbar/Navbar'
import Reservation from '../../../assets/images/reservation/reservation.jpg'
import BookRreservation from './BookReservation'
import {Grid } from '@mui/material'
import navLogo from '../../../assets/images/logos/navLogoBlack.png'
import Form from './Form'

const Rreservation = () => {
    return (
        <div>
            <Navbar logo={navLogo} bgColor={'#f0edea'} textColor={'#111010'}/>
        <SubSlider img={Reservation} name='Reservation' />
          <Grid  sx={{background:"#f0edea"}}>
          <BookRreservation/>
          </Grid>
          <Grid  sx={{background:"#f0edea"}}>
          <Form/>
         </Grid>

          
            <Footer/>
        </div>
    )
}

export default Rreservation