import { Container, Grid } from '@mui/material'
import React from 'react'

const MapSection = () => {
  return (
    <Container sx={{pt:5,pb:7}}>
    <Grid sx={{height:"335px"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.627102262675!2d-82.49857485014292!3d27.88272305626875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2dc95a38dad15%3A0xb1e07d43e1a7d4cc!2s5712%20S%20MacDill%20Ave%2C%20Tampa%2C%20FL%2033611%2C%20USA!5e0!3m2!1sen!2s!4v1698852381355!5m2!1sen!2s" style={{border:"none"}} width="100%" height="100%" border='none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Grid>
    </Container>
   
  )
}

export default MapSection
