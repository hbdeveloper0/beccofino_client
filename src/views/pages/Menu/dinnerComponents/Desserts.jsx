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
    Divider
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
            <Grid container spacing={4} sx={{ pt: '80px', pb: '80px' }}>
            <Grid item xs={6}>
          <img
            src={contentImg2}
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ mt :4 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Marrcellus sans-serif",
              color: "#111010",
              fontSize: "32px",
              pl: 2
            }}
          >
          Main
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
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
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
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
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