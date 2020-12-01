import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class About extends Component {

    render() {

        return (
        <div className="condiv">

            <h1 className="subtopic">About Me</h1>
            <hr className="blackHR"></hr>

            <Container>
                <Row>
                    <Col>
                    <Image src={require("../img/rit.jpg")}  rounded />
                    </Col>
                    <Col>
                        <h1>My name is Brantley Wyche</h1>

                        <br />

                        <p>I'm a student at the Rochester Institute of Technology who has been studying web development for almost five years. I'm always willing to learn new things and experience new situations.  I enjoy baking, video games, anime, and hanging out with friends. I'm looking to become a full-time web developer after graduation.  Thanks for checking out my website!</p>

                        <br />

                        <Button href="https://www.linkedin.com/in/brantley-wyche-8744a5172/" variant="outline-dark">Feel free to connect with me on LinkedIn!</Button>
                        
                    </Col>
                </Row>
            </Container>

            

        </div>
        )
    }
}
export default About