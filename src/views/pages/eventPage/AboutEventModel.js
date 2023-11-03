import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import ForumIcon from '@mui/icons-material/Forum';

import Logo from "../../../assets/images/reservation/ResLogo.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  maxHeight: "750px",
  width: "650px",
  // p: 2,
  borderRadius: "13px",
};

export default function AboutEventModel({ info, handleCloseInfo }) {
  const color={color:"#d0d0d0"}
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        open={info}
        onClose={handleCloseInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="lg"
      >
        <Box sx={{ ...style }}>
          <Grid container sx={{ boxShadow: 4 }}>
            <Typography sx={{ px: 4, py: 3, fontWeight: "bold" }}>
              Congratulations
            </Typography>
          </Grid>
          <Grid sx={{ textAlign: "center", pt: 5 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "21px",
              }}
              
            >
              New Year 2024
            </Typography>
            <Typography>Event ID #3</Typography>
          </Grid>
          <Typography sx={{ pt: 2 ,px:3,fontSize:"20px"}}>
            About Event:
            </Typography>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Event Starts:</Typography>
            <Typography >December 31, 2023 at 10:00 pm</Typography>
            
          </Grid>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Event Ends:</Typography>
            <Typography>January 2, 2024 at 12:00 am</Typography>
            
          </Grid>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Event Location:</Typography>
            <Typography>5712 S Macdillave Tampa, FL 33611 USA</Typography>
            
          </Grid>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Your Name:</Typography>
            <Typography>Belle Francis</Typography>
            
          </Grid>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Email Address:</Typography>
            <Typography>wukudeb@mailinator.com</Typography>
            
          </Grid>
          <Grid container sx={{ px: 3,py:1,display:"flex",justifyContent:"space-between" }}>
            <Typography sx={{color}}>Phone Number:</Typography>
            <Typography>(472) 458-3781</Typography>
            
          </Grid>
         <Typography sx={{textAlign:"center",fontSize:"20px",py:2}}>Add to Calendar</Typography>
          <Grid container  sx={{pb:3}}>
          <Grid item xs={2} />
        
          
          <Grid item xs={2}>
         <Grid sx={{border:"1px solid #dcdcdc",background:"#f3f3f3",borderRadius:1,p:1,mr:"10px"}}>
         <GoogleIcon sx={{fontSize:"30px",ml:3}} />
         <Typography sx={{textAlign:"center"}}>Google</Typography>
         </Grid>
          </Grid> 
          <Grid item xs={2} sx={{border:"1px solid #dcdcdc",background:"#f3f3f3",borderRadius:1,p:1,mr:"10px"}}>
          <ForumIcon sx={{fontSize:"30px",ml:3}} />
              <Typography sx={{textAlign:"center"}}>Outlook</Typography>
          </Grid> 
          <Grid item xs={2} sx={{border:"1px solid #dcdcdc",background:"#f3f3f3",borderRadius:1,p:1,mr:"10px"}}>
          <ForumIcon sx={{fontSize:"30px",ml:3}} />
        <Typography sx={{textAlign:"center"}}>Yahoo</Typography>
          </Grid>
          <Grid item xs={2} sx={{border:"1px solid #dcdcdc",background:"#f3f3f3",borderRadius:1,p:1,mr:"10px"}}>
          <AppleIcon sx={{fontSize:"30px",ml:3}} />
          <Typography sx={{textAlign:"center"}}>Apple</Typography>
          </Grid> 
          <Grid item xs={2}>
         
          </Grid> 
          
          </Grid>
         

          <Grid
            item
            xs={2}
            sx={{ py: 1.7, px:3,display: "flex", justifyContent:'space-between',boxShadow:3 }}
          >
            <Button
              onClick={handleCloseInfo}
              sx={{
                border: "1px solid #68747b",
                color: "#68747b",
                textTransform: "none",
                mr: 2,
              }}
            
            >
             Customer Panel 
            </Button>
            <Button
            onClick={() => navigate("/")}
              sx={{
                backgroundColor: "#ed1d24",
                color: "#FFFFFF",
                textTransform: "none",
                px: 3,
              }}

            >
             Finish
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
