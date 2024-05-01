import React from "react";
import "./SearchItem.css";
import itemImg1 from "../../images/searchItem/searchItem1.webp";

export default function SearchItem() {
  return (
    <>
      <div className="searchItem">
        <img src={itemImg1} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOP">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with air conditioning
          </span>
          <span className="siFeatures">
            Entire studio * 1 bathroom * 21m2 1 full bed
          </span>
          <span className="CancelOp">Free Cancellation</span>
          <span className="siCancelOpSubstitle">
            Until 3 days before arrival
          </span>
        </div>

        <div className="siDetails">
          <div className="siRating">
            <span className="raText">Excellent</span>
            <span className="rate">8.9</span>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs 20,000</span>
            <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheck">See Availability</button>
          </div>
        </div>
      </div>
    </>
  );
}
