import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import img1 from "../assets/building1.png";
import img2 from "../assets/building2.png";
import img3 from "../assets/building3.png";
import girl from "../assets/girl.png";
import mask from "../assets/mask.png";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MyFooter from "../components/Footer";
import GoToTop from "../components/GoToTop";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center py-4 relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-4 sm:px-10 py-12 items-center"
          >
            <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight text-center">
              {t("ABOUT US")}
            </div>
          </motion.div>
          <motion.div {...fadeInUp}>
            <div className="flex flex-col gap-8 lg:gap-20 relative justify-center px-4 sm:px-10">
              <div className="relative flex flex-col gap-8 lg:gap-12 mt-6">
                <img
                  src={img1}
                  alt=""
                  className="w-full max-w-[350px] h-auto rounded-lg mt-2 mx-auto lg:mx-0 order-2"
                />
                <div className="text-3xl z-20 sm:text-4xl lg:text-5xl font-bold w-full lg:w-[550px] text-center lg:text-left lg:absolute lg:top-20 space-y-4 lg:space-y-8 lg:left-40 mt-8 lg:mt-0 order-3">
                  <div>
                    {t("A TRAVEL AGENCY WITH NEW & EXCITING VARIATIONS")}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:gap-10 items-center lg:items-end mt-8 lg:mt-0">
                <img
                  src={img2}
                  alt=""
                  className="w-full max-w-[700px] h-auto z-5 lg:absolute static top-20"
                />
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:mt-10 mt-2">
                  <div className="text-sm text-[#666666] space-y-1 text-center lg:text-left mt-24">
                    <div>
                      {t(
                        "If you are planning a holiday in Dubai, Abu Dhabi, Al Ain, Fujairah, Ajman, RAK, Maldives, Oman, Kenya and Zanzibar with destinations of your choice, just let us know your tourrequirements (number of guests, start date of tour, length of stay, cities and places you want to visit, class of hotel or activities and hospitality you desire) and we will arrange and operate the best tour for you. Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
                      )}
                    </div>
                  </div>
                  <img
                    src={img3}
                    alt=""
                    className="w-52 h-52 mx-auto lg:mx-0 mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-10">
              <NavLink
                to="/"
                className="w-auto px-8 text-sm font-semibold py-3 bg-[#80A102] hover:bg-white hover:text-[#80A102] text-white text-center rounded-3xl shadow-lg"
              >
                {t("View Deals")}
              </NavLink>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <div className="sm:text-2xl text-xl text-center">
                {t("Meet Our Best")}
              </div>
              <div className="text-4xl sm:text-6xl lg:text-[80px] text-[#80A102] font-bold text-center">
                {t("Tour Guide")}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center sm:gap-20 gap-0 px-4">
              <div className="flex flex-col items-center justify-center py-10 w-full md:w-[30%] lg:w-[20%]">
                <img
                  src={girl}
                  alt=""
                  className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                />
                <div className="flex flex-col gap-3 items-center py-8">
                  <div className="flex text-[#80A102] text-xl font-bold">
                    <div className="text-black">NADIA</div>&nbsp;MANNAN
                  </div>
                  <div className="text-lg text-center">
                    {t("SALES DIRECTOR")}
                  </div>
                  <div className="flex gap-3 items-center text-xl">
                    <NavLink to="/">
                      <FaFacebookF />
                    </NavLink>
                    <NavLink to="/">
                      <FaInstagram />
                    </NavLink>
                    <NavLink to="/">
                      <FaYoutube />
                    </NavLink>
                    <NavLink to="/">
                      <FaWhatsapp />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[60%] lg:w-[50%] text-[#666666] py-8 md:py-16 px-2">
                {t(
                  "If you want any help in finding great vacation deals, Nadia will be the best one to help. She loves to travel and share what she knew with her family, friends and colleagues. She enjoys planning their trips so they would enjoy moments that can be unforgettable. Her clients speak with praise for the memories they gain during the trips they planned with Nadia."
                )}
                <br />
                <br />
                <div className="text-[#80A102] italic font-semibold">
                  {t(
                    "What I enjoy the most is reading the amazing blogs published by my clients post their trips! And the referrals I get after that are just a small sign for their confidence in my services."
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <GoToTop />
      <NavLink to='/aichat' className="flex items-center justify-center cursor-pointer fixed z-50 right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]">
            <img src={mask} alt="" className="h-10 w-10" />
          </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default AboutUs;
