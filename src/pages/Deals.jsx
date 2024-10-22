import React, { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../styles/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosStar } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import mask from "../assets/mask.png";
import api from "../api/authAPI.js";
import { API_URLS } from "../utils/API_URLS";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals, selectDeals } from "../reducers/dealsSlice.js";
import { data } from "./mockData/dealsData";
import MyFooter from "../components/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoToTop from "../components/GoToTop";
import { useTranslation } from "react-i18next";

const Deals = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const deals = useSelector(selectDeals);

  const previousFilters = [
    { name: t("Apartments"), count: 214 },
    { name: t("Hotels"), count: 21 },
  ];

  const popularFilters = [
    { name: t("Free cancellation"), count: 14 },
    { name: t("Book without credit card"), count: 113 },
    { name: t("No prepayment"), count: 24 },
    { name: t("Hotels"), count: 53 },
    { name: t("Resorts"), count: 54 },
    { name: t("4 stars"), count: 16 },
    { name: t("Hostels"), count: 453 },
    { name: t("Very good: 8+"), count: 551 },
  ];

  const brands = [
    { name: t("Guest Ready"), count: 124 },
    { name: t("Maison Privet"), count: 213 },
    { name: t("Millennium Hotels"), count: 313 },
    { name: t("Rove Hotels"), count: 865 },
    { name: t("Jumeirah"), count: 5544 },
    { name: t("Powered by Archipelago"), count: 1244 },
    { name: t("Rotana Hotels & Resorts"), count: 1244 },
    { name: t("The Address Hotels and Resorts"), count: 523 },
    { name: t("Mövenpick"), count: 876 },
    { name: t("Premier Inn"), count: 121 },
  ];

  const facilities = [
    { name: t("Parking"), count: 124 },
    { name: t("Non-smoking rooms"), count: 213 },
    { name: t("Free WiFi"), count: 313 },
    { name: t("Fitness center"), count: 865 },
  ];
  const funThingsToDo = [
    { name: t("Fitness center"), count: 3252 },
    { name: t("Fitness"), count: 798 },
    { name: t("Sauna"), count: 2352 },
    { name: t("Steam room"), count: 587 },
    { name: t("Fitness/spa locker rooms"), count: 2341 },
  ];
  const guestRating = [
    { name: t("Superb 9+"), count: 1244 },
    { name: t("Very good 8+"), count: 543 },
    { name: t("Good 7+"), count: 3255 },
    { name: t("Pleasant 6+"), count: 4234 },
  ];

  const meals = [
    { name: t("Self catering"), count: 146 },
    { name: t("Breakfast included"), count: 1343 },
    { name: t("All meals included"), count: 1555 },
    { name: t("Breakfast & lunch included"), count: 224 },
    { name: t("Breakfast & dinner included"), count: 524 },
  ];

  const landMarks = [
    { name: t("Burj Khalifa"), count: 2346 },
    { name: t("Dubai Mall"), count: 643 },
  ];

  const roomFacilities = [
    { name: t("Private bathroom"), count: 146 },
    { name: t("Air conditioning"), count: 1343 },
    { name: t("Sea view"), count: 1555 },
    { name: t("Private pool"), count: 224 },
    { name: t("Balcony"), count: 524 },
  ];
  const distanceFromCenterOfDubai = [
    { name: t("Less than 1 km"), count: 146 },
    { name: t("Less than 3 km"), count: 1343 },
    { name: t("Less than 5 km"), count: 1555 },
  ];

  const neighborhood = [
    { name: t("Beach & Coast"), count: 124 },
    { name: t("Dubai Marina"), count: 213 },
    { name: t("Guests' favourite area"), count: 313 },
    { name: t("Downtown Dubai"), count: 865 },
    { name: t("Business Bay"), count: 5544 },
    { name: t("Palm Jumeirah"), count: 1244 },
    { name: t("Bur Dubai"), count: 523 },
    { name: t("Deira"), count: 5544 },
    { name: t("Jumeirah Beach Residence"), count: 1244 },
    { name: t("Sheikh Zayed Road"), count: 523 },
  ];
  const certifications = [
    { name: t("Sustainability certification"), count: 324 },
  ];

  const bedPreference = [
    { name: t("Twin beds"), count: 124 },
    { name: t("Double bed"), count: 213 },
  ];
  const propertyRating = [
    { name: t("4 stars"), count: 124 },
    { name: t("5 stars"), count: 213 },
    { name: t("Unrated"), count: 313 },
  ];
  const onlinePayment = [{ name: t("Accepts online payments"), count: 124 }];
  const reservationPolicy = [
    { name: t("Free cancellation"), count: 124 },
    { name: t("No prepayment"), count: 213 },
  ];
  const propertyType = [
    { name: t("Apartments"), count: 124 },
    { name: t("Entire homes & apartments"), count: 213 },
    { name: t("Hotels"), count: 313 },
    { name: t("Homestays"), count: 865 },
    { name: t("Hostels"), count: 313 },
  ];
  const roomAccessibility = [
    { name: t("Entire unit located on ground floor"), count: 124 },
    { name: t("Upper floors accessible by elevator"), count: 213 },
    { name: t("Entire unit wheelchair accessible"), count: 313 },
    { name: t("Walk-in shower"), count: 865 },
    { name: t("Raised toilet"), count: 5544 },
    { name: t("Lowered sink"), count: 1244 },
  ];
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [selectedDeal, setSelectedDeal] = useState([]);
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Dubai");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isGuestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [value, setValue] = useState(50);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDeals, setFilteredDeals] = useState(deals);

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  const handleGuestsClick = () => {
    setGuestsDropdownOpen(!isGuestsDropdownOpen);
  };

  const handleAdultsChange = (action) => {
    if (action === "increase") {
      setAdults((prev) => prev + 1);
    } else if (action === "decrease" && adults > 1) {
      setAdults((prev) => prev - 1);
    }
  };

  const handleChildrenChange = (action) => {
    if (action === "increase") {
      setChildren((prev) => prev + 1);
    } else if (action === "decrease" && children > 0) {
      setChildren((prev) => prev - 1);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);

    const filtered = deals.filter(
      (deal) => deal.location.toLowerCase().startsWith(value) 
    );
    setFilteredDeals(filtered);
  };

  useEffect(() => {
    setFilteredDeals(deals);
  }, [deals]);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };
  const mapStyles = { height: "200px", width: "100%", borderRadius: "20px" };
  const defaultCenter = { lat: 40.7128, lng: -74.006 };
  const locations = [{ lat: 40.7128, lng: -74.006 }];

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((location) => bounds.extend(location));
    map.fitBounds(bounds);
    window.google.maps.event.trigger(map, "resize");
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sections = {
    previousFilters,
    popularFilters,
    brands,
    facilities,
    // Add other sections...
  };

  const [expandedSections, setExpandedSections] = useState(
    Object.fromEntries(Object.keys(sections).map((key) => [key, false]))
  );

  const handleToggle = (key) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleHotelSelect = (hotel) => {
    const selectedHotelData = { ...hotel };
    navigate("/bookDeal", {
      state: {
        selectedHotel: selectedHotelData,
        selectedCity,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        adults,
        children,
      },
    });
  };
  

  const itemsPerPage = 5;


  const filteredData = deals.filter((place) =>
    place.location.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("API_URL_HERE", {
          headers: {
            "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
            "X-RapidAPI-Host": "YOUR_API_HOST_HERE",
          },
          params: {
            countryIds: "US",
            limit: 10,
          },
        });
        const citiesData = response.data.features.map((feature) => ({
          id: feature.id || feature.properties.GEOID,
          name: feature.properties.NAME || "Unknown City",
        }));
        setCities(citiesData);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

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
      <Navbar />
      <div className="relative">
        <motion.div
          {...fadeInUp}
          className="flex flex-col space-y-4 px-4 sm:px-10 py-8 sm:py-16 items-center"
        >
          <div className="font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] text-[#80A102] leading-tight text-center">
            {t("DEALS")}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="w-full bg-[#F5F5FA] text-black py-8 z-90"
        >
          <div className="flex flex-col items-center justify-center max-w-[1280px] mx-auto">
            <div className="text-center lg:text-4xl md:text-3xl pb-6 text-2xl font-bold">
              {t("Find And Enjoy Your Dream Hotel")}
            </div>
            <div className="w-auto mx-4 md:px-4 px-1 md:py-6 py-4 gap-8 rounded-2xl bg-white shadow-lg border border-gray-200 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 divide-x divide-gray-200">
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373] text-[14px] sm:text-md">
                  {t("Destination")}
                </div>
                <div
                  className="sm:flex flex-col md:flex-row items-center gap-2 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <MdOutlineLocationOn className="text-sm sm:text-xl text-gray-500" />
                  <div className="ext-xs sm:text-[14px]">{selectedCity}</div>
                  <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-90 top-full mt-2 left-0 right-0 bg-white shadow-lg border border-gray-200 rounded-md max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <div
                        key={city.id || city.name}
                        onClick={() => handleCitySelect(city.name)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {city.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4 calendar-container">
                <div className="text-[#737373] text-[14px] sm:text-md">
                  {t("Check In")}
                </div>
                <div
                  className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setIsCheckInOpen(!isCheckInOpen)}
                >
                  <LuCalendarDays className="text-sm sm:text-xl text-gray-500" />
                  <div className="text-xs sm:text-[14px]">
                    {startDate.toDateString()}
                  </div>
                  <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                </div>
                {isCheckInOpen && (
                  <div className="absolute z-90 top-full mt-2 sm:left-0 left-[-120px] bg-white shadow-lg border border-gray-200 rounded-md calendar-dropdown">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        setIsCheckInOpen(false);
                      }}
                      inline
                    />
                  </div>
                )}
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4 calendar-container">
                <div className="text-[#737373] text-[14px] sm:text-md">
                  {t("Check Out")}
                </div>
                <div
                  className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
                >
                  <LuCalendarDays className="text-sm sm:text-xl text-gray-500" />
                  <div className="text-xs sm:text-[14px]">
                    {endDate.toDateString()}
                  </div>
                  <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                </div>
                {isCheckOutOpen && (
                  <div className="absolute z-90 top-full mt-2 left-0 bg-white shadow-lg border border-gray-200 rounded-md calendar-dropdown2">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);
                        setIsCheckOutOpen(false);
                      }}
                      inline
                    />
                  </div>
                )}
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373] text-[14px] sm:text-md">
                  {t("Guests")}
                </div>
                <div
                  className="sm:flex flex-col md:flex-row gap-2 items-center cursor-pointer"
                  onClick={handleGuestsClick}
                >
                  <FaUser className="text-sm sm:text-xl text-gray-400" />
                  <div className="text-xs sm:text-[14px]">{`${adults} adults, ${children} children`}</div>
                  <IoIosArrowDown className="text-md sm:text-2xl text-gray-500" />
                </div>
                {isGuestsDropdownOpen && (
                  <div className="absolute z-100 top-full mt-2 right-0 w-[220px] bg-white shadow-lg border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-center mb-2 gap-4">
                      <div>{t("Adults")}</div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleAdultsChange("decrease")}
                          className="pp-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                        >
                          -
                        </button>
                        <span className="px-4">{adults}</span>
                        <button
                          onClick={() => handleAdultsChange("increase")}
                          className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <div>{t("Children")}</div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleChildrenChange("decrease")}
                          className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                        >
                          -
                        </button>
                        <span className="px-4">{children}</span>
                        <button
                          onClick={() => handleChildrenChange("increase")}
                          className="p-3 w-8 h-8 flex items-center justify-center text-white text-xl font-semibold bg-[#80A102] rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center sm:justify-end px-2 w-full">
                <div className="flex items-center justify-center rounded-full gap-1 sm:ml-0 ml-10 sm:gap-3 w-40 sm:px-4 px-6 py-3 bg-[#80A102] text-white cursor-pointer shadow-lg">
                  <IoSearch className="text-xl" />
                  <button className="text-white font-bold">
                    {t("Search")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center mb-40 md:mt-[100px] mt-[50px]">
          <div className="w-full max-w-[1280px] m-0 p-0">
            <motion.div {...fadeInUp}>
              <div className="relative lg:h-[1770px] h-[3100px] lg:flex flex-col lg:flex-row justify-between gap-4 sm:mx-6 md:mx-4 mx-2">
                <div className="flex relative flex-col lg:w-[40%] w-full h-10  bg-[#80A102] lg:bg-white mr-2 lg:rounded-3xl rounded-[100px] lg:my-0 my-5 text-white lg:text-black font-semibold shadow-md border border-gray-200">
                  <button
                    className="flex gap-2 py-2 items-center justify-center lg:hidden block"
                    onClick={toggleFilterDropdown}
                    style={{ height: "auto" }}
                  >
                    <div>{t("Filter")}</div>
                    <IoIosArrowDown />
                  </button>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`lg:block ${
                        isFilterDropdownOpen ? "block" : "hidden"
                      } absolute w-full bg-white text-black lg:rounded-2xl rounded-[10px] lg:static top-full left-[50%] transform -translate-x-1/2 lg:translate-x-0 z-40`}
                    >
                      <div className="flex flex-col p-4 px-6 lg:rounded-2xl rounded-[10px] gap-4 shadow-gray-300 shadow-xl">
                        <div className="w-full">
                          <LoadScript googleMapsApiKey="AIzaSyCAb150CQ7ShIxMxcHtcxNJhECkUnZ5NZo">
                            <GoogleMap
                              mapContainerStyle={mapStyles}
                              center={defaultCenter}
                              zoom={13}
                              onLoad={onLoad}
                            >
                              {locations.map((location, index) => (
                                <Marker key={index} position={location} />
                              ))}
                            </GoogleMap>
                          </LoadScript>
                        </div>
                        <div className="relative flex items-center justify-center mb-4">
                          <input
                            className="w-full sm:w-auto lg:w-68 h-10 bg-white text-black font-normal rounded-sm border border-gray-400 focus:outline-none text-sm px-2 py-2.5 pl-10"
                            placeholder="Search by location"
                            type="text"
                            value={searchInput}
                            onChange={handleSearch}
                          />
                          <div className="absolute lg:left-[4%] md:left-[35%] sm:left-[25%] left-[5%] top-1/2 transform -translate-y-1/2 text-gray-400">
                            <IoSearch />
                          </div>
                        </div>

                        {Object.entries({
                          previousFilters: t("Your Previous Filters"),
                          popularFilters: t("Popular Filters For This Area"),
                          brands: t("Brands"),
                          facilities: t("Facilities"),
                          guestRating: t("Guest Rating"),
                          funThingsToDo: t("Fun Things To Do"),
                          meals: t("Meals"),
                          landMarks: t("Land Marks"),
                          roomFacilities: t("Room Facilities"),
                          distanceFromCenterOfDubai: t(
                            "Distance From Center Of Dubai"
                          ),
                          neighborhood: t("Neighborhood"),
                          certifications: t("Certifications"),
                          bedPreference: t("Bed Preference"),
                          propertyRating: t("Property Rating"),
                          reservationPolicy: t("Reservation Policy"),
                          propertyType: t("Property Type"),
                          onlinePayment: t("Online payment"),
                          roomAccessibility: t("Room Accessibility"),
                        }).map(([key, label]) => (
                          <div key={key}>
                            <div
                              className="flex justify-between cursor-pointer py-2"
                              onClick={() => handleToggle(key)}
                            >
                              <div>{label}</div>
                              <IoMdArrowDropdown
                                className={`transform transition-transform text-2xl ${
                                  expandedSections[key] ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                            {expandedSections[key] && (
                              <div className="pb-5 border-b border-gray-300">
                                {eval(key).map((item, index) => (
                                  <div
                                    key={index}
                                    className={`flex justify-between gap-4 font-normal ${
                                      index < eval(key).length - 1 ? "pb-5" : ""
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <input
                                        type="checkbox"
                                        id={`checkbox-${item.name}`}
                                        className="h-4 w-4 text-[#80A102] focus:ring-[#80A102] border-gray-300 rounded"
                                      />
                                      <div>{item.name}</div>
                                    </div>
                                    <div>{item.count}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        <div>{t("Your budget (per night)")}</div>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={value}
                          onChange={handleChange}
                          className="w-full h-2 bg-[#a4c61c] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="mt-2 text-gray-700 pb-5 border-b border-gray-300">
                          {value}$
                        </div>

                        <div>{t("Bedrooms And Bathrooms")}</div>
                        <div className="flex flex-col gap-4 pb-5">
                          <div className="flex justify-between">
                            <div className="font-normal">{t("Bedrooms")}</div>
                            <div className="flex gap-5 items-center">
                              <FiMinusCircle
                                onClick={() => handleDecrease("bedrooms")}
                                className="cursor-pointer"
                              />
                              <div>{bedrooms}</div>
                              <FiPlusCircle
                                onClick={() => handleIncrease("bedrooms")}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="font-normal">{t("Bathrooms")}</div>
                            <div className="flex gap-5 items-center">
                              <FiMinusCircle
                                onClick={() => handleDecrease("bathrooms")}
                                className="cursor-pointer"
                              />
                              <div>{bathrooms}</div>
                              <FiPlusCircle
                                onClick={() => handleIncrease("bathrooms")}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex flex-col justify-start items-center w-full xl:gap-4 rounded-2xl lg:gap-24 md:gap-44 gap-52 relative z-0">
                  
                  {filteredDeals.length > 0 ? (
                    filteredDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="flex flex-col w-full xl:h-[325px] lg:h-[325px] md:h-[325px] sm:h-[350px] h-[400px] relative md:flex-row gap-4 rounded-2xl"
                      >
                        <img
                          src={deal.images[0]}
                          alt={deal.name}
                          className="w-full h-[90%] rounded-2xl"
                        />
                        <div className="absolute flex items-center justify-center bg-yellow h-7 w-32 text-xs font-semibold left-0 top-7 text-center rounded-r-2xl">
                          {deal.status === "available"
                            ? "Available Now"
                            : "Sold Out"}
                        </div>
                        <div className="absolute flex items-center justify-center bg-white text-gray-400 lg:left-[28%] md:left-[90%] sm:left-[90%] left-[85%] h-8 w-8 top-6 text-center rounded-full">
                          <FaRegHeart />
                        </div>
                        <div className="absolute right-0 lg:top-0 md:top-[100px] sm:top-[150px] top-[175px] rounded-r-2xl rounded-l-3xl lg:w-[65%] w-full h-[90%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
                          <div className="text-black">
                            <button
                              onClick={() => handleHotelSelect(deal)}
                              className="absolute flex text-white items-center justify-center hover:bg-white hover:text-[#80A102] bg-[#80A102] h-8 sm:w-36 w-32 left-4 top-2 text-center rounded-2xl"
                            >
                              Book Now
                            </button>

                            <div className="flex items-center gap-2 float-right px-3 pt-6">
                              <div className="flex flex-col items-end">
                                <div className="flex">
                                  {renderStars(deal.reviews.length)}
                                </div>
                                <div className="text-gray-600 text-xs">
                                  {deal.reviews.length} Reviews
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col w-full px-2">
                              <div className="text-lg font-bold">
                                {deal.name}
                              </div>
                              <div className="flex items-center gap-1 flex-wrap">
                                <MdOutlineLocationOn className="text-black h-4 w-4" />
                                <div className="text-black text-xs font-semibold">
                                  {deal.location}
                                </div>
                                <NavLink
                                  className="text-[#80A102] font-semibold pl-2"
                                  to={`/map/${deal.location}`}
                                >
                                  Show on map
                                </NavLink>
                              </div>
                            </div>

                            <div className="flex justify-between py-3">
                              <div className="flex flex-col w-full pl-4">
                                <div className="font-semibold sm:text-md text-sm">
                                  Duration: {deal.duration} days
                                </div>
                                <div className="text-gray-700 sm:text-md text-xs">
                                  {deal.description}
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-black text-xs font-semibold py-2">
                                    Start:{" "}
                                    {new Date(
                                      deal.startDate
                                    ).toLocaleDateString()}
                                  </div>
                                  <div className="text-gray-700 text-xs">
                                    End:{" "}
                                    {new Date(
                                      deal.endDate
                                    ).toLocaleDateString()}
                                  </div>
                                  <div className="text-gray-700 text-xs underline">
                                    {deal.availableSpots} spots available
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col sm:w-[60%] w-[90%] px-2 pt-10">
                                <div className="flex items-center text-gray-700">
                                  <FaPerson /> {deal.availableSpots} people
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="text-black md:text-lg text-md font-semibold">
                                    ${deal.price}
                                  </div>
                                </div>
                                <button className="h-9 w-32 text-xs font-semibold mt-2 rounded-3xl flex items-center justify-center bg-black text-white">
                                  <NavLink to={`/tour/${deal.id}`}>
                                    See Availability
                                  </NavLink>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No deals found for this location.</div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <GoToTop />
      <NavLink
        to="/aichat"
        className="flex items-center justify-center cursor-pointer fixed z-100 right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]"
      >
        <img src={mask} alt="" className="h-10 w-10" />
      </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default Deals;
