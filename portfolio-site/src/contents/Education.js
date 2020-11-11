import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{

    render(){
        
        return(

            <div className="condiv">

                <h1 className="subtopic">My Education</h1>

                <Widecard title="Bachelor of Science" where="Rochester Institute of Technology" from="August 2017" to="Present"/>

                <Widecard title="Graduate" where="Seton Hall Preparatory School" from="September 2013" to="June 2017"/>

            </div>
        )
    }
}

export default Education