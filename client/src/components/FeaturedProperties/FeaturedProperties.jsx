import React from "react";
import "./FeaturedProperties.css";
import fpimg1 from "../../images/fp/fp1.webp";
import fpimg2 from "../../images/fp/fp2.webp";
import fpimg3 from "../../images/fp/fp3.webp";
import fpimg4 from "../../images/fp/fp4.webp";
import useFetch from "../../hooks/useFetch.js";

export default function FeaturedProperties() {
  const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=4");
  console.log("featuredproperty data==>",data)
  return (
    <>
      <div className="featuredProperties">
        {loading ? (
          "loading....."
        ) : (
          <>
            {data?.map(
              (item)=>(
                <div className="fpItem" key={item?._id}>
                  <img src={item?.photos[0]} alt="" className="fpImg" />
                  <div className="fpDesc">
                    <span className="fpName">{item?.name}</span>
                    <span className="fpCity">{item?.city}</span>
                    <span className="fpPrice">Starting from Rs{item?.cheapestPrice}</span>
                  </div>
                  {item.rating && <div className="fpRateCont">
                    <span className="fpRating">{item?.rating}</span>
                    <span className="fpComments">Execellent</span>
                    <span className="fpReviews">- 202 Reviews</span>
                  </div>}
                </div>
              )
            )}
          </>
        )}
      </div>
    </>
  );
}
