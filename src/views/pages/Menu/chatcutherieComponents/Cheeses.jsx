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
  Divider
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
      <Grid container spacing={4} sx={{ pt: "80px", pb: '100px'}}>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Marrcellus sans-serif",
              color: "#111010",
              fontSize: "32px",
              pl: 2
            }}
          >
            Cheeses
          </Typography>

          <Grid container sx={{ mt: 2 }} spacing={4}>
            <Grid item xs={6}>
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
                    <Divider />
                  </>
                ))}
              </Box>
            </Grid>

            <Grid item xs={6}>
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
                    <Divider />
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <img
            src={contentImg1}
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cheeses;
