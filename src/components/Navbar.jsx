import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaXmark,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa6";
import { MdPhoneInTalk, MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(localStorage.getItem("languageCode") || "en");
    }
  }, [i18n]);

  const changeLanguage = (lng, lang) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lang);

    localStorage.setItem("selectedLanguage", lang);
    localStorage.setItem("languageCode", lng);

    if (lng === "ar") {
      document.body.text = "rtl";
    } else {
      document.body.text = "ltr";
    }

    setIsLanguageDropdownOpen(false);
  };

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
    <header className="font-Manrope w-full left-0 right-0 border-b-2 border-none">
      <nav className="bg-white top-0 right-0 left-0">
        <div className="hidden lg:flex items-center justify-between border-b-[1px] py-2 px-6 mx-1 text-[#666666] text-[13px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <MdPhoneInTalk className="h-5 w-5" />
              <div>+123 456 7890</div>
            </div>
            <div className="flex items-center gap-2">
              <MdMailOutline className="h-5 w-5" />
              <div>marketing@bztravel.com.vn</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>Social Share</div>
            <NavLink to="/">
              <FaFacebookF className="h-4 w-4" />
            </NavLink>
            <NavLink to="/">
              <FaXTwitter className="h-4 w-4" />
            </NavLink>
            <NavLink to="/">
              <FaInstagram className="h-4 w-4" />
            </NavLink>
            <NavLink to="/">
              <FaYoutube className="h-4 w-4" />
            </NavLink>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="lg:flex items-center gap-4 xl:text-[17px] px-4 lg:text-sm cursor-pointer hidden text-md font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("HOME")}
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("ABOUT US")}
            </NavLink>
            <NavLink
              to="/deals"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("DEALS")}
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("TESTIMONIALS")}
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("BLOGS")}
            </NavLink>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("MAP")}
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "text-[#80A102] block py-2"
                  : "text-black block py-2 hover:text-[#80A102]"
              }
            >
              {t("CONTACT US")}
            </NavLink>
          </div>
          <div className="flex justify-center items-center px-4">
            <NavLink to="/">
              <img src={logo} alt="" className="h-12 w-36" />
            </NavLink>
          </div>
          <div className="lg:flex gap-3 mx-4 items-center hidden justify-center text-[#80A102]">
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center justify-center w-auto gap-2 px-8 h-10 rounded-3xl border border-[#666666] bg-white text-[#666666] shadow-gray-200 shadow-lg"
              >
                <div>{selectedLanguage} </div>
                <FaChevronDown className=" text-[#666666] text-xs" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 z-50 w-full px-0 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => changeLanguage("en", "English")}
                  >
                    English
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => changeLanguage("ar", "عربي")}
                  >
                    عربي
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => changeLanguage("fr", "Français")}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <NavLink to="/userhome">
                <button className="w-auto px-4 items-center flex justify-center text-sm h-10 mx-2 rounded-3xl bg-[#80A102] text-white shadow-lg">
                  Become An Explorer
                </button>
              </NavLink>
            </div>
            <div className="cursor-pointer">
              <NavLink to="/login">
                <button className="w-auto px-4 items-center flex justify-center text-sm h-10 rounded-3xl hover:bg-gray-100 hover:border-slate-100 border border-[#666666] bg-white text-black shadow-lg">
                  Login / Register
                </button>
              </NavLink>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden w-[36px] h-[36px] mr-4"
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
            className="mt-0 w-full h-screen top-0 left-0 text-[#80A102] z-100"
          >
            <div className="flex flex-col gap-1 cursor-pointer text-xs">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("HOME")}
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("ABOUT US")}
              </NavLink>
              <NavLink
                to="/deals"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("DEALS")}
              </NavLink>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("TESTIMONIALS")}
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("BLOGS")}
              </NavLink>
              <NavLink
                to="/map"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("MAP")}
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#80A102] block py-2 mx-4 border-b-[1px] font-semibold"
                    : "text-black block py-2 mx-4 border-b-[1px] hover:text-[#80A102] font-semibold"
                }
              >
                {t("CONTACT US")}
              </NavLink>
              <div className="relative flex justify-center items-center mx-4">
                <button
                  onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                  className="flex items-center justify-center w-auto gap-2 px-8 h-10 rounded-3xl border border-[#666666] bg-white text-[#666666] shadow-gray-200 shadow-lg"
                >
                  <div>{selectedLanguage} </div>
                  <FaChevronDown className="text-[#666666] text-xs" />
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full mt-1 z-50 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                      onClick={() => changeLanguage("en", "English")}
                    >
                      English
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                      onClick={() => changeLanguage("ar", "عربي")}
                    >
                      عربي
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                      onClick={() => changeLanguage("fr", "Français")}
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
              <div className="cursor-pointer mx-4 py-1">
                <NavLink to="/userhome">
                  <button className="w-full text-sm h-10 rounded-3xl bg-[#80A102] text-white shadow-lg">
                    Become An Explorer
                  </button>
                </NavLink>
              </div>
              <div className="cursor-pointer mx-4">
                <NavLink to="/login">
                  <button className="w-full text-sm h-10 rounded-3xl border border-[#666666] bg-white text-[#666666] shadow-lg">
                    Login / Register
                  </button>
                </NavLink>
              </div>
              <div className="sm:my-2 my-4 mx-4 flex flex-col items-center sm:gap-3 gap-2 text-[#666666]">
                <div className="flex items-center gap-2">
                  <MdPhoneInTalk className="h-3 w-3" />
                  <div className="text-xs">+123 456 7890</div>
                </div>
                <div className="flex items-center gap-2">
                  <MdMailOutline className="h-3 w-3" />
                  <div className="text-xs">marketing@bztravel.com.vn</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs">Social Share</div>
                  <NavLink to="/">
                    <FaFacebookF className="h-3 w-3" />
                  </NavLink>
                  <NavLink to="/">
                    <FaXTwitter className="h-3 w-3" />
                  </NavLink>
                  <NavLink to="/">
                    <FaInstagram className="h-3 w-3" />
                  </NavLink>
                  <NavLink to="/">
                    <FaYoutube className="h-3 w-3" />
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
