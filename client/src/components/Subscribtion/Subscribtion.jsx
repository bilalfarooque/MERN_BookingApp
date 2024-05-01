import React from "react";
import "./Subscribtion.css";

export default function Subscribtion() {
  return (
    <>
      <div className="subscription">
        <div className="subsCont">
          <h3 className="mailTitle">Stay in the know</h3>
          <p className="mailDesc">
            Sign up to get marketing emails from Booking.com, including
            promotions, rewards, travel experiences, and information about
            Booking.com and Booking.com Transport Limited's products and
            services.
          </p>
        </div>

        <div className="mailInputCont">
          <input
            type="email"
            className="mailInput"
            placeholder="Your email address"
          />
          <button className="mailSignUpBtn">Subscribe</button>
        </div>
      </div>
    </>
  );
}
