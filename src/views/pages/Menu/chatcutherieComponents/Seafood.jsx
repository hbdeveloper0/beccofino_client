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
import contentImg1 from "../../../../assets/images/menuPage/contentImg3.jpg";

const leftSeafoodtems = [
  "Bresaola",
  "Smoking Ham",
  "Sealame",
  "Tuna in a jar",
];
const rightSeafoodItems = [
  "Bottarga",
  "Cured Salmon",
  "Smoked Trout",
];
const Seafood = () => {
    return (
        <div>
          <Grid container spacing={4} sx={{ pt: "80px" , pb: '80px'}}>
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
              Charcutherie – Seafood
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
                    {leftSeafoodtems.map((leftSeafoodtem) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={leftSeafoodtem} />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                        <Divider />
                      </>
                    ))}
                  </Box>
                  <Typography sx={{ mt:3 }}>Availability changes due to aging/season requirements</Typography>
                </Grid>
    
                <Grid item xs={6}>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper"
                    }}
                  >
                    {rightSeafoodItems.map((rightSeafoodItem) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={rightSeafoodItem} />
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
}

export default Seafood