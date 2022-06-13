import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Contact = () =>{
    const navigate = useNavigate();
    return(
        <header>
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
                <h1>Welcome to the contacts page</h1>
            </body>
        </header>
    );
};

export default Contact;