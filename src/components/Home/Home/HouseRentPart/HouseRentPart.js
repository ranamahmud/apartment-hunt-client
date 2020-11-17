import React, { useEffect, useState } from 'react';
import HouseRentPartCard from './HouseRentPartCard';
import {  Col, Container, Row } from 'react-bootstrap';

const HouseRentPart = () => {
    const [houseRent,setHouseRent] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("https://apartment-hunt1.herokuapp.com/getAllHouses")
          .then((response) => response.json())
          .then((data) => {
            setHouseRent(data);
          }).finally(() => {
              setLoading(false)
          })
      }, []);

    return (

        <Container>
                <div>
            <Row >
                <Col sm={8} xl={5} md="8" className ='pb-5 m-auto text-center text-success '>
                    <h6>House Rent</h6>
                    <h2>  Discover the latest Rent
                        available today</h2>
                </Col>
            </Row>
                    <div>
                            {(loading === false ? 
                                (
                                    <div className = "row"> 
                                        
                                        {houseRent.map((houseData) => (
                                            <HouseRentPartCard key={houseData._id} houseData={houseData}>
                                            </HouseRentPartCard>
                                        ))}
                                    </div>
                            
                            ): (<div>
                                <h6 className = 'text-center'>Loading</h6>
                        </div>))}
                    </div>
                </div>
        </Container>      
    );
};
export default HouseRentPart;
