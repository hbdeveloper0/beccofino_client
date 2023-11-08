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
import contentImg2 from '../../../../assets/images/menuPage/dinner/contentImg6.jpg'

const leftItems = [
  'Sicilian Cannoli​', 
  'Panna Cotta​', 
  'Burrata​',
];

const rightItems = [
  'Ricotta & Honey​', 
  'Ricotta Mouse​', 
];

const Desserts = () => {
    return (
        <div>
            <Grid container spacing={4} sx={{ pt: {xs:"30px",sm:"80px"}, pb: '80px' }}>
            <Grid item xs={12} sm={6}>
            <CardMedia component="img" image={contentImg2} sx={{height:{xs:'100%',lg:'100%'} }} />

        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt :{xs:1,sm:4} }}>
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

          <Grid container sx={{ mt:{xs:-4,sm:2}}} spacing={4}>
          
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
                    
                    </nav>
                    <Divider />
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
                     
                    </nav>
                    <Divider />
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

export default Desserts