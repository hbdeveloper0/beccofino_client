import { Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const BillingDetail = () => {
  return (
    <Container sx={{pt:9}}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
      <Typography sx={{fontSize:"40px",fontFamily:"Jost Sans-serif"}}>Billing details</Typography>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField
      fullWidth
      id="outlined-email-address"
      placeholder="Email Address"
     
    />
      </Grid>
      <Grid item xs={6}>
      <TextField
      fullWidth
      id="outlined-email-address"
      placeholder="Email Address"
      
    
    />
      </Grid>
      
    </Grid>
    <Grid  sx={{pt:2}}>
    <Typography >Company name (optional)</Typography>
    <TextField
      fullWidth
      id="outlined-email-address"
      placeholder="Email Address"
     
    
    />
    </Grid>
    </Grid>
    <Grid item xs={6}>
    <Typography  sx={{fontSize:"40px",fontFamily:"Jost Sans-serif"}}>Additional information</Typography>
  
   
    </Grid> 
  </Grid>
  </Container>
  )
}

export default BillingDetail
