import React, { useContext, useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../../components/Footer/Footer";
import SearchItem from "../../components/SearchItem/SearchItem";
import Subscribtion from "../../components/Subscribtion/Subscribtion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { sliderClasses } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/Reserve/Reserve";

export default function Hotel() {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/api/hotels/single/${id}`);

  // console.log("Hoteldata",data);

  const { dates, persons } = useContext(SearchContext);
  const { user } = useContext(AuthContext);


  console.log("dates=>>", dates);

  const MILI_SECONDS_PER_DAY = 24 * 60 * 60 * 1000;

  const dayDifference = (date1, date2) => {
    console.log(date2.getTime(), "==>date2");
    console.log(date1.getTime(), "==>date1");
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILI_SECONDS_PER_DAY);
    console.log(diffDays, "==>diffDays");
    console.log(timeDiff, "==>timeDiff");
    return diffDays;
  };
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (index) => {
    console.log("handleOpen clicked");
    setSlideIndex(index);
    setOpenSlider(true);
  };

  const handleSlider = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? photos.length - 1 : (prev) => prev - 1);
    } else {
      setSlideIndex(slideIndex === photos.length - 1 ? 0 : (prev) => prev + 1);
    }
  };

  const handleResBtn = ()=>{
    !user ? navigate("/login") : setOpenModal(true);
  }

  return (
    <>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            {openSlider && (
              <div className="Slider">
                <CancelIcon
                  className="cancelbtn"
                  onClick={() => setOpenSlider(false)}
                />
                <ArrowBackIosIcon
                  className="leftArrow"
                  onClick={() => handleSlider("left")}
                />
                <div className="sliderWrapper">
                  <img
                    src={photos[slideIndex].src}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <ArrowForwardIosIcon
                  className="rightArrow"
                  onClick={() => handleSlider("right")}
                />
              </div>
            )}
            <button className="reserveBtn" onClick={handleResBtn}>Reserve</button>
            <h1 className="hotelTitle">{data?.name}</h1>
            <div className="hotelAddress">
              <a href="">
                <LocationOnIcon />
              </a>
              <span className="address">{data?.address}</span>
            </div>
            <span className="hotelDistance">
              {data?.distance} km away from the city center
            </span>
            <span className="hotelPriceHighlight">
              From ${data?.cheapestPrice} per night
            </span>
            <div className="hotelImages">
              {data?.photos?.map((photo, index) => (
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt="img"
                  className="hotelPhoto"
                />
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data?.title}</h1>
                <p className="hotelDesc">{data?.desc}</p>
              </div>
              <div className="hotelDetailsPricing">
                <h1>Perfect for a {days}-night stay</h1>
                <span>
                  <strong>{days}</strong> Nights Rate : Rs {days * data.cheapestPrice * persons.room}
                  <br />
                  <strong>Weekly</strong> Rate: Rs {7 * data.cheapestPrice * persons.room}
                  <br />
                  <strong>Monthly</strong> Rate: Rs {30 * data.cheapestPrice * persons.room}
                </span>
                <button className="priceBtn" onClick={handleResBtn}>Reserve or Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Subscribtion />
      <Footer />
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </>
  );
}
