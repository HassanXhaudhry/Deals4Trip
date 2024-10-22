import React, { Fragment, useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { Carousel } from "primereact/carousel";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import journey_intro from "../assets/journey_intro.png";
import arrow from "../assets/arrow.png";
import journey_trip1 from "../assets/journey_trip1.png";
import journey_trip2 from "../assets/journey_trip2.png";
import journey_trip3 from "../assets/journey_trip3.png";
import journey_day1 from "../assets/journey_day1.png";
import bulb from "../assets/bulb.png";
import profile_trip1 from "../assets/profile_trip1.png";
import profile_trip2 from "../assets/profile_trip2.png";
import profile_trip3 from "../assets/profile_trip3.png";
import profile_trip4 from "../assets/profile_trip4.png";
import profile_trip5 from "../assets/profile_trip5.png";
import profile_trip6 from "../assets/profile_trip6.png";
import profile_trip7 from "../assets/profile_trip7.png";
import jorney1 from "../assets/journey1.png";
import jorney2 from "../assets/journey2.png";
import jorney3 from "../assets/journey3.png";
import jorney4 from "../assets/journey4.png";
import jorney5 from "../assets/journey5.png";
import jorney6 from "../assets/journey6.png";
import jorney7 from "../assets/journey7.png";
import GoToTop from "../components/GoToTop";

const JourneyPlanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const places = [
    { id: 1, image: jorney1, title: "Desert Safari", location: "Dubai" },
    { id: 2, image: jorney2, title: "Desert Safari", location: "Dubai" },
    { id: 3, image: jorney3, title: "Desert Safari", location: "Dubai" },
    { id: 4, image: jorney4, title: "Desert Safari", location: "Dubai" },
    { id: 5, image: jorney5, title: "Desert Safari", location: "Dubai" },
    { id: 6, image: jorney6, title: "Desert Safari", location: "Dubai" },
    { id: 7, image: jorney7, title: "Desert Safari", location: "Dubai" },
    { id: 8, image: profile_trip1, title: "Desert Safari", location: "Dubai" },
    { id: 9, image: profile_trip2, title: "Desert Safari", location: "Dubai" },
    { id: 10, image: profile_trip3, title: "Desert Safari", location: "Dubai" },
    { id: 11, image: profile_trip4, title: "Desert Safari", location: "Dubai" },
    { id: 12, image: profile_trip5, title: "Desert Safari", location: "Dubai" },
    { id: 13, image: profile_trip6, title: "Desert Safari", location: "Dubai" },
    { id: 14, image: profile_trip7, title: "Desert Safari", location: "Dubai" },
  ];
  const responsiveOptions = [
    {
      breakpoint: '991px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '640px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 640) {
          setVisibleItems(1);
        } else if (window.innerWidth <= 767) {
          setVisibleItems(2);
        } else if (window.innerWidth <= 991) {
          setVisibleItems(4);
        } else {
          setVisibleItems(7);
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
      Math.min(places.length - visibleItems, prevIndex + 1)
    );
  };
  const productTemplate = (places) => (
    <div className="flex gap-8 sm:gap-4 items-center justify-center">
      <div key={places.id} className="relative group m-4">
        <img
          src={places.image}
          alt=""
          className="w-[150px] h-[150px] transition-all duration-300 rounded-3xl ease-in-out group-hover:scale-105"
        />
        <div className="absolute flex flex-col items-center justify-center left-0 md:top-28 top-[100px] rounded-xl w-full h-[35%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
          <p className="text-xs font-semibold">{places.title}</p>
          <div className="flex gap-1 items-center text-xs justify-center">
            <MdOutlineLocationOn />
            {places.location}
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
              <div className="w-full h-full bg-white rounded-xl flex flex-col gap-3">
                <div className="relative w-full">
                  <img
                    src={journey_intro}
                    alt=""
                    className="w-full md:h-[200px] h-[100px]"
                  />
                  <p className="absolute bottom-4 left-4 text-lg px-3 md:text-3xl font-bold text-black">
                    Enchanting UK: A Journey of Riches
                  </p>
                </div>

                <div className="px-4 sm:px-10 py-6">
                  <p className="text-xl font-semibold">Intro</p>
                  <p className="py-2 text-sm sm:text-[14px] text-[#666666]">
                    Embark on a journey through the United Kingdom, where every
                    step leads to a new discovery and every moment is filled
                    with the richness of travel. From the vibrant streets of
                    London to the tranquil beauty of the Scottish Highlands,
                    this adventure promises to leave an indelible mark on your
                    heart and soul. Your days will be filled with exploration,
                    from wandering through local markets and savoring
                    traditional British cuisine to delving into the history and
                    culture at iconic landmarks like the British Museum and
                    Edinburgh Castle. Day trips to Stonehenge, the historic city
                    of Bath, and the breathtaking Scottish Highlands will offer
                    a glimpse into the diverse.
                  </p>
                  <p className="text-xl font-semibold py-4">
                    HIGHLIGHTS OF THE TRIP
                  </p>
                  <div className="flex flex-col lg:flex-row justify-center gap-3 md:p-4 p-2">
                    <div className="w-full lg:w-1/2 bg-[#e3f98c86] rounded-xl px-4 sm:px-8 py-6 sm:py-12 text-[#80A102] flex flex-col justify-center">
                      <div className="flex flex-col gap-4">
                        <p className="text-4xl sm:text-6xl font-Jolly">
                          Your input for this trip
                        </p>
                        <div className="flex items-center gap-2">
                          <img
                            src={arrow}
                            alt=""
                            className="h-4 w-4 sm:h-6 sm:w-6"
                          />
                          <p className="text-sm sm:text-xl font-semibold">
                            Destination is the UK
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src={arrow}
                            alt=""
                            className="h-4 w-4 sm:h-6 sm:w-6"
                          />
                          <p className="text-sm sm:text-xl font-semibold">
                            Travel plan is being created
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center gap-2">
                      <div className="flex flex-col gap-2 w-1/2">
                        <img
                          src={journey_trip1}
                          alt=""
                          className="w-full h-auto object-cover md:block hidden"
                        />
                        <img
                          src={journey_trip2}
                          alt=""
                          className="w-full h-auto object-cover md:block hidden"
                        />
                      </div>
                      <div className="w-1/2">
                        <img
                          src={journey_trip3}
                          alt=""
                          className="w-full h-full object-cover md:block hidden"
                        />
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
        <div className="w-full max-w-[1380px]">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-2 sm:px-6 py-12 items-center justify-center"
          >
            <div className="w-full py-8 sm:py-6 bg-white rounded-xl flex flex-col gap-3">
              <div className="px-4 sm:px-10 text-lg sm:text-xl font-bold">
                YOUR ITINERARY
              </div>
              <div className="md:py-0 py-4 px-4 mx-4 sm:mx-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-gray-300">
                <div className="w-full sm:w-auto">
                  <img
                    src={journey_day1}
                    alt=""
                    className="rounded-xl w-full sm:w-48"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full py-2">
                  <p className="font-semibold text-lg">Day 1</p>
                  <p className="text-xs text-[#666666]">
                    Arrive in the UK and immerse yourself in the vibrant local
                    markets, where you can sample traditional British food and
                    soak in the lively atmosphere. Afterward, check into your
                    accommodation and unwind after your journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-[#80A102] text-white text-xs h-8 w-full sm:w-24 rounded-2xl flex items-center justify-center">
                      Book Hotel
                    </button>
                    <button className="bg-white border border-[#80A102] text-[#80A102] text-xs h-8 w-full sm:w-28 rounded-2xl flex items-center justify-center">
                      Book Activities
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bulb} alt="" className="h-4 w-3" />
                    <p className="text-xs text-[#666666]">
                      If you book a hotel using this link, you pay the same
                      price, and we get a small commission.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="px-10">
                  <div className="flex flex-col md:flex-row sm:justify-between md:items-center md:mx-2 mx-4">
                    <div className="text-xl font-bold mb-4 md:mb-0">
                      Recommended places to stay in London, UK
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
                            activeIndex === places.length - visibleItems
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
                    value={places}
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

              <div className="md:py-0 py-4 px-4 mx-4 sm:mx-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-gray-300">
                <div className="w-full sm:w-auto">
                  <img
                    src={journey_day1}
                    alt=""
                    className="rounded-xl w-full sm:w-48"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full py-2">
                  <p className="font-semibold text-lg">Day 2</p>
                  <p className="text-xs text-[#666666]">
                    Arrive in the UK and immerse yourself in the vibrant local
                    markets, where you can sample traditional British food and
                    soak in the lively atmosphere. Afterward, check into your
                    accommodation and unwind after your journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-[#80A102] text-white text-xs h-8 w-full sm:w-24 rounded-2xl flex items-center justify-center">
                      Book Hotel
                    </button>
                    <button className="bg-white border border-[#80A102] text-[#80A102] text-xs h-8 w-full sm:w-28 rounded-2xl flex items-center justify-center">
                      Book Activities
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bulb} alt="" className="h-4 w-3" />
                    <p className="text-xs text-[#666666]">
                      If you book a hotel using this link, you pay the same
                      price, and we get a small commission.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:py-0 py-4 px-4 mx-4 sm:mx-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-gray-300">
                <div className="w-full sm:w-auto">
                  <img
                    src={journey_day1}
                    alt=""
                    className="rounded-xl w-full sm:w-48"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full py-2">
                  <p className="font-semibold text-lg">Day 3</p>
                  <p className="text-xs text-[#666666]">
                    Arrive in the UK and immerse yourself in the vibrant local
                    markets, where you can sample traditional British food and
                    soak in the lively atmosphere. Afterward, check into your
                    accommodation and unwind after your journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-[#80A102] text-white text-xs h-8 w-full sm:w-24 rounded-2xl flex items-center justify-center">
                      Book Hotel
                    </button>
                    <button className="bg-white border border-[#80A102] text-[#80A102] text-xs h-8 w-full sm:w-28 rounded-2xl flex items-center justify-center">
                      Book Activities
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bulb} alt="" className="h-4 w-3" />
                    <p className="text-xs text-[#666666]">
                      If you book a hotel using this link, you pay the same
                      price, and we get a small commission.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="px-10">
                  <div className="flex flex-col md:flex-row sm:justify-between md:items-center md:mx-2 mx-4">
                    <div className="text-xl font-bold mb-4 md:mb-0">
                      Recommended places to stay in London, UK
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
                            activeIndex === places.length - visibleItems
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
                    value={places}
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

              <div className="md:py-0 py-4 px-4 mx-4 sm:mx-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-gray-300">
                <div className="w-full sm:w-auto">
                  <img
                    src={journey_day1}
                    alt=""
                    className="rounded-xl w-full sm:w-48"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full py-2">
                  <p className="font-semibold text-lg">Day 4</p>
                  <p className="text-xs text-[#666666]">
                    Arrive in the UK and immerse yourself in the vibrant local
                    markets, where you can sample traditional British food and
                    soak in the lively atmosphere. Afterward, check into your
                    accommodation and unwind after your journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-[#80A102] text-white text-xs h-8 w-full sm:w-24 rounded-2xl flex items-center justify-center">
                      Book Hotel
                    </button>
                    <button className="bg-white border border-[#80A102] text-[#80A102] text-xs h-8 w-full sm:w-28 rounded-2xl flex items-center justify-center">
                      Book Activities
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bulb} alt="" className="h-4 w-3" />
                    <p className="text-xs text-[#666666]">
                      If you book a hotel using this link, you pay the same
                      price, and we get a small commission.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:py-0 py-4 px-4 mx-4 sm:mx-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-xl border border-gray-300">
                <div className="w-full sm:w-auto">
                  <img
                    src={journey_day1}
                    alt=""
                    className="rounded-xl w-full sm:w-48"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full py-2">
                  <p className="font-semibold text-lg">Day 5</p>
                  <p className="text-xs text-[#666666]">
                    Arrive in the UK and immerse yourself in the vibrant local
                    markets, where you can sample traditional British food and
                    soak in the lively atmosphere. Afterward, check into your
                    accommodation and unwind after your journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-[#80A102] text-white text-xs h-8 w-full sm:w-24 rounded-2xl flex items-center justify-center">
                      Book Hotel
                    </button>
                    <button className="bg-white border border-[#80A102] text-[#80A102] text-xs h-8 w-full sm:w-28 rounded-2xl flex items-center justify-center">
                      Book Activities
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={bulb} alt="" className="h-4 w-3" />
                    <p className="text-xs text-[#666666]">
                      If you book a hotel using this link, you pay the same
                      price, and we get a small commission.
                    </p>
                  </div>
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

export default JourneyPlanner;
