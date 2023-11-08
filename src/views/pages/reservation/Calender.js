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

import React, { useEffect, useState, useContext } from "react";
import { Calendar, theme } from "antd";
import { Button, Container, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

import ModelContext from "../../../context/ModelContext";
import moment from 'moment';
import axios from 'axios'

const App = () => {
  const { token } = theme.useToken();
  const a = useContext(ModelContext)

  const [dayName, setDayName] = useState('')
  const [timeSlots, setTimeSlots] = useState()

  const onPanelChange = (value, mode) => {
    // const formattedDate = dayjs(value).format("dddd, MMMM D, YYYY hh:mm A");
    const formattedDate = dayjs(value).format("MMMM D, YYYY");
    // console.log(formattedDate, mode);
    a.setcurrentdate(formattedDate);
    const day_name = dayjs(value).format("dddd");
    setDayName(day_name)
  };

  const handleButtonClick = (buttonId) => {
    a.setClickedButton(buttonId);
  };

  const wrapperStyle = {
    width: "100%",
    padding: "20px",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,

  };

  
  const dateCellRender = date => {
    // You can add an ID to each cell based on the date
    const cellId = `cell-${date.format('YYYY-MM-DD')}`;
    // Render the cell content with the ID
    return <div id={cellId}></div>;
    
  };

  // Define a function to disable specific days
  const disabledDate = current => {
    const today = moment();
    // In this example, we hide Sundays (day 0) and Saturdays (day 6)
    return current.isBefore(today) || current.day() === 0 || current.day() === 1 || current.day() === 2;
  };

  useEffect(() => {
    if(dayName !== ''){
      const day_name = dayName;
      console.log(dayName)
      axios.post(`${process.env.REACT_APP_API_URL}/reservation/get-TimeSlots`, {day_name}).then((response) =>{
        // console.log(response.data.data.TimeSlots)
        setTimeSlots(response.data.data.TimeSlots)
        console.log(timeSlots)
        }).catch ((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              console.log('Response data:', error.response);
            } else {
              // Something happened in setting up the request
              console.error('Error:', error.message);
            }
        })
    }
  
  },[dayName])
  

  return (
    <>
      <Typography variant="h5" sx={{ p: 3, boxShadow: 2 }}>
        Date & Time
      </Typography>
      <Grid style={wrapperStyle}>
        <Calendar disabledDate={disabledDate} fullscreen={false} onSelect={onPanelChange} />
      </Grid>


      {a.currentdate && <Container>
        <Typography sx={{ p: 1 }}>
          {a.currentdate}
        </Typography>
        {/*{timeSlots.map((timeSlot) => {
          
        })}*/}
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(1)}
              sx={{
                border: "1px solid #f46e74",
                color: a.clickedButton === 1 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: a.clickedButton === 1 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              6:00 PM - 6:45 PM
            </Button>
          </Grid>
          {/*<Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => handleButtonClick(2)}
              sx={{
                border: "1px solid #f46e74",
                color: a.clickedButton === 2 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: a.clickedButton === 2 ? "red" : "#fde8e9",
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
                color: a.clickedButton === 3 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: a.clickedButton === 3 ? "red" : "#fde8e9",
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
                color: a.clickedButton === 4 ? "#FFFF" : "#f46e74",
                fontSize: "17px",
                background: a.clickedButton === 4 ? "red" : "#fde8e9",
                ":hover":{color:"black"}
              }}
            >
              8:15 PM - 9:00 PM
            </Button>
            </Grid>*/}
        </Grid>
      </Container> }
    </>
  );
};

export default App;

