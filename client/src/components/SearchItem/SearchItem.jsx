import React from "react";
import "./SearchItem.css";
import itemImg1 from "../../images/searchItem/searchItem1.webp";

import { Link } from "react-router-dom";

export default function SearchItem(item, key) {

 
  console.log("item=>",item)
  return (
    <>
      <div className="searchItem">
        <img src={itemImg1} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{item?.item.name}</h1>
          <span className="siDistance">{item?.item.distance}m from center</span>
          <span className="siTaxiOP">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with air conditioning
          </span>
          <span className="siFeatures">{item?.item.title}</span>
          <span className="CancelOp">Free Cancellation</span>
          <span className="siCancelOpSubstitle">
            Until 3 days before arrival
          </span>
        </div>

        <div className="siDetails">
          <div className="siRating">
            <span className="raText">Excellent</span>
            <span className="rate">{item?.item.rating}</span>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs {item?.item.cheapestPrice}</span>
            <span className="siTaxOp">Inclusive of taxes</span>
            <Link to={`/hotel/${item?.item._id}`}>
              <button className="siCheck" >See Availability</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
