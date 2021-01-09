import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';


/**
 * 
 * UNCOMMENT THIS CODE ONCE I FIGURE OUT WHAT TO DO WITH THE IMAGE
 * 
 */

/*
function AboutImage(){
    const useStyles = makeStyles((theme) => ({
        image: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#212121',
        }
    }));

    const classes = useStyles();

    return(
        <Paper elevation={0} className={classes.image}>
            <img src={require("../img/Brantley-20.jpg")} className="aboutpic"/>
        </Paper>
    );
}*/

class About extends Component {

    render() {

        return (
            
            //Grid for the content. I will add the image back once I figure out how to display it correctly
            <main className="main_content">
                <div className="condiv">

                    <Typography variant="h3" gutterBottom>
                        About Me
                    </Typography>
                    <hr className="whiteHR"/>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            
                            <Typography variant="h4" gutterBottom>
                                Hello, My name's Brantley Wyche!
                            </Typography>

                            <br />

                            <Typography variant="body1" gutterBottom>
                                I'm currently a student at the Rochester Institute of Technology and I'm looking to become a full-time web developer after I graduate.  My hobbies include: baking, playing video games, watching anime, and hanging out with friends. Thanks for checking out my website!
                            </Typography>

                            <br />

                            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/brantley-wyche-8744a5172/">Connect with me on LinkedIn</Button>
                        </Grid>
                        {/*<Grid item xs={12} xl={6}>
                            <AboutImage />
                        </Grid>*/}
                    </Grid>

                </div>
            </main>
        )
    }
}
export default About