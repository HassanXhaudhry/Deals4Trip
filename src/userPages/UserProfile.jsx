import React, { Fragment, useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import GoToTop from "../components/GoToTop";
import { FaCamera } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UserProfile = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [selectedProfilePic, setSelectedProfilePic] = useState(null);

  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");
  const [nationalCode, setNationalCode] = useState("nationalCode");
  const [userEmail, setUserEmail] = useState("userEmail");
  const [userPassword, setUserPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [phoneNo, setPoneNo] = useState("phoneNo");
  const [country, setCountry] = useState("country");
  const [city, setCity] = useState("City");

  const toggleUserPassword = () => {
    setUserPassword(!userPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;

    setSelectedProfilePic(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("profile_pic", file);

    fetch("your-upload-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <Fragment>
      <UserNav />
      <div className="w-full flex min-h-screen bg-slate-100 justify-center">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[1480px]">
            <motion.div
              {...fadeInUp}
              className="flex flex-col px-4 sm:px-10 py-6"
            >
              <div className="flex flex-col w-full gap-4 justify-center items-center rounded-xl py-6 bg-white">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="md:text-2xl text-xl font-bold">
                    Personal Profile
                  </p>
                  <div
                    className="flex flex-col items-center justify-center"
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <div className="flex flex-col pt-2 text-xs items-center gap-4">
                      <div className="w-32 h-32 relative bg-[#D9D9D9] rounded-full">
                        {selectedProfilePic ? (
                          <img
                            src={selectedProfilePic}
                            alt="Profile"
                            className="w-32 h-32 rounded-full"
                          />
                        ) : null}
                        <div className=" absolute right-1 bottom-1 cursor-pointer z-20 w-8 h-8 rounded-full flex justify-center items-center bg-[#80A102]">
                        <FaCamera
                          className="w-4 h-4 text-white m-auto"
                          onClick={() =>
                            document.getElementById("file-upload").click()
                          }
                        /></div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-xl font-semibold">Andrew</p>
                        &nbsp;
                        <p className="text-[#6C6C6C]">PNG & JPG under 15 MB</p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleUpload}
                        className="absolute opacity-0"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 w-full max-w-3xl mx-auto py-6">
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        nationalCode: "",
                        userEmail: "",
                        userPassword: "",
                        confirmPassword: "",
                        phoneNo: "",
                        country: "",
                        city: "",
                      }}
                      validationSchema={Yup.object({
                        firstName: Yup.string().required(
                          "First name is required"
                        ),
                        lastName: Yup.string().required(
                          "Last name is required"
                        ),
                        nationalCode: Yup.string().required(
                          "National code is required"
                        ),
                        userEmail: Yup.string()
                          .required("Email is required")
                          .test(
                            "valid-email",
                            "Email must be valid",
                            function (value) {
                              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                            }
                          ),
                        userPassword: Yup.string()
                          .min(8, "Must be 8 characters or more")
                          .matches(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                          )
                          .required("Password is required"),
                        confirmPassword: Yup.string()
                          .oneOf(
                            [Yup.ref("userPassword"), null],
                            "Passwords must match"
                          )
                          .required("Password confirmation is required"),
                        phoneNo: Yup.string().required(
                          "Phone number is required"
                        ),
                        country: Yup.string().required("Country is required"),
                        city: Yup.string().required("City is required"),
                      })}
                      // onSubmit={(values, { setSubmitting }) => {
                      //   let valueForApi = {
                      //     firstName: values.firstName,
                      //     email: values.userEmail,
                      //     password: values.userPassword,
                      //     is_superuser: false,
                      //   };
                      //   api
                      //     .post(API_URLS.user.signUp, valueForApi)
                      //     .then((res) => {
                      //       console.log(res);
                      //     })
                      //     .catch(function (error) {
                      //       console.error(error);
                      //     });
                      // }}
                    >
                      {(formik) => (
                        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              First Name
                            </p>
                            <input
                              type="text"
                              placeholder="Enter First name"
                              name="firstName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.firstName}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.firstName}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Last Name
                            </p>
                            <input
                              type="text"
                              placeholder="Enter Last name"
                              name="lastName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastName}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.lastName}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              National Code
                            </p>
                            <input
                              type="text"
                              placeholder="Enter National Code"
                              name="nationalCode"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.nationalCode}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.nationalCode &&
                            formik.errors.nationalCode ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.nationalCode}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Email
                            </p>
                            <input
                              type="email"
                              placeholder="Enter Email"
                              name="userEmail"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.userEmail}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.userEmail &&
                            formik.errors.userEmail ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.userEmail}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Password
                            </p>
                            <div className="relative flex">
                              <input
                                type={userPassword ? "password" : "text"}
                                placeholder="Enter Password"
                                name="userPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.userPassword}
                                className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                              />
                              <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                                {userPassword ? (
                                  <FiEye onClick={toggleUserPassword} />
                                ) : (
                                  <FiEyeOff onClick={toggleUserPassword} />
                                )}
                              </div>
                            </div>
                            {formik.touched.userPassword &&
                            formik.errors.userPassword ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.userPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Confirm Password
                            </p>
                            <div className="relative flex">
                              <input
                                type={confirmPassword ? "password" : "text"}
                                placeholder="Enter Confirm Password"
                                name="confirmPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                              />
                              <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                                {confirmPassword ? (
                                  <FiEye onClick={toggleConfirmPassword} />
                                ) : (
                                  <FiEyeOff onClick={toggleConfirmPassword} />
                                )}
                              </div>
                            </div>
                            {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.confirmPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Phone Number
                            </p>
                            <input
                              type="text"
                              placeholder="Enter Phone Number"
                              name="phoneNo"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phoneNo}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.phoneNo && formik.errors.phoneNo ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.phoneNo}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              Country
                            </p>
                            <input
                              type="text"
                              placeholder="Enter Country"
                              name="country"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.country}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.country && formik.errors.country ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.country}
                              </div>
                            ) : null}
                          </div>

                          <div className="font-Mulish w-full">
                            <p className="pb-1 text-xs font-semibold text-left">
                              City
                            </p>
                            <input
                              type="text"
                              placeholder="Enter City"
                              name="city"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.city}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            {formik.touched.city && formik.errors.city ? (
                              <div className="text-red-700 text-xs">
                                {formik.errors.city}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-span-1 sm:col-span-2 flex items-center justify-center text-lg font-semibold mt-4">last update August 1</div>
                          <div className="col-span-1 sm:col-span-2 flex justify-center">
                            <button
                              type="submit"
                              className="w-full sm:w-1/3 text-center bg-black text-white py-2 rounded-3xl mt-4"
                            >
                              Save
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                </div>
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

export default UserProfile;
