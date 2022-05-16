import React from "react";
import { useState, useEffect } from "react";
import SingleRide from "../NearestRides/SingleRide";
const PastRides = ({ rides, user }) => {
  const [pastRides, setPastRides] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filtered = rides.filter((ride) => {
      const date = new Date(ride.date);
      console.log(date, today);
      return today > date;
    });
    setPastRides(filtered);
  }, []);
  useEffect(() => {
    console.log(pastRides);
  }, [pastRides]);
  return (
    <div className="nearest-rides-container upcoming-rides-container">
      {pastRides.map((ride, index) => {
        return <SingleRide key={ride.id} ride={ride} user={user} />;
      })}
    </div>
  );
};

export default PastRides;
