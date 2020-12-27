import React from 'react';

const HomeDetailsList = (houseData) => {
    console.log(houseData);
    const {serviceTitle,price,thumbnailImage} = houseData.houseData;
    
    return (
        <div className="d-flex justify-content-center flex-column container">

                <div className="d-flex justify-content-center align-items-center" style={{
                    backgroundImage: "url(" + `data:image/png;base64,${thumbnailImage.img}`+ ")",
                    width: '100%',
                    height: 180,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.75'
                }}>
                    <h2 className="text-white font-weight-bold" style={{opacity: 1}}> Apartment </h2>
                </div>
                <div className="d-flex justify-content-center flex-row">
                    <div className="mr-4 mt-3" style={{width: "65%"}}>
                        <div className="">
                            <img style={{ width: '100%', height: 300 }} src={`data:image/png;base64,${thumbnailImage.img}`} alt=""/>
                            <div className="d-flex justify-content-between">
                                <img style={{ width: '25%', padding: 3 }} src={`data:image/png;base64,${thumbnailImage.img}`} alt=""/>
                                <img style={{ width: '25%', padding: 3 }} src={`data:image/png;base64,${thumbnailImage.img}`} alt=""/>
                                <img style={{ width: '25%', padding: 3 }} src={`data:image/png;base64,${thumbnailImage.img}`} alt=""/>
                                <img style={{ width: '25%', padding: 3 }} src={`data:image/png;base64,${thumbnailImage.img}`} alt=""/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">

                            <div className="font-weight-bold">
                                {serviceTitle} {/* Family Apartment Three */}
                            </div>
                            <div className="font-weight-bold"> ${price} </div>
                        </div>
                    </div>
                    <div className="mt-3" style={{width: "35%"}}>
                        <div className="bg-light p-3">
                            <form action="">
                                <input type="text" placeholder="Full Name" className="form-control mb-3"/>
                                <input type="text" placeholder="Phone No" className="form-control mb-3"/>
                                <input type="text" placeholder="Email Address" className="form-control mb-3"/>
                                <textarea name="message" id="message" cols="20" rows="10" value="Message" className="form-control mb-4">salam </textarea>
                                <button className="btn btn-secondary form-control mb-4"> Request Booking </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default HomeDetailsList;