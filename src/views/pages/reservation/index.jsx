import React from 'react'

import Footer from '../../components/footer/Footer'
import MediaSlider from '../Media/components/slider/MediaSlider'
import Navbar from '../../components/navbar/Navbar'
import Reservation from '../../../assets/images/reservation/reservation.jpg'
import BookRreservation from './BookReservation'

const Rreservation = () => {
    return (
        <div>
        <Navbar/>
          <MediaSlider img={Reservation} name='Reservation' />
          <BookRreservation/>
            <Footer/>
        </div>
    )
}

export default Rreservation