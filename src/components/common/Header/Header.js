import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img style={{ width:'70px', height:'40px'}} src={'https://i.ibb.co/cwCqpM1/Logo.png'} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Service</Nav.Link>
                    <Nav.Link href="#home">Concerns</Nav.Link>
                    <Nav.Link href="#home">Event</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Link className="nav-link text-white" to="/login">
                        <Button variant="dark" id="login-btn">Login</Button>
                    </Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;