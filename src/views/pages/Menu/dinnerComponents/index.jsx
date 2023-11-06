import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import Appetizers from './Appetizers'
import Soups from './Soups'
import Homemades from './Homemades'
import Mains from './Mains'
import Sides from './Sides'
import Desserts from './Desserts'


const Dinner = () => {
    return (
        <div>
            <Grid sx={{ backgroundColor: '#f0edea'}}>
                <Container>
                    <Appetizers/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#FFFFFF'}}>
                <Container>
                    <Soups/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#f0edea'}}>
                <Container>
                    <Homemades/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#FFFFFF'}}>
                <Container>
                    <Mains/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#f0edea'}}>
                <Container>
                    <Sides/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#FFFFFF'}}>
                <Container>
                    <Desserts/>
                    <hr color='#bdb7b2'/>
                    <Typography sx={{color: '#111010', fontFamily: "Montserrat sans-serif", fontSize: '20px', fontWeight: 'bold', textAlign: 'center', pb: 5}}>Our menu is made 100% from scratch using in-house ingredients or locally sourced.</Typography>
                </Container>
            </Grid>
           
        </div>
    )
}

export default Dinner