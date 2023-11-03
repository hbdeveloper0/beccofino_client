import {
  Autocomplete,
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GlobelButton from "../../../components/GlobalButton/GlobelButton";
import { useState } from "react";
import Motion from "../../../components/Motion";

const BillingDetail = () => {
  const top100Films = [
    { label: "The Dark Knight", id: 1 },
    { label: "Control with Control", id: 2 },
    { label: "Combo with Solo", id: 3 },
    { label: "The Dark", id: 4 },
    { label: "Fight Club", id: 5 },
    { label: "Fight Clubaaa", id: 6 },
    { label: "Pulp Fiction", id: 7 },
  ];
  const [show, setshow] = useState(false);

  const toggle = () => {
    setshow(!show);
  };

  return (
    <Container sx={{ pt: 9 }}>
      <Grid
        sx={{ background: "#FFFF", display: "flex", p: 2, borderRadius: 4 }}
      >
        <CalendarTodayIcon />

        <Typography sx={{ pl: 3 }}>Have a coupon?</Typography>
        <Box
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={toggle}
        >
          Click here to enter your code
        </Box>
      </Grid>
      {show && (
        <Motion>
          <Grid sx={{ pt: 4 }}>
            <Grid
              sx={{
                px: 2,
                py: 3,
                border: "1px solid #babfc3",
                borderRadius: "11px",
              }}
            >
              <Typography sx={{ fontSize: "15px", pb: 1 }}>
                If you have a coupon code, please apply it below.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ px: 5 }}>
                  <TextField
                    fullWidth
                    id="outlined-email-address"
                    placeholder="Company name"
                    sx={{ pl: 2 }}
                  />
                </Grid>
                <Grid item xs={5} sx={{ ml: 3 }}>
                  <GlobelButton
                    onClick={() => alert()}
                    value={"Applay Coupon"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Motion>
      )}

      <Grid container spacing={6} sx={{ pt: 5 }}>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "40px", fontFamily: "Jost Sans-serif" }}>
            Billing details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                First Name <span style={{ color: "red" }}>*</span>{" "}
              </Typography>
              <TextField
                fullWidth
                id="outlined-email-address"
                placeholder="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Last Name <span style={{ color: "red" }}>*</span>{" "}
              </Typography>
              <TextField
                fullWidth
                id="outlined-email-address"
                placeholder="Last Name"
              />
            </Grid>
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>Company name (optional)</Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Company name"
            />
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Country / Region <span style={{ color: "red" }}>*</span>{" "}
            </Typography>
            <Grid sx={{ pt: 1 }}>
              <Autocomplete
                disablePortal
                options={top100Films}
                // defaultValue={top100Films[5]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Country / Region" />
                )}
              />
            </Grid>
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Street address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Street address"
            />
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Town / City <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Town / City"
            />
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              State / County <span style={{ color: "red" }}>*</span>
            </Typography>
            <Grid sx={{ pt: 1 }}>
              <Autocomplete
                disablePortal
                options={top100Films}
                // defaultValue={top100Films[5]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="State / County " />
                )}
              />
            </Grid>
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Postcode / ZIP <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Postcode / ZIP "
            />
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Phone <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Phone"
            />
          </Grid>
          <Grid sx={{ pt: 2 }}>
            <Typography>
              Email address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Email Address"
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "40px", fontFamily: "Jost Sans-serif" }}>
            Additional information
          </Typography>
          <Grid sx={{ pt: 3 }}>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder="Notes About Your Order,e.g.special notes for delivery"
            ></textarea>
          </Grid>
        </Grid>
      </Grid>
      <Grid >
        <Typography
          sx={{ fontSize: "40px", fontFamily: "Jost Sans-serif", pt: 7 }}
        >
          Your order
        </Typography>
        <Grid sx={{ border: "1px solid #d8d5d2", borderRadius: 2.5 }}>
          <Grid container sx={{ borderBottom: "1px solid #d8d5d2" }}>
            <Grid item xs={9}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>Product</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>
                Subtotal
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ p: 1, borderBottom: "1px solid #d8d5d2" }}>
            <Grid item xs={9}>
              <Typography sx={{}}>
                Appointment <span style={{ fontWeight: "bold" }}> × 1</span>
              </Typography>
              <Typography sx={{ borderBottom: "1px solid #d8d5d2" }}>
                Appointment Info:{" "}
              </Typography>
              <Typography sx={{}}>
                <span style={{ fontWeight: "bold" }}>Local Time:</span> November
                15, 2023 6:00 pm
              </Typography>
              <Typography sx={{}}>
                <span style={{ fontWeight: "bold" }}>Menu:</span> Chef Table: 6
                courses tasting menu
              </Typography>
              <Typography sx={{}}>
                <span style={{ fontWeight: "bold" }}>Employee:</span> Beccofino
                Tampa
              </Typography>
              <Typography sx={{}}>
                <span style={{ fontWeight: "bold" }}>
                  Total Number of People:
                </span>{" "}
                1
              </Typography>
              <Typography sx={{}}>
                <span style={{ fontWeight: "bold" }}>Custom Fields:</span> Zip
                Code: Pariatur Quisquam a
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ p: 1, fontWeight: "bold" }}>$150.00</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ borderBottom: "1px solid #d8d5d2" }}>
            <Grid item xs={9}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>
              
                $150.00
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={9}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>Total</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ p: 1, fontWeight: "bold" }}>
          
                $150.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{pb:10,pt:3}}>
      <Grid  sx={{background:"#ebe9eb",p:2}}>
      
      <Grid
        sx={{ background: "#FFFF", display: "flex", p: 2, borderRadius: 4, }}
      >
        <CalendarTodayIcon />

        <Typography sx={{ pl: 3 }}>Have a coupon?</Typography>
        <Box
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={toggle}
        >
          Click here to enter your code
        </Box>
      </Grid>
      <Divider sx={{pt:4}} />
      <Grid sx={{pt:1}}>
      <Typography sx={{fontSize:"14px"}}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</Typography>
    <Grid sx={{display:"flex",justifyContent:"end",pt:3}}>
    <GlobelButton  
     onClick={() => alert()}
     value={"Place Order"}
     />
    </Grid>
      
          </Grid>
      </Grid></Grid>
    </Container>
  );
};

export default BillingDetail;
