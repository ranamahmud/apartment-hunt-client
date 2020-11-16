import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AdminHeader.css"
const AdminHeader = ({ title }) => {
    return (
        <div>
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
                    <Nav className="mr-auto">
                        <Nav.Link href="#" id="admin-title">{title}</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" id="admin-name">Sufi Ahmed</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminHeader;