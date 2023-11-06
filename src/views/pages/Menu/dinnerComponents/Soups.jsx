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
import contentImg2 from '../../../../assets/images/menuPage/dinner/contentImg2.jpg'

const leftSoupItems = ['Ribollita', 'Farro alla medici'];
const leftSoupLists = ['Florentine farmer hearty potage with Kale, cannellini beans, carrots, celery, Cabbage n more…', 'Etruscans Barley soup with legumes and Tuscan herbs'];

const Soups = () => {
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
            Soups
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
                {leftSoupItems.map((leftSoupItem, index) => (
                  <>
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={leftSoupItem} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Typography sx={{color: '111010', fontFamily: "Montserrat sans-serif", fontSize: '14px', pl: 3 }}>{leftSoupLists[index]}</Typography>
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

export default Soups