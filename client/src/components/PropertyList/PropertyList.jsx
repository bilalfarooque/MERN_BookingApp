import React from "react";
import "./PropertyList.css";

import type1 from "../../images/types/Hotels.jpeg";
import type2 from "../../images/types/Apartments.jpeg";
import type3 from "../../images/types/Cabins.jpeg";
import type4 from "../../images/types/Cottages.jpeg";
import type5 from "../../images/types/GlampingSites.jpeg";
import type6 from "../../images/types/GuestHouse.jpeg";
import type7 from "../../images/types/Motels.jpeg";
import type8 from "../../images/types/Villas.jpeg";
import useFetch from "../../hooks/useFetch";

export default function PropertyList() {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  console.log("propertyList data=>", data);

  return (
    <>
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="pListItem">
              <img src={type1} alt="" className="pListItemImg" />
              <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>{data[0].count} Hotels</h2>
              </div>
            </div>

            <div className="pListItem">
              <img src={type2} alt="" className="pListItemImg" />
              <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>{data[1].count} Apartments</h2>
              </div>
            </div>

            <div className="pListItem">
              <img src={type3} alt="" className="pListItemImg" />
              <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>{data[2].count} Resorts</h2>
              </div>
            </div>

            <div className="pListItem">
              <img src={type4} alt="" className="pListItemImg" />
              <div className="pListTitles">
                <h1>Villas</h1>
                <h2>{data[3].count} Villas</h2>
              </div>
            </div>

            <div className="pListItem">
              <img src={type8} alt="" className="pListItemImg" />
              <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>{data[4].count} Cabins</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
