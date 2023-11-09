import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Img1 from "../../../assets/images/reservation/Img1.jpg";
import Img2 from "../../../assets/images/reservation/Img2.jpg";
import Img3 from "../../../assets/images/reservation/Img3.jpg";
import Img4 from "../../../assets/images/reservation/Img4.jpg";
import Logo from "../../../assets/images/reservation/ResLogo.png";
import EventInfoModel from "./EventInfoModel";
import { useEffect } from "react";

const images = [Img2, Img3, Img4, Img1];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  maxHeight: "750px",
  overflowY: "auto",
  width:{xs:"350px",sm:"650px"},
  p: 2,
  borderRadius: "13px",
};
const customScrollbarStyle = {
  "&::-webkit-scrollbar": {
    width: "9px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#FFFF",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "red",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "red",
  },
};

export default function Modals({ open, handleClose }) {
  const [dialog, setDialog] = React.useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClickClose = () => {
    setDialog(false);
  };
  const common = () => {
    handleClickOpen();
    
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="lg"
      >
        <Box sx={{ ...style, ...customScrollbarStyle }}>
        <Grid sx={{display:"flex",justifyContent:"end",py:2}}><Button
        onClick={handleClose}
        sx={{
          border: "1px solid red",
          color: "red",
        
        }}
      >X
      </Button></Grid>
          <Grid className="carousel" sx={{ px: {xs:6,sm:21} }}>
            <img
              key={currentIndex}
              src={images[currentIndex]}
              style={{ height: "300px" }}
            />
            <div className="slide_direction">
              <Grid sx={{background:"#FFFF"}} className="left" onClick={handlePrevious}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
              </Grid>
              <Grid sx={{background:"#FFFF"}} className="right" onClick={handleNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
              </Grid>
            </div>
            <div
              className="indicator"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {images.map((_, index) => (
                <div
                  key={index}
                  style={{ margin: "8px" }}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={2}>
              <Typography sx={{ color: "#a9a8a8", pl: 0.5, fontSize: "15px",display:{xs:'flex',sm:"block"} }}>
                Begins
                <Box sx={{ fontWeight: "bold" }}>31Dec</Box>
                10:00 pm
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                New Year 2024
              </Typography>
              <Typography>5712 S Macdillave Tampa, FL 33611 USA</Typography>
              <Typography sx={{ display: "flex" }}>
                <Box sx={{ color: "#7e9ef7", display: "flex", pr: 0.2 }}>
                  Open
                </Box>
                9 slots left
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              borderBottom: "1px solid #e7e7e7",
              fontWeight: "bold",
              pt: 1,
            }}
          >
            Event Info
          </Typography>
          <Divider />
          <Grid sx={{ pl: 2 }}>
            <Typography sx={{ fontWeight: "bold", pt: 2 }}>
              Timetable :
            </Typography>
            <Typography sx={{ pl: 2 }}>
              December 31, 2023 - January 2, 2024
            </Typography>
            <Typography sx={{ pl: 2 }}>
              December 31, 2023 - 10:00 pm - 12:00 am
            </Typography>
            <Typography sx={{ pl: 2 }}>
              January 1, 2024 - 10:00 pm - 12:00 am
            </Typography>
          </Grid>
          <Grid sx={{ pl: 2 }}>
            <Typography sx={{ fontWeight: "bold", pt: 2 }}>
              Description
            </Typography>
            <Typography sx={{ pl: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tristique malesuada dui, a posuere neque porta quis. Nulla
              pharetra ex non ipsum ultrices, nec mattis dolor pharetra. Quisque
              laoreet magna ut condimentum vulputate. Susp...
            </Typography>
          </Grid>
          <Divider sx={{ pt: 2 }} />
          <Grid container sx={{ pb: 3 }}>
            <Grid item xs={2}>
              <img
                src={Logo}
                alt="not"
                style={{ objectFit: "cover", width: "80%" }}
              />
            </Grid>
            <Grid item xs={10} sx={{ pt: 2 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Beccofino Tampa
              </Typography>
              <Typography>Organizer</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{ pb: 0.8, display: "flex", justifyContent: "end" }}
          >
            <Button
              onClick={handleClose}
              sx={{
                border: "1px solid #68747b",
                color: "#68747b",
                textTransform: "none",
                mr: 2,
              }}
            >
              Close
            </Button>
            <Button
              sx={{
                backgroundColor: "#ed1d24",
                color: "#FFFFFF",
                textTransform: "none",
                px: 3,
              }}
              onClick={common}
            >
              Read more
            </Button>
          </Grid>
          <EventInfoModel dialog={dialog} closeDialog={handleClickClose} />
        </Box>
      </Modal>
    </div>
  );
}
