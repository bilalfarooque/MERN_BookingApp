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

export default function PropertyList() {
  return (
    <>
      <div className="pList">
        <div className="pListItem">
          <img src={type1} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>22 Hotels</h2>
          </div>
        </div>

        <div className="pListItem">
          <img src={type2} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>22 Apartments</h2>
          </div>
        </div>

        <div className="pListItem">
          <img src={type3} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>22 Cabins</h2>
          </div>
        </div>

        <div className="pListItem">
          <img src={type4} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Cottages</h1>
            <h2>22 Cottages</h2>
          </div>
        </div>

        {/* <div className="pListItem">
          <img src={type5} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>GlampingSites</h1>
            <h2>22 GlampingSites</h2>
          </div>
        </div> */}

        {/* <div className="pListItem">
          <img src={type6} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>GuestHouse</h1>
            <h2>22 GuestHouse</h2>
          </div>
        </div> */}

        <div className="pListItem">
          <img src={type7} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Motels</h1>
            <h2>22 Motels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={type8} alt="" className="pListItemImg" />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>22 Villas</h2>
          </div>
        </div>
      </div>
    </>
  );
}
