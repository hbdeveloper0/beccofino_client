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
          <Grid container spacing={4} sx={{ pt: {xs:"30px",sm:"80px"}, pb: '80px'}}>
            <Grid   data-aos="flip-left" data-aos-duration="1500" item xs={12} sm={6}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Marrcellus sans-serif",
                  color: "#111010",
                  fontSize: {xs:"26px",sm:"32px"},
                  pl: {xs:0,sm:2},
                }}
              >
              Charcutherie – Seafood
              </Typography>
    
              <Grid container sx={{ mt:{xs:-4,sm:2} }} spacing={4}>
                <Grid item xs={12} sm={6}>
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
                              <ListItemButton >
                                <ListItemIcon  >
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={leftSeafoodtem}  />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                        <Divider sx={{ background: "#bdb7b2" }} />
                      </>
                    ))}
                  </Box>
                  <Typography variant="p" sx={{ mt:3 ,display:{xs:'none',sm:"flex"} }}>Availability changes due to aging/season requirements</Typography>
                </Grid>
    
                <Grid item xs={12} sm={6}>
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
                        <Divider sx={{ background: "#bdb7b2" }} />
                      </>
                    ))}
                  </Box>
                  <Typography  sx={{ mt:3 ,display:{xs:'flex',sm:"none"}}}>Availability changes due to aging/season requirements</Typography>
                </Grid>
              </Grid>
            </Grid>
    
            <Grid item  data-aos="flip-right" data-aos-duration="1500" xs={12} sm={6}>
            <CardMedia component="img" image={contentImg1} sx={{height:{xs:'100%',lg:'100%'} }} />
              
            </Grid>
          </Grid>
        </div>
      );
}
export default Seafood