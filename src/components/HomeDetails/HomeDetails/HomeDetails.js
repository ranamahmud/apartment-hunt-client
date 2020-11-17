import React, { useEffect, useState } from 'react';
import HomeDetailsList from './HomeDetailsList';

const HomeDetails = () => {

    const [houseRent,setHouseRent] = useState([]);
    console.log(houseRent);

    useEffect(() => {
        fetch("https://apartment-hunt1.herokuapp.com/getAllHouses")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setHouseRent(data);
          });
      }, []);
    
    return (
        <>
        {houseRent.map((houseData) => (
          <HomeDetailsList key={houseData._id} houseData={houseData}>
            
          </HomeDetailsList>
        ))}
           

        </>
    );
};

export default HomeDetails;