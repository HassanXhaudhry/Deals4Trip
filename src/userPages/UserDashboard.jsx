import React, { Fragment, useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Carousel } from "primereact/carousel";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import profile_trip1 from "../assets/profile_trip1.png";
import profile_trip2 from "../assets/profile_trip2.png";
import profile_trip3 from "../assets/profile_trip3.png";
import profile_trip4 from "../assets/profile_trip4.png";
import profile_trip5 from "../assets/profile_trip5.png";
import profile_trip6 from "../assets/profile_trip6.png";
import dashboard_bg from "../assets/dashboard_bg.png";
import dashboard_1 from "../assets/dashboard_1.png";
import dashboard_2 from "../assets/dashboard_2.png";
import dashboard_3 from "../assets/dashboard_3.png";
import dashboard_4 from "../assets/dashboard_4.png";
import dashboard_5 from "../assets/dashboard_5.png";
import dashboard_6 from "../assets/dashboard_6.png";
import GoToTop from "../components/GoToTop";

const UserDashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const data = [
    {
      id: 1,
      image: dashboard_1,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
    {
      id: 2,
      image: dashboard_2,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
    {
      id: 3,
      image: dashboard_3,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
    {
      id: 4,
      image: dashboard_4,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
    {
      id: 5,
      image: dashboard_5,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },

    {
      id: 6,
      image: dashboard_6,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
    {
      id: 7,
      image: dashboard_5,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },

    {
      id: 8,
      image: dashboard_6,
      favoriteLabel: "Breakfast",
      title: "California Sunset/Twilight Boat Cruise",
      rating: "4.96 (672 reviews)",
      description: "2 days 3 nights - Family",
      price: "$48.25",
      book: "Book Now"
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
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
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setVisibleItems(1);
      } else if (window.innerWidth >= 1199) {
        setVisibleItems(6);
      } else if (window.innerWidth >= 991) {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(data.length - visibleItems, prevIndex + 1)
    );
  };

  const productTemplate = (card) => (
    <div className="flex justify-center items-center px-1 py-4">
      <div
        key={card.id}
        className="w-full h-[250px] max-w-sm rounded-xl flex flex-col items-center relative overflow-hidden"
      >
        <div className="relative w-full">
          <img src={card.image} alt="" className="rounded-t-xl w-full h-[90%] object-cover" />
          <div className="h-6 w-28 text-xs top-2 left-0 bg-[#FFCC23] rounded-r-2xl absolute flex items-center justify-center text-black">
            {card.favoriteLabel}
          </div>
          <div className="absolute top-2 right-2 bg-white rounded-full p-1">
            <FaRegHeart className="text-[#666666]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 absolute z-20 border border-gray-300 inset-0 top-28 rounded-2xl bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm pt-2">{card.title}</p>
            <div className="flex gap-1 items-center h-6 px-2 rounded-2xl top-[-15px] right-2 bg-[#80A102] text-white absolute">
              <IoIosStar />
              <span className="text-xs">{card.rating}</span>
            </div>
          </div>
          <p className="text-xs text-[#666666]">{card.description}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <p className="text-sm font-semibold">{card.price}</p>
              <p className="text-xs text-[#666666] ml-1">/person</p>
            </div>
            <button className="h-6 w-20 text-xs bg-black text-white rounded-2xl">
              {card.book}
            </button>
          </div>
        </div>
      </div>
    </div>

  );

  return (
    <Fragment>
      <UserNav />
      <div className="w-full flex min-h-screen bg-slate-100">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[1480px]">
            <motion.div
              {...fadeInUp}
              className="flex flex-col px-4 sm:px-10 py-6"
            >
              <div className="flex flex-col md:flex-row justify-center gap-3 ">
                <div className="flex flex-col w-full gap-4 rounded-xl p-4 bg-white">
                  <p className="md:text-2xl text-xl font-bold">
                    Upcoming Trips
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-2 gap-6 items-center justify-center">
                    {trips.map((trip) => (
                      <div key={trip.id} className="relative group">
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
                  <div className="relative w-full h-full">
                    <img
                      src={dashboard_bg}
                      alt="Dashboard background"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center md:gap-3 gap-0">
                      <p className="text-center text-white md:text-4xl text-md font-bold md:mb-4 mb-2 m-1">
                        Explore the World,
                        <br />
                        One Adventure at a Time
                      </p>
                      <div className="flex gap-4 items-center">
                        <button className="md:w-28 md:h-10 w-20 h-6 md:text-md text-xs flex justify-center items-center rounded-3xl bg-[#80A102] text-white">
                          Book Now
                        </button>
                        <button className="md:w-28 md:h-10 w-20 h-6 md:text-md text-xs flex justify-center items-center rounded-3xl bg-white border-[#80A102] border text-[#80A102]">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 gap-4 rounded-xl p-4 bg-white">
                  <h2 className="text-base sm:text-lg font-semibold text-center">
                    Trip Listing this Month
                  </h2>
                  <div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      inline
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    Selected date: {selectedDate?.toDateString()}
                  </p>

                  <div className="flex flex-col gap-2 p-4 text-center">
                    <p className="font-semibold text-sm sm:text-lg">
                      Estimate Budget
                    </p>
                    <p className="text-xs text-[#666666]">
                      Plan your adventure, stay on budget: your trusted travel
                      companion.
                    </p>
                    <div className="mt-2 flex items-center justify-center">
                      <div
                        className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center rounded-full"
                        style={{
                          background:
                            "conic-gradient(#80A102 73deg, #D3D3D3 73deg)",
                        }}
                      >
                        <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-full flex flex-col items-center justify-center">
                          <span className="text-lg sm:text-xl font-bold">
                            73%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full m-0 p-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-[1480px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 pb-6 items-center justify-center"
          >
            <div className="w-full h-auto py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="card">
                <div className="px-6">
                  <div className="flex flex-col md:flex-row sm:justify-between md:items-center">
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
                <div className="carousel-container relative">
                  <Carousel
                    className="carousel-custom px-4"
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

export default UserDashboard;
