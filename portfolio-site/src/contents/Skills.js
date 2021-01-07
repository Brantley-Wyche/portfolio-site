import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


class Skills extends Component{

    constructor(props){

        super(props);

        this.state={
            'myskills':['HTML','CSS', 'Bootstrap','PHP','JavaScript','jQuery','React JS','Angular','SQL','Java','C#','WordPress']
        };
    }


    render(){

        return(
            <div className="condiv">
                <h1 className="subtopic">My Skills</h1>
                <hr className="blackHR"></hr>

                <CardColumns>
                    
                    {this.state.myskills.map((value)=>{
                        return <Card border="dark">
                                    <Card.Body>
                                    <Card.Title as="h2" style={{ textAlign: 'center' }}>{value}</Card.Title>
                                    </Card.Body>
                                </Card>
                    })}
                </CardColumns>

            </div>
        )
    }
}

export default Skills