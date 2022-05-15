import React from "react";
import SingleRide from "./SingleRide";
import "../../styles/NearestRides.css";
const NearestRides = () => {
  return (
    <div className="nearest-rides-container">
      {[...Array(7)].map((ride, index) => {
        return <SingleRide key={index} />;
      })}
    </div>
  );
};

export default NearestRides;
