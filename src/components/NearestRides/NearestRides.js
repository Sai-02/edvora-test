import React from "react";
import SingleRide from "./SingleRide";
import "../../styles/NearestRides.css";
const NearestRides = ({ rides, user }) => {
  return (
    <div className="nearest-rides-container">
      {rides.map((ride, index) => {
        return <SingleRide key={index} ride={ride} user={user} />;
      })}
    </div>
  );
};

export default NearestRides;
