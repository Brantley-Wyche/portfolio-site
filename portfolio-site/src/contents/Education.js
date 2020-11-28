import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Education extends Component{

    render(){
        
        return(

            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Container>
                    <Row>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../img/rit.jpg")} />
                            <Card.Header as="h5">Bachelor of Science
                                <Card.Subtitle className="mb-2 text-muted cardspace">Rochester Institute of Technology</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    August 2017 - Present
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Col sm={2}></Col>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require("../img/shp.png")} className="education-img"/>
                            <Card.Header as="h5">High School Graduate
                                <Card.Subtitle className="mb-2 text-muted cardspace">Seton Hall Preparatory School</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    September 2013 - June 2017
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                

            </div>
        )
    }
}

export default Education