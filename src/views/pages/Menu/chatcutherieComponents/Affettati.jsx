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
  CardMedia,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import contentImg2 from "../../../../assets/images/menuPage/contentImg2.jpg";
const leftAffettatiItems = ["Bresaola", "Capicollo", "Sopressata", "Cotto"];
const rightAffettatiItems = [
  "Pancetta",
  "Duck Prosciutto",
  "‘Nduja",
  "Tagliere",
];
const Affettati = () => {
  return (
    <div>
      <Grid container spacing={4} sx={{ pt: {xs:"30px",sm:"80px"}, pb: "80px" }}>
        <Grid data-aos="flip-up" data-aos-duration="1500" item xs={12} sm={6}>
          <CardMedia
            component="img"
            image={contentImg2}
            sx={{ height: { xs: "100%", sm: "100%" } }}
          />
        </Grid>
        <Grid data-aos="flip-down" data-aos-duration="1500" item xs={12} sm={6} sx={{ mt: {xs:0,sm:4} }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Marrcellus sans-serif",
              color: "#111010",
              fontSize: {xs:"26px",sm:"32px"},
              pl: {xs:0,sm:2},
            }}
          >
            Charcutherie – Affettati
          </Typography>
          <Grid container sx={{ mt: {xs:-4,sm:2} }} spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
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
                    <Divider sx={{ background: "#bdb7b2" }} />
                  </>
                ))}
              </Box>
            </Grid>
            <Grid item  xs={12} sm={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
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
                    <Divider sx={{ background: "#bdb7b2" }} />
                  </>
                ))}
                <Typography sx={{ mt: 3 }}>
                  4 cheeses, charcuterie, bruschettas n more
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Affettati;
