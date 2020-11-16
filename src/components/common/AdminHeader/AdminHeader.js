import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';

const AdminHeader = ({ title }) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <Image fluid src={require('../../../images/logos/logo.png').default}
                        style={{
                            width: "100px",
                            height: "54.8px"
                        }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{title}</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Sufi Ahmed</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminHeader;