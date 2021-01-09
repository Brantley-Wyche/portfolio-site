import React,  { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Work extends Component{

    render(){
        return(
            <main className="main_content">
                <div className="condiv">

                    <Typography variant="h3" gutterBottom>
                        Other Projects coming soon!
                    </Typography>
                    <Button variant="contained" color="primary" href="https://github.com/Brantley-Wyche">Check out my github</Button>
                    <a href="https://github.com/Brantley-Wyche" target="_blank"></a>

                </div>
            </main>
            
        )
    }
}

export default Work;