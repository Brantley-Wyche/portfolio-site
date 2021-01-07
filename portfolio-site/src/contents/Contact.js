import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Contact extends Component{

    render(){

        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <hr className="blackHR"></hr>

                <Container>
                    <Row>
                        <Col>
                            <p style={{ textAlign: 'center' }}>Please fill out the form below if you want to get in touch with me and I will get back to you as soon as I can!</p>

                            <Form>
                                <Form.Group>
                                    <Form.Control ref="name" type="text" placeholder="Your Name" />  
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control ref="email" type="email" placeholder="Your Email Address" />
                                </Form.Group>                  
                                <Form.Group>
                                    <Form.Control ref="message" as="textarea" rows={3} placeholder="Your Message"/>
                                </Form.Group>
                                <Button variant="dark" type="submit" block>
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                
            </div>
        )
    }
}

export default Contact