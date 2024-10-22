import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Slider4 from "../components/Sliders/Slider4";
import MyFooter from "../components/Footer";
import mask from '../assets/mask.png'
import { NavLink } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
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
              {t("TESTIMONIALS")}
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
          >
            <Slider4 />
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

export default Testimonials;
