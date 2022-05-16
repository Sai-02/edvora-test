import React, { useEffect, useState } from "react";
import SingleRide from "../NearestRides/SingleRide";
import "../../styles/UpcomingRides.css"
const UpcomingRides = ({ rides }) => {
  const [upcomingRides, setUpcomingRides] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filtered = rides.filter((ride) => {
      const date = new Date(ride.date);
      console.log(date, today);
      return today < date;
    });
    setUpcomingRides(filtered);
  }, []);
  useEffect(() => {
    console.log(upcomingRides);
  }, [upcomingRides]);
  return (
    <div className="nearest-rides-container upcoming-rides-container">
      {upcomingRides.map((ride, index) => {
        return <SingleRide key={ride.id}/>;
      })}
    </div>
  );
};

export default UpcomingRides;
