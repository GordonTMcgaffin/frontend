import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import Stellenbosch from '../Images/Stellenbosch.jpg'
import Ridgeway from '../Images/Ridgeway.jpg'

const About = () =>{
    const navigate = useNavigate();
    return(
        <header style ={{
            backgroundColor:'#0d181e',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            
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
                            onClick={() => navigate('/frontend/contact')}>
                                Contact Me 
                        </Button>
                    </Toolbar>
                </AppBar>
            <Grid container spacing = {2} sx={{p:5}}>

                <Grid item xs = {4}>
                    <Typography variant = 'h3' align="left" color = '#FFFFFF' sx={{p:1}} >
                        Who Am I
                    </Typography>
                </Grid>
                <Grid xs = {8}>
                    <Typography variant = 'body1' align="left" color = '#FFFFFF' sx={{p:1}} >
                        I was born in Tzaneen, Limpopo and grew up in the small town of Louis Trichardt. I grew up on a farm and spent most of my time outside exploring, swimming, climbing trees, etc. One day my mother brought home a ps2 which begam my life long love for video games. Since i started playing games Ive had an itch at the back of my head that wanted to know how to make them. I tried to learn how games worked but never fully understood, until we started coding in grade 11 in my computer science class.
                        I fell in love with coding from the moment my first Hello world printed out in the console from a program I wrote. So, because my parents bought my sister and myself a ps 2 when i was around 9 or 10 years old, I am now completeig a computer science degree. My love for programming has extended beyond game design, I now have a keen intrest in web design, security, problem solving, server systems, ....  
                        My hobbies include:<br></br>
                        - Swimming <br></br>
                        - Chess - Chess captain in final year of high school <br></br>
                        - Dungeons and Dragons <br></br>
                        - Video Games <br></br>
                        - Running <br></br>
                        - Wood working <br></br>
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                <Typography variant = 'h3' align="left" color = '#FFFFFF' sx={{p:1}} >
                        Education
                    </Typography>
                    
                    
                </Grid>
                <Grid item xs={8}>
                    <Typography variant = 'body1' align = "left" color = '#FFFFFF' sx={{p:1}}>
                        Primary school: Ridgeway Independent (Grade R - 7) <br></br>
                    </Typography>
                    <Box sx = {{p:"20px"}}>
                        <img align = "left" src = {Ridgeway} width="10%" />
                    </Box>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Typography variant = 'body1' align = "left" color = '#FFFFFF'  sx={{p:1}}>
                        High school: Ridgeway College (Grade 8 - 12). <br></br> Here I become prefect in my matric year and completed my AS-level certificate with the following subjects:<br></br>
                        - Computer Science <br></br>
                        - English <br></br>
                        - Afrikaans <br></br>
                        - Physics <br></br>
                        - Mathematics<br></br>
                    </Typography>
                    <Box sx = {{p:"20px"}}>
                        <img align = "left" src = {Stellenbosch} width="10%" />
                    </Box>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Typography variant = 'body1' align = "left" color = '#FFFFFF'  sx={{p:1}}>
                        University: Stellenbosch University (2020 - Now). <br></br> Here I am currently completing a Computer Science degree where we have worked on multiple projects (Which can be found in the projects section). I have learnt the following coding languages:<br></br>
                        - Java <br></br>
                        - Javascript <br></br>
                        - Python <br></br>
                        - C <br></br>

                    </Typography>
                </Grid>
                <Grid item xs = {4}>
                    <Typography variant = 'h3' align = "left" color = '#FFFFFF' sx={{p:1}}>
                        Hobbies
                    </Typography>

                </Grid>
                <Grid item xs = {8}>
                <Typography variant = 'body1' align="left" color = '#FFFFFF' sx={{p:1}} >My hobbies include:<br></br>
                        - Swimming <br></br>
                        - Chess - Chess captain in final year of high school <br></br>
                        - Dungeons and Dragons <br></br>
                        - Video Games <br></br>
                        - Running <br></br>
                        - Wood working <br></br>
                    </Typography>
                </Grid>
               
                
                
            </Grid>
            </body>
        </header>
    );
};

export default About;