import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import { Dialog, Slide, makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavbarModel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DragHandleIcon />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container maxWidth sx={{ background: "#949494" }}>
          <Grid sx={{ px: 3, py: 2, height: "100vh" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{ fontSize: "46px", color: "#FFFF" }} />
            </IconButton>
            <Grid sx={{ px: {xs:5,md:40}, pt: {xs:22,md:40} }}>
              <Grid>
                <Link
                  to="/media" >
                 <Typography  
                 sx={{
                    fontSize: "45px",
                    fontFamily: "Serif",
                    color: "#f0edea",
                    ":hover": { color: "red" ,},
                  }}>
                   Media
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Link
                  to="/reservation"
                 
                ><Typography  sx={{
                    fontSize: "45px",
                    fontFamily: "Serif",
                    color: "#f0edea",
                    ":hover": { color: "red" ,},
                  }}>Reservation</Typography>
                
                </Link>
              </Grid>
              <Grid>
                <Link to="/events">
                  <Typography
                    sx={{
                      fontSize: "45px",
                      fontFamily: "Serif",
                      color: "#f0edea",
                      "&:hover": { color: "red",},
                    }}
                  >
                    Events
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
