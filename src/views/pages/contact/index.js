

import Footer from '../../components/footer/Footer'
import MediaSlider from '../Media/components/slider/MediaSlider'
import Navbar from '../../components/navbar/Navbar'
import Reservation from '../../../assets/images/reservation/reservation.jpg'
import BookRreservation from './BookReservation'
import { Container, Grid } from '@mui/material'
import Form from './Form'

const Rreservation = () => {
    return (
        <div>
        <Navbar/>
          <MediaSlider img={Reservation} name='Reservation' />
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