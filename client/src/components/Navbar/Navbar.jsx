import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar({type}) {

  const {user} = useContext(AuthContext)
  return (
    <>
      <div className={type === "login" ? "navbar loginMode" : "navbar"}>
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">Booking.com</span>
          </Link>
          {
            type !== "login" && <>
            <div className="navItems">
            {user ? (<>
             <h4 className="userName">{user.username}</h4>
             <AccountCircleIcon style={{width : "40px",height : "40px"}}/>
            </>
          
            ) : (
              <>
              <Link to= "/login">
                <button className="navButton">Sign in</button>
              </Link>
                <button className="navButton">Register</button>
              </>
            )}
          </div>
            </>
          }
          
        </div>
      </div>
    </>
  );
}
