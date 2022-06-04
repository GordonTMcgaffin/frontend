import ProjectBackground from '../Images/projects-background.jpg'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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
                    <Grid container direct = "column">
                        <Grid item xs={12}>
                            <Typography variant = 'h1' color = '#FFFFFF' >
                                    <b>Welcome to the projects page</b>
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant = 'h3' color = '#FFFFFF' >
                                    <b>[Projects will go here]</b>
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color= "success" varient = "contained" onClick={() => navigate('/frontend/')}>Back</Button>
                        </Grid>
                    </Grid>
            </div>
    )
}

export default Projects;