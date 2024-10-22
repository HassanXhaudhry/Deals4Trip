import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import mask from "../assets/mask.png";
import { Formik } from "formik";
import * as Yup from "yup";
import MyFooter from "../components/Footer";
import {
  MdPhoneInTalk,
  MdMailOutline,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { NavLink } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const mapStyles = {
    height: "500px",
    width: "100%",
    borderRadius: "20px",
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };
  const locations = [
    { lat: 40.712776, lng: -74.005974 },
    { lat: 40.758896, lng: -73.98513 },
    { lat: 40.729515, lng: -73.99646 },
  ];

  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-4 sm:px-10 py-8 sm:py-16 items-center"
          >
            <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight text-center">
              {t("CONTACT US")}
            </div>
          </motion.div>
          <motion.div {...fadeInUp}>
            <div className="flex flex-col relative lg:flex-row mb-24 sm:gap-2 gap-16 items-center justify-center px-4 sm:px-12 py-16 bg-white shadow-lg border border-gray-200 rounded-xl sm:mx-16 mx-4">
              <div className="flex flex-col w-full sm:w-[90%] md:[80%] lg:w-[50%]">
                <div className="flex flex-col items-start">
                  <div className="text-2xl sm:text-4xl font-semibold text-[#80A102]">
                    {t("Contact Us")}
                  </div>
                  <div className="text-xs sm:text-sm">
                    {t("We are here for you! How can we help?")}
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string()
                      .email("Email must be valid")
                      .required("Email is required"),
                    message: Yup.string().required("Message is required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                  }}
                >
                  {(formik) => (
                    <form
                      className="flex flex-col gap-4 mt-6"
                      onSubmit={formik.handleSubmit}
                    >
                      <div>
                        <p className="pb-1 text-sm font-semibold">{t("Name")}</p>
                        <div className="relative flex">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            id="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <p className="pb-1 text-sm font-semibold">{t("Email")}</p>
                        <div className="relative flex">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <p className="pb-1 text-sm font-semibold">{t("Message")}</p>
                        <div className="relative flex">
                          <textarea
                            placeholder="Type message"
                            name="message"
                            id="message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className="w-full sm:w-[400px] h-24 text-[11px] border px-2 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 resize-none"
                          />
                        </div>
                        {formik.touched.message && formik.errors.message ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.message}
                          </div>
                        ) : null}
                      </div>
                      <button
                        type="submit"
                        className="w-36 px-7 text-sm font-semibold h-auto py-2 bg-[#80A102] text-white hover:bg-white hover:text-[#80A102] hover:border-none text-center rounded-3xl shadow-lg"
                      >
                        {t("Submit")}
                      </button>
                    </form>
                  )}
                </Formik>
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <div className="flex items-center">
                    <MdPhoneInTalk className="text-[#80A102] mr-1" />
                    <div className="text-xs">+971 4 5124150</div>
                  </div>
                  <div className="flex items-center">
                    <MdMailOutline className="text-[#80A102] mr-1" />
                    <div className="text-xs">info@deals4trip.com</div>
                  </div>
                  <div className="flex items-center">
                    <MdOutlineLocationOn className="text-[#80A102] mr-1" />
                    <div className="text-xs">{t("Level 2902, Marina Plaza, Dubai, UAE")}</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <LoadScript googleMapsApiKey="AIzaSyCAb150CQ7ShIxMxcHtcxNJhECkUnZ5NZo">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                  >
                    {locations.map((location, index) => (
                      <Marker key={index} position={location} />
                    ))}
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className="absolute flex flex-col gap-3 items-center justify-center w-10 h-40 bg-[#80A102] right-0 sm:bottom-1/3 bottom-1/2 z-100 rounded-l-xl">
                <NavLink to='/' className='w-6 h-6 rounded-full bg-white flex items-center justify-center'><FaFacebookF className="text-[#80A102]"/></NavLink>
                <NavLink to='/' className='w-6 h-6 rounded-full bg-white flex items-center justify-center'><FaInstagram className="text-[#80A102]"/></NavLink>
                <NavLink to='/' className='w-6 h-6 rounded-full bg-white flex items-center justify-center'><FaLinkedin className="text-[#80A102]"/></NavLink>
                <NavLink to='/' className='w-6 h-6 rounded-full bg-white flex items-center justify-center'><FaXTwitter className="text-[#80A102]"/></NavLink>
              </div>
            </div>
          </motion.div>
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

export default ContactUs;
