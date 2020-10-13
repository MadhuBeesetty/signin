import React from "react";
import "./styles.css";
import logo from "../../Assets/logo.png";

const HeaderComponent = () => {
  return (
    <div className="layout">
      <img className="imageSizing" src={logo} alt="kid loop" />
      <h1 className="singIn">Sign In</h1>
    </div>
  );
};

export default HeaderComponent;
