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
import contentImg1 from "../../../../assets/images/menuPage/dinner/contentImg1.jpg";

const leftAppetizersItems = [
  "Montanara",
  "Grilled Scamorza Cheese",
  "Zeppole di mare",
  "Cozze all’Ischitana",
  "Mozzarella Caprese"
];
const leftAppetizersLines = [
  "Neapolitan Pizza dough topped with Tomato, Basil & Mozzarella",
  "Smoked homemade scamorza with tomato filet, Evo and oregano",
  "Fried seaweed puffs, Himalayan Sea salt",
  "Cast iron Sautéed mussels with black peppercorn and lemon zest",
  "Lays of our mozzarella and tomatoes with basil and vinegrette"
];
const rightAppetizersItems = [
  "Polipo Striato",
  "Tagliere",
  "Carpaccio di Bresaola",
  "Carpaccio di Spada",
];
const rightAppetizersLists = [
  "Imported Octopus boiled in herbs Sicilian Style Charbroiled, in our citronette foam over pickled seaweed",
  "4 cheeses, 4 charcuteries, bruschettas n pate’, fruits, confit, Honey n more",
  "shaved parmigiano, nuts",
  "Sliced sword fish with celery, citronette, chives, crushed pink peppercorn",
];

const Appetizers = () => {
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
          Appetizers
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
                {leftAppetizersItems.map((leftAppetizersItem, index) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List sx={{ backgroundColor: '#f0edea'}}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={leftAppetizersItem}/>
                          </ListItemButton>
                          
                        </ListItem>
                      </List>
                      <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px', pl: 3 }}>{leftAppetizersLines[index]}</Typography>
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
                {rightAppetizersItems.map((rightAppetizersItem, index) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List sx={{ backgroundColor: '#f0edea' }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={rightAppetizersItem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Typography sx={{ backgroundColor: '#f0edea', color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px' }}>{rightAppetizersLists[index]}</Typography>
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

export default Appetizers;
