import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

/**
 * 
 * 
 * NOT IN USE FOR NOW, WILL UPDATE LATER IF I DECIDE TO IMPLEMENT
 * 
 * 
 */

class Contact extends Component{

    render(){

        return(
            <main className="main_content">
                <div>
                    
                        <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                        </Button>
                    
                </div>
            </main>
        )
    }
}

export default Contact