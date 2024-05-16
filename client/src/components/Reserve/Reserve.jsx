import CloseIcon from "@mui/icons-material/Close";
import "./Reserve.css";

import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext.jsx";
import { DateRange } from "react-date-range";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/api/hotels/find/${hotelId}`);
  console.log(data);
  const { dates } = useContext(SearchContext)
 
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };


  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = [];
    
    while (start <= end) {
      date.push(start.getTime());
      start.setDate(start.getDate() + 1);
    }
    
    return date;
  };

  // Assuming dates[0] is an object with startDate and endDate properties
  const allDates = getDateInRange(dates[0].startDate, dates[0].endDate);

  console.log(allDates);

  const isAvailable = (roomNumber) => {
    console.log(roomNumber.unavailableDates, "==>unavailable Dates");
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return isFound;
    //true/False
  };


  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const updateDates = allDates.map((date) => {
            const country = new Date(date);
            country.setHours(country.getHours() + 5);
            return country;
          });
          const res = axios.put(`/api/room/availability/${roomId}`, {
            dates: updateDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="reserve">
      <div className="rContainer">
        <CloseIcon className="rClose" onClick={() => setOpen(false)} />
        <span>Select your rooms:</span>
        {data?.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item?.title}</div>
              <div className="rDesc">{item?.desc}</div>
              <div className="rMax">
                Max People : <b>{item?.maxPeople}</b>
              </div>
              <div className="rPrice">Rs {item?.price}</div>
            </div>
            <div className="selectedRooms">
              {item?.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label htmlFor="">{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
