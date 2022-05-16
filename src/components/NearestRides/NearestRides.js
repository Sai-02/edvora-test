import React from "react";
import SingleRide from "./SingleRide";
import "../../styles/NearestRides.css";
const NearestRides = ({rides}) => {
  return (
    <div className="nearest-rides-container">
      {rides.map((ride, index) => {
        return <SingleRide key={index} ride={ride} />;
      })}
    </div>
  );
};

export default NearestRides;
