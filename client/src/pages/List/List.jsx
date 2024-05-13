import React, { useState } from "react";
import "./List.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch.js";

export default function List() {
  const location = useLocation();
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [persons, SetPersons] = useState(location.state.persons);
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  //date
  const [showDate, setShowDate] = useState(false);

  
  const { data, loading, error, reFetch } = useFetch(
    `/api/hotels?city=${destination}&min=${min|| 0}&max=${max || 100000}`
  );
  
  // console.log("Listdata=>", data);

  //function
  const handleSearch = () => {
    reFetch();
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label htmlFor="">Check-In Date</label>
              <span
                className="headerSearchText"
                onClick={() => setShowDate(!showDate)}
              >
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>

              {showDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="dateRange"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label htmlFor="">options</label>
              <div className="listItems">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" onChange={e=>setMin(e.target.value)} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" onChange={e=>setMax(e.target.value)} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={persons.adult}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Child</span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInput"
                    placeholder={persons.child}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={persons.room}
                  />
                </div>
              </div>
              <button className="listSearchBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
