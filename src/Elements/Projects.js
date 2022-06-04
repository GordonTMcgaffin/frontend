import ProjectBackground from '../Images/projects-background_fade.jpg'
import Traversal from '../Images/Traversal.png'
import Warrior_Game from '../Images/Warrior_Game.png'
import SD_GS from '../Images/SD_GS.png'
import SD_NR from '../Images/SD_NR.png'
import SD_ED from '../Images/SD_ED.png'
import SD_SD from '../Images/SD_SD.png'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Projects = () => {

    const navigate = useNavigate();
    return (
            <div style = {{
                backgroundImage: 'url(' + ProjectBackground + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                }}>

                <AppBar position="static" style={{background: '#575759'}}>
                    <Toolbar color= "#FFFFFF">
                        <Button 
                            sx ={{color: '#FFFFFF',}}
                            varient = "contained"
                            onClick={() => navigate('/frontend/')}>
                                Back
                        </Button>
                    </Toolbar>
                </AppBar>

                    <Grid container direct = "column">
                        <Grid item xs={12}>
                            <Typography variant = 'h1' color = '#FFFFFF' >
                                    <b>Welcome to the projects page</b>
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant = 'h3' color = '#FFFFFF' >
                                <b>Traversal</b>
                            </Typography>
                            <Typography variant = 'p' color = '#FFFFFF' >
                                [ToDo] (Copilot generated) Traversal is a game that I made for my CS class. It is a simple game where you can move around a grid and collect coins. The goal is to get to the end of the grid and collect the most coins. The game is designed to be played on a single screen and is designed to be played on a mobile device. The game is currently in development and is not yet playable.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img align= 'left' src = {Traversal} width='50%' />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <img align= 'right' src = {Warrior_Game} width='50%' />
                        </Grid> 

                        <Grid item xs={8}>
                            <Typography variant = 'h3' color = '#FFFFFF' >
                                <b>Warrior Game</b>
                            </Typography>
                            <Typography variant = 'p' color = '#FFFFFF' >
                                [ToDo] (Copilot generated) Warrior Game is a game that I created for the purpose of learning how to use the canvas element. The game is a simple game where the player can move around a grid and shoot enemies. The game is made with HTML, CSS, and Javascript. The game is currently in development.
                            </Typography>
                        </Grid>   

                        <Grid item xs={12}>
                            <br></br>
                        </Grid>

                        <Grid item xs={1}>
                            <br></br>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant = 'h3' color = '#FFFFFF' >
                                <b>Spot Detection</b>
                            </Typography>
                            <Typography variant = 'p' color = '#FFFFFF' >
                                [ToDo] (Copilot generated) An application that detects the presence of a specific object in a video stream. The application is designed to be used with a webcam. The application is currently in development.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <br></br>
                        </Grid>
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>
                        <Grid item xs={4}>
                            <img align= 'center' src = {SD_NR} width='65%' />
                        </Grid>

                        <Grid item xs={4}>
                            <img align= 'center' src = {SD_ED} width='65%' />
                        </Grid>

                        <Grid item xs={4}>
                            <img align= 'center' src = {SD_SD} width='65%' />
                        </Grid>
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>
                        <Grid item xs={12}>
                            <br></br>
                        </Grid>

                    </Grid>
            </div>
    )
}

export default Projects;