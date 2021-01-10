import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';


function SkillsAccordion(){
    const useStyles = makeStyles((theme) => ({
        heading: {
          fontSize: 24,
          fontWeight: theme.typography.fontWeightRegular,
        },
        accord: {
            backgroundColor: '#424242',
        },
        paperBG: {
            backgroundColor: '#333',
            padding: 24,
        },
        ty: {
            color: '#fff',
        }
      }));
    
      const classes = useStyles();

    return(
        <div className="condiv">

            <Typography variant="h3" gutterBottom>
                My Skills
            </Typography>
            <hr className="whiteHR"/>

            {/**Accordion is enclosed in the Paper div for aesthetic purposes */}
            <Paper className={classes.paperBG}>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >

                    {/**Web Development Accordion */}
                    <Typography className={classes.heading, classes.ty}>Web Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            HTML
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            CSS
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            Bootstrap
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            PHP
                        </Typography>
                    </AccordionDetails>
                </Accordion>  

                {/**JavaScript Related Accordion */}
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography className={classes.heading, classes.ty}>JS</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            JavaScript
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            jQuery
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            React JS
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            Angular
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/**Accordion for other languages and programs*/}
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading, classes.ty}>Other</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            SQL
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            Java
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            C#
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                    <AccordionDetails>
                        <Typography className={classes.ty}>
                            WordPress
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </div>
    );
       
}

class Skills extends Component{ 


    render(){

        return(

            //Calls the Accordion from the function and displays it as the content
            <main className="main_content">
                
                <SkillsAccordion />
                
            </main>
        )
    }
}

export default Skills