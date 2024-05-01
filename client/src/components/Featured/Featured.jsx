import React from "react";
import "./Featured.css";
import feature1 from  "../../images/featured/feature1.jpg"
import feature2 from  "../../images/featured/feature2.jpg"
import feature3 from  "../../images/featured/feature3.jpg"
import feature4 from  "../../images/featured/feature4.jpg"

export default function Featured() {
  return (
    <>
      <div className="featured">
        {/* feature1 */}
        <div className="featuredItem">
          <img className="featuredImg" src={feature1} alt="" />
          <div className="featuredTitles">
            <h2>Islamabad</h2>
            <h2>532 properties</h2>
          </div>
        </div>
        {/* feature2 */}
        <div className="featuredItem">
          <img className="featuredImg" src={feature2} alt="" />
          <div className="featuredTitles">
            <h2>Karachi</h2>
            <h2>532 properties</h2>
          </div>
        </div>
        {/* feature3 */}
        <div className="featuredItem">
          <img className="featuredImg" src={feature3} alt="" />
          <div className="featuredTitles">
            <h2>Lahore</h2>
            <h2>532 properties</h2>
          </div>
        </div>
        {/* feature4 */}
        <div className="featuredItem">
          <img className="featuredImg" src={feature4} alt="" />
          <div className="featuredTitles">
            <h2>Sialkot</h2>
            <h2>532 properties</h2>
          </div>
        </div>


      </div>
    </>
  );
}
