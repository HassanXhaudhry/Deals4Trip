import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { IoIosStar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import check from "../../assets/check.png";
import { FaPerson, FaChild } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaThumbsUp } from "react-icons/fa";
import img1 from "../../assets/tonko.png";
import { FaRegHeart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import p from "../../assets/p.png";
import mask from "../../assets/mask.png";
import MyFooter from "../../components/Footer";
import GoToTop from "../../components/GoToTop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import icon1 from "../../assets/Group.png";
import icon2 from "../../assets/health.png";
import icon3 from "../../assets/mob.png";
import icon4 from "../../assets/duration.png";
import icon5 from "../../assets/instant.png";
import icon6 from "../../assets/guide.png";
import { GoDotFill } from "react-icons/go";
import hotel from "../../assets/profile_hotel1.png";

const BookDeal = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };
  const mapStyles = { height: "250px", width: "100%", borderRadius: "20px" };
  const defaultCenter = { lat: 40.7128, lng: -74.006 };
  const locations = [{ lat: 40.7128, lng: -74.006 }];

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((location) => bounds.extend(location));
    map.fitBounds(bounds);
    window.google.maps.event.trigger(map, "resize");
  }, []);

  const location = useLocation();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [roomCount, setRoomCount] = useState(1);

  const pricePerRoom = 72;

  const totalPrice = roomCount * pricePerRoom;

  useEffect(() => {
    if (location.state) {
      const {
        selectedHotel,
        selectedCity,
        startDate,
        endDate,
        adults,
        children,
      } = location.state;
      setSelectedHotel(selectedHotel);
      setSelectedCity(selectedCity);
      setStartDate(startDate ? new Date(startDate) : null);
      setEndDate(endDate ? new Date(endDate) : null);
      setAdults(adults);
      setChildren(children);
    } else {
      console.error(
        "No state found in location. Please navigate from the correct page."
      );
    }
    setLoading(false);
  }, [location]);

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



  const toggleExpansion = useCallback(() => {
    setIsExpanded((prevState) => !prevState);
  }, []);

  if (loading) {
    return (
      <Fragment>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-700">Loading...</p>
        </div>
      </Fragment>
    );
  }

  if (!selectedHotel) {
    return (
      <Fragment>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-[#666666]">
            No hotel selected. Please choose a hotel from the deals page.
          </p>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div className="py-16">
        <motion.div
          {...fadeInUp}
          className="w-full bg-[#F5F5FA] text-black py-4 z-100"
        >
          <div className="flex flex-col items-center justify-between max-w-[1380px] mx-auto">
            <div className="w-auto sm:mx-16 mx-4 p-6 my-6 gap-8 rounded-2xl bg-white shadow-lg border border-gray-200 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 divide-x divide-gray-200">
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373]">Destination</div>
                <div className="text-[14px]">
                  {selectedCity || "Select City"}
                </div>
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373]">Check In</div>
                <div className="text-[14px]">
                  {startDate ? startDate.toDateString() : "Select Date"}
                </div>
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373]">Check Out</div>
                <div className="text-[14px]">
                  {endDate ? endDate.toDateString() : "Select Date"}
                </div>
              </div>
              <div className="relative flex flex-col justify-center gap-2 px-4">
                <div className="text-[#737373]">Guests</div>
                <div className="text-[14px]">
                  {`${adults} adults, ${children} children`}
                </div>
              </div>
              <div className="flex items-center justify-center px-2">
                <div className="flex items-center justify-center rounded-full gap-1 sm:gap-3 w-40 px-2 py-3 bg-[#80A102] text-white cursor-pointer shadow-lg">
                  <IoSearch className="text-xl" />
                  <button className="text-white font-bold">Search</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center py-4 relative">
        <div className="w-full max-w-[1280px] m-0 p-0">
          <motion.div
            {...fadeInUp}
            className="flex flex-col space-y-4 px-10 items-center"
          >
            <div key={selectedHotel.id}>
              <div className="flex flex-col md:flex-row justify-between py-6 md:py-10 gap-4">
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="text-2xl md:text-4xl font-bold">
                    {selectedHotel.name}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[#778088]">
                    <div className="flex items-center gap-2 pt-2">
                      <MdOutlineLocationOn className="flex-shrink-0" />
                      <div>{selectedHotel.location}</div>
                    </div>

                    <div className="w-full sm:w-auto">
                      {selectedHotel.reviews.map((review) => (
                        <div
                          key={review._id}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"
                        >
                          <div className="text-sm text-[#444]">
                            <strong>Rating:</strong> {review.rating} / 5
                          </div>
                          <div className="text-sm text-[#778088]">
                            <strong>Review:</strong> {review.reviewText}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-center justify-between sm:justify-end mt-4 md:mt-0">
                  <FaRegHeart className="text-2xl" />
                  <NavLink to="/bookDeal/reservehotel" className="bg-black text-center text-white px-6 py-2 rounded-3xl">
                    Reserve
                  </NavLink>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 justify-between">
                <div className="rounded-2xl shadow-lg">
                  <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    showThumbs={false}
                    showStatus={false}
                    autoPlay
                    interval={3000}
                  >
                    {selectedHotel.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Hotel Image ${index + 1}`}
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="rounded-2xl shadow-lg">
                  <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    showThumbs={false}
                    showStatus={false}
                    autoPlay
                    interval={3000}
                  >
                    {selectedHotel.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl"
                      >
                        <img
                          src={image}
                          alt={`Hotel Image ${index + 1}`}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-bold text-xl">
                              Guests who stayed here loved
                            </div>
                            <div>
                              {selectedHotel.reviews.map((review) => (
                                <div
                                  key={review._id}
                                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"
                                >
                                  <div className="text-sm text-[#444] absolute top-4 right-4">
                                    <strong>Rating:</strong> {review.rating} / 5
                                  </div>
                                  <div className="text-sm">
                                    {review.reviewText}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>{selectedHotel.person}</div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 justify-between my-10">
                <div className="rounded-2xl shadow-lg bg-[#fdfff4]">
                  <div className="flex md:flex-row flex-col gap-8 items-center justify-between px-6 py-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-2">
                        <img src={icon1} alt="" className="h-3 w-3 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Free cancellation
                          </div>
                          <div className="text-xs">
                            Cancel up to 24 hours in advance to receive a full
                            refund
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img src={icon3} alt="" className="h-4 w-2 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Mobile ticketing
                          </div>
                          <div className="text-xs">
                            Use your phone or print your voucher
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img src={icon5} alt="" className="h-3 w-3 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Instant confirmation
                          </div>
                          <div className="text-xs">
                            Don’t wait for the confirmation!
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex gap-2">
                        <img src={icon2} alt="" className="h-3 w-3 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Health precautions
                          </div>
                          <div className="text-xs">
                            Special health and safety measures apply. Learn more
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img src={icon4} alt="" className="h-3 w-3 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Duration 3.5 hours
                          </div>
                          <div className="text-xs">
                            Check availability to see starting times.
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <img src={icon6} alt="" className="h-3 w-3 mt-1" />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-semibold">
                            Live tour guide in English
                          </div>
                          <div className="text-xs">English</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl shadow-lg my-10">
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
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 justify-between my-10">
                <div className="">
                  <div className="flex md:flex-row flex-col items-center justify-between px-6 py-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Good breakfast</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">2 restaurants</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Free on-site parking</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">View</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Private bathroom</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Shuttle service</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Air conditioning</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Non-smoking rooms</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Shower</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoDotFill />
                        <div className="text-sm">Family rooms</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-4 px-4 shadow-lg rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-4">
                      <div className="md:text-sm text-xs">
                        Hotel chain/brand
                      </div>
                      <div className="font-semibold md:text-xl text-sm">
                        Holiday Inn Express
                      </div>
                    </div>
                    <img src={hotel} alt="" className="w-[60%] rounded-2xl" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 justify-between my-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold">Description</div>
                    <div className="text-[#495560] text-xs">
                      A few steps from Safa Park, this Holiday Inn Express Safa
                      Park is located on the famous Sheikh Zayed Road. It
                      features a rooftop fitness room and a free bus to La Mer
                      Beach and Dubai Mall (subject to availability). The
                      spacious rooms of Holiday Inn Express Safa Park are
                      equipped with flat-screen TVs and air conditioning. They
                      are decorated in earthy tones, and feature contemporary
                      furniture and abstract art. International cuisine is
                      served for lunch and dinner in the Great Room, which also
                      serves a buffet breakfast including cereals and fruit.
                      Holiday Inn Express Safa Park. has a 24-hour convenience
                      store and Muchachas, our Mexican restaurant where you can
                      enjoy delicious tacos and margaritas among many other
                      things. Dubai International Airport is about 11 km from
                      the Holiday Inn Express Safa Park, and the hotel offers a
                      shuttle service at an added fee. Couples particularly like
                      the location — they rated it 8.7 for a two-person trip.
                      Distance in property description is calculated using ©
                      OpenStreetMap
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold">
                      What is included / not included
                    </div>
                    <div className="flex justify-between text-[#495560]">
                      <div className="flex flex-col gap-2">
                        <div className="text-lg font-semibold">Includes</div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Fitness center</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Non-smoking rooms</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">2 restaurants</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">
                            Facilities for disabled guests
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Free parking</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Family rooms</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">24-hour front desk</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Bar</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">FGood breakfast</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-lg font-semibold">
                          Not includes
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">
                            Double-decker Routemaster tour
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">
                            Short trip along the River Thames
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Changing of the Guard</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <GoDotFill />
                          <div className="text-sm">Gratuities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 rounded-2xl md:px-8 px-4 py-6 bg-[#fdfff4]">
                  <div className="md:text-2xl text-lg font-bold">
                    Property highlights
                  </div>
                  <div>Perfect for a 1-night stay!</div>
                  <div className="flex gap-1 items-center">
                    <MdOutlineLocationOn />
                    <div className="text-xs">
                      Top location: Highly rated by recent guests(8.6)
                    </div>
                  </div>
                  <div className="md:text-xl text-lg font-bold">
                    Breakfast info
                  </div>
                  <div className="md:text-sm text-xs">Continental, Buffet</div>
                  <div className="md:text-xl text-lg font-bold">
                    Rooms with:
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdOutlineLocationCity />
                    <div className="md:text-sm text-xs">City view</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={p} alt="" className="w-5 h-5" />
                    <div className="md:text-sm text-xs">
                      Free private parking available at the hotel
                    </div>
                  </div>
                  <div className="md:text-xl text-lg font-bold">
                    Loyal customers
                  </div>
                  <div className="flex gap-1 items-center">
                    <RiCustomerService2Fill />
                    <div className="md:text-sm text-xs">
                      There are more repeat guests here than most other
                      properties.
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <NavLink to="/bookDeal/reservehotel" className="bg-black w-[80%] py-3 rounded-3xl text-center text-white">
                    Reserve
                  </NavLink>
                  </div>
                </div>
              </div>

              {selectedHotel.overview && (
                <div className="flex flex-col gap-4 items-start">
                  <div className="text-2xl font-bold">Overview</div>
                  <hr className="w-full border-t-1 border-gray-300 my-2" />

                  <div className="text-[#666666]">
                    {isExpanded
                      ? selectedHotel.overview
                      : selectedHotel.overview
                          .split("\n")
                          .slice(0, 5)
                          .join("\n")}
                  </div>

                  <button
                    className="text-[#80A102] underline"
                    onClick={toggleExpansion}
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="px-2 sm:px-10 py-10">
            <div className="text-2xl font-bold">Available Rooms</div>
            <div
              className="py-4 my-4 px-2 border border-gray-300 rounded-lg"
              key={selectedHotel.id}
            >
              <div className="font-semibold">{selectedHotel.roomType}</div>
              <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 pt-5 divide-x divide-gray-300">
                <div className="col-span-1 text-xl">
                  <div className="w-full h-[45px] sm:text-lg text-sm flex items-center justify-center text-white text-center bg-[#80A102]">
                    Room Type
                  </div>
                  <div className="py-10 justify-center items-center gap-4 flex flex-col">
                    {selectedHotel.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Hotel image ${index + 1}`}
                        className="w-[70%] h-[70%] object-cover rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-1 text-xl">
                  <div className="w-full h-[45px] sm:text-lg text-sm flex items-center justify-center text-white text-center bg-[#80A102]">
                    {" "}
                    Benefits
                  </div>
                  <div className="col-span-1 py-10 justify-center sm:ml-6 ml-3">
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="font-semibold">Your price includes:</div>
                      <div className="flex gap-2 items-center text-[#666666]">
                        <div>
                          <img src={check} alt="" className="w-5 h-5" />
                        </div>
                        <div className="font-normal">Pay at the hotel</div>
                      </div>
                      <div className="flex gap-2 items-center text-[#666666]">
                        <div>
                          <img src={check} alt="" className="w-5 h-5" />
                        </div>
                        <div className="font-normal">
                          Pay nothing until{" "}
                          {startDate
                            ? startDate.toLocaleDateString()
                            : "check-in date"}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center text-[#666666]">
                        <div>
                          <img src={check} alt="" className="w-5 h-5" />
                        </div>
                        <div className="font-normal">
                          Free cancellation before{" "}
                          {endDate
                            ? endDate.toLocaleDateString()
                            : "check-out date"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 text-xl">
                  <div className="w-full h-[45px] sm:text-lg text-sm flex items-center justify-center text-white text-center bg-[#80A102]">
                    {" "}
                    Sleeps{" "}
                  </div>
                  <div className="flex py-10 gap-2 items-baseline justify-center sm:ml-6 ml-3">
                    {[...Array(adults)].map((_, index) => (
                      <FaPerson key={`adult-${index}`} className="text-2xl" />
                    ))}
                    {[...Array(children)].map((_, index) => (
                      <FaChild key={`child-${index}`} className="text-xl" />
                    ))}
                  </div>
                </div>
                <div className="col-span-1 text-xl">
                  <div className="w-full h-[45px] flex items-center justify-center text-white text-center bg-[#80A102] sm:text-lg text-sm">
                    Price for 5 nights
                  </div>
                  <div className="flex flex-col gap-2 py-10 justify-center sm:ml-6 ml-3">
                    <div className="text-md font-semibold">
                      {selectedHotel.price}
                    </div>
                    <div className="text-sm font-normal text-[#666666]">
                      Per room for 5 nights
                    </div>
                  </div>
                </div>

                <div className="col-span-1 text-xl">
                  <div className="w-full h-[45px] flex items-center justify-center text-white text-center bg-[#80A102] sm:text-lg text-sm">
                    Select Rooms
                  </div>
                  <div className="flex flex-col gap-2 py-10 justify-center sm:ml-6 ml-3">
                    <label
                      htmlFor="roomCount"
                      className="text-sm font-normal text-[#666666]"
                    >
                      Number of Rooms:
                    </label>
                    <select
                      id="roomCount"
                      className="px-2 py-1 sm:w-36 w-32 border border-gray-300 rounded-md font-normal"
                      value={roomCount}
                      onChange={(e) => setRoomCount(e.target.value)}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-span-1 text-xl font-bold">
                  <div className="w-full h-[45px] sm:text-lg text-sm flex items-center justify-center text-white text-center bg-[#80A102]"></div>
                  <div className="flex flex-col gap-2 justify-center sm:ml-6 ml-3 py-16">
                    <div className="text-md font-normal sm:text-lg text-[16px]">
                      {" "}
                      {roomCount} rooms for
                    </div>
                    <div className="text-md font-semobold text-[#80A102]">
                      {totalPrice} AED
                    </div>
                    <button className="flex text-white items-center justify-center my-4 font-normal text-sm px-2 py-2 sm:gap-2 gap-0 bg-[#80A102] sm:h-12 h-10 md:w-40 sm:w-36 w-32 rounded-3xl">
                      <NavLink to={selectedHotel.availability}>
                        Select Room
                      </NavLink>
                      <GoArrowUpRight className="h-6 w-6" />
                    </button>
                    <ul className="list-disc font-normal text-sm pl-2">
                      <p className="font-semibold">
                        You'll be taken to the next step
                      </p>
                      <li>Confirmation is immediate</li>
                      <li>No registration required</li>
                      <li>No booking or credit card fees!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="px-4 sm:px-6 py-10 mb-10">
            <div className="text-2xl font-bold">Customer Reviews</div>
            <div className="py-4 my-4 px-2 border border-gray-300 rounded-lg">
              <div className="flex flex-col gap-4 pb-3 px-4">
                {selectedHotel.reviews.map((review, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="font-medium text-lg">
                      {review.reviewText}
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                ))}
              </div>

              <hr className="border-t border-gray-300 mb-4" />
              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="font-semibold px-4 md:text-xl text-lg">User Review</div>
                <div className="flex flex-wrap gap-2 text-xs justify-center items-center">
                  <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-gray-400 hover:bg-[#80A102] hover:text-white bg-white text-[#666666] shadow-lg">
                    Newest
                  </button>
                  <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-gray-400 hover:bg-[#80A102] hover:text-white bg-white text-[#666666] shadow-lg">
                    Old
                  </button>
                  <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-gray-400 hover:bg-[#80A102] hover:text-white bg-white text-[#666666] shadow-lg">
                    Max Price
                  </button>
                  <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-gray-400 hover:bg-[#80A102] hover:text-white bg-white text-[#666666] shadow-lg">
                    Min Price
                  </button>
                </div>
              </div>
              <hr className="border-t border-gray-300 mt-4" />

              <div className="flex flex-col gap-6 items-center">
                <div className="flex lg:flex-row flex-col justify-around py-6 divide-x divide-gray-300">

                  <div className="flex flex-col md:flex-row items-center justify-center py-8 gap-8 px-8">
                      <img src={img1} alt="" className=" w-[90%] h-[70%]" />
                    <div className="flex flex-col gap-2 items-start">
                      <div className="font-semibold text-xl">Tonko</div>
                        <div>March 2022</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 px-6">
                    <div className="text-xl font-semibold">
                      Nice, clean, friendly hotel, close to the center
                    </div>
                    <div>
                      Nice two level apartment in great London location. Located
                      in quiet small street, but just 50 meters from main street
                      and bus stop. Tube station is short walk, just like two
                      grocery stores.
                    </div>
                    <button className="flex gap-2 text-gray-500 items-center">
                      <div>
                        <FaThumbsUp />
                      </div>
                      <div>Helpful</div>
                    </button>
                  </div>
                </div>
                <button className="underline text-[#80A102] text-xl">
                  View more
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <GoToTop />
      <NavLink
            to="/aichat"
            className="flex items-center justify-center cursor-pointer fixed z-50 right-5 bottom-5 bg-[#80A102] w-[60px] rounded-full h-[60px]"
          >
            <img src={mask} alt="" className="h-10 w-10" />
          </NavLink>
      <MyFooter />
    </Fragment>
  );
};

export default BookDeal;
