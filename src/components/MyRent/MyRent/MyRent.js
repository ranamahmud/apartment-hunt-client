import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminHeader from '../../common/AdminHeader/AdminHeader';
import AdminSidebar from '../../common/AdminSidebar/AdminSidebar';

const MyRent = () => {
    const [userHouses, setUserHouses] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        // need fixes
        fetch('https://apartment-hunt1.herokuapp.com/getAllHouses/')
            .then(res => res.json())
            .then(data => {
                setUserHouses(data)
            }
            )
    }, [])

    return (
        <section>
            <AdminHeader title="My Rent" />
            <div className="container-fluid row">

                <AdminSidebar />
                <div className="row">

                    <table className="table table-borderless">
                        <div id="booking-header">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">House Name</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                        </div>
                        <div>
                            <tbody>
                                {

                                    userHouses.map((house) =>

                                        <tr key={house._id}>
                                            <td style={{ width: "150px" }}>{house.serviceTitle}</td>
                                            <td style={{ width: "130px" }}>{house.price}</td>
                                            <td style={{ width: "150px" }}>View Details</td>


                                        </tr>
                                    )
                                }
                            </tbody>
                        </div>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default MyRent;