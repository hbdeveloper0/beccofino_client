import { Grid, Typography, Container, TextField, InputAdornment, Button, IconButton, CardMedia,Box } from '@mui/material'
import React from 'react'
import bgImg from '../../../assets/images/eventPage/enevtContentBg.jpg'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EventImg from '../../../assets/images/eventPage/eventSmallImg.jpg'
import { useState } from 'react';
import Modals from './EventModel';

const EventContent = () => {
    const [open, setOpen] = useState(false);
    
    const handleModalClose = () => setOpen(false);
    return (
        <div>
            <Grid container sx={{ backgroundImage: `url(${bgImg})`, height: 'auto' }}>
                <Container >
                    <Grid item xs={12} sx={{ textAlign: 'center', mt: "60px" }}>
                        <Typography sx={{ fontFamily: 'Marecellus sans-serif', fontSize: '50px', color: '#111010' }}>Book an Event</Typography>
                    </Grid>

                    <Grid item xs={8} sx={{ mt: "50px", backgroundColor: '#FFFFFF', height: 'auto',maxWidth:{xs:"800px",sm:"auto"}, mx: 'auto', borderRadius: '15px', padding: '10px', mb: "60px"}}>
                        <Typography sx={{ fontFamily: 'Amelia Montserrat sans-serif', fontSize: '18px', color: '#111010', padding: '0px 0px 16px' }}>1 Event Available</Typography>

                        <Grid container spacing={1}>
                            <Grid item xs={9} sm={10}>
                                <TextField sx={{ width: '100%'}}
                                    id="input-with-icon-textfield"
                                        InputProps={{
                                            style:{
                                                height: '38px',
                                                boxShadow: '0px 1px 3px lightgray'
                                            },
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    variant="outlined"
                                    placeholder="Search for Events..."
                                />
                            </Grid>
                            <Grid item xs={1} sm={2}>
                            <IconButton><FilterAltIcon sx={{display:{xs:"inline",sm:"none"}}} />  </IconButton>
                              
                            <Button sx={{display:{xs:"none",sm:"inline"},color: '#111010', borderColor: 'lightgray', boxShadow: '0px 1px 3px lightgray',mt:-4}} variant="outlined" startIcon={<FilterAltIcon />}>Filters</Button>
                            </Grid>
                        </Grid>

                        <Grid container sx={{mt: 3, color: '#FFFFFF', boxShadow: '0px 1px 3px lightgray', borderLeft: '10px solid #26cc2b', borderRadius: '10px', height: 'auto', padding: '10px', mb: 3 }}>
                            <Grid item xs={12} sm={1.5}>
                                <Typography sx={{ fontFamily: 'Amelia Montserrat sans-serif',  fontSize: '18px', color: 'gray', mt:2,display:{xs:'flex',sm:"block"} ,py:{xs:1,sm:0}}}>Begins <Typography sx={{px:{xs:0.7,sm:0},}}><Box component="span" sx={{ color: '#1A2C37' }}> 31</Box> Dec </Typography> 10:00 pm</Typography>
                             </Grid>
                             <Grid item xs={12} sm={2}>
                             <CardMedia component="img" image={EventImg} sx={{ width: '100%', height: {xs:'240px',sm:"100px"} }} />
                             </Grid>

                            <Grid item xs={12} sm={6} sx={{ paddingLeft: 2, mt:1 }}>
                                <Typography sx={{ fontFamily: 'Amelia Montserrat sans-serif',  fontSize: '16px', color: '#1A2C37E6', margin: '0px 0px 4px' }}>New Year 2024</Typography>
                                <Typography sx={{ fontFamily: 'Amelia Montserrat sans-serif',  fontSize: '15px', color: '#1A2C27CC', margin: '0px 0px 4px' }}>5712 S Macdillave Tampa, FL 33611 USA</Typography>
                                <Typography sx={{ fontFamily: 'Amelia Montserrat sans-serif',  fontSize: '15px', color: '#1A2C27CC', margin: '0px 0px 4px' }}> <span style={{ color: '#265CF2', margin: '0px 8px 0px 0px' }}>Open</span> <span style={{ fontWeight: '600' }}>30</span> slots left</Typography>
                            </Grid>

                            <Grid item xs={12} sm={2}>
                                <Button onClick={()=>setOpen(true)} sx={{ backgroundColor: '#ed1d24', color: '#FFFFFF', textTransform: 'none', padding: '2px 15px 2px 15px', borderRadius: '5px', mt: 4, float: 'right', }} fullWidth>Read more</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            
            <Modals
            open={open}
            handleClose={handleModalClose}
            title={<h3>SuccessFull</h3>}
            description="Record Updated Successfully"
            btnName="Ok"
            url={handleModalClose}
            img={EventImg}
        />
        </div>
    )
}

export default EventContent