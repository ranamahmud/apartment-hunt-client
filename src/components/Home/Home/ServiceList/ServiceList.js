import React from 'react';
import { Card, Col, Container, Row,CardDeck } from 'react-bootstrap';

const Service = () => {
    return (
        <Container id ='service'>
            <Row >
                <Col sm={8} xl={6} md="8" className ='pb-5 m-auto text-center text-success '>
                    <h6>Service</h6>
                    <h2>  We're an agency tailored to all 
                        clients' needs that always delivers</h2>
                </Col>
            </Row>
            <Row>
                
                <CardDeck   className="text-center ">
                    <Card >
                        <div className ='d-flex justify-content-center'>
                            <Card.Img  style={{width:'155px',height:'155px'}} variant="top" src={"https://i.ibb.co/YbmXsFW/service-1.png"} />
                        </div>
                        <Card.Body>
                            <Card.Title>Wide Range of Properties</Card.Title>
                            <Card.Text>
                                With a robust selection of popular
                                properties on hand, as well as 
                                leading properties from experts.
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                    <div className ='d-flex justify-content-center'>
                        <Card.Img style={{width:'155px',height:'155px'}} variant="top" src={"https://i.ibb.co/85bwbCT/service-2.png"}/>
                    </div>
                        <Card.Body>
                            <Card.Title>Financing Made Easy</Card.Title>
                            <Card.Text>
                                Our stress-free finance
                                department that can find financial 
                                solutions to save you money.
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <div className ='d-flex justify-content-center'>
                            <Card.Img style={{width:'155px',height:'155px'}} src={"https://i.ibb.co/rFVqrV9/service-3.png"} />
                        </div>
                        <Card.Body>
                            <Card.Title>Trusted by Thousands</Card.Title>
                            <Card.Text>
                                10 new offers every day. 350 
                                offers on site, trusted by a community 
                                of thousands of users.
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </CardDeck>

            </Row>
        </Container>
        
    );
};

export default Service;