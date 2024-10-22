import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import user_img from "../assets/person12.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    if (!isCollapsed) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const isActiveLink = (path) => location.pathname.startsWith(path);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
       <div
        className={`h-[95%] bg-white transition-all duration-300 rounded-2xl ${
          isCollapsed ? 'w-16' : 'w-52'
        } flex flex-col justify-between shadow-lg`}
      >
        <div className="flex flex-col">
          {!isCollapsed ? (
            <div className="flex items-center gap-3 px-4 py-4">
              <div
                className="cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <img
                  src={user_img}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="text-lg font-semibold">Andrew</div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center py-4 cursor-pointer"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <img
                src={user_img}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
            </div>
          )}
          <hr className="border-t border-gray-200" />

          <Link
            to="/userhome"
            className={`mx-3 mt-4 mb-2 rounded-xl ${
              isActiveLink("/userhome") ? "bg-black text-white" : ""
            }`}
          >
            {!isCollapsed ? (
              <div className="px-4 py-[12px] flex items-center justify-between hover:bg-[#e3f98c86] rounded-xl">
                <IoHomeOutline className="w-5 h-5" />
                <span className="text-sm">Home</span>
              </div>
            ) : (
              <div className="flex justify-center">
                <button className="p-3">
                  <IoHomeOutline className="w-5 h-5" />
                </button>
              </div>
            )}
          </Link>

          <Link
            to="/journeyplanner"
            className={`mx-3 my-2 rounded-xl ${
              isActiveLink("/journeyplanner") ? "bg-black text-white" : ""
            }`}
          >
            {!isCollapsed ? (
              <div className="px-4 py-[12px] flex items-center justify-between hover:bg-[#e3f98c86] rounded-xl">
                <GrNotes className="w-4 h-4" />
                <span className="text-sm">Journey Planner</span>
              </div>
            ) : (
              <div className="flex justify-center">
                <button className="p-3">
                  <GrNotes className="w-4 h-4" />
                </button>
              </div>
            )}
          </Link>

          <div className="mx-3 my-2">
            {!isCollapsed ? (
              <div>
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center justify-between w-full px-4 py-[12px] rounded-xl ${
                    isDropdownOpen ? "bg-black text-white" : "bg-white text-black hover:bg-[#e3f98c86]"
                  }`}
                >
                  <FaRegUser className="w-4 h-4 mr-2" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm">My Profile</span>
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out transform overflow-hidden text-xs mt-2 ${
                    isDropdownOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    to="/dashboard"
                    className={`block px-4 py-3 rounded-xl hover:bg-[#e3f98c86] text-[#666666] ${
                      isActiveLink("/profile") ? "bg-[#e3f98c86]" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/pastjourneys"
                    className={`block px-4 py-3 rounded-xl hover:bg-[#e3f98c86] text-[#666666] ${
                      isActiveLink("/settings") ? "bg-[#e3f98c86]" : ""
                    }`}
                  >
                    Past Journeys
                  </Link>
                  <Link
                    to="/savedplaces"
                    className={`block px-4 py-3 rounded-xl hover:bg-[#e3f98c86] text-[#666666] ${
                      isActiveLink("/logout") ? "bg-[#e3f98c86]" : ""
                    }`}
                  >
                    Saved Places/Routes
                  </Link>
                  <Link
                    to="/profile"
                    className={`block px-4 py-3 rounded-xl hover:bg-[#e3f98c86] text-[#666666] ${
                      isActiveLink("/logout") ? "bg-[#e3f98c86]" : ""
                    }`}
                  >
                    Profile
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <button className="p-3 bg-white text-black rounded-xl">
                  <FaRegUser className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
        {!isCollapsed && (
          <div className="bg-[#80A102] text-white mx-2 rounded-xl mt-auto mb-4">
            <div className="py-[10px]">
              <Link to="/" className="flex items-center justify-center">
                <span className="text-sm">Support & FAQ</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
