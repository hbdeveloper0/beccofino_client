import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ImgSec from '../../../assets/images/contact/ImgSection.jpg'

const ImgSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} >
       <Container maxWidth="md" sx={{pt:30,}}>
       <Grid sx={{pl:10}}>
       <Typography sx={{fontFamily:"Jost Sans-serif",fontSize:"30px" }}>FEEL AT HOME</Typography>
       <Typography sx={{fontFamily:"Jost Sans-serif",fontSize:"56px",fontWeight:"400" }}>WE’RE HERE FOR YOU</Typography>
       <Divider sx={{p:1}}/>
       <Typography sx={{pt:6,fontSize:"18px",pr:40}}>Your happiness is our number one priority! Feel free to reach out with any questions or concerns – We can’t wait to see you soon!</Typography>
       <Typography sx={{pt:30}}>5712 S MACDILL AVE TAMPA,</Typography> 

      <Typography sx={{pt:2}}>FL 33611 USA</Typography>
       </Grid>
       
       </Container>
      </Grid>
      <Grid item xs={6} sx={{pb:34,}}>
      <CardMedia component="img" image={ImgSec} sx={{height:"140%" ,pt:10}} />
      </Grid>
      </Grid>
   
  );
};

export default ImgSection;
