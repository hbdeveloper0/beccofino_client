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
import contentImg1 from "../../../../assets/images/menuPage/dinner/contentImg3.jpg";

const leftItems = [
  "Strozzapreti Burro & Salvia",
  "Gnocchi alla Sorrentina",
  "Crespelle alla Fiorentina",
  "Tagliolini al nero di seppia",
];
const leftLists = [
  "Ricotta & Spinach dumplings in a butter-sage sauce and shaved pecorino",
  "Potato dumplings in tomato sauce and basil, mozzarella",
  "Florentine crepes ricotta and spinach filled with pink buttermilk sauce",
  "Egg tagliolini with black ink tossed with cuttle fish, leek, cherry tomato, Wine sauce",
];
const rightItems = [
  "Tortelli del Mugello",
  "Trofie al Pesto",
  "Agnolotti alla Boscaiola",
  "Risotto ai Funghi",
];
const rightLists = [
  "Homemade stuffed ravioli with savory Venison/wild boar Tuscan ragu",
  "Fresh pasta tossed in freshly handmade traditional pesto",
  "Homemade cheese stuffed pasta tossed in rosemary ham, mushrooms, peas and roasted pine nuts creamy sauce",
  "Wild truffled mushrooms medley risotto, mantecato with parmigiana cheese",
];
const Homemades = () => {
    return (
        <div>
          <Grid container spacing={4} sx={{ pt: {xs:"10px",sm:"80px"} , pb: '80px'}}>
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
              Homemade Pasta’s
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
                    {leftItems.map((leftItem, index) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon  sx={{minWidth:"40px !important"}}>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={leftItem} />
                              </ListItemButton>
                            </ListItem>
                          </List>
                          <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px',pl: {xs:2,sm:3} ,pb:1 }}>{leftLists[index]}</Typography>
                        </nav>
                        <Divider sx={{ background: "#bdb7b2" }} />
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
                    {rightItems.map((rightItem, index) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon  sx={{minWidth:"40px !important"}}>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={rightItem} />
                              </ListItemButton>
                            </ListItem>
                          </List>
                          <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px',  pl: {xs:2,sm:3} ,pb:1}}>{rightLists[index]}</Typography>
                        </nav>
                        <Divider sx={{ background: "#bdb7b2" }} />
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
}

export default Homemades