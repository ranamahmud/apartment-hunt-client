import React from 'react';

const HouseRentPartCard = (houseData) => {
    const {serviceTitle,price,thumbnailImage,location,img} = houseData.houseData;
    return (
      
        
<div className="d-flex col-md-4 col-sm-12 mt-2 mb-2">
                                <div className="card-deck">
                                    <div className="card">
                                        <img src={thumbnailImage && img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 style={{ color: "#275A53" }} className="card-title font-weight-bold">{serviceTitle} </h4>
                                            <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/PQDqSBF/placeholder.png"} alt="" />  </strong>Location</small>
                                            <div className="d-flex justify-content-between">
                                                <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/t38Zndb/bed.png"} alt="" /> </strong>Bedroom</small>
                                                <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/1GCwvKP/bathtub.png"} alt="" /> </strong>Bathroom</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                <h4 className="font-weight-bold" style={{ color: "#16322E!important" }}>${price}</h4>
                                                <button className="btn btn-success">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default HouseRentPartCard;
