import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {

    const isAdmin = true;
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "50vh" }}>
            <ul id="sidebar-list" className="list-unstyled">




                {


                    <div>
                        <li>
                            <Link to="/booking-list" >
                                <Image src={require('../../../images/icons/booking-list.png').default} /><span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-rent" >
                                <Image src={require('../../../images/icons/plus 1.png').default} /><span>Add House</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" >
                                <Image src={require('../../../images/icons/home.png').default} /> <span>My Rent</span>
                            </Link>
                        </li>

                    </div>
                }
            </ul>
        </div>
    );
};

export default AdminSidebar;