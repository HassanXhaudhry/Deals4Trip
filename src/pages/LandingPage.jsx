import React, { Fragment, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import MyFooter from "../components/Footer";
import { FaPlay } from "react-icons/fa";
import car from "../assets/car.png";
import crousel1 from "../assets/crousel1.png";
import crousel2 from "../assets/crousel2.png";
import crousel3 from "../assets/crousel3.png";
import crousel4 from "../assets/crousel4.png";
import crousel5 from "../assets/crousel5.png";
import crousel6 from "../assets/crousel6.png";
import world from "../assets/world.png";
import mountains from "../assets/mountains.png";
import costumer from "../assets/costumer.png";
import Slider from "../components/Sliders/Slider";
import Slider3 from "../components/Sliders/Slider3";
import Slider2 from "../components/Sliders/Slider2";
import tower from "../assets/tower.png";
import spoon from "../assets/spoon.png";
import massage from "../assets/massage.png";
import yoga from "../assets/yoga.png";
import airport from "../assets/airport.png";
import pool from "../assets/pool.png";
import room from "../assets/room.png";
import mask from "../assets/mask.png";
import Slider4 from "../components/Sliders/Slider4";
import { NavLink } from "react-router-dom";
import belgium from "../assets/belgium.png";
import portugal from "../assets/portugal.png";
import czech from "../assets/czech.png";
import slovenia from "../assets/slovenia.png";
import netherlands from "../assets/netherlands.png";
import luxembourg from "../assets/luxembourg.png";
import spain from "../assets/spain.png";
import GoToTop from "../components/GoToTop";
import { useTranslation } from 'react-i18next';

const countries = [
  { flag: belgium, name: "Belgium" },
  { flag: portugal, name: "Portugal" },
  { flag: czech, name: "Czech" },
  { flag: slovenia, name: "Slovenia" },
  { flag: netherlands, name: "Netherlands" },
  { flag: luxembourg, name: "Luxembourg" },
  { flag: spain, name: "Spain" },
];
const carouselImages = [
  {
    image: crousel1,
  },
  {
    image: crousel2,
  },
  {
    image: crousel3,
  },
  {
    image: crousel4,
  },
  {
    image: crousel5,
  },
  {
    image: crousel6,
  },
];
const LandingPage = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    if (autoPlay) {
      timeOut = setTimeout(() => {
        setCurrent((prevCurrent) =>
          prevCurrent === carouselImages.length - 1 ? 0 : prevCurrent + 1
        );
      }, 2500);
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [current, autoPlay, carouselImages.length]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center py-4 relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-4 sm:px-10 py-12 items-center"
          >
            <div className="flex flex-col lg:flex-row items-center gap-5 text-center lg:text-left">
              <div className="w-full font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight">
              {t('ENJOY DESERT')}
              </div>
              <div className="font-semibold text-lg sm:text-xl w-3/1">
               {t("Build a trip using Deals4Trip and get the right plan for your holiday")}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="h-24 w-48 relative order-last sm:order-first">
                <div className="h-24 w-48 rounded-2xl mt-2">
                  <img src={car} alt="Car" />
                  <button className="absolute flex items-center justify-center h-9 w-9 rounded-full bg-black left-[-10px] top-8">
                    <FaPlay className="text-[#80A102] text-lg rounded-full" />
                  </button>
                </div>
              </div>
              <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-black leading-tight">
               {t("SAFARI IN DUBAI")} 
              </div>
            </div>
          </motion.div>

          <motion.div
      {...fadeInUp}
      className="flex flex-col lg:flex-row w-full gap-5 justify-center items-center px-4 sm:px-6"
    >
      <div className="flex flex-col gap-6 lg:mb-6 mb-20 text-center items-center w-full lg:w-1/5">
        {[
          { icon: world, title: "1,000+ Local Tours", description: "There's something for everyone to explore." },
          { icon: mountains, title: "Winter Destinations", description: "Create memories that will last a lifetime." },
          { icon: costumer, title: "98% Happy Travelers", description: "Who has enjoyed the trip of a lifetime with us?" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-2" />
            <span className="font-semibold text-lg">{t(item.title)}</span>
            <span className="text-sm">{t(item.description)}</span>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-3/4">
      <div className="relative flex lg:justify-normal justify-center">
      <button
        onClick={togglePopup}
        className="z-30 text-center mt-[10px] h-[42px] rounded-3xl bg-[#80A102] text-white hover:bg-white hover:text-[#80A102] absolute
           lg:top-[-15px] top-[-65px] font-bold text-lg cursor-pointer lg:w-[240px] w-full left-1 shadow-lg shadow-gray-400"
      >
        {t("Journey Planner")}
      </button>
      <AnimatePresence>
        {isPopupOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            <div className="fixed inset-0 z-40 flex items-center justify-center p-2">
              <motion.div
                ref={popupRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 xl:mx-8 lg:mx-6 md:mx-4 mx-2 shadow-lg rounded-lg w-full relative"
              >
                <h2 className="md:text-2xl text-lg font-bold md:mb-4 mb-2 px-2 text-center">
                {t("Pick a country to explore the map")}  
                </h2>
                <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-3">
                  {countries.map((country, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="border border-gray-300 rounded-2xl md:p-8 p-4 mb-2 hover:bg-gray-100 transition-colors duration-200">
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">
                        {country.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer bg-gray-100 rounded-full"
                  onClick={togglePopup}
                >
                  ✕
                </motion.button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
        <div className="relative overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] w-full">
  <div className="relative w-full h-full">
    {carouselImages.map((image, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full transition-all duration-[1500ms] ease-in-out transform ${
          index === current
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={image.image}
          alt={`Slide ${index}`}
        />
      </div>
    ))}
  </div>
</div>

      </div>
    </motion.div>

          <motion.div {...fadeInUp}>
            <Slider />
            <Slider2 />
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="text-center pt-16 pb-6">
              <div className="text-[#80A102]">{t("Modern & Beautiful")}</div>
              <div className="text-4xl font-bold">{t("Our Hotel Services")}</div>

              <div className="flex items-center justify-around mx-4">
                <div className="grid grid-cols-1 md:grid-cols-3  w-full mx-6 py-8">
                  <div className="flex flex-col items-center gap-4 sm:mx-0 mx-4">
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={spoon} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Restaurant & Coffee")}</div>
                        <div className="text-xs font-light">
                        {t("Enjoy a variety of delicious local and international cuisines in our on-site restaurant, along with a selection of freshly brewed coffee and specialty beverages")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={massage} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Spa & Massage")}</div>
                        <div className="text-xs font-light">
                        {t("Indulge in ultimate relaxation with our rejuvenating spa treatments and therapeutic massages, designed to restore balance and well-being")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={yoga} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Fitness & Yoga")}</div>
                        <div className="text-xs font-light">
                        {t("Stay fit and energized during your stay with access to our modern fitness center, offering yoga sessions and state-of-the-art workout equipment")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center my-4">
                    <img src={tower} alt="" className="w-[70%] h-[100%]" />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:mx-0 mx-4">
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={airport} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Airport Transfer")}</div>
                        <div className="text-xs font-light">
                        {t("Convenient and hassle-free airport transfer services to ensure a smooth journey to and from the hotel, available 24/7 for all our guests")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={pool} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Swimming Pool")}</div>
                        <div className="text-xs font-light">
                        {t("Take a refreshing dip in our outdoor pool or relax poolside with a drink from the bar, perfect for both leisure and exercise")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-[#EDF2DB] px-4 py-6 w-[300px]">
                      <div>
                        <img src={room} alt="" className="w-28 h-12" />
                      </div>
                      <div className="flex flex-col text-start gap-1">
                        <div className="font-bold">{t("Meeting Room")}</div>
                        <div className="text-xs font-light">
                        {t("Our fully equipped meeting rooms are ideal for business meetings, conferences, and events, providing all the necessary facilities for a productive environment")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Slider3 />
            <Slider4 />
          </motion.div>
        </div>
      </div>
      <GoToTop />
      <NavLink
        to="/aichat"
        className="flex items-center justify-center cursor-pointer fixed z-50 right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]"
      >
        <img src={mask} alt="" className="h-10 w-10" />
      </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default LandingPage;
