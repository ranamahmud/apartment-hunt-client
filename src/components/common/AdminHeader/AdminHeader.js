import React, { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./AdminHeader.scss"
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from '../../Login/firebase.config';
const AdminHeader = ({ title }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log({ loggedInUser })

    const logout = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            setLoggedInUser(null)
            history.replace('/');
        }).catch(function (error) {
            // An error happened.
        });
    }
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
                    {

                        (loggedInUser && loggedInUser.email) &&
                        <>
                            <Button variant="dark" id="login-btn" onClick={logout}
                                style={{ height: "40px" }}
                            >Logout</Button>
                            <Link className="nav-link text-white" to="booking-list">
                                <Button
                                    style={{
                                        marginTop: "-7px"
                                    }}
                                    id="dash-btn" variant="dark" >Dashboard</Button>
                            </Link>
                        </>


                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminHeader;