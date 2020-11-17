import React, { useEffect, useState } from 'react';
import HomeDetailsList from './HomeDetailsList';

const HomeDetails = () => {

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
        <>
        {(loading === false ? (<div>
            {houseRent.map((houseData) => (
          <HomeDetailsList key={houseData._id} houseData={houseData}>
          </HomeDetailsList>
        ))}
        </div>): (<div>
          <h6 className = 'text-center'>Loading</h6>
        </div>))}
        </>
    );
};

export default HomeDetails;