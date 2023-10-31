import React from "react";
import {
  Grid,
  Container,
  Button,

} from "@mui/material";

import Chatcutharie from "./chatcutherieComponents";

const MenuContent = () => {
  return (
    <div>
      <Grid sx={{ backgroundColor: '#f0edea' }}>
        <Container>
          <Grid container >
            <Grid item xs={12} sx={{ textAlign: "center", mt: "60px" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ed1d24",
                  textTransform: "none",
                  padding: "5px 20px 5px 20px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontFamily: "Amelia Montserrat sans-serif",
                  fontWeight: 500
                }}
              >
                Chatcutherie
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#111010",
                  textTransform: "none",
                  padding: "5px 20px 5px 20px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontFamily: "Amelia Montserrat sans-serif",
                  fontWeight: 500,
                  ml: 3,
                  border: "1px solid #111010"
                }}
              >
                Dinner
              </Button>
            </Grid>

          </Grid>
        </Container>
      </Grid>

      <Chatcutharie/>
    </div>
  );
};

export default MenuContent;
