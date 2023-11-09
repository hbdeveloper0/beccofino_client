import React from 'react'
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
import contentImg2 from '../../../../assets/images/menuPage/dinner/contentImg4.jpg'

const leftItems = [
  'Caciucco alla livornese​', 
  'Parmigiana di Spada​', 
  'Pesca del Giorno​',
  'Merluzzo Acqua pazza​',
  'Peposo del Casentino'
];
const leftLists = [
  'Shrimp, clam, calamari, mussels and more..in a tangy tomato garlic sauce and white wine over toasted bread​', 
  'Swordfish parmigiana, eggplant with Sicilian pesto and sweet provola chees​', 
  'Daily catch​',
  'Cod sicilian style with garlic, cherry tomatoes , scallion, celery, oregano and white w..',
  'Ancient Tuscan beef slowly braised in Chianti wine, mixed peppercorns with beans bruschetta'
];
const rightItems = [
  'Coniglio in Umido​', 
  'Filetto al Pepe Verde*​', 
  'Fiorentina ai Carboni', 
  'Anatra al Sottobosco​',
  'Ol’ fashion beef Tartare *'
];
const rightLists = [
  'Cacciatora sauce with olives Over braised rabbit and polenta​', 
  '10oz grilled filet mignon, flambeed with cognac in green peppercorn creamy sauce​', 
  '40 oz Porterhouse make no miSteak one of the best..aged, with our secret seasoning comes with grilled accouterments ask your server', 
  'Pan seared duck breast with our savory herbs blueberry gravy​',
  '10 oz of freshly grounded tenderloin with all quintessence, egg yolk olive oil, lemon, capers, Anchovies, shallots …with toasted bread'
];

const Mains = () => {
    return (
        <div>
            <Grid container spacing={4} sx={{ pt: {xs:"10px",sm:"80px"} , pb: '80px' }}>
            <Grid item xs={12} sm={6}>
            <CardMedia
            component="img"
            image={contentImg2}
            sx={{ height: { xs: "80%", lg: "100%" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt :{xs:-13,sm:0,md:4} }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Marrcellus sans-serif",
              color: "#111010",
              fontSize: {xs:"26px",sm:"32px"},
              pl: {xs:0,sm:2},
            }}
          >
          Main
          </Typography>

          <Grid container sx={{ mt: {xs:-4,sm:-3,md:2} }} spacing={4}>
          
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
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon sx={{minWidth:"40px !important"}}>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={leftItem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Typography sx={{color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px', pl: 3 }}>{leftLists[index]}</Typography>
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
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon sx={{minWidth:"40px !important"}}>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={rightItem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Typography sx={{color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px',pl: {xs:2,sm:3} ,pb:1 }}>{rightLists[index]}</Typography>
                    </nav>
                    <Divider sx={{ background: "#bdb7b2" }} />
                  </>
                ))}
    
              </Box>
            </Grid>
          </Grid>
        </Grid>

        
      </Grid>
        </div>
    )
}

export default Mains