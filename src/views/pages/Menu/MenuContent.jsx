import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Button,
} from "@mui/material";
import Chatcutharie from "./chatcutherieComponents";
import Dinner from "./dinnerComponents";
const MenuContent = () => {
  const [changeDisplay, setChangeDisplay] = useState('Chatcutharie')
  const ChatcutharieClick = () => {
    setChangeDisplay('Chatcutharie')
  }
  const DinnerClick = () => {
    setChangeDisplay('dinner')
  }
  const btnStyle = {
    backgroundColor: '#ed1d24'
    // border: 'none'
  }
  useEffect(() => {
    const button = document.getElementById('ChatcutharieBtn');
    button.focus()
  },[])
  return (
    <div>
      <Grid sx={{ backgroundColor: '#f0edea' }}>
        <Container>
          <Grid container >
            <Grid item xs={12} sx={{ textAlign: "center", mt: "60px" }}>
              <Button id="ChatcutharieBtn"
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  textTransform: "none",
                  padding: "5px 20px 5px 20px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontFamily: "Amelia Montserrat sans-serif",
                  fontWeight: 500,
                  borderColor: 'none',
                  color: '#111010',
                  ':hover': {backgroundColor: '#FFFFFF'},
                  ':focus': {backgroundColor: '#ed1d24', color: '#FFFFFF'}
                }}
                onClick={()=> ChatcutharieClick()}
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
                  border: "1px solid #111010",
                  ':hover': {backgroundColor: '#FFFFFF'},
                  ':focus': {backgroundColor: '#ed1d24', color: '#FFFFFF'}
                }}
                onClick={()=> DinnerClick()}
              >
                Dinner
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      
      {(changeDisplay) === 'Chatcutharie' ? <Chatcutharie/> : <Dinner/>}
    </div>
  );
};
export default MenuContent;
