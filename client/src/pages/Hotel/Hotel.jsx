import React, { useState } from "react";
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

export default function Hotel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376713450.jpg?k=146db1a5d0b332632832168dc3c37e02cee06980a552331a6ba54cb36ad8eaec&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376816186.jpg?k=8064bb7d72ac4bf938121faea25bcae98018c7e81f792d3c1a115e692c14556b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376713611.jpg?k=6fb313170626a739c985019911ed15be0b16abbcd765d596af58dfab648b3cf7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376713484.jpg?k=d179ddfda3eb774799c331ac526ad35dd879b3f3e9c35a9bd0b4c0759a11e4c0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376814531.jpg?k=59f9d4b267f34aa3884c4d11ae6b4ce75a1eb780c4e51f2df5e0ce7c733572a8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376818261.jpg?k=06164dac7e282725488c8aeada56239fee1f5815f3e492991890b814e1bf2ce7&o=&hp=1",
    },
  ];

  const handleOpen = (index) => {
    console.log("handleOpen clicked");
    setSlideIndex(index);
    setOpenSlider(true);
  };

  const handleSlider = (direction) => {
    
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? photos.length-1 : (prev) => prev - 1);
    } else {
      setSlideIndex(slideIndex === photos.length-1 ? 0 : (prev) => prev + 1);
    }
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
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
          <button className="reserveBtn">Reserve</button>
          <h1 className="hotelTitle">Four seasons hotel</h1>
          <div className="hotelAddress">
            <a href="">
              <LocationOnIcon />
            </a>
            <span className="address">
              Four Squares Karachi, Main Khayaban e Nishat, DHA Phase 6,
              Karachi, Sindh, Pakistan., 75500
            </span>
          </div>
          <span className="hotelDistance">2 km away from the city center</span>
          <span className="hotelPriceHighlight">From $50 per night</span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
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
              <h1 className="hotelTitle">Stay in the heart of Karachi</h1>
              <p className="hotelDesc">
                Four Squares Karachi is a recently renovated bed and breakfast
                in Karachi where guests can make the most of its garden and
                shared lounge. Housed in a building dating back to 2022, this
                bed and breakfast is 1.3 miles from Seaview Beach. There's a sun
                terrace and guests can access free Wifi and free private
                parking. Accessible via private entrance, all rooms have air
                conditioning, soundproofing, desk, and a private bathroom with a
                bath. A fridge and minibar are also offered, as well as a coffee
                machine and a kettle. At the bed and breakfast, units come with
                bed linen and towels. Sightseeing tours are available near the
                property. A car rental service is available at the bed and
                breakfast. The nearest airport is Jinnah International, 15 miles
                from Four Squares Karachi, and the property offers a paid
                airport shuttle service. Families in particular like the
                location they rated it 8.6 for a stay with kids.
              </p>
            </div>
            <div className="hotelDetailsPricing">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Nightly rate: From $50
                <br />
                Weekly rate: From $250
                <br />
                Monthly rate: From $1250
              </span>
              <button className="priceBtn">Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribtion />
      <Footer />
    </>
  );
}
