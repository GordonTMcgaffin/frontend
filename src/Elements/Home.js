import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { useNavigate } from 'react-router-dom';
import {
	useState,
	useEffect
} from 'react';

import Image from '../Images/Happy-Cat.jpg';
import Background from '../Images/background2.jpg';



const Home = () => {
    const navigate = useNavigate();
    return(
       <header style={{
            backgroundImage: 'url(' + Background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'100vh'
       }}
        >
            <body>
                <AppBar position="static" style={{background: '#575759'}} >
                    <Toolbar color= "#FFFFFF">
                        <Button 
                            sx ={{color: '#FFFFFF',}}
                            varient = "contained"
                            onClick={() => navigate('/frontend/projects')}>
                                Projects
                        </Button>
                        <Button 
                            sx ={{color: '#FFFFFF',}}
                            varient = "contained"
                            onClick={() => navigate('/frontend/about')}>
                                About Me 
                        </Button>
                        <Button 
                            sx ={{color: '#FFFFFF',}}
                            varient = "contained"
                            onClick={() => navigate('/frontend/contact')}>
                                Contact Me 
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{p:4, align:'center'}}>
                    <Box sx={{p:7, height:1}}></Box>
                    <Grid container direct = "column" spacing={3} alignItems="center" justifyContent="center" >
                        <Grid item xs={0.5}>

                        </Grid>

                        <Grid item xs={6.5 } alignItems = "center">
                                    <Typography variant = 'h2' color = '#FFFFFF' >
                                        <b>Hi, I am Gordon Mcgaffin, <br></br>
                                            a computer science student.</b>
                                    </Typography>
                                    <Typography variant = 'h4' color = '#FFFFFF' >
                                        <b>(...and i am looking for a job)</b>
                                    </Typography> 
                        </Grid>
                        <Grid item xs = {5} alignItems = "center" >
                            
                        </Grid>
                    </Grid>
                </Box>
            </body>
        </header>
        
    );
}

export default Home;