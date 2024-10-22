import React, { Fragment, useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { BsExclamationTriangle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { IoMdAlarm } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import GoToTop from "../../components/GoToTop";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import trans from "../../assets/trans.png";
import mask from "../../assets/mask.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyFooter from "../../components/Footer";
import creditCard from "../../assets/creditCard.png";
import gPay from "../../assets/gPay.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import card7 from "../../assets/card7.png";

const CompleteBooking = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [selectedHotel, setSelectedHotel] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  const handleConsentChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
  };

  const validationSchema = Yup.object().shape({
    cardholder_name: Yup.string()
      .min(3, "Name is too short")
      .required("Cardholder's name is required"),
    expiry_date: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)")
      .required("Expiry date is required"),
    card_number: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    cvc: Yup.string()
      .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
      .required("CVC is required"),
  });

  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form submitted successfully!");
  };

  const handlePayChange = (option) => {
    setSelectedOptions(option);
  };

  const handleCheckBoxChange = (option) => {
    setSelectedOption(option);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const validateNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number)) {
      setError("Invalid phone number. Please enter 10 digits.");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
  };

  const handleBlur = () => {
    validateNumber();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateNumber()) {
      console.log("Phone number submitted:", number);
      setSubmitted(true);
      setNumber("");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="w-full py-3 bg-[#fdfff4]">
        <div className="flex md:flex-row flex-col px-2 gap-2 items-center justify-center">
          <BsExclamationTriangle />
          <div className="text-xs text-center">
            Check the latest COVID-19 restrictions before you travel.
          </div>
          <Link to="/" className="text-xs underline text-blue-400">
            Learn more
          </Link>
        </div>
      </div>

      <div className="py-16">
        <motion.div {...fadeInUp}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center px-2 py-6 w-full">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <div className="w-6 h-6 flex items-center justify-center bg-[#80A102] rounded-full text-white text-sm font-medium">
                  <TiTick />
                </div>
                <div className="text-sm font-semibold">Your selection</div>
              </div>
              <div className="h-8 w-px sm:h-px sm:w-36 bg-gray-300 my-2 sm:my-0 sm:mx-4"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <div className="w-6 h-6 flex items-center justify-center bg-[#80A102] rounded-full text-white text-sm font-medium">
                  <TiTick />
                </div>
                <div className="text-sm font-semibold">Your details</div>
              </div>
              <div className="h-8 w-px sm:h-px sm:w-36 bg-gray-300 my-2 sm:my-0 sm:mx-4"></div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full text-white bg-[#80A102] text-sm font-medium">
                  3
                </div>
                <div className="text-sm font-semibold">Final step</div>
              </div>
            </div>
          </div>

          <div className=" w-full flex md:flex-row flex-col justify-center gap-4 px-4 py-10 max-w-[1080px] mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 px-4 py-4 rounded-xl shadow-xl">
                <div className="flex gap-2 items-center">
                  <div>Hotel</div>
                  <div key={selectedHotel?.id}>
                    {selectedHotel?.reviews?.map((review, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="font-semibold text-sm">
                  Holiday Inn Express Dubai Safa Park, anI HG Hotel
                </div>
                <div className="text-xs">
                  Sheikh Zayed Road, Al Wasl, Dubai, United Arab Emirates
                </div>
                <div className="text-xs text-[#80A102]">
                  Great location — 8.6
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <div>Very good</div>
                  <div className="text-[#595959]">3,152 reviews</div>
                </div>
                <div className="flex items-center gap-2 text-[#595959] text-xs">
                  <div className="w-4 h-4 flex items-center text-[9px] pb-1 justify-center border border-black rounded-full text-black font-medium">
                    p
                  </div>
                  <div>Parking</div>
                  <ImSpoonKnife />
                  <div>Restaurant</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl">
                <div className="font-semibold text-sm">
                  Your booking details
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="font-semibold">Check-in</div>
                    <div>Mon 2 Sept 2024</div>
                    <div className="text-[#595959]">14:00 – 18:00</div>
                  </div>
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="font-semibold">Check-out</div>
                    <div>Mon 2 Sept 2024</div>
                    <div className="text-[#595959]">14:00 – 18:00</div>
                  </div>
                </div>
                <div className="text-sm">Total length of stay:</div>
                <div className="text-sm font-semibold">1 night</div>
                <div className="text-xs">You selected</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold">
                    1 room for 2 adults
                  </div>
                  <MdKeyboardArrowDown className="cursor-pointer" />
                </div>
                <div className="text-xs text-[#80A102]">
                  Change your selection
                </div>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">Your price summary</div>
                <div className="flex justify-between items-center text-xs">
                  <div>Original price</div>
                  <div>PKR 14,720.33</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div>Getaway Deal</div>
                  <div>- PKR 2,944.07</div>
                </div>
                <div className="text-xs text-[#6B6B6B]">
                  This property is offering a discount on stays between 29
                  March–30 September 2024.
                </div>

                <div className="my-4 bg-[#fdfff4] flex justify-between gap-20 py-2 px-2 items-center">
                  <div className="font-semibold">Price</div>
                  <div className="flex flex-col gap-1">
                    <div className="text-red-500 line-through text-sm">
                      PKR 14,720
                    </div>
                    <div className="text-sm font-semibold">PKR 11,776.26</div>
                    <div className="text-xs text-[#6B6B6B]">
                      +PKR 3,408 taxes and charges In property currency:
                      AED 155.20
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold">Price information</div>
                <div className="flex items-center gap-2">
                  <FaRegMoneyBillAlt />
                  <div className="text-xs">
                    Excludes PKR 3,408.44 in taxes and charges
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs px-6 text-[#6B6B6B]">
                  <div>5 % VAT</div>
                  <div>PKR 647.69</div>
                </div>
                <div className="flex justify-between items-center text-xs px-6 text-[#6B6B6B]">
                  <div>10 % Property service charge</div>
                  <div>PKR 1,177.63</div>
                </div>
                <div className="flex justify-between items-center text-xs px-6 text-[#6B6B6B]">
                  <div>Tourism fee</div>
                  <div>PKR 758.78</div>
                </div>
                <div className="flex justify-between items-center text-xs px-6 text-[#6B6B6B]">
                  <div>7 % Municipality fee</div>
                  <div>PKR 824.34</div>
                </div>

                <div className="flex items-center gap-2">
                  <GiReceiveMoney />
                  <div className="text-xs">
                    This price is converted to show you the
                    <br /> approximate cost in PKR. You'll pay in AED. <br />{" "}
                    The exchange rate may change <br />
                    before you pay.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={trans} alt="" className="w-3 h-3" />
                  <div className="text-xs">
                    Bear in mind that your card issuer may <br />
                    charge you a foreign transaction fee.
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">
                  How much will it cost to cancel?
                </div>
                <div className="text-sm text-[#80A102]">
                  Free cancellation before 16:00 on 1 Sept
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div>From 16:00 on 1 Sept</div>
                  <div>PKR 12,424 *</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">
                  Your payment details
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div>At the property you'll pay</div>
                  <div>PKR 15,184.70</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">
                  Do you have a promo code?
                </div>
                <div className="text-xs">Enter your promo code</div>
                <form onSubmit={handleSubmit}>
                  <div className="relative flex">
                    <input
                      type="text"
                      placeholder="Enter your promo code"
                      name="number"
                      id="number"
                      value={number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                    />
                  </div>
                  {error && <div className="text-red-700 text-xs">{error}</div>}
                  <button
                    type="submit"
                    className="mt-2 px-6 h-9 bg-white border border-black text-[11px] hover:border-none hover:bg-[#80A102] hover:text-white rounded-3xl transition-colors"
                  >
                    Apply
                  </button>
                  {submitted && !error && (
                    <div className="text-green-600 text-xs mt-2">
                      Phone number submitted successfully!
                    </div>
                  )}
                </form>
              </div>

              <div className="flex flex-col gap-3 px-4 py-4 rounded-xl shadow-xl border border-pink-500 bg-pink-100">
                <div className="flex items-center gap-2">
                  <IoMdAlarm className="text-pink-500" />
                  <div className="text-sm font-semibold">
                    Limited supply for your dates:
                  </div>
                </div>
                <div className="text-xs">
                  2 three-star hotels like this are already unavailable on our
                  site
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">Date of birth</div>
                <div className="flex md:flex-row flex-col gap-3 items-center">
                  <div className="flex flex-col items-start gap-2">
                    <p>Day</p>
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="border rounded-md p-2 w-52 text-sm focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Day
                      </option>
                      {days.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <p>Month</p>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="border rounded-md p-2 w-52 text-sm focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Month
                      </option>
                      {months.map((m, index) => (
                        <option key={index} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <p>Year</p>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="border rounded-md p-2 w-52 text-sm focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">
                  When would you like to pay?
                </div>

                <div className="mt-4 ml-3">
                  <label className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedOption === "property"}
                      onChange={() => handleCheckBoxChange("property")}
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">Pay at the property</div>
                      <div className="text-xs text-[#595959]">
                        Your card won't be charged, we only need your card
                        details to guarantee your booking.
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-4 ml-3">
                  <label className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedOption === "future"}
                      onChange={() => handleCheckBoxChange("future")}
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-1 items-center font-semibold">
                        <div>Pay on</div>
                        <div className="text-[#80A102]">30 Aug 2024</div>
                      </div>
                      <div className="text-xs text-[#595959]">
                        Booking.com will facilitate your payment. We’ll
                        automatically charge your selected card on 30 Aug 2024.
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-4 ml-3">
                  <label className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedOption === "now"}
                      onChange={() => handleCheckBoxChange("now")}
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">Pay now</div>
                      <div className="text-xs text-[#595959]">
                        You'll pay with Booking.com when you complete this
                        booking. You can cancel before 1 September 2024 for a
                        full refund.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2 px-4 py-4 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">
                  How would you like to pay?
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex gap-4 p-4 w-40 rounded-xl items-start shadow-xl my-4">
                    <input
                      type="checkbox"
                      checked={selectedOptions === "creditCard"}
                      onChange={() => handlePayChange("creditCard")}
                    />
                    <img src={creditCard} alt="Credit Card" />
                  </div>

                  <div className="flex gap-4 p-4 w-40 rounded-xl items-start shadow-xl my-4">
                    <input
                      type="checkbox"
                      checked={selectedOptions === "gPay"}
                      onChange={() => handlePayChange("gPay")}
                    />
                    <img src={gPay} alt="Google Pay" className="w-20 h-20" />
                  </div>
                </div>

                <div className="flex items-center gap-20 px-10 text-sm font-semibold">
                  <div>New Card</div>
                  <div>Google Pay</div>
                </div>

                <div className="font-semibold py-2 pt-6">New Card</div>
                <div className="flex gap-4 items-center">
                  <img src={card1} alt="" />
                  <img src={card2} alt="" />
                  <img src={card3} alt="" />
                  <img src={card4} alt="" />
                  <img src={card5} alt="" />
                  <img src={card6} alt="" />
                  <img src={card7} alt="" />
                </div>

                <Formik
                  initialValues={{
                    cardholder_name: "",
                    expiry_date: "",
                    card_number: "",
                    cvc: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                >
                  {(formik) => (
                    <Form className="flex flex-col gap-6">
                      <div className="flex md:flex-row flex-col justify-between gap-2 px-8 pt-8">
                        <div className="flex flex-col gap-6">
                          <div>
                            <p className="pb-1 text-sm font-semibold">
                              Cardholder's Name
                            </p>
                            <Field
                              type="text"
                              name="cardholder_name"
                              placeholder="Enter cardholder's name"
                              className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none"
                            />
                            <ErrorMessage
                              name="cardholder_name"
                              component="div"
                              className="text-red-700 text-xs"
                            />
                          </div>

                          <div>
                            <p className="pb-1 text-sm font-semibold">
                              Expiry Date (MM/YY)
                            </p>
                            <Field
                              type="text"
                              name="expiry_date"
                              placeholder="Enter expiry date"
                              className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none"
                            />
                            <ErrorMessage
                              name="expiry_date"
                              component="div"
                              className="text-red-700 text-xs"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-6">
                          <div>
                            <p className="pb-1 text-sm font-semibold">
                              Card Number
                            </p>
                            <Field
                              type="text"
                              name="card_number"
                              placeholder="Enter card number"
                              className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none"
                            />
                            <ErrorMessage
                              name="card_number"
                              component="div"
                              className="text-red-700 text-xs"
                            />
                          </div>

                          <div>
                            <p className="pb-1 text-sm font-semibold">CVC</p>
                            <Field
                              type="text"
                              name="cvc"
                              placeholder="Enter CVC"
                              className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none"
                            />
                            <ErrorMessage
                              name="cvc"
                              component="div"
                              className="text-red-700 text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-4">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleConsentChange}
                        />
                        <div className="text-xs">
                          I consent to receiving marketing emails from
                          Booking.com, including promotions, personalised
                          recommendations, rewards, travel experiences and
                          updates about Booking.com Transport Limited’s products
                          and services.
                        </div>
                      </div>

                      <div className="text-xs text-[#595959]">
                        By signing up, you let us tailor offers and content to
                        your interests by monitoring how you use Booking.com
                        through tracking technologies. Unsubscribe at any time.
                        Read our{" "}
                        <NavLink to="" className="text-[#80A102] font-semibold">
                          privacy policy.
                        </NavLink>
                      </div>
                      <div className="text-xs text-[#595959]">
                        Your booking is with Holiday Inn Express Dubai Safa
                        Park, an IHG Hotel directly and by completing this{" "}
                        <NavLink to="" className="text-[#80A102] font-semibold">
                          booking you agree to the booking conditions, general
                          terms, privacy policy
                        </NavLink>
                         and 
                        <NavLink to="" className="text-[#80A102] font-semibold">
                          Wallet terms.
                        </NavLink>
                      </div>
                      <button
                        onClick={togglePopup}
                        type="submit"
                        className="bg-[#80A102] py-3 px-5 rounded-3xl self-end"
                      >
                        <div className="text-white text-sm font-semibold">
                          Check Booking
                        </div>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              
              <AnimatePresence>
                    {isPopupOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        />
                        <div className="fixed inset-0 z-40 flex items-center justify-center p-2">
                          <motion.div
                            ref={popupRef}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white px-6 pt-4 xl:mx-8 lg:mx-6 md:mx-4 mx-2 shadow-lg rounded-xl w-auto relative"
                          >
                            <div className="flex flex-col md:mb-4 mb-2 px-2">
                              <div className="md:text-xl text-lg font-bold">Holiday Inn Express Dubai Safa Park, an IHG Hotel</div>
                              <div className="flex items-center py-2">
                                <div>Sheikh Zayed Road, Al Wasl, Dubai, United Arab Emirates</div>
                                <div>Stars</div>
                              </div>
                              <div className="pt-4">Total length of stay:</div>
                              <div className="font-bold py-1">1 night</div>
                              <div className="flex justify-center gap-20 py-2">
                                <div className="flex flex-col gap-1">
                                    <div className="font-semibold">Check-in</div>
                                    <div className="text-sm font-semibold">Mon 2 Sept 2024</div>
                                    <div className="text-xs text-[#545454]">14:00 – 18:00</div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="font-semibold">Check-out</div>
                                    <div className="text-sm font-semibold">Mon 2 Dec 2024</div>
                                    <div className="text-xs text-[#545454]">14:00 – 18:00</div>
                                </div>
                              </div>
                              <div className="pt-2 font-semibold">1 × Standard King Room with Sofa Bed - Non-Smoking</div>
                              <div className="py-2 text-xs">Free cancellation before 16:00 on 1 September 2024</div>

                              <div className="flex justify-between items-center pb-4">
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold text-lg">Price</div>
                                    <div className="text-sm font-semibold">(your currency)</div>
                                </div>
                                <div className="font-bold text-lg">PKR 11,776.26*</div>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold text-lg">Property Currency</div>
                                    <div className="text-sm font-semibold">(In AED)</div>
                                </div>
                                <div className="font-bold text-lg">AED 155.20</div>
                              </div>

                              <div className="text-xs py-2">VAT (5%) not included 7 % Municipality fee is excluded. <br /> AED 10 Tourism fee per night is
                              excluded. Property service charge (10%) not included</div>
                              <div className="text-xs">* This price is converted to show you the approximate cost in PKR. <br /> You'll pay in AED.
                              The exchange rate may change before you pay.</div>
                              <div className="text-xs py-2">Bear in mind that your card issuer may charge you a foreign transaction fee.</div>

                              <button className="py-3 px-5 bg-black my-2 text-white rounded-3xl text-xs font-semibold w-[50%]">Looks Good, Complete My Booking</button>
                            </div>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </AnimatePresence>
            </div>
          </div>
        </motion.div>
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

export default CompleteBooking;
