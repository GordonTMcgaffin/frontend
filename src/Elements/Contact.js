import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Contact = () =>{
    const navigate = useNavigate();
    return(
        <header style ={{
            backgroundColor:'#0d181e',
            height:'100vh' 
        }}>
            <body>
            <AppBar position="static" style={{background: '#575759'}} >
                    <Toolbar color= "#FFFFFF">
                        <Button 
                            sx ={{color: '#FFFFFF',}}
                            varient = "contained"
                            onClick={() => navigate('/frontend/home')}>
                                Home
                        </Button>
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
                    </Toolbar>
                </AppBar>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="70vh"
                >
                    <Box sx={{p:4, align:'center', height:1, backgroundColor:'#0d181e'}}>
                        <Typography variant = 'h4' color = '#FFFFFF'>
                            Phone Number: 066-212-3834 <br></br>
                            Email: gordon.t.mcgaffin@gmail.com
                        </Typography>
                    </Box>
                </Box>
            </body>
        </header>
    );
};

export default Contact;