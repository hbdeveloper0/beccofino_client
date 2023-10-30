import React from 'react'
import {Grid, Box, Typography} from '@mui/material';
import SliderImg from '../../../../../assets/images/mediaPage/mediaSlider/sliderImg.jpg'

const MediaSlider = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ backgroundImage: `url(${SliderImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px' }}>
                    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h1' sx={{color: '#F0EDEA', fontFamily: 'Montserrat, sans-serif', fontSize: '66px'}}>Media</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MediaSlider