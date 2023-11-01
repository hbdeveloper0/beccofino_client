import React from 'react'
import { Grid, Container } from '@mui/material'
import Cheeses from './Cheeses'
import Affetati from './Affettati'


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
            
            
        </div>
    )
}

export default Chatcutharie