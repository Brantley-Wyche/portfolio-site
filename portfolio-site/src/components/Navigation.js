import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Navigation extends Component{

    

    render(){
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand  as={Link} to="/">Brantley Wyche</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link  as={Link} to="/about">About</Nav.Link>
                    <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
                    <NavDropdown title="My Portfolio" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/skills">Skills</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/work">My Work</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;