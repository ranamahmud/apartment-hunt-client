import React from 'react';

const HomeDetailsList = (houseData) => {
    
    return (
        <div className="d-flex justify-content-center flex-column container">

               <div className="d-flex justify-content-center align-items-center" style={{
                   backgroundImage: "url(" + "https://i.ibb.co/G22M5pT/te.png" + ")",
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
                           <img style={{ width: '100%', height: 300 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                           <div className="d-flex justify-content-between">
                               <img style={{ width: '25%', padding: 3 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                               <img style={{ width: '25%', padding: 3 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                               <img style={{ width: '25%', padding: 3 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                               <img style={{ width: '25%', padding: 3 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                           </div>
                       </div>
                       <div className="d-flex justify-content-between">

                           <div className="font-weight-bold">
                              {houseData.serviceTitle} {/* Family Apartment Three */}
                           </div>
                           <div className="font-weight-bold"> $256 </div>
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