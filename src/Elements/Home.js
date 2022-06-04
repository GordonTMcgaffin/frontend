import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from 'react-router-dom';
import {
	useState,
	useEffect
} from 'react';

import Image from '../Images/default_red.jpeg';
import Background from '../Images/background2.jpg';



const Home = () => {
    const navigate = useNavigate();
    return(
        <div style = {{
            backgroundImage: 'url(' + Background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
            <AppBar position="static" style={{background: '#575759'}}>
                <Toolbar color= "#FFFFFF">
                    <Button 
                        sx ={{color: '#FFFFFF',}}
                        varient = "contained"
                        onClick={() => navigate('/frontend/projects')}>
                            Projects
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid container direct = "column">
                <Grid item xs={0.5}>

                </Grid>

                <Grid item xs={11.5}>
                    
                    <Grid item xs={6} >
                        <Typography variant = 'h1' color = '#FFFFFF' >
                            <b>Gordon Mcgaffin</b>
                        </Typography>
                    </Grid>   
                    <Grid item xs = {6}  >
                        <img src = {Image} width='22%' />
                    </Grid>
                
                    <Grid item xs={8}>
                        <br></br>
                        <Typography variant = 'h3' align = 'left' padding='5px' color = '#FFFFFF'>
                            <b>About Me</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'body1' align = 'left' padding = '5px' color = '#FFFFFF'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet arcu erat. Nulla facilisi. Nullam vulputate, nisl porttitor feugiat luctus, nisi diam pharetra massa, et lobortis nulla lectus et magna. Donec tempus purus eget mattis egestas. Proin volutpat luctus ligula, ut tincidunt sapien cursus et. Praesent eleifend eros ac dui lobortis vulputate. Fusce pulvinar eros in magna laoreet iaculis. Donec tristique sapien vitae ultricies egestas. Sed egestas elit in ipsum congue, tincidunt rutrum arcu porttitor. Phasellus posuere tincidunt urna, vel egestas metus mattis in.
                            Duis sed orci vulputate leo dictum pharetra. Etiam efficitur quam diam, sed lobortis odio dignissim sed. Maecenas orci sem, molestie id sapien ut, scelerisque tempus velit. Duis quis sem placerat, blandit ipsum ac, tincidunt ante. Vestibulum laoreet est ut elementum consectetur. Pellentesque feugiat rhoncus hendrerit. Mauris placerat molestie nunc ut lobortis.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id neque diam. In eu turpis turpis. Pellentesque ullamcorper laoreet efficitur. Curabitur euismod blandit laoreet. Morbi rutrum sodales tortor a mollis. Pellentesque sed interdum nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac ultrices tortor, a suscipit nibh. Fusce at justo et diam ornare consectetur ac sed ipsum. Sed feugiat pulvinar rutrum. Vestibulum eu nisi commodo, commodo tortor eu, laoreet leo. Suspendisse eget nibh leo. Nulla egestas semper porttitor. Etiam elit turpis, facilisis at nisl in, tristique pulvinar felis.
                            Fusce vitae mollis ex. Nunc mattis urna nec lorem cursus gravida. Aenean pharetra erat non odio dignissim convallis. Integer vel velit odio. In porttitor rhoncus ligula, eu molestie arcu aliquet eget. Integer mollis varius rhoncus. Suspendisse nec lorem nec nisl vehicula dapibus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam condimentum gravida velit ut facilisis. Nunc cursus odio in tortor elementum, sed porttitor lacus condimentum. Donec quis dapibus lacus. Integer malesuada rhoncus eros, a tristique nisi egestas sit amet. Pellentesque consectetur placerat sapien, a viverra nisi consectetur quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel felis quis ligula rutrum semper in sit amet dolor. Integer non convallis nunc. Donec dapibus libero posuere, faucibus quam id, ultrices ligula.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}

export default Home;