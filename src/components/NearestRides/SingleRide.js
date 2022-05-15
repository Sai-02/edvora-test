import React from "react";
import mapImg from "../../images/mapImg.svg";
const SingleRide = () => {
  return (
    <div className="nr-single-ride">
      <div className="state-city-container">
        <p className="">State </p>
        <p className="">city</p>
      </div>
      <div className="nr-img-container">
        <img src={mapImg} alt="" />
      </div>
      <div className="nr-info">
        <p className="">
          Ride Id : <span className="white-text">002</span>
        </p>
        <p className="">
          Origin Station : <span className="white-text">20</span>
        </p>
        <p className="">
          station_path :
          <span className="white-text">
            [20, 39, 40, 42, 54, 63, 72, 88, 98]
          </span>
        </p>
        <p className="">
          Date : <span className="white-text">15th Feb 2022 16:33</span>
        </p>
        <p className="">
          Distance : <span className="white-text">0</span>
        </p>
      </div>
    </div>
  );
};

export default SingleRide;
