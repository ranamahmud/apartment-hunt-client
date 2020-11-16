import React from 'react';
import AdminHeader from '../../common/AdminHeader/AdminHeader';
import AdminSidebar from '../../common/AdminSidebar/AdminSidebar';

const MyRent = () => {
    return (
        <section>
            <AdminHeader title="My Rent" />
            <div className="container-fluid row">

                <AdminSidebar />
            </div>
        </section>
    );
};

export default MyRent;