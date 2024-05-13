import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {

  const {user} = useContext(AuthContext)
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">Booking.com</span>
          </Link>
          <div className="navItems">
            {user ? (
             (<AccountCircleIcon style={{width : "40px",height : "40px"}}/>)
          
            ) : (
              <>
                <button className="navButton">Sign in</button>
                <button className="navButton">Register</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
