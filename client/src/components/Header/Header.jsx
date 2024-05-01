import React, { useState } from "react";
import "./Header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  //destination
  const [destination, setDestination] = useState("")



  //date
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //persons
  const [showPersons, setShowPersons] = useState(false);
  const [persons, setPersons] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const navigate = useNavigate();

  //function
  const handleSearch = () => {
    navigate("/hotels", {state : {destination,date,persons}})
  };

  //function
  const handlePerson = (name, value) => {
    //prev state will be as defined initially
    setPersons((prev) => {
      return {
        ...prev,
        [name]: value === "i" ? persons[name] + 1 : persons[name] - 1,
      };
    });
  };

  return (
    <>
      <div className={type === "list" ? "header listMode" : "header"}>
        <div className="headerContainer">
          <div className="headerList">
            <button className="headerListItem active">
              <HotelIcon />
              <span>Stays</span>
            </button>
            <button className="headerListItem">
              <ConnectingAirportsIcon />
              <span>Flights</span>
            </button>
            <button className="headerListItem">
              <DirectionsCarIcon />
              <span>Car rentals</span>
            </button>
            <button className="headerListItem">
              <AttractionsIcon />
              <span>Attractions</span>
            </button>
            <button className="headerListItem">
              <LocalTaxiIcon />
              <span>Airport taxis</span>
            </button>
          </div>

          {type !== "list" && (
            <>
              <h1 className="headerTitle">Find your next stay</h1>
              <p className="headerDesc">
                Search deals on hotels, homes, and much more...
              </p>

              <div className="headerSearch">
                <div className="headerSearchItem">
                  <HotelIcon />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <CalendarMonthIcon />
                  <span
                    onClick={() => {
                      setShowDate(!showDate);
                      setShowPersons(false);
                    }}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}</span>
                  {showDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="dateRange"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <PersonIcon />
                  <span
                    className="headerSearchText"
                    onClick={() => {
                      setShowPersons(!showPersons);
                      setShowDate(false);
                    }}
                  >
                    {`${persons.adult} adult - ${persons.child} child - ${persons.room}  room   `}
                  </span>

                  {showPersons && (
                    <div className="options">
                      <div className="optionsItem">
                        <span className="optionText">Adults</span>
                        <div className="optionButtons">
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("adult", "d")}
                            disabled={persons.adult <= 1}
                          >
                            -
                          </Button>
                          <span className="personsCount">{persons.adult}</span>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("adult", "i")}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Child</span>

                        <div className="optionButtons">
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("child", "d")}
                            disabled={persons.child <= 0}
                          >
                            -
                          </Button>
                          <span className="personsCount">{persons.child}</span>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("child", "i")}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Rooms</span>

                        <div className="optionButtons">
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("room", "d")}
                            disabled={persons.room <= 1}
                          >
                            -
                          </Button>
                          <span className="personsCount">{persons.room}</span>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handlePerson("room", "i")}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="headerSearchBtn"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
