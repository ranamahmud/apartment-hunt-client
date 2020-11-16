import React from 'react';
import AdminHeader from '../../common/AdminHeader/AdminHeader';
import AdminSidebar from '../../common/AdminSidebar/AdminSidebar';

const BookingList = () => {
    return (
        <div>
            <AdminHeader title="Booking List" />
            <div className="container-fluid row">

                <AdminSidebar />
            </div>
        </div>
    );
};

export default BookingList;