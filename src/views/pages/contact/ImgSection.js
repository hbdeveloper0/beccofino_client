import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ImgSec from '../../../assets/images/contact/ImgSection.jpg'

const ImgSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} >
       <Container maxWidth="md" sx={{pt:{xs:5,lg:30},}}>
       <Grid sx={{pl:{xs:0,lg:10}}}>
       <Typography sx={{fontFamily:"Jost Sans-serif",fontSize:{xs:'20px',lg:'30px'} }}>FEEL AT HOME</Typography>
       <Typography sx={{fontFamily:"Jost Sans-serif",fontSize:{xs:'30px',lg:'56px'},fontWeight:"400" }}>WE’RE HERE FOR YOU</Typography>
       <Divider sx={{p:1}}/>
       <Typography sx={{pt:{xs:3,lg:6},fontSize:"18px",pr:{xs:0,lg:40}}}>Your happiness is our number one priority! Feel free to reach out with any questions or concerns – We can’t wait to see you soon!</Typography>
       <Typography sx={{pt:{xs:2,lg:30}}}>5712 S MACDILL AVE TAMPA,</Typography> 

      <Typography sx={{pt:2}}>FL 33611 USA</Typography>
       </Grid>
       
       </Container>
      </Grid>
      <Grid item xs={12} md={6} sx={{pb:{xs:1.7,lg:34},}}>
      <CardMedia component="img" image={ImgSec} sx={{height:{xs:'100%',lg:'140%'} ,pt:{xs:2,lg:10},px:{xs:2,lg:0}}} />
      </Grid>
      </Grid>
   
  );
};

export default ImgSection;
