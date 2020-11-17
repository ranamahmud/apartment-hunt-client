import React from 'react';

const HouseRentPart = () => {
    return (
        <div className="col-md-4 col-sm-12 mt-2 mb-2">
            <div className="card-deck">
                <div className="card">
                    <img src={"https://i.ibb.co/YbmXsFW/service-1.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 style={{ color: "#275A53" }} className="card-title font-weight-bold">Three Rooms </h4>
                        <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/YbmXsFW/service-1.png"} alt="" />  </strong></small>
                        <div className="d-flex justify-content-between">
                            <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/YbmXsFW/service-1.png"} alt="" /> </strong></small>
                            <small className="card-text text-muted"><strong><img height="20px" src={"https://i.ibb.co/YbmXsFW/service-1.png"} alt="" /> </strong></small>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <h4 className="font-weight-bold" style={{ color: "#16322E!important" }}>$234</h4>
                            <button className="btn button">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentPart;