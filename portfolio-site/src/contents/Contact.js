import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Contact extends Component{
    render(){

        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <hr className="blackHR"></hr>

                <p style={{ textAlign: 'center' }}>Please fill out the form below if you want to get in touch with me and I will get back to you as soon as I can!</p>

                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your Name" />  
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Your Email Address" />
                    </Form.Group>                  
                    <Form.Group>
                        <Form.Control as="textarea" rows={3} placeholder="Your Message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Send Message
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Contact