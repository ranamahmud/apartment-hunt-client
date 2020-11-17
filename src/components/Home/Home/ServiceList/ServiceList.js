import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const serviceInfo = [
    {

    }
]
const Service = () => {
    return (
        <Container id ='service'>
            <Row >
                <Col sm={8} xl={6} md="8" className ='m-auto text-center text-success '>
                    <h6>Service</h6>
                    <h2>We're an agency tailored to all 
                    clients' needs that always delivers</h2>
                </Col>
            </Row>
            <Row>
                <h2>Bismilla</h2>
            </Row>
        </Container>
        
    );
};

export default Service;