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
              Homemade Pasta’s
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
                    {leftItems.map((leftItem, index) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={leftItem} />
                              </ListItemButton>
                            </ListItem>
                          </List>
                          <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px', pl: 3 }}>{leftLists[index]}</Typography>
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
                    {rightItems.map((rightItem, index) => (
                      <>
                        <nav aria-label="main mailbox folders">
                          <List sx={{ backgroundColor: '#f0edea' }}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={rightItem} />
                              </ListItemButton>
                            </ListItem>
                          </List>
                          <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px', pl: 3 }}>{rightLists[index]}</Typography>
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

export default Homemades