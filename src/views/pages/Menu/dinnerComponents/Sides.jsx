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
import contentImg1 from "../../../../assets/images/menuPage/dinner/contentImg5.jpg";

const leftItems = [
  "Cannellini al fiasco",
  "Michelangelo salad​",
];
const leftLists = [
  "Cannellini beans sautéed with garlic clove and fresh sage in raw olive oil",
  "Spring mix with pine nuts and shaved parmigiano",
];
const rightItems = [
  "Caponatina in Agrodolce​",
  "Brunelleschi salad",
];
const rightLists = [
  "Diced eggplant, celery, olives, capers, onions and bell peppers in bittersweet tomato sauce",
  "Spinach salad with shaved almond and blue cheese",
];
const Sides = () => {
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

export default Sides