import ProjectBackground from '../Images/projects-background_fade_grey.jpg';
import Traversal from '../Images/Traversal.png';
import Warrior_Game from '../Images/Warrior_Game.png';

import SD_NR from '../Images/SD_NR.png';
import SD_ED from '../Images/SD_ED.png';
import SD_SD from '../Images/SD_SD.png';
import Maties_Mingle from '../Images/Maties_Mingle.png';
import Job_Bytes from '../Images/Job_Bytes.png';
import Othello from '../Images/Othello.png';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
                            Home
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
            <Box sx = {{
                padding: '2rem',
                }}>

                <Grid container direct = "column" spacing={3}>
                    <Grid item xs={12}>
                        
                            <Typography variant = 'h2' color = '#FFFFFF' >
                                <b>Welcome to the projects page</b>
                            </Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <Box height = '20px'></Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant = 'h3' color = '#FFFFFF' >
                            <b>Traversal</b>
                        </Typography>
                        <Typography variant = 'p' color = '#FFFFFF' >
                            Traversal was the first project that I did in university in my first year. The game was created using Java as the coding language and was used as an introduction to coding. The main point of the game is to move a player piece through a grid of tiles while avoiding obstacles and collecting the necessary items to complete the board. For this project we were not allowed to use objects, which created challenges for the game such as when board pieces stack on top of each other. This project taught me the basics of programming.
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
                            Warrior Game was my second semester project in first year. 
                            This project was coded in Java and was used as an introduction to object orientated programming. 
                            The game contains a grid, warriors of different elements are placed on the board and battle each other. 
                            Each elemental warrior has their own special attacks. Along with the player pieces there were water pieces that would flow across the board as the game played out.
                            This project taught me object orientated programming.
                        </Typography>
                    </Grid>   

                    <Grid item xs={12}>
                        <br></br>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography variant = 'h3' color = '#FFFFFF' >
                            <b>Spot Detection</b>
                        </Typography>
                        <Typography variant = 'p' color = '#FFFFFF' >
                        The spot detection project was my project for my first semester of my second year. This project was coded in Java and was used to teach us about cellular automata. The project would take in a picture of a cheetah (or any image), this image would then be converted to grey scale and noise reduction would be applied to the image. Edges would be detected on the image, which was then followed by the spot detection using masks to check if an area of the image contained a spot. The program would return an image with all the spots along with the amount of spots.  
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageList  >
                            {itemData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img src={item.img} alt={item.title} loading="lazy"/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                  
                    <Grid item xs={12}>
                        <br></br>
                    </Grid>

                    <Grid item xs = {4}>
                    <Box sx = {{p:"10px"}}>
                        <img align = "center" src = {Maties_Mingle} width = "70%" />
                    </Box>
                    <Box sx = {{p:"10px"}}>
                        <img align = "center" src = {Job_Bytes} width="70%" />
                    </Box>
                    </Grid>

                    <Grid item xs = {8}>
                        <Typography variant = 'h3' color = '#FFFFFF' >
                            <b>Web Design</b>
                        </Typography>
                        <Typography variant = 'p' color = '#FFFFFF' >
                            For the first semester of my second year we learnt web design. The web design module required two group projects. 
                            For the first project we were required to choose a web stack from a limited selection of frameworks and languages. 
                            My team decided to use flask with React and mysql as our web stack. 
                            The first website was a job application website where companies could create contracts and develepors could accept them. 
                            For this first project I worked on the frontend (react).
                            <br></br>
                            <br></br>
                            For the second project we were allowed to select a web stack from a wider range of languages and frameworks. 
                            My team decided to use React with django and mongodb as our web stack for this project.
                            The aim of the second project was to make a social media platform where users could create friends and groups. 
                            The user could make posts that either contained a video or a text.
                            For this second project I worked on the backend (django and mongodb), while helping with some frontend tasks.
                            <br></br>
                            <br></br>
                            This project taught me everything I know about web design and has allowed me to create this website with react.
                        </Typography>
                    </Grid>

                    <Grid item xs = {8}>
                        <Typography variant = 'h3' color = '#FFFFFF' >
                            <b>Othello</b>
                        </Typography>
                        <Typography variant = 'p' color = '#FFFFFF' >
                            Othello was a project that I complete in my first semester of my second year. 
                            For the project we had to create a player that could use a minimax algorithm with alpha beta pruning that could recursively play the game until it found what it thought would be the best move, then it would play this move.
                            This project was used to teach us about Concurrency as each possible move that could be played was divided between multiple processors so that each processor could calculate the best move from their set of possible moves. 
                            This project was coded in C and taught me about concurrency and using search trees more effectively.
                        </Typography>
                    </Grid>
                    <Grid item xs = {4}>
                        <img align= 'center' src = {Othello} width='65%' />
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}

const itemData = [
    {
        img: SD_NR,
        title: 'Noise Reduction',
    },
    {
        img: SD_ED,
        title: 'Edge Detection',
    },
    {
        img: SD_SD,
        title: 'Spot Detection',
    },
];

export default Projects;