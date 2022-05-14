import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import filterIcon from "../images/Vectorfilter.svg";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
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
      <div className="filter-container">
        <img src={filterIcon} alt="" className="filter-icon" />
        <p className="">Filter</p>
      </div>
    </nav>
  );
};

export default Navbar;
