// import * as React from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// export default function DateCalendarValue() {
//   const [value, setValue] = React.useState(dayjs("2022-04-17"));
//   return (
//     <Calendar/>
//     // <LocalizationProvider dateAdapter={AdapterDayjs}>

//     //     <DemoItem label="Controlled calendar">
//     //       <DateCalendar
//     //         value={value}
//     //         onChange={(newValue) => setValue(newValue)}
//     //       />
//     //     </DemoItem>

//     // </LocalizationProvider>
//   );
// }

// import { useState } from 'react';
// // import Calendar from 'react-calendar';
// import {Calendar,} from 'antd';
// import 'react-calendar/dist/Calendar.css';
// import { Grid } from '@mui/material';

// export default function MyApp() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <Grid sx={{p:1,border:"1px solid",m:2}}>
//      <Calendar
//      onSelect={(date)=>{console.log(date)}}/>
//     </Grid>
//   );
// }

import React, { useEffect, useState } from "react";
import { Calendar, theme } from "antd";
import { Button, Container, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

const App = () => {
  const { token } = theme.useToken();
  const [currentdate, setcurrentdate] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const onPanelChange = (value, mode) => {
    const formattedDate = dayjs(value).format("dddd, MMMM D, YYYY hh:mm A");
    console.log(formattedDate, mode);
    setcurrentdate(formattedDate);
  };

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const wrapperStyle = {
    width: "100%",
    padding: "20px",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  


  return (
    <>
      <Typography variant="h5" sx={{ p: 3, boxShadow: 2 }}>
        Date & Time
      </Typography>
      <Grid style={wrapperStyle}>
        <Calendar fullscreen={false} onSelect={onPanelChange} />
      </Grid>


      {currentdate && <Container>
        <Typography sx={{ p: 1 }}>
          {currentdate}
        </Typography>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(1)}
              sx={{
                border: "1px solid #f46e74",
                color: clickedButton === 1 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: clickedButton === 1 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              6:00 PM - 6:45 PM
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(2)}
              sx={{
                border: "1px solid #f46e74",
                color: clickedButton === 2 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: clickedButton === 2 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              6:45 PM - 7:30 PM
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(3)}
              sx={{
                border: "1px solid #f46e74",
                color: clickedButton === 3 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: clickedButton === 3 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              7:30 PM - 8:15 PM
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(4)}
              sx={{
                border: "1px solid #f46e74",
                color: clickedButton === 4 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: clickedButton === 4 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              8:15 PM - 9:00 PM
            </Button>
          </Grid>
        </Grid>
      </Container> }
    </>
  );
};

export default App;

