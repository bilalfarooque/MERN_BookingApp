import React from "react";
import "./FeaturedProperties.css";
import fpimg1 from "../../images/fp/fp1.webp";
import fpimg2 from "../../images/fp/fp2.webp";
import fpimg3 from "../../images/fp/fp3.webp";
import fpimg4 from "../../images/fp/fp4.webp";

export default function FeaturedProperties() {
  return (
    <>
      <div className="featuredProperties">
        {/* Item */}
        <div className="fpItem">
          <img src={fpimg1} alt="" className="fpImg" />
          <div className="fpDesc">
            <span className="fpName">Aprthote Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice"></span>
          </div>
            <div className="fpRateCont">
              <span className="fpRating">8.8</span>
              <span className="fpComments">Excellent</span>
              <span className="fpReviews">- 202 Reviews</span>
            </div>
        </div>
        {/* Item */}
        <div className="fpItem">
          <img src={fpimg1} alt="" className="fpImg" />
          <div className="fpDesc">
            <span className="fpName">Aprthote Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice"></span>
          </div>
            <div className="fpRateCont">
              <span className="fpRating">8.8</span>
              <span className="fpComments">Excellent</span>
              <span className="fpReviews">- 202 Reviews</span>
            </div>
        </div>
        {/* Item */}
        <div className="fpItem">
          <img src={fpimg1} alt="" className="fpImg" />
          <div className="fpDesc">
            <span className="fpName">Aprthote Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice"></span>
          </div>
            <div className="fpRateCont">
              <span className="fpRating">8.8</span>
              <span className="fpComments">Excellent</span>
              <span className="fpReviews">- 202 Reviews</span>
            </div>
        </div>
        {/* Item */}
        <div className="fpItem">
          <img src={fpimg1} alt="" className="fpImg" />
          <div className="fpDesc">
            <span className="fpName">Aprthote Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice"></span>
          </div>
            <div className="fpRateCont">
              <span className="fpRating">8.8</span>
              <span className="fpComments">Excellent</span>
              <span className="fpReviews">- 202 Reviews</span>
            </div>
        </div>
      </div>
    </>
  );
}
