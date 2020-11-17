import React from 'react';

const FindPlacePart = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{
                   backgroundImage: "url(" + "https://i.ibb.co/kJBjMtZ/test-home-details.jpg" + ")",
                   width: '100%',
                   height: 180,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat',
                   opacity: '0.75'
               }}>
                   <div style={{ display: "inline-block", overflow: "hidden" }} className="input-content m-auto">
                    <h1 className="text-light">FIND YOUR HOUSE RENT</h1>
                    <div className="d-flex mt-3">
                        <input className="form-control w-75" type="text" placeholder="Search..." />
                        <button className="btn btn-dark ml-3">Find Now</button>
                    </div>
                </div>
               </div>
        </div>
    );
};

export default FindPlacePart;