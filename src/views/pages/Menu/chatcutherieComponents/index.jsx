
import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import Cheeses from './Cheeses'
import Affetati from './Affettati'
import Seafood from './Seafood'
const Chatcutharie = () => {
    return (
        <div>
            <Grid sx={{ backgroundColor: '#f0edea'}}>
                <Container>
                    <Cheeses/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#FFFFFF'}}>
                <Container>
                    <Affetati/>
                </Container>
            </Grid>
            <Grid sx={{ backgroundColor: '#f0edea'}}>
                <Container>
                    <Seafood/>
                    <hr color='#bdb7b2'/>
                    <Typography sx={{color: '#111010', fontFamily: "Montserrat sans-serif", fontSize: '20px', fontWeight: 'bold', textAlign: 'center', pb: 5}}>Our menu is made 100% from scratch using in-house ingredients or locally sourced.</Typography>
                </Container>
            </Grid>
            
        </div>
    )
}
export default Chatcutharie