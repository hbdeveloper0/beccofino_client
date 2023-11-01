import { Grid } from '@mui/material'
import React from 'react'
import SubSlider from "../../../components/SubSlider/SubSlider";

import Navbar from "../../../components/navbar/Navbar";
import CheckoutImage from "../../../../assets/images/reservation/Checkout.jpg" 
import navLogo from "../../../../assets/images/logos/navLogoBlack.png";
import BillingDetail from './BillingDetail';

const Checkout = () => { 
  return (
    <Grid>
      <Navbar logo={navLogo} bgColor={"#f0edea"} textColor={"#111010"} />
      <SubSlider img={CheckoutImage} name="Checkout" /> 
      <Grid>
      <BillingDetail/>
      </Grid>
    </Grid>
   
  )
}

export default Checkout