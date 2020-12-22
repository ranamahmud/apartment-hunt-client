import React from 'react';
import { Link } from 'react-router-dom';

const HouseRentPartCard = (houseData) => {
    const {serviceTitle,price,thumbnailImage,location,_id} = houseData.houseData;
    return (

<div className="d-flex col-md-4 col-sm-12 mt-2 mb-2 ">
                                <div className="card-deck">
                                    <div className="card">
                                        <img src={`data:image/png;base64,${thumbnailImage.img}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 style={{ color: "#275A53" }} className="card-title font-weight-bold">{serviceTitle.length> 10 ? serviceTitle.substring(0, 10) + "...": serviceTitle} </h4>
                                            <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/PQDqSBF/placeholder.png"} alt="" />  </strong>{location.length > 30 ? location.substring(0, 30) + "..." : location}</small>
                                            <div className="d-flex justify-content-between">
                                                <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/t38Zndb/bed.png"} alt="" /> </strong>Bedroom</small>
                                                <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/1GCwvKP/bathtub.png"} alt="" /> </strong>Bathroom</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                <h4 className="font-weight-bold" style={{ color: "#16322E!important" }}> ${price}</h4>
                                                <Link to={`/home-details/${_id}`}>
                                                <button  className="btn btn-success">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default HouseRentPartCard;
