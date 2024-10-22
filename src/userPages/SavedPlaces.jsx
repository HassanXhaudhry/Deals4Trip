import React, { Fragment } from "react";
import UserNav from "../components/UserNav";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import img1 from "../assets/slider2_1st.png";
import img2 from "../assets/slider2_2nd.png";
import img3 from "../assets/slider2_3rd.png";
import img4 from "../assets/slider2_4th.png";
import GoToTop from "../components/GoToTop";

const SavedPlaces = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const data = [
    {
      id: 1,
      img: img1,
      title: "Desert Safari",
      duration: "7 Days",
      start: 5,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
    {
      id: 2,
      img: img2,
      title: "Baku and Georgia",
      duration: "7 Days",
      start: 3,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
    {
      id: 3,
      img: img3,
      title: "Staycation",
      duration: "7 Days",
      start: 4,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
    {
      id: 4,
      img: img4,
      title: "Arabian deserts",
      duration: "7 Days",
      start: 2,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
    {
      id: 5,
      img: img1,
      title: "Staycation",
      duration: "7 Days",
      start: 4,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
    {
      id: 6,
      img: img2,
      title: "Arabian deserts",
      duration: "7 Days",
      start: 2,
      rating: 4.8,
      description: "Exceptional 3,014 reviews",
      description1: "Starting from",
      description2: "AED 20.86",
    },
  ];

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

  return (
    <Fragment>
      <UserNav />
      <div className="w-full flex min-h-screen bg-slate-100">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[1480px]">
            <motion.div
            {...fadeInUp} className="flex flex-col px-4 sm:px-10 py-6">
              <div className="flex flex-col w-full gap-4 rounded-xl p-4 bg-white">
                <p className="md:text-2xl text-xl font-bold px-10">
                  Saved Places
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-2">
                  {data.map((product) => (
                    <div
                      key={product.id}
                      className="product-item flex flex-col items-center"
                    >
                      <div className="product-image mx-[-10px] sm:mx-3 relative">
                        <div className="absolute flex items-center justify-center bg-yellow h-7 w-28 top-4 text-center rounded-r-2xl">
                          Breakfast
                        </div>
                        <button className="absolute flex items-center justify-center bg-red-700 text-white right-4 h-8 w-8 top-4 text-center rounded-full">
                          <FaRegHeart />
                        </button>
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-60 h-60 rounded-2xl"
                        />
                      </div>
                      <div className="product-details pt-4">
                        <h4 className="product-title font-bold">
                          {product.title}
                        </h4>
                        <div className="text-xs text-gray-500">
                          {product.duration}
                        </div>
                        <div className="flex items-center justify-start gap-2 py-2">
                          <div className="h-9 w-9 bg-[#80A102] flex justify-center items-center text-white text-center font-semibold">
                            {product.rating}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex">
                              {renderStars(product.start)}
                            </div>
                            <div className="text-gray-500">
                              {product.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="product-description font-semibold">
                            {product.description1}
                          </div>
                          <div className="product-description text-[#80A102] text-xs font-semibold pt-[2px]">
                            {product.description2}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="md:text-2xl text-xl font-bold p-10">
                  Saved Routes
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-2"></div>
              </div>
            </motion.div>
          </div>
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

export default SavedPlaces;
