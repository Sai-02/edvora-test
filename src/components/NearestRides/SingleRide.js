import React, { useEffect, useState } from "react";
const SingleRide = ({ ride, user }) => {
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    let min = Number.MAX_VALUE;
    ride.station_path.forEach((path) => {
      min = Math.min(
        min,
        Math.abs(parseInt(path) - parseInt(user.station_code))
      );
    });
    setDistance(min);
  }, []);
  return (
    <div className="nr-single-ride">
      <div className="state-city-container">
        <p className="">{ride.state}</p>
        <p className="">{ride.city}</p>
      </div>
      <div className="nr-img-container">
        <img src={ride.map_url} alt="" />
      </div>
      <div className="nr-info">
        <p className="">
          Ride Id : <span className="white-text">{ride.id}</span>
        </p>
        <p className="">
          Origin Station :{" "}
          <span className="white-text">{ride.origin_station_code}</span>
        </p>
        <p className="">
          station_path :
          <span className="white-text">
            {JSON.stringify(ride.station_path)}
          </span>
        </p>
        <p className="">
          Date : <span className="white-text">{ride.date}</span>
        </p>
        <p className="">
          Distance : <span className="white-text">{distance}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleRide;
