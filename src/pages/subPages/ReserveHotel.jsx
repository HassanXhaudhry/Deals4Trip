import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { BsExclamationTriangle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { IoIosStar, IoMdAlarm } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import GoToTop from "../../components/GoToTop";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { SiPolestar } from "react-icons/si";
import { PiDesktopTowerLight } from "react-icons/pi";
import { LuCigaretteOff } from "react-icons/lu";
import trans from "../../assets/trans.png";
import mask from "../../assets/mask.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { GiCoffeeCup } from "react-icons/gi";
import MyFooter from "../../components/Footer";

const ReserveHotel = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedHotel, setSelectedHotel] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isInterested, setIsInterested] = useState(false);
  const [isDrive, setIsDrive] = useState(false);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Email must be valid")
      .required("Email is required"),
    country: Yup.string().required("Select your country/region"),
    number: Yup.string().required("Phone no. is required"),
    company: Yup.string().when("travellingForWork", {
      is: "yes",
      then: Yup.string().required("Company name is required"),
      otherwise: Yup.string(),
    }),
  });

  const handleSubmit = (values) => {
    console.log(values); 
    navigate("/bookDeal/reservehotel/completebooking", { state: { formData: values } });
  };

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  const handleInterestedChange = () => {
    setIsInterested(!isInterested);
  };

  const handleDriveChange = () => {
    setIsDrive(!isDrive);
  };

  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  useEffect(() => {
    if (location.state) {
      const { selectedHotel } = location.state;
      setSelectedHotel(selectedHotel);
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
      starElements.push(
        <IoIosStar
          key={i}
          className={i < stars ? "text-yellow" : "text-gray-300"}
        />
      );
    }
    return starElements;
  };

  if (loading) return <div>Loading...</div>;

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
                  2
                </div>
                <div className="text-sm font-semibold">Your details</div>
              </div>
              <div className="h-8 w-px sm:h-px sm:w-36 bg-gray-300 my-2 sm:my-0 sm:mx-4"></div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center border border-black rounded-full text-black text-sm font-medium">
                  3
                </div>
                <div className="text-sm ">Final step</div>
              </div>
            </div>
          </div>

          <div className=" w-full flex md:flex-row flex-col justify-center gap-4 px-4 py-10 max-w-[1280px] mx-auto">
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

            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                country: "",
                number: "",
                isChecked: false,
                travellingForWork: "no",
                vat_number: "",
                company: "",
                isInterested: false,
                isDrive: false,
                selectedHour: "12",
                selectedMinute: "00",
                amPm: "AM",
                isCotFree: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {(formik) => (
                <Form className="flex flex-col gap-8">
                  <div className="flex md:flex-row flex-col justify-between gap-2 px-8 py-8  rounded-xl shadow-xl">
                    <div className="flex flex-col gap-6">
                      <div>
                        <p className="pb-1 text-sm font-semibold">First name</p>
                        <div className="relative flex">
                          <input
                            type="text"
                            placeholder="Enter your First name"
                            name="firstname"
                            id="firstname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.firstname && formik.errors.firstname ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.firstname}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <p className="pb-1 text-sm font-semibold">Email</p>
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
                        <p className="pb-1 text-sm font-semibold">
                          Telephone (mobile number preferred)
                        </p>
                        <div className="relative flex">
                          <input
                            type="text"
                            placeholder="Enter your Phone no."
                            name="number"
                            id="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.number}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.number && formik.errors.number ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.number}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div>
                        <p className="pb-1 text-sm font-semibold">Last name</p>
                        <div className="relative flex">
                          <input
                            type="text"
                            placeholder="Enter your Last name"
                            name="lastname"
                            id="lastname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.lastname && formik.errors.lastname ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.lastname}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <p className="pb-1 text-sm font-semibold">
                          Country/region
                        </p>
                        <div className="relative flex">
                          <input
                            type="text"
                            placeholder="Enter your Country/region"
                            name="country"
                            id="country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>
                        {formik.touched.country && formik.errors.country ? (
                          <div className="text-red-700 text-xs">
                            {formik.errors.country}
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-4 ml-3">
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          Yes, I'd like free paperless confirmation
                          (recommended)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2 px-8 pt-8 ">
                    <div className="font-semibold">Are you travelling for work?</div>

                    <div className="flex gap-4">
                      <label
                        className={`cursor-pointer border rounded-full px-4 py-2 ${
                          formik.values.travellingForWork === "yes"
                            ? "bg-[#80A102] text-white"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="travellingForWork"
                          value="yes"
                          onChange={formik.handleChange}
                          className="hidden"
                        />
                        Yes
                      </label>

                      <label
                        className={`cursor-pointer border rounded-full px-4 py-2 ${
                          formik.values.travellingForWork === "no"
                            ? "bg-red-500 text-white"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="travellingForWork"
                          value="no"
                          onChange={formik.handleChange}
                          className="hidden"
                        />
                        No
                      </label>
                    </div>

                    {formik.values.travellingForWork === "yes" && (
                      <div className="flex md:flex-row flex-col justify-between gap-6 mt-6">
                        <div>
                          <p className="pb-1 text-sm font-semibold">
                            VAT number (optional)
                          </p>
                          <input
                            type="text"
                            name="vat_number"
                            placeholder="Enter your VAT number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.vat_number}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                        </div>

                        <div>
                          <p className="pb-1 text-sm font-semibold">
                            Company name
                          </p>
                          <input
                            type="text"
                            name="company"
                            placeholder="Enter your Company name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company}
                            className="w-full sm:w-[400px] h-9 text-[11px] border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                          />
                          {formik.touched.company && formik.errors.company && (
                            <div className="text-red-700 text-xs">
                              {formik.errors.company}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-2 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">Good to know:</div>
                    <div className="flex gap-2 items-center">
                      <div className="w-5 h-5 flex items-center justify-center border-[#80A102] border rounded-full text-[#80A102] text-sm font-medium">
                        <TiTick />
                      </div>
                      <div className="text-xs">
                        Stay flexible: You can cancel for free before 16:00 on 1
                        September 2024, so lock in this great price today.
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-4 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">
                      Standard King Room with Sofa Bed - Non-Smoking
                    </div>
                    <div className="flex gap-1 items-center text-[#80A102]">
                      <GiCoffeeCup />
                      <div className="text-xs">
                        Breakfast included in the price
                      </div>
                    </div>
                    <div className="flex gap-1 items-center text-[#80A102]">
                      <TiTick />
                      <div className="text-xs">
                        Free cancellation before 16:00 on 1 September 2024
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IoPeopleOutline />
                      <div className="text-xs">Guests: 2 adults</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <SiPolestar />
                      <div className="text-xs text-[#595959]">
                        Exceptionally clean rooms - 8.5
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <LuCigaretteOff />
                      <div className="text-xs text-[#595959]">No smoking</div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">Add to your stay</div>
                    <div className="mt-4 ml-3">
                      <label className="flex gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={isInterested}
                          onChange={handleInterestedChange}
                        />
                        <div className="flex flex-col">
                          <div>
                            I’m interested in renting a car with 10% off
                          </div>
                          <div className="text-xs text-[#595959]">
                            Save 10% on all rental cars when you book with us -
                            we'll add car hire options in your booking
                            confirmation.
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="mt-4 ml-3">
                      <label className="flex gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={isDrive}
                          onChange={handleDriveChange}
                        />
                        <div className="flex flex-col">
                          <div>
                            I’m interested in renting a car with 10% off
                          </div>
                          <div className="text-xs text-[#595959]">
                            Save 10% on all rental cars when you book with us -
                            we'll add car hire options in your booking
                            confirmation.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">Special requests</div>
                    <div className="text-xs">
                      Special requests cannot be guaranteed – but the property
                      will do its best to meet your needs. You can always make a
                      special request after your booking is complete!
                    </div>
                    <div className="text-xs text-[#595959] py-2">
                      Please write your requests in English or Arabic.
                      (optional)
                    </div>
                    <Field
                      as="textarea"
                      name="specialRequests"
                      id="description"
                      rows="3"
                      placeholder="Enter a description"
                      className="w-full p-3 text-xs border border-gray-300 rounded-md resize-none 
                     focus:outline-none focus:ring-0 focus:border-gray-300"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-4 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">Your arrival time</div>
                    <div className="flex gap-1 items-center">
                      <div className="w-5 h-5 flex items-center justify-center border-[#80A102] border rounded-full text-[#80A102] text-sm font-medium">
                        <TiTick />
                      </div>
                      <div className="text-sm">
                        Your room will be ready for check-in between 14:00 and
                        18:00
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <PiDesktopTowerLight className="text-[#80A102]" />
                      <div className="text-sm">
                        24-hour front desk – Help whenever you need it!
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Field
                        as="select"
                        name="selectedHour"
                        className="border rounded-md p-2"
                      >
                        {hours.map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </Field>
                      <span className="mt-2">:</span>
                      <Field
                        as="select"
                        name="selectedMinute"
                        className="border rounded-md p-2"
                      >
                        {minutes.map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </Field>
                      <Field
                        as="select"
                        name="amPm"
                        className="border rounded-md p-2"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </Field>
                    </div>
                    <div className="text-xs">
                      Add your estimated arrival time
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2 px-8 py-8 my-4 rounded-xl shadow-xl">
                    <div className="font-bold">Cots and extra beds</div>
                    <div className="text-xs">
                      Requests are subject to availability
                    </div>
                    <div className="text-xs">
                      Requests must be confirmed by the property
                    </div>
                    <div className="text-xs">
                      Requests not labelled 'Free' may incur extra charges
                    </div>
                    <div className="text-xs text-[#80A102] py-4">
                      Read full cot and extra bed policy
                    </div>
                    <div className="text-xs font-semibold">
                      Add to your Standard King Room with Sofa Bed - Non-Smoking
                    </div>
                    <div>
                      <label className="flex gap-2 text-sm text-[#80A102] mt-1">
                        <Field type="checkbox" name="isCotFree" />
                        <div>Cot Free</div>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#80A102] py-3 px-5 rounded-3xl self-end"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    <div className="text-white text-sm font-semibold">
                      Next: Final details
                    </div>
                  </button>
                </Form>
              )}
            </Formik>
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

export default ReserveHotel;
