import React from "react";
import "../styles/Header.css";
import profileLogo from "../images/header-profile.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="">
        <h1 className="header-text">Edvora</h1>
      </div>
      <div className="header-profile">
        <p className="header-user-name">Dhruv Singh</p>
        <img src={profileLogo} alt="" className="header-profile-img" />
      </div>
    </header>
  );
};

export default Header;
