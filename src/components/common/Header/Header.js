import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Link className="nav-link" to="/">
                <Image fluid src={require('../../../images/logos/logo.png').default}
                    style={{
                        width: "100px",
                        height: "54.8px"
                    }}
                />
            </Link>
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