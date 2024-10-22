import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const UserNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);


  const useBodyScrollLock = () => {
    const bodyStyle = document.body.style;

    useEffect(() => {
      bodyStyle.overflowY = scrollLock ? "hidden" : "auto";

      return () => {
        bodyStyle.overflowY = "auto";
      };
    }, [scrollLock]);
  };
  useBodyScrollLock();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setScrollLock(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        setScrollLock(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      className=" bg-white">
      <div className="font-Manrope px-5 w-full left-0 right-0 border-b-2 border-none">
        <nav className="top-0 right-0 left-0">
          <div className="flex items-center justify-between py-3">
            <div className="xl:pr-40 lg:pr-44 pr-8 xl:px-0">
              <NavLink to="/">
                <img src={logo} alt="" className="h-12 w-36" />
              </NavLink>
            </div>
            <div className="lg:flex items-center hidden gap-3">
              <div>
                <NavLink to="/aichat">
                  <button className="w-auto px-16 font-semibold bg-gradient-to-r from-[#F70A8D] to-[#5B2B84] items-center flex justify-center text-md h-10 mx-2 rounded-3xl bg-[#80A102] text-white shadow-lg">
                    Ask AI
                  </button>
                </NavLink>
              </div>

              
              <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <MdOutlineShare className="pr-1 text-2xl" />
              </button>
              <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <HiOutlineBell className="text-xl" />
              </button>
              <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <AiOutlineExclamationCircle className="text-xl" />
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden w-[36px] h-[36px]"
            >
              {isMenuOpen ? (
                <FaXmark className="pl-[5px] h-7 w-7 text-[#80A102]" />
              ) : (
                <FaBars alt="" className="pl-[5px] h-7 w-7 text-[#80A102]" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="my-10 w-full h-screen top-0 left-0 z-50"
            >
              <div className="flex flex-col justify-center items-center gap-8 cursor-pointer">
                <div className="cursor-pointer mx-4 py-1 pt-4">
                  <NavLink to="/">
                    <button className="text-md font-semibold h-10 px-20 rounded-3xl bg-gradient-to-r from-[#F70A8D] to-[#5B2B84] text-white shadow-lg">
                      Ask AI
                    </button>
                  </NavLink>
                </div>
                
                <div className="flex gap-3 items-center">
                <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <MdOutlineShare className="pr-1 text-2xl" />
                </button>
                <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <HiOutlineBell className="text-xl" />
                </button>
                <button className="h-10 w-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <AiOutlineExclamationCircle className="text-xl" />
                </button>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default UserNav;
