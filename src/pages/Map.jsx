import React, { Fragment } from "react";
import { motion } from "framer-motion";
import mask from "../assets/mask.png";
import { FaRegHeart } from "react-icons/fa";
import map1 from '../assets/map1.png';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "../components/Navbar";
import MyFooter from "../components/Footer";
import { NavLink } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();
    const mapData = [
        {
            id: 1,
            img: map1,
            title: 'NOSSA SENHORA DA CONCEIÇÃO CHURCH, PORTIMÃO',
            description: 'This church was built towards the end of the 15th century. However, it was damaged by the 1755 earthquake; therefore, it had to be rebuilt in the 18th...'
        },
        {
            id: 2,
            img: map1,
            title: 'NOSSA SENHORA DA CONCEIÇÃO CHURCH, PORTIMÃO',
            description: 'This church was built towards the end of the 15th century. However, it was damaged by the 1755 earthquake; therefore, it had to be rebuilt in the 18th...'
        },
        {
            id: 3,
            img: map1,
            title: 'NOSSA SENHORA DA CONCEIÇÃO CHURCH, PORTIMÃO',
            description: 'This church was built towards the end of the 15th century. However, it was damaged by the 1755 earthquake; therefore, it had to be rebuilt in the 18th...'
        },
        {
            id: 4,
            img: map1,
            title: 'NOSSA SENHORA DA CONCEIÇÃO CHURCH, PORTIMÃO',
            description: 'This church was built towards the end of the 15th century. However, it was damaged by the 1755 earthquake; therefore, it had to be rebuilt in the 18th...'
        },
        {
            id: 5,
            img: map1,
            title: 'NOSSA SENHORA DA CONCEIÇÃO CHURCH, PORTIMÃO',
            description: 'This church was built towards the end of the 15th century. However, it was damaged by the 1755 earthquake; therefore, it had to be rebuilt in the 18th...'
        }
    ]
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const mapStyles = {
    height: "700px",
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
      <div className="flex flex-col items-center py-4 relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-4 sm:px-10 py-12 items-center"
          >
            <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight text-center">
              {t("MAP")}
            </div>
          </motion.div>
          <motion.div {...fadeInUp}>
            <div className="flex flex-col relative lg:flex-row mb-24 sm:gap-6 gap-16 items-center justify-center px-4 sm:px-6 py-16 bg-white shadow-lg border border-gray-200 rounded-xl xl:mx-8 lg:mx-6 mx-4">
              <div className="flex flex-col w-full sm:w-[90%] md:[80%] lg:w-[50%]">
                <div className="flex flex-wrap gap-4 text-xs  mb-4">
                  <button className="w-auto px-4 py-2 text-xs sm:text-sm rounded-3xl bg-white hover:bg-[#80A102] hover:text-white shadow-lg">
                  {t("Activities")}
                  </button>
                  <button className="w-auto px-4 py-2 text-xs sm:text-sm rounded-3xl hover:bg-[#80A102] hover:text-white bg-white shadow-lg">
                  {t("Cities")}
                  </button>
                  <button className="w-auto px-4 py-2 text-xs sm:text-sm rounded-3xl hover:bg-[#80A102] hover:text-white bg-white shadow-lg">
                  {t("Regions")}
                  </button>
                  <button className="w-auto px-4 py-2 text-xs sm:text-sm rounded-3xl hover:bg-[#80A102] hover:text-white bg-white shadow-lg">
                  {t("Stories")}
                  </button>
                  <button className="w-auto px-4 py-2 text-xs sm:text-sm rounded-3xl hover:bg-[#80A102] hover:text-white bg-white shadow-lg">
                  {t("Itineraries")}
                  </button>
                </div>
                <div className="space-y-3">
      {mapData.map(item => (
        <div key={item.id} className="flex flex-col relative md:flex-row items-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="relative w-full md:w-2/3">
            <img src={item.img} alt={item.title} className="w-full h-auto rounded-lg object-cover" />
            <button className='absolute text-xs flex items-center justify-center bg-white hover:bg-[#80A102] hover:text-white h-7 w-28 top-2 left-1 text-center rounded-3xl'>
            {t("Add to trip")}
            </button>
            <button className='absolute flex items-center justify-center bg-white text-gray-400 right-2 h-8 w-8 top-2 text-center rounded-full'>
              <FaRegHeart />
            </button>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 w-full">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-xs mt-2 text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
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
            </div>
          </motion.div>
        </div>
      </div>
      <GoToTop />
      <NavLink
            to="/aichat"
            className="flex items-center justify-center cursor-pointer z-50 fixed right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]"
          >
            <img src={mask} alt="" className="h-10 w-10" />
          </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default Map;
