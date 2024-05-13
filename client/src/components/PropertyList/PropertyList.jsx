import React from "react";
import "./PropertyList.css";

import type1 from "../../images/types/Hotels.jpeg";
import type2 from "../../images/types/Apartments.jpeg";
import type3 from "../../images/types/Cabins.jpeg";
import type4 from "../../images/types/Cottages.jpeg";
import type5 from "../../images/types/Villas.jpeg";
import useFetch from "../../hooks/useFetch.js";

export default function PropertyList() {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  // console.log("propertyList data=>", data);

  const images = [type1, type2, type3, type4, type5];

  return (
    <>
      <div className="pList" >
        {loading ? (
          "loading....."
        ) : (
          <>
            {data &&
              images?.map((img, i) => (
                <div className="pListItem" key={i}>
                  <img src={img} alt="" className="pListItemImg" />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}
