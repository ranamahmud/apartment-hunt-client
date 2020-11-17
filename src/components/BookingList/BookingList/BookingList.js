import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminHeader from '../../common/AdminHeader/AdminHeader';
import AdminSidebar from '../../common/AdminSidebar/AdminSidebar';
import { useAlert } from 'react-alert'
import './BookingList.scss'
const BookingList = () => {
    const alert = useAlert()
    const [userService, setUserService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        // need fixes
        fetch('https://apartment-hunt1.herokuapp.com/getAllBookings/')
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])
    const colors = {
        'On Going': "#FFBD3E",
        'Done': "#009444",
        'Pending': "#FF4545"
    }
    const handleChange = (e) => {
        const id = e.target.id;
        const status = e.target.value;
        e.target.style.color = colors[status]
        updateOrder(id, status)
    };
    // https://apartment-hunt1.herokuapp.com/getAllBookings/def@gmail.com

    const updateOrder = (id, status) => {
        console.log({ status })
        const order = { status };
        fetch('http://localhost:5000/changeorderstatus/' + id, {
            // fetch('https://apartment-hunt1.herokuapp.com/changeorderstatus/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json()) // or res.json()
            .then(result => {
                console.log({ result })
                if (result) {
                    alert.success('Booking Status updated successfully.')
                } else {
                    alert.error('Booking Status updated failed.')
                }
            })

    }

    return (
        <section>
            <AdminHeader title="Booking List" />
            <div className="container-fluid row">

                <AdminSidebar />
                <div className="row">

                    <table className="table table-borderless">
                        <div id="booking-header">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Phone No</th>
                                    <th className="text-secondary" scope="col">Message</th>
                                    <th className="text-secondary" scope="col">Status</th>

                                </tr>
                            </thead>
                        </div>
                        <div>
                            <tbody>
                                {

                                    userService.map((service) =>

                                        <tr key={service._id}>
                                            <td style={{ width: "150px" }}>{service.fullName}</td>
                                            <td style={{ width: "130px" }}>{service.email}</td>
                                            <td style={{ width: "150px" }}>{service.phoneNumber}</td>
                                            <td style={{ width: "150px" }}>{service.message}</td>
                                            <td>{service.details}</td>
                                            <td style={{ width: "200px" }}>
                                                <select className="custom-select" id="inputGroupSelect01"
                                                    defaultValue={service.status}
                                                    style={{
                                                        color: colors[service.status]
                                                    }}
                                                    onChange={handleChange}
                                                    id={service._id}
                                                    key={service._id}
                                                >
                                                    <option value="Done" style={{ color: colors['Done'] }}>Done</option>
                                                    <option value="On Going" style={{ color: colors['On Going'] }}>On Going</option>
                                                    <option value="Pending" style={{ color: colors['Pending'] }}>Pending</option>
                                                </select>

                                            </td>
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

export default BookingList;