import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { Image, Form, Col, Row } from 'react-bootstrap';
import AdminHeader from '../../common/AdminHeader/AdminHeader';
import AdminSidebar from '../../common/AdminSidebar/AdminSidebar';

const AddRentHouse = () => {
    const alert = useAlert()
    const [serviceInfo, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = e.target.value;
        setInfo(newServiceInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        if (file === null) {
            alert.error('You must select a image file')

        } else {
            formData.append('file', file);
            formData.append('serviceTitle', serviceInfo.serviceTitle);
            formData.append('price', serviceInfo.price);
            formData.append('email', serviceInfo.email);
            formData.append('location', serviceInfo.location);
            formData.append('noBedroom', serviceInfo.noBedroom);
            formData.append('noBathroom', serviceInfo.noBathroom);
            fetch('https://apartment-hunt1.herokuapp.com/addHouse', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        alert.success('Service Added Successfully!')
                        document.querySelector('#add-service').reset()
                    }

                })
                .catch(error => {
                    alert.error('Service Adding Failed!')
                    console.error(error)
                })

        }
        console.log({ formData });
        e.preventDefault()
    }
    return (
        <section>
            <AdminHeader title="Add Rent House" />
            <div className="container-fluid row">

                <AdminSidebar />
                <div className="col-md-10 col-sm-12 col-12 d-flex">
                    <form id="service-form" className="form-group" id="add-service" onSubmit={handleSubmit}
                        style={{
                            width: '100%',
                        }}
                    >
                        <Row>
                            <Col md={5}>  <Form.Group controlId="formBasicTitle">
                                <Form.Label >Service Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title"
                                    onBlur={handleBlur}
                                    required
                                    name="serviceTitle"
                                />
                            </Form.Group>
                                <Form.Group controlId="formBasicLocation">
                                    <Form.Label >Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Location"
                                        onBlur={handleBlur}
                                        required
                                        name="location"
                                    />
                                </Form.Group>



                                <Form.Group controlId="formBasicBedroom">
                                    <Form.Label >No of Bathroom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter No of Bathroom"
                                        onBlur={handleBlur}
                                        required
                                        name="noBathroom"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={5}>
                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label >Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Price"
                                        onBlur={handleBlur}
                                        required
                                        name="price"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicBedroom">
                                    <Form.Label >No of Bedroom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter No of Bedroom"
                                        onBlur={handleBlur}
                                        required
                                        name="noBedroom"
                                    />
                                </Form.Group>

                                <div
                                    id="upload-img-form"
                                >
                                    <div className="custom-file"
                                    >
                                        <label id="upload-btn-img" className="custom-file-label" htmlFor="customFile"
                                        ><Image src={require('../../../../src/images/icons/cloud-upload-outline.png')}
                                            style={{ width: "24px", height: "24px" }}
                                            />Upload image</label>
                                        <input type="file"
                                            onChange={handleFileChange}
                                            id="customFile"
                                            hidden
                                        />

                                    </div>
                                </div>

                                <button id="add-btn"
                                    type="submit"
                                    // onClick={handleSubmit}
                                    className="text-white"
                                >Submit </button>
                            </Col>
                        </Row>




                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddRentHouse;