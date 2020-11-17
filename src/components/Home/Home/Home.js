import React from 'react';
import Header from '../../common/Header/Header';
import HomeDetails from '../../HomeDetails/HomeDetails/HomeDetails';
import Footer from './Footer/Footer';
import ServiceList from './ServiceList/ServiceList';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeDetails/>
            <ServiceList/>
            <Footer/>
        </div>
    );
};

export default Home;