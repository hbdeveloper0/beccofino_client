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

import { useState } from 'react';
// import Calendar from 'react-calendar';
import {Calendar,} from 'antd';
import 'react-calendar/dist/Calendar.css'; 
import { Grid } from '@mui/material';

export default function MyApp() {
  const [value, onChange] = useState(new Date());
  



  return (
    <Grid sx={{p:1,border:"1px solid",m:1}}>
     <Calendar
     onSelect={(date)=>{console.log(date)}}/>  
    </Grid>
  );
}