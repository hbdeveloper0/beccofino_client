import React from 'react'
import './Content3.css'
import leftImg from '../../../../../assets/images/homePage/content3/20210331_183644-Medium.jpg'
import rightImg from '../../../../../assets/images/homePage/content3/20200314_184920-Large.jpg'
import knifeImg from '../../../../../assets/images/homePage/content3/Capture-removebg-preview.png'
import { Container, Grid, Typography } from '@mui/material'

const Content3 = () => {
    // useEffect(() => {
    //     // Function to move the image to the bottom when scrolling down
    //     function moveImageToBottom() {
    //       const img = document.querySelector('.knifeImg');
    
    //       if (img) {
    //         const windowScrollY = window.scrollY;
    //         const windowHeight = window.innerHeight;
    //         const imageHeight = img.clientHeight;
    
    //         // Calculate the position to move the image to the bottom
    //         const bottomPosition = windowScrollY + windowHeight - imageHeight;
    
    //         if (windowScrollY >= bottomPosition) {
    //           img.style.transform = `translateY(${bottomPosition}px)`;
    //         } else {
    //           img.style.transform = 'none'; // Reset position
    //         }
    //       }
    //     }
    
    //     window.addEventListener('scroll', moveImageToBottom);
    
    //     return () => {
    //       window.removeEventListener('scroll', moveImageToBottom);
    //     };
    //   }, []);
    return (
        <Grid container sx={{paddingTop: {xs:'200px',sm:"250px"}, backgroundColor:'#f0edea'}} >
            <Container>
                <Grid >
                    <Typography variant='h2' sx={{textAlign:"center", fontSize:{xs:'35px',md:"50px"}, fontFamily: 'Marecellus , sans-serif',color: '#111010',margin: 'auto'}}>Menu Items</Typography>
                </Grid>
                <Grid className='knifeImg' sx={{display:{xs:'none',sm:"flex"},justifyContent:"center",width:{xs:"100px",md:"auto"}}}>
                    <img src={knifeImg} alt='knifeImg' className='img-fluid m-auto'/>
                </Grid>
                <Grid container  sx={{mt:5}}>
                    <Grid item xs={0} sm={1} md={1} ></Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{marginTop: {xs:"0px",sm:'150px'},  pb: '80px'}}>
                   <Grid sx={{display:{xs:'block',sm:"none"}}}><img src={leftImg} alt='leftImg' className='img-fluid'/></Grid>
                        <Typography variant='h4' className='dinner-txt' sx={{pt:{xs:4,sm:0}}}>Dinner</Typography>
                        <p className='all-txt'>All of our menu items are made from scratch.. to order! Reservation is Suggested…</p>
                        <p className='all-txt'> Wednesday: <br/>
                            6:00 PM – 9:00 PM
                        </p>
                        <p className='all-txt'> Thursday: <br/>
                            6:00 PM – 9:00 PM
                        </p>
                        <p className='all-txt'> Fri to Sat: <br/>
                            6:00 PM – 10:30 PM
                        </p>
                       <Grid  sx={{display:{xs:'none',sm:"block"}}}><img src={leftImg} alt='leftImg' className='img-fluid'/></Grid>
                    </Grid>

                    <Grid xs={0} sm={2} md={2} item sx={{
                         position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '0',
                          bottom: '0',
                          left: '50%',
                          width: '1px',
                          backgroundColor: 'grey'
                        }
                      }}></Grid>
                    <Grid xs={12} sm={4} md={4} item className='right-row-set'>
                        <img src={rightImg} alt='rightImg' className='img-fluid'/>
                        <h4 className='dinner-txt pt-5'>Charcutherie</h4>
                        <p className='all-txt'>Norcino is the cold-cut master from the cities of Arezzo n Siena in Tuscany, come and taste the real deal!</p>
                    </Grid>
                </Grid>
            </Container>       
        </Grid>
    )
}

export default Content3