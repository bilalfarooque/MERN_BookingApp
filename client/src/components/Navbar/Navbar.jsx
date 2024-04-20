import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Booking</span>
          <div className="navItems">
            <button className="navButton">Sign in</button>
            <button className="navButton">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
