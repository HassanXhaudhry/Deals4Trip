import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import bg from "../assets/blog_bg.png";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import mask from "../assets/mask.png";
import { NavLink } from "react-router-dom";
import MyFooter from "../components/Footer";
import GoToTop from "../components/GoToTop";
import { useTranslation } from "react-i18next";
import profile_trip1 from "../assets/profile_trip1.png";
import profile_trip2 from "../assets/profile_trip2.png";
import profile_trip3 from "../assets/profile_trip3.png";
import profile_trip4 from "../assets/profile_trip4.png";
import profile_trip5 from "../assets/profile_trip5.png";
import profile_trip6 from "../assets/profile_trip6.png";
import profile_trip7 from "../assets/profile_trip7.png";

const Blogs = () => {
  const { t } = useTranslation();
  const blogs = [
    { id: 1, image: profile_trip1, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 2, image: profile_trip2, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 3, image: profile_trip3, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 4, image: profile_trip4, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 5, image: profile_trip5, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 6, image: profile_trip6, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 7, image: profile_trip7, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
    { id: 8, image: profile_trip2, title: t("Desert Safari"), description: t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.") },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-4 sm:px-10 pt-16 items-center"
          >
            <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight text-center">
              {t("BLOGS")}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="relative mx-auto max-w-7xl">
              <img
                src={bg}
                alt=""
                className="w-full sm:py-0 py-4 h-[1100px] sm:h-[1000px] md:h-[900px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 overflow-y-auto">
                <div className="flex flex-col gap-10 md:gap-20 md:flex-row items-center max-w-6xl w-full mx-auto">
                  <div className="w-full md:w-1/2 flex justify-center md:pt-0 pt-10 md:justify-end items-center mb-4 md:mb-0">
                    <img
                      src={img1}
                      alt=""
                      className="w-[80%] sm:w-[90%] md:w-[100%] h-auto max-h-[400px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center md:text-left md:items-start md:pl-8 w-full md:w-3/1">
                    <div className="text-[#666666] mb-2 text-sm sm:text-base">
                      {t("About Deals4Trip")}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      {t("World Best Travel Agency Company Since 2012")}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base">
                      {t(
                        "At Deals4Trip, we believe that your next adventure should be both unforgettable and affordable. Whether you're planning a relaxing beach vacation, an adventurous mountain trek, or a cultural city escape, our travel agency offers unbeatable packages to suit every traveler’s needs. From discounted flights and luxurious hotel stays to guided tours and unique experiences, we take care of all the details so you can focus on making memories. Our handpicked deals ensure you get the best value without compromising on quality. Start exploring the world with Deals4Trip your perfect journey is just a click away!"
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <NavLink
                    to="/"
                    className="w-auto px-8 text-sm font-semibold h-auto py-3 bg-[#80A102] text-white hover:bg-white hover:text-[#80A102] text-center rounded-3xl shadow-lg"
                  >
                    {t("Find Tours")}
                  </NavLink>
                </div>

                <div className="flex flex-col sm:flex-row my-10 sm:items-center items-start w-full">
                  <div className="w-full sm:w-1/3 flex sm:justify-start justify-center">
                    <img
                      src={img2}
                      alt=""
                      className="w-[50%] sm:w-[60%] md:w-[70%] h-auto"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start">
                    <div className="text-lg sm:text-lg md:text-xl font-bold mb-4 text-center sm:text-left">
                      {t("Find Your Best Destination")}
                    </div>
                    <img src={img3} alt="" className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-8 px-8 mb-40 items-center justify-center">
            {blogs.map((trip) => (
              <div key={trip.id} className="relative group md:m-6 m-4">
                <img
                  src={trip.image}
                  alt=""
                  className="w-full h-auto py-12 transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute flex flex-col items-center justify-center px-2 rounded-xl left-0 lg:bottom-[-5px] bottom-[-10px] w-full h-[45%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
                  <p className="text-lg font-semibold">{trip.title}</p>
                  <p className="text-xs text-center">{trip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GoToTop />
      <NavLink to='/aichat' className="flex items-center justify-center cursor-pointer z-50 fixed right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]">
        <img src={mask} alt="" className="h-10 w-10" />
      </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default Blogs;
