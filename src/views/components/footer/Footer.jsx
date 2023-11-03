import React, {useContext} from 'react'
import ModelContext from '../../../context/ModelContext';
import { Grid, Container, Box, Typography, Link, Button } from '@mui/material'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import SouthEastIcon from '@mui/icons-material/SouthEast';

import SignUpModel from './../models/SignUpModel';

const Footer2 = () => {
    const a = useContext(ModelContext)
    const handleOpenModel = () => a.setModelOpen(true);
    
    
    return (
        <>
     
        <Grid container >
            <Grid item xs={12} sx={{backgroundColor: '#111010', height: '100%'}}>
                <Container>
                    <Grid container sx={{ marginTop: '60px', marginBottom: '60px'}}>
                        <Grid item xs={3}>
                            <Typography sx={{fontFamily: "Marcellus Sans-serif", fontSize: '50px', color: '#FFFFFF', padding: '0px 0px 1px'}}>Reservation</Typography>
                            <Typography sx={{fontFamily: "Marcellus Sans-serif", fontSize: '50px', color: '#FFFFFF', padding: '0px 0px 1px'}}>Events</Typography>
                            <Box sx={{ marginTop: '70px'}}>
                                <Link href='/' sx={{ color: '#FFFFFF' }}><FacebookRoundedIcon/></Link>
                                <Link href='/' sx={{ color: '#FFFFFF', paddingLeft: '25px'}}><InstagramIcon/></Link>
                                <Link href='/' sx={{ color: '#FFFFFF', paddingLeft: '25px' }}><GoogleIcon/></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={6}/>
                        <Grid item xs={3} sx={{ mt: 3, textAlign: 'end'}}>
                            <Typography sx={{fontFamily: "Marcellus Sans-serif", color: '#FFFFFF',}}>5712 S MacDill Ave <br/> Tampa, FL 33611 USA</Typography>
                            <Typography sx={{fontFamily: "Marcellus Sans-serif", color: '#FFFFFF', mt: '30px'}}>813-473-2105</Typography>
                            <Button variant="text" sx={{ mt: 5, color: '#FFFFFF', textTransform: 'none' }} endIcon={<SouthEastIcon/>}>Get direction</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid container sx={{backgroundColor: '#f0edea', height: '100%', pb:3}}>
                <Grid item xs={12}>
                    <Container>
                        <Grid container sx={{ mt: 5, mb: 5}}>
                            <Grid item xs={4}>
                                <Typography variant='h5' sx={{ fontFamily: "Marcellus Sans-serif", color: '#111010', fontSize: '32px'}}>Newsletter</Typography>
                                <Typography sx={{ color: '#111010', fontFamily: "Montserrat Sans-serif", mt:2 }}>Interested in hearing the latest and greatest <br/> from Beccofino?</Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Link className='lastBtn' sx={{ color: '#111010', fontSize: '14px', fontFamily: "Montserrat  Sans-serif", fontWeight: '600', cursor: 'pointer'}} onClick={()=> handleOpenModel()} variant='text'><a>Sign up</a></Link>
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography variant='h5' sx={{ fontFamily: "Marcellus Sans-serif", color: '#111010', fontSize: '32px'}}>Private Events</Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Link sx={{textTransform: 'none', color: '#111010'}}>813-473-2105</Link><br/>
                                    <Link sx={{textTransform: 'none', color: '#111010'}}>info@BeccofinoTampa.com</Link> 
                                </Box>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Link sx={{ color: '#111010', fontSize: '14px', fontFamily: "Montserrat  Sans-serif", fontWeight: '600'}} variant='text'>Learn more</Link>
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography variant='h5' sx={{ fontFamily: "Marcellus Sans-serif", color: '#111010', fontSize: '32px'}}>Working Hours</Typography>
                                <Grid container sx={{ mt: 2 }}>
                                    <Grid item xs={6}>
                                        <Typography>Wednesday: <br/>6:00 PM – 9:00 PM</Typography>
                                        <Typography sx={{ mt :2 }}>Thursday: <br/>6:00 PM – 9:00 PM</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Fri to Sat <br/>6:00 PM – 10:30 PM</Typography>
                                    </Grid>
                                </Grid>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Link sx={{ color: '#111010', fontSize: '14px', fontFamily: "Montserrat  Sans-serif", fontWeight: '600'}} variant='text'>Book a Reservation</Link>
                                </Box>
                                
                            </Grid>
                        </Grid>
                    </Container>

                    <Grid Container sx={{ marginTop: '70px' }}>
                        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6} >
                                <Typography>Copyrights  2023 All Rights Reserved.</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                <Typography>Developed with 💚 by Hybreathe</Typography>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

        <SignUpModel />
        </>
    )
}

export default Footer2