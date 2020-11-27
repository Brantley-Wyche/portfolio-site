import React, { Component } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

class Contact extends Component{
    render(){

        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>

                <h3><MdEmail />   :   bxw5869@rit.edu</h3>

                 <h3><FaLinkedin /><a href="https://www.linkedin.com/in/brantley-wyche-8744a5172/" target="_blank">   :   LinkedIn</a></h3>
            </div>
        )
    }
}

export default Contact