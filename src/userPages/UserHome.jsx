import React, { Fragment, useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { Carousel } from "primereact/carousel";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import profile_bg from "../assets/profile_bg.png";
import profile_trip1 from "../assets/profile_trip1.png";
import profile_trip2 from "../assets/profile_trip2.png";
import profile_trip3 from "../assets/profile_trip3.png";
import profile_trip4 from "../assets/profile_trip4.png";
import profile_trip5 from "../assets/profile_trip5.png";
import profile_trip6 from "../assets/profile_trip6.png";
import profile_trip7 from "../assets/profile_trip7.png";
import profile_hotel1 from "../assets/profile_hotel1.png";
import profile_hotel2 from "../assets/profile_hotel2.png";
import profile_blog1 from "../assets/profile_blog1.png";
import profile_blog2 from "../assets/profile_blog2.png";
import profile_blog3 from "../assets/profile_blog3.png";
import profile_rec1 from "../assets/profile_rec1.png";
import profile_rec2 from "../assets/profile_rec2.png";
import profile_rec3 from "../assets/profile_rec3.png";
import profile_rec4 from "../assets/profile_rec4.png";
import GoToTop from "../components/GoToTop";
import ExploreDubaiSlider from "./sliders/ExploreDubaiSlider";
import IstanbulSlider from "./sliders/IstanbulSlider";
import HomesSlider from "./sliders/HomesSlider";

const UserHome = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Dubai");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const cardData = [
    {
      id: 1,
      image: profile_rec1,
      favoriteLabel: "Guest Favorite",
      title: "Earthen home in Terrasini, Italy",
      rating: "4.1(81)",
      description: "Container suite - Suspended between land and sea",
      bedInfo: "1 bed",
      dateRange: "Sep 15-20",
      oldPrice: "$234",
      newPrice: "$1234",
    },
    {
      id: 2,
      image: profile_rec2,
      favoriteLabel: "Guest Favorite",
      title: "Earthen home in Terrasini, Italy",
      rating: "4.1(81)",
      description: "Container suite - Suspended between land and sea",
      bedInfo: "1 bed",
      dateRange: "Sep 15-20",
      oldPrice: "$234",
      newPrice: "$1234",
    },
    {
      id: 3,
      image: profile_rec3,
      favoriteLabel: "Guest Favorite",
      title: "Earthen home in Terrasini, Italy",
      rating: "4.1(81)",
      description: "Container suite - Suspended between land and sea",
      bedInfo: "1 bed",
      dateRange: "Sep 15-20",
      oldPrice: "$234",
      newPrice: "$1234",
    },
    {
      id: 4,
      image: profile_rec4,
      favoriteLabel: "Guest Favorite",
      title: "Earthen home in Terrasini, Italy",
      rating: "4.1(81)",
      description: "Container suite - Suspended between land and sea",
      bedInfo: "1 bed",
      dateRange: "Sep 15-20",
      oldPrice: "$234",
      newPrice: "$1234",
    },
  ];
  const data = [
    {
      id: 1,
      description: "Fairmont Resort, Dubai, United Arab Emirates",
      stars: 5,
      img: profile_hotel1,
      location: "Dubai, UAE",
      discount: "-25%",
      price: "$148.25",
      duration: "/night",
      button: "Book Now",
    },
    {
      id: 2,
      description: "Fairmont Resort, Dubai, United Arab Emirates",
      stars: 4,
      img: profile_hotel2,
      location: "Dubai, UAE",
      discount: "-25%",
      price: "$148.25",
      duration: "/night",
      button: "Book Now",
    },
    {
      id: 3,
      description: "Fairmont Resort, Dubai, United Arab Emirates",
      stars: 5,
      img: profile_hotel1,
      location: "Dubai, UAE",
      discount: "-25%",
      price: "$148.25",
      duration: "/night",
      button: "Book Now",
    },
    {
      id: 4,
      description: "Fairmont Resort, Dubai, United Arab Emirates",
      stars: 5,
      img: profile_hotel2,
      location: "Dubai, UAE",
      discount: "-25%",
      price: "$148.25",
      duration: "/night",
      button: "Book Now",
    },
    {
      id: 5,
      description: "Fairmont Resort, Dubai, United Arab Emirates",
      stars: 5,
      img: profile_hotel1,
      location: "Dubai, UAE",
      discount: "-25%",
      price: "$148.25",
      duration: "/night",
      button: "Book Now",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const trips = [
    { id: 1, image: profile_trip1, title: "Desert Safari", location: "Dubai" },
    { id: 2, image: profile_trip2, title: "Desert Safari", location: "Dubai" },
    { id: 3, image: profile_trip3, title: "Desert Safari", location: "Dubai" },
    { id: 4, image: profile_trip4, title: "Desert Safari", location: "Dubai" },
    { id: 5, image: profile_trip5, title: "Desert Safari", location: "Dubai" },
    { id: 6, image: profile_trip6, title: "Desert Safari", location: "Dubai" },
    { id: 7, image: profile_trip7, title: "Desert Safari", location: "Dubai" },
  ];


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setVisibleItems(1);
      } else if (window.innerWidth >= 991) {
        setVisibleItems(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderStars = (stars) => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starElements.push(<IoIosStar key={i} className="text-yellow" />);
      } else {
        starElements.push(<IoIosStar key={i} className="text-gray-300" />);
      }
    }
    return starElements;
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(data.length - visibleItems, prevIndex + 1)
    );
  };
  const productTemplate = (hotel) => (
    <div className="hotel-item flex flex-col items-center justify-center my-4 md:mx-2 mx-0">
      <div
        key={hotel.id}
        className="flex flex-col items-center justify-center w-full md:h-[325px] mb-6 sm:h-[370px] h-[400px] relative md:flex-row gap-4 rounded-2xl"
      >
        <img src={hotel.img} alt="" className="w-[90%] h-[90%] rounded-3xl" />
        <div className="absolute flex items-center justify-center bg-white text-gray-400 left-12 h-8 w-8 top-8 text-center rounded-full">
          <FaRegHeart />
        </div>
        <div className="absolute md:right-6 right-0 rounded-3xl lg:w-[60%] w-full h-[91%] lg:top-[14.5px] top-28 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
          <div
            className="absolute right-6 z-10 h-10 w-10 bg-[#80A102] flex justify-center items-center text-black text-xs text-center font-semibold"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
            }}
          >
            {hotel.discount}
          </div>

          <div className="flex flex-col items-center gap-2 float-right px-3 pt-6">
            <div className="flex flex-col pl-6 gap-4">
              <div className="w-28 bg-[#80A102] h-8 flex items-center justify-center rounded-2xl text-white">
                Luxury
              </div>
              <div className="flex">
                <div className="flex flex-col w-full gap-2">
                  <div className="text-xl font-semibold">
                    {hotel.description}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MdOutlineLocationOn className="text-lg" />
                      <div className="text-[#737373] font-medium">
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex">{renderStars(hotel.stars)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-6">
              <div className="flex flex-col sm:flex-row justify-between items-center md:pt-16 gap-2 pt-6">
                <div className="flex items-center gap-1">
                  <div className="text-lg font-semibold">{hotel.price}</div>
                  <div className="text-xs text-[#737373]">{hotel.duration}</div>
                </div>
                <div>
                  <button
                    onClick={() => handleHotelSelect(hotel)}
                    className="flex text-white items-center justify-center bg-black h-10 w-32 rounded-3xl"
                  >
                    {hotel.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const handleGuestsClick = () => {
    setIsGuestsDropdownOpen(!isGuestsDropdownOpen);
  };

  const handleAdultsChange = (operation) => {
    setAdults(
      operation === "increase" ? adults + 1 : adults - 1 >= 1 ? adults - 1 : 1
    );
  };

  const handleChildrenChange = (operation) => {
    setChildren(
      operation === "increase"
        ? children + 1
        : children - 1 >= 0
        ? children - 1
        : 0
    );
  };

  return (
    <Fragment>
      <UserNav />
      <div className="w-full flex min-h-screen justify-between bg-slate-100">
        <Sidebar />
        <div className="w-[1480px] flex-grow">
          <div className="px-4 sm:px-10 py-16">
            <motion.div
              {...fadeInUp}
              className="flex flex-col space-y-4 items-center justify-center"
            >
              <div className="font-bold text-4xl sm:text-6xl lg:text-[70px] py-12 leading-tight">
                Your Perfect Stay is Just a Click Away
              </div>
              <div className="relative">
                <div className="absolute top-[-30px] left-[-20px]">
                  <div className="w-auto mx-4 md:px-4 px-1 md:py-6 py-4 gap-8 rounded-2xl bg-white shadow-lg border border-gray-200 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 divide-x divide-gray-200">
                    <div className="relative flex flex-col justify-center gap-2 px-4">
                      <div className="text-[#737373] text-[14px] sm:text-md">
                        Destination
                      </div>
                      <div
                        className="sm:flex flex-col md:flex-row items-center gap-2 cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <MdOutlineLocationOn className="text-sm sm:text-xl text-gray-500" />
                        <div className="ext-xs sm:text-[14px]">
                          {selectedCity}
                        </div>
                        <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                      </div>
                      {isDropdownOpen && (
                        <div className="absolute z-90 top-full mt-2 left-0 right-0 bg-white shadow-lg border border-gray-200 rounded-md max-h-60 overflow-y-auto">
                          {cities.map((city) => (
                            <div
                              key={city.id || city.name}
                              onClick={() => handleCitySelect(city.name)}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {city.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="relative flex flex-col justify-center gap-2 px-4 calendar-container">
                      <div className="text-[#737373] text-[14px] sm:text-md">
                        Check In
                      </div>
                      <div
                        className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                        onClick={() => setIsCheckInOpen(!isCheckInOpen)}
                      >
                        <LuCalendarDays className="text-sm sm:text-xl text-gray-500" />
                        <div className="text-xs sm:text-[14px]">
                          {startDate.toDateString()}
                        </div>
                        <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                      </div>
                      {isCheckInOpen && (
                        <div className="absolute z-90 top-full mt-2 sm:left-0 left-[-140px] bg-white shadow-lg border border-gray-200 rounded-md calendar-dropdown">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                              setIsCheckInOpen(false);
                            }}
                            inline
                          />
                        </div>
                      )}
                    </div>
                    <div className="relative flex flex-col justify-center gap-2 px-4 calendar-container">
                      <div className="text-[#737373] text-[14px] sm:text-md">
                        Check Out
                      </div>
                      <div
                        className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                        onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
                      >
                        <LuCalendarDays className="text-sm sm:text-xl text-gray-500" />
                        <div className="text-xs sm:text-[14px]">
                          {endDate.toDateString()}
                        </div>
                        <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                      </div>
                      {isCheckOutOpen && (
                        <div className="absolute z-90 top-full mt-2 sm:left-0 left-[-20px] bg-white shadow-lg border border-gray-200 rounded-md calendar-dropdown2">
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => {
                              setEndDate(date);
                              setIsCheckOutOpen(false);
                            }}
                            inline
                          />
                        </div>
                      )}
                    </div>
                    <div className="relative flex flex-col justify-center gap-2 px-4">
                      <div className="text-[#737373] text-[14px] sm:text-md">
                        Guests
                      </div>
                      <div
                        className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                        onClick={handleGuestsClick}
                      >
                        <FaUser className="text-sm sm:text-xl text-gray-400" />
                        <div className="text-xs sm:text-[14px]">{`${adults} adults, ${children} children`}</div>
                        <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                      </div>
                      {isGuestsDropdownOpen && (
                        <div className="absolute z-100 top-full mt-2 right-0 w-[220px] bg-white shadow-lg border border-gray-200 rounded-md p-4">
                          <div className="flex justify-between items-center mb-2 gap-4">
                            <div>Adults</div>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleAdultsChange("decrease")}
                                className="pp-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                              >
                                -
                              </button>
                              <span className="px-4">{adults}</span>
                              <button
                                onClick={() => handleAdultsChange("increase")}
                                className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-4">
                            <div>Children</div>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleChildrenChange("decrease")}
                                className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                              >
                                -
                              </button>
                              <span className="px-4">{children}</span>
                              <button
                                onClick={() => handleChildrenChange("increase")}
                                className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center sm:justify-end px-2 w-full">
                      <div className="flex items-center justify-center sm:ml-0 ml-10 rounded-full gap-1 sm:gap-3 w-40 px-2 py-3 bg-black text-white cursor-pointer shadow-lg">
                        <IoSearch className="text-xl" />
                        <button className="text-white font-bold">Search</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:mt-0 sm:mt-40 mt-[320px]">
                  <img src={profile_bg} alt="" className="w-full" />
                </div>
                <div className="mt-2 ml-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    I'm looking for an entire home or apartment
                  </label>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-2 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="px-10 text-xl font-bold">Favorite Trips</div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 sm:gap-4 gap-8 px-8 items-center justify-center">
                {trips.map((trip) => (
                  <div key={trip.id} className="relative group md:m-2 m-0">
                    <img
                      src={trip.image}
                      alt=""
                      className="w-full h-auto transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute flex flex-col items-center justify-center rounded-xl left-0 lg:bottom-[-5px] bottom-[-10px] w-full h-[35%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
                      <p className="text-xs font-semibold">{trip.title}</p>
                      <div className="flex gap-1 items-center text-xs justify-center">
                        <MdOutlineLocationOn />
                        {trip.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-12 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="card">
                <div className="px-10">
                  <div className="flex flex-col md:flex-row sm:justify-between md:items-center md:mx-2 mx-4">
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-bold mb-4 md:mb-0">
                        Best Hotels
                      </div>
                      <div className="font-light text-[#737373]">
                        Quality as judged by customers. Book at the ideal price!
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center md:mt-0 mt-4">
                      <div
                        className="h-10 w-10 bg-gray-100 shadow-xl rounded-full flex items-center justify-center cursor-pointer"
                        onClick={handlePrev}
                        style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
                      >
                        <IoIosArrowBack className="text-black" />
                      </div>
                      <div
                        className="h-10 w-10 bg-gray-100 shadow-xl rounded-full flex items-center justify-center cursor-pointer"
                        onClick={handleNext}
                        style={{
                          opacity:
                            activeIndex === data.length - visibleItems
                              ? 0.5
                              : 1,
                        }}
                      >
                        <IoIosArrowForward className="text-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-container relative m-4">
                  <Carousel
                    className="carousel-custom px-6"
                    value={data}
                    numVisible={visibleItems}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                    onPageChange={(e) => setActiveIndex(e.page)}
                    page={activeIndex}
                    showNavigators={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-2 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="md:px-16 px-8 text-xl font-bold">Blog</div>
              <div className="flex flex-col md:flex-row items-center justify-between md:gap-2 gap-8">
                <div className="flex-1 flex flex-col gap-8 md:px-16 px-8">
                  <p className="text-[#666666]">About Deals4Trip</p>
                  <p className="text-4xl font-semibold">
                    World Best Travel Agency Company Since 2012
                  </p>
                  <p className="text-[14px] md:text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many
                    websites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).
                  </p>
                  <button className="flex items-center justify-center w-32 h-10 rounded-3xl bg-black text-white">
                    Find Tours
                  </button>
                </div>

                <div className="flex-1 flex flex-col gap-4 px-4 md:px-16 items-center">
                  <div className="flex justify-end relative">
                    <img
                      src={profile_blog1}
                      alt="Profile"
                      className="w-full md:w-[70%] h-[50%] object-cover"
                    />
                    <div className="absolute shadow-xl lg:left-[-80px] md:left-[-50px] left-0 md:top-20 lg:top-36 sm:top-64 top-[90px] rounded-xl lg:w-[80%] w-[90%] lg:h-[70%] md:h-[110%] sm:h-[40%] h-[70%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
                      <div className="flex flex-col gap-4 p-5">
                        <p className="text-base md:text-lg font-semibold">
                          The best booking system
                        </p>
                        <p className="text-xs md:text-sm">
                          I've been using the hotel booking system for several
                          years now, and it's become my go-to platform for
                          planning my trips. The interface is user-friendly, and
                          I appreciate the detailed information and real-time
                          availability of hotels.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={profile_blog3}
                              alt="Profile"
                              className="w-8 h-8 md:w-10 md:h-10"
                            />
                            <div className="flex flex-col">
                              <p className="font-semibold text-sm md:text-base">
                                Atend John
                              </p>
                              <p className="text-xs">California</p>
                            </div>
                          </div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, index) => (
                                <IoIosStar
                                  key={index}
                                  className="text-yellow text-xs md:text-base"
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={profile_blog2}
                      alt="Secondary Image"
                      className="absolute top-[-20px] md:top-56 h-[30%] w-[30%] md:h-[50%] md:w-[35%] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-10 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-2 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="px-10 text-xl font-bold">Explore Dubai</div>
              <div className="px-10 font-light text-[#737373]">These popular destinations have a lot to offer</div>
              <ExploreDubaiSlider/>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-2 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="px-10 text-xl font-bold">Browse by property type in Istanbul</div>
              <IstanbulSlider />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-2 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="px-10 text-xl font-bold">Homes guests love</div>
              <HomesSlider />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-12 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="md:px-16 px-8 text-xl font-bold">
                Recommendation Airbnb
              </div>
              <div className="flex justify-center items-center md:px-16 px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cardData.map((card) => (
                    <div
                      key={card.id}
                      className="w-full h-full rounded-xl flex flex-col items-center shadow-xl"
                    >
                      <div className="relative h-[70%] w-full rounded-t-xl">
                        <img
                          src={card.image}
                          alt=""
                          className="rounded-t-xl w-full"
                        />
                        <div className="h-6 w-28 text-xs top-2 left-2 bg-white rounded-2xl absolute flex items-center justify-center text-[#666666]">
                          {card.favoriteLabel}
                        </div>
                        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                          <FaRegHeart className="text-[#666666]" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 p-3">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold">{card.title}</p>
                          <div className="flex gap-1 items-center">
                            <IoIosStar />
                            <p className="text-xs text-[#666666]">
                              {card.rating}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-[#666666]">
                          {card.description}
                        </p>
                        <p className="text-xs text-[#666666]">{card.bedInfo}</p>
                        <p className="text-xs text-[#666666]">
                          {card.dateRange}
                        </p>
                        <div className="flex gap-1">
                          <p className="text-xs text-[#666666] line-through">
                            {card.oldPrice}
                          </p>
                          <p className="text-xs font-semibold">
                            {card.newPrice}
                          </p>
                          <p className="text-xs text-[#666666]">/night</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
    </Fragment>
  );
};

export default UserHome;
