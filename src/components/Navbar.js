import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import filterIcon from "../images/Vectorfilter.svg";
const Navbar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className={showFilter ? "filterBox" : "none"}>
        <div className="filterStyle">Filters</div>
        <select className="stateFilter">
          <option>State</option>
          {/* {states.forEach((e) => {
            return <option>{e}</option>;
          })} */}
        </select>

        <select className="cityFilter">
          <option>City</option>
          {/* {city.forEach((e) => {
            return <option>{e}</option>;
          })} */}
        </select>
      </div>
      <ul className="nav-list">
        <li
          className={`nav-li ${
            location.pathname === "/nearest-rides" ? "selected-nav-li" : ""
          }`}
        >
          <Link to="nearest-rides">Nearest Rides</Link>
        </li>
        <li
          className={`nav-li ${
            location.pathname === "/upcoming-rides" ? "selected-nav-li" : ""
          }`}
        >
          <Link to="upcoming-rides">Upcoming Rides (2)</Link>
        </li>
        <li
          className={`nav-li  ${
            location.pathname === "/past-rides" ? "selected-nav-li" : ""
          }`}
        >
          <Link to="past-rides">Past Rides (2)</Link>
        </li>
      </ul>
      <div
        className="filter-container"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        <img src={filterIcon} alt="" className="filter-icon" />
        <p className="">Filter</p>
      </div>
    </nav>
  );
};

export default Navbar;
