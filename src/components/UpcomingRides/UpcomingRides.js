import React from "react";
import SingleRide from "../NearestRides/SingleRide";
const UpcomingRides = () => {
  return (
    <div className="nearest-rides-container">
      {[...Array(7)].map((ride, index) => {
        return <SingleRide key={index} />;
      })}
    </div>
  );
};

export default UpcomingRides;
