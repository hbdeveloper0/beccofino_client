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
import contentImg2 from '../../../../assets/images/menuPage/contentImg2.jpg'

const leftAffettatiItems = ['Bresaola', 'Capicollo', 'Sopressata', 'Cotto'];
const rightAffettatiItems = ['Pancetta', 'Duck Prosciutto', '‘Nduja', 'Tagliere'];

const Affettati = () => {
    return (
        <div>
            <Grid container spacing={4} sx={{ pt: '80px' }}>
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
            Charcutherie – Affettati
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
                {leftAffettatiItems.map((leftAffettatiItem) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={leftAffettatiItem} />
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
                {rightAffettatiItems.map((rightAffettatiItem) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={rightAffettatiItem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                    <Divider />
                  </>
                ))}
                <Typography sx={{ mt:3 }}>4 cheeses, charcuterie, bruschettas n more</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        
      </Grid>
        </div>
    )
}

export default Affettati