import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import "./Navbar.css";
import NavbarModel from "./NavbarModel";

// import GlobelButton from '../GlobalButton/GlobelButton';

const pages = ["Media", "Reservation", "Events"];
// const rightPages = ['Menu', 'Reservation', 'Events'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      className="navbar"
      backgroundColor="transparent"
      elevation={0}
      position="fixed"
      sx={{ backgroundColor: `${props.bgColor}`, padding: "10px 0px 0px 0px" }}
    >
      <Grid container>
      <Grid item md={1.5} sm={3} xs={6} sx={{display:{xs:"inline",md:"none"}}}>
      <Grid container sx={{p:2,mt:1}}>
        <Link to="/">
          <img
            src={props.logo}
            alt="Logo"
            style={{ width: "80%", height: "80%" }}
          />
        </Link>
      </Grid>
    </Grid>
        <Grid item md={5} sm={9} xs={6}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:`${props.textColor}`}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
            <Grid sx={{px:2}}> 
          <Button
                onClick={handleCloseNavMenu}
                sx={{ textTransform: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: 'black',
                  }}
                  to="/"
                >
                  Home
                </Link>
              </Button>
              </Grid>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{  textTransform: "none" }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                      to={`/${page.replace(" ", "-").toLowerCase()}`}
                    >
                      {page}
                    </Link>
                  </Button>
                </MenuItem>
              ))}

         <Grid sx={{px:2}}>  
         <Button
         onClick={handleCloseNavMenu}
         sx={{ textTransform: "none" }}
       >
         <Link
           style={{
             textDecoration: "none",
             color: 'black',
           }}
           to="/menu"
         >
           Menu
         </Link>
       </Button>
       </Grid>
            
       <Grid sx={{px:2}}> 
          <Button
                onClick={handleCloseNavMenu}
                sx={{ textTransform: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: 'black',
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </Button>
              </Grid>
            </Menu>
            <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 4,
              mx: 2,
              backgroundColor: "#ed1d24",
              padding: "5px 20px 5px 20px",
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#F0EDEA" }}
              to="/reservation"
            >
              Reservation
            </Link>
          </Button>
          </Box>
          
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            LOGO
                        </Typography> */}
          <Box sx={{ flexGrow: 1 , display: {xs:"none",md:"inline"},}}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
               
                textDecoration: "none",
                color: `${props.textColor}`,
              }}
            >
              <NavbarModel />
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, mx: 2, textTransform: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: `${props.textColor}`,
                  }}
                  to={`/${page.replace(" ", "-").toLowerCase()}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid item md={1.5} sm={3} xs={6}  sx={{display:{xs:"none",md:"inline"}}}>
          <Grid container sx={{mt:{md:2,xl:0}}}>
            <Link to="/">
              <img
                src={props.logo}
                alt="Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: { md: "end", xs: "center" },
          }}
        >
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box>
              
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 4, mx: 2, textTransform: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: `${props.textColor}`,
                  }}
                  to="/menu"
                >
                  Menu
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 4, mx: 2, textTransform: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: `${props.textColor}`,
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </Button>
            </Box>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 4,
                mx: 2,
                backgroundColor: "#ed1d24",
                padding: "5px 20px 5px 20px",
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#F0EDEA" }}
                to="/reservation"
              >
                Reservation
              </Link>
            </Button>
            {/* <GlobelButton/> */}
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Navbar;
