import React from "react";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  CardMedia
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import contentImg1 from "../../../../assets/images/menuPage/contentImg1.jpg";
const leftCheesesItems = [
  "Scamorza",
  "Toscano",
  "Pepato",
  "Gorgo",
  "Tampaleggio"
];
const rightCheesesItems = [
  "Tartufato",
  "Goat-t",
  "Strakkino",
  "Robiola",
  "Brioso"
];
const Cheeses = () => {
  return (
    <div>
      <Grid container spacing={4} sx={{ pt: {xs:"60px",sm:"80px"}, pb: '100px'}}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Marrcellus sans-serif",
              color: "#111010",
              fontSize: {xs:"26px",sm:"32px"},
              pl: {xs:0,sm:2},
            }}
          >
            Cheeses
          </Typography>
          <Grid container sx={{ mt: {xs:-4,sm:2} }} spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper"
                }}
              >
                {leftCheesesItems.map((leftCheesesitem) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List sx={{ backgroundColor: '#f0edea' }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={leftCheesesitem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                    <Divider sx={{background:"#bdb7b2"}} />
                  </>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper"
                }}
              >
                {rightCheesesItems.map((rightCheesesitem) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List sx={{ backgroundColor: '#f0edea' }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={rightCheesesitem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                    <Divider sx={{background:"#bdb7b2"}} />
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <CardMedia component="img" image={contentImg1} sx={{height:{xs:'100%',lg:'100%'} }} />
         
        </Grid>
      </Grid>
    </div>
  );
};
export default Cheeses;
