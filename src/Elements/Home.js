import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';

import Image from '../Images/default_red.jpeg';
import Background from '../Images/background2.jpg';



const Home = () => {
    return(
        <div style = {{
            backgroundImage: 'url(' + Background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
            <Grid container direct = "column">
                <Grid item xs={12}>
                        <Box sx= {{
                            display: 'flex',
                            height: '7vh',
                            backgroundColor: '#575759',
                        }} >

                        </Box>
                    </Grid> 
                <Grid item xs={0.5}>
                    <Box sx= {{
                        height: '100vh',
                        backgroundColor: '#575759'
                    }}
                    >
    
                    </Box>
                </Grid>

                <Grid item xs={11.5}>
                    
                    <Grid item xs={6} >
                        <Typography variant = 'h1'  >
                            <b>Gordon Mcgaffin</b>
                        </Typography>
                    </Grid>   
                    <Grid item xs = {6}  >
                        <img src = {Image} width='22%' />
                    </Grid>
                
                    <Grid item xs={12}>
                        <br></br>
                        <Typography variant = 'h3' align = 'left' padding='5px' >
                            <b>About Me</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'body1' align = 'left' padding = '5px' >
                            [To be done]
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}

export default Home;