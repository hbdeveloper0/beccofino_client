import React from "react";
import "./Slider.css";
import { Grid, Typography } from "@mui/material";

const headingStyle = {
  fontSize: {xs:"36px",sm:"66px"},
  fontFamily: "Marecellus sans-serif",
  color: "#FFFFFF",
  marginTop:  {xs:"300px",sm:"600px"},
};
const ImgStyle={
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: 0,
    height: {xs:'60vh',sm:'100vh'},
}

const Slider = () => {
  return (
    <Grid className="container-fluid p-0">
      <Grid
        id="carousel1ExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <Grid className="carousel-inner">
          <Grid className="carousel-item active">
            <Grid sx={{...ImgStyle}} className="sliderBgImg1">
              <Grid className="slider-bg-color">
                <Grid className="container">
                  <Grid className="row">
                    <Grid className="col-lg-12">
                      <Typography variant="h1" sx={{ ...headingStyle }}>
                        A Bite Away .....
                        <br /> From Italy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="carousel-item">
            <Grid sx={{...ImgStyle}} className="sliderBgImg2">
              <Grid className="slider-bg-color">
                <Grid className="container">
                  <Grid className="row">
                    <Grid className="col-lg-12">
                      <Typography variant="h1" sx={{ ...headingStyle }}>
                        A Bite Away .....
                        <br /> From Italy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="carousel-item">
            <Grid sx={{...ImgStyle}} className="sliderBgImg3">
              <Grid className="slider-bg-color">
                <Grid className="container">
                  <Grid className="row">
                    <Grid className="col-lg-12">
                      <Typography variant="h1" sx={{ ...headingStyle }}>
                        A Bite Away .....
                        <br /> From Italy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <a
          className="carousel-control-prev"
          href="#carousel1ExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel1ExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </Grid>
    </Grid>
  );
};

export default Slider;
