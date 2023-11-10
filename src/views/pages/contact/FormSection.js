import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const FormSection = () => {
  const color = { color: "#FFFF" };
  const top100Films = [
    { label: "The Dark Knight", id: 1 },
    { label: "Control with Control", id: 2 },
    { label: "Combo with Solo", id: 3 },
    { label: "The Dark", id: 4 },
    { label: "Fight Club", id: 5 },
    { label: "Fight Clubaaa", id: 6 },
    { label: "Pulp Fiction", id: 7 },
  ];
  return (
    <Container>
      <Grid container spacing={2} sx={{pb:9}}>
        <Grid data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" xs={12} sm={6} sx={{ pt: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Gilda Display Sans-serif",
              color: "#FFFF",
              fontWeight: "400",
              fontSize: {xs:'35px',md:'50px'},
              px: {xs:1,md:16},
              pb: 3,
            }}
          >
            OUR TEAM IS READY
            <label> TO HELP</label>
          </Typography>
          <Divider sx={{ background: "#FFFF", width: "90px", ml: {xs:1,md:16} }} />

          <Grid sx={{ pl: {xs:1,md:16}, pt: 5 }}>
            <Typography sx={{ color, fontSize: "20px", fontWeight: "700" }}>
              Reception:
            </Typography>

            <Link
              href="#"
              style={{
                color: "#ed1d24",
                fontSize: "19px",
                textDecoration: "none",
              }}
            >
              <Grid sx={{ display: "flex", pt: 2 }}>
                <PhoneIcon sx={{ color }} />

                <Typography
                  sx={{
                    color,
                    pl: 3,
                    fontSize: "16px",
                    "&:hover": { color: "red" },
                  }}
                >
                  813-473-2105
                </Typography>
              </Grid>
            </Link>
            <Link
              href="#"
              style={{
                color: "#ed1d24",
                fontSize: "19px",
                textDecoration: "none",
              }}
            >
              <Grid sx={{ display: "flex", pt: 2 }}>
                <EmailIcon sx={{ color }} />

                <Typography
                  sx={{
                    color,
                    pl: 3,
                    fontSize: "16px",
                    "&:hover": { color: "red" },
                  }}
                >
                  info@BeccofinoTampa.com
                </Typography>
              </Grid>
            </Link>
            <Link
              href="#"
              style={{
                color: "#ed1d24",
                fontSize: "19px",
                textDecoration: "none",
              }}
            >
              <Grid sx={{ display: "flex", pt: 2 }}>
                <LocationOnIcon sx={{ color }} />

                <Typography
                  sx={{
                    color,
                    pl: 3,
                    fontSize: "16px",
                    "&:hover": { color: "red" },
                  }}
                >
                  5712 S MacDill Ave Tampa, FL 33611 USA
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Grid>
        <Grid data-aos="fade-down"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" xs={12} sm={6} sx={{ px: {xs:1,md:9}, pt: 7 }}>
        <form>
          <TextField
            fullWidth
            id="outlined-name"
            placeholder="Name"
            sx={{
              background: "#51535c",
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                border: "1px solid #bdb7b2",
                "&:hover, &.Mui-focused": {
                  border: "1px solid red",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              },
            }}
          />
          <Grid sx={{ pt: 3 }}>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Email Address"
              sx={{
                background: "#51535c",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #bdb7b2",
                  "&:hover, &.Mui-focused": {
                    border: "1px solid red",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                },
              }}
            />
          </Grid>
          <Grid sx={{ pt: 3 }}>
            <Autocomplete
              disablePortal
              options={top100Films}
              // defaultValue={top100Films[5]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    background: "#51535c",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #bdb7b2",
                      "&:hover, &.Mui-focused": {
                        border: "1px solid red",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid sx={{ pt: 3 }}>
            <textarea
              style={{
                width: "100%",
                height: "100px",
                background: "#51535c",
                borderRadius: "10px",
              }}
              placeholder="Message"
            ></textarea>
          </Grid>
          <Grid sx={{display:"flex",justifyContent:"end",pt:1}}>
          <Button sx={{background:"red",color:"#FFFF",px:3,py:1,borderRadius:9,}}>Submit</Button>
          </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormSection;
