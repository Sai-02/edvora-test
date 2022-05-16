import React, { useEffect, useState } from "react";
import SingleRide from "../NearestRides/SingleRide";
import "../../styles/UpcomingRides.css";
const UpcomingRides = ({ rides, user }) => {
  const [upcomingRides, setUpcomingRides] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filtered = rides.filter((ride) => {
      const date = new Date(ride.date);
      return today < date;
    });
    setUpcomingRides(filtered);
  }, []);
  return (
    <div className="nearest-rides-container upcoming-rides-container">
      {upcomingRides.map((ride, index) => {
        return <SingleRide key={ride.id} ride={ride} />;
      })}
    </div>
  );
};

export default UpcomingRides;
