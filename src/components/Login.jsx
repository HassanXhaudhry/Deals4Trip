import React, { useState, useRef, Fragment, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../api/authAPI.js";
import { API_URLS } from "../utils/API_URLS";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken } from "../reducers/user.reducer";
import { useNavigate } from "react-router";
import login_bg from "../assets/login_bg.png";
import signup_bg from "../assets/signup_bg.png";
import { FaFacebook } from "react-icons/fa6";
import { ImArrowLeft } from "react-icons/im";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.token);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const [signupName, setSignupName] = useState("signupName");
  const [signupEmail, setSignupEmail] = useState("signupEmail");
  const [loginPassword, setLoginPassword] = useState("loginPassword");
  const [signupPassword, setSignupPassword] = useState("singuPassword");
  const [confirmPassword, setConfirmPassword] = useState("confirmPassword");
  const [newPassword, setNewPassword] = useState("newPassword");
  const [confirmNewPassword, setConfirmNewPassword] =
    useState("confirmNewPassword");
  const [emailInput, setInputEmail] = useState(true);

  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showExplain, setShowExplain] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!captchaValue) {
  //     alert("Please complete the reCAPTCHA.");
  //     return;
  //   }

  //   // Submit your form data here
  //   console.log("Form submitted!");
  // };

  const emailRef = useRef("");

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const handleInputChange = (ref, value, nextRef) => {
    if (value !== "") {
      ref.current.focus();
    }
    switch (ref) {
      case pin1Ref:
        setPin1(value);
        if (value !== "") {
          pin2Ref.current.focus();
        }
        break;
      case pin2Ref:
        setPin2(value);
        if (value !== "") {
          pin3Ref.current.focus();
        }
        break;
      case pin3Ref:
        setPin3(value);
        if (value !== "") {
          pin4Ref.current.focus();
        }
        break;
      case pin4Ref:
        setPin4(value);
        if (value !== "") {
          pin5Ref.current.focus();
        }
        break;
      case pin5Ref:
        setPin5(value);
        if (value !== "") {
          pin6Ref.current.focus();
        }
        break;
      case pin6Ref:
        setPin6(value);
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (ref, e) => {
    if (e.key === "Backspace" && ref.current.selectionStart === 0) {
      switch (ref) {
        case pin2Ref:
          pin1Ref.current.focus();
          break;
        case pin3Ref:
          pin2Ref.current.focus();
          break;
        case pin4Ref:
          pin3Ref.current.focus();
          break;
        case pin5Ref:
          pin4Ref.current.focus();
          break;
        case pin6Ref:
          pin5Ref.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const toggleLoginPassword = () => {
    setLoginPassword(!loginPassword);
  };
  const toggleSignupPassword = () => {
    setSignupPassword(!signupPassword);
  };
  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };
  const toggleNewPassword = () => {
    setNewPassword(!newPassword);
  };
  const toggleConfirmNewPassword = () => {
    setConfirmNewPassword(!confirmNewPassword);
  };

  const toggleSection = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShowLogin(false);
  };

  const handleBackClick = () => {
    setShowForgotPassword(false);
    setShowLogin(true);
  };

  const handleResetPasswordClick = () => {
    setShowExplain(true);
    setShowLogin(false);
    setShowForgotPassword(false);
  };

  const handleBackDescribeClick = () => {
    setShowExplain(false);
    setShowForgotPassword(true);
  };
  const getPinCode = (pin1Ref, pin2Ref, pin3Ref, pin4Ref, pin5Ref, pin6Ref) => {
    const pin1 = pin1Ref.current.value.trim();
    const pin2 = pin2Ref.current.value.trim();
    const pin3 = pin3Ref.current.value.trim();
    const pin4 = pin4Ref.current.value.trim();
    const pin5 = pin5Ref.current.value.trim();
    const pin6 = pin6Ref.current.value.trim();
    return `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`;
  };

  const handleVerifyClick = () => {
    const pinCode = getPinCode(
      pin1Ref,
      pin2Ref,
      pin3Ref,
      pin4Ref,
      pin5Ref,
      pin6Ref
    );
    const valuesForApi = {
      otp: pinCode,
      email: emailRef.current,
    };
    api
      .post(API_URLS.user.verifyOTP, valuesForApi)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setShowResetPassword(true);
          setShowExplain(false);
        }, 2000);
      })
      .finally(() => {
        setShowResetPassword(true);
      });
  };

  const handleBackToExplain = () => {
    setShowResetPassword(false);
    setShowExplain(true);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Fragment>
        {showLogin && (
          <div className="relative w-full h-full">
            <img src={login_bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute z-20 w-full h-auto flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 mx-auto mt-5">
              <div className="sm:w-[400px] w-[300px] sm:px-10 px-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-8 text-center">
                <div className="flex flex-col items-center justify-center gap-5">
                  <img src={logo} alt="" className="w-32 h-10 " />
                  <p className="font-semibold text-2xl">Log in</p>
                </div>
                <div className="w-full text-left">
                  <Formik
                    initialValues={{
                      email: "",
                      loginPassword: "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .required("Email is required")
                        .email("Email must be valid"),
                      loginPassword: Yup.string()
                        .min(8, "Must be 8 characters or more")
                        .required("Password is required"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      const valueForApi = {
                        email: values.email,
                        password: values.loginPassword,
                      };

                      api
                        .post(API_URLS.user.login, valueForApi)
                        .then((res) => {
                          if (res.status === 200) {
                            dispatch(setToken(res.data.accessToken)); // Use accessToken from response
                            navigate("/");
                          }
                        })
                        .catch((error) => {
                          console.error(error);
                          // Optional: Show an error message to the user
                        })
                        .finally(() => {
                          setSubmitting(false); // Stop submitting state
                        });
                    }}
                  >
                    {(formik) => (
                      <form
                        className="flex flex-col gap-4 mt-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="font-Mulish w-full">
                          <p className="pb-1 text-xs text-start">
                            Phone number, username, or email address
                          </p>
                          <div className="relative flex">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                          </div>
                          {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-700 text-xs text-start pt-1">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="font-Mulish w-full">
                          <p className="pb-1 text-xs text-start">Password</p>
                          <div className="relative flex">
                            <input
                              type={loginPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              name="loginPassword"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.loginPassword}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                              {loginPassword ? (
                                <FiEye onClick={toggleLoginPassword} />
                              ) : (
                                <FiEyeOff onClick={toggleLoginPassword} />
                              )}
                            </div>
                          </div>
                          {formik.touched.loginPassword &&
                          formik.errors.loginPassword ? (
                            <div className="text-red-700 text-xs text-start pt-1">
                              {formik.errors.loginPassword}
                            </div>
                          ) : null}

                          <button
                            className="flex items-center justify-center w-full font-Inter h-10 bg-black rounded-3xl text-white text-sm my-4"
                            type="submit"
                          >
                            <div>Log in</div>
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
                <div className="flex items-center">
                  <hr className="flex-grow border-[#11142D]" />
                  <span className="mx-4 font-Inter text-md">OR</span>
                  <hr className="flex-grow border-[#11142D]" />
                </div>

                <button
                  className="flex items-center justify-center h-10 gap-3 w-full font-Inter my-4 bg-white rounded-3xl text-sm"
                  type="button"
                >
                  <FaFacebook className="text-lg text-blue-600" />
                  <div>Continue with Facebook</div>
                </button>

                <div className="font-Mulish flex justify-center underline">
                  <p
                    className="hover:underline cursor-pointer"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>
              <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-5 sm:w-[400px] w-[300px] px-6 my-4 text-center">
                <div className="flex justify-center text-sm ">
                  <p>Don’t have an Account?</p>
                  &nbsp;
                  <button className="underline" onClick={toggleSection}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showSignup ? (
          <div className="relative w-full h-full">
            <img
              src={signup_bg}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute z-20 w-full h-auto flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 mx-auto">
              <div className="sm:w-[400px] w-[300px] sm:px-10 px-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-4 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <img src={logo} alt="" className="w-32 h-10 " />
                  <p className="font-semibold text-xl">Create an account</p>
                </div>
                <div className="w-full text-left">
                  <Formik
                    initialValues={{
                      signupName: "",
                      signupEmail: "",
                      signupPassword: "",
                      confirmPassword: "",
                    }}
                    validationSchema={Yup.object({
                      signupName: Yup.string().required("Username is required"),
                      signupEmail: Yup.string()
                        .required("Email is required")
                        .test(
                          "valid-email",
                          "Email must be valid",
                          function (value) {
                            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                          }
                        ),
                      signupPassword: Yup.string()
                        .min(8, "Must be 8 characters or more")
                        .matches(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                        )
                        .required("Password is required"),
                      confirmPassword: Yup.string()
                        .oneOf(
                          [Yup.ref("signupPassword"), null],
                          "Passwords must match"
                        )
                        .required("Password is required"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      let valueForApi = {
                        fullname: values.signupName,
                        email: values.signupEmail,
                        password: values.signupPassword,
                        is_superuser: false,
                      };
                      api
                        .post(API_URLS.user.signUp, valueForApi)
                        .then((res) => {
                          debugger;
                          console.log(res);
                        })
                        .catch(function (error) {
                          console.error(error);
                        });
                    }}
                  >
                    {(formik) => (
                      <Form
                        className="flex flex-col items-center gap-2"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="font-Mulish w-full">
                          <p className="pb-1 text-xs font-semibold text-left">
                            Username
                          </p>
                          <div className="relative flex">
                            <input
                              type={signupName ? "text" : "text"}
                              placeholder="Enter Username"
                              name="signupName"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.signupName}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                          </div>
                          {formik.touched.signupName &&
                          formik.errors.signupName ? (
                            <div className="text-red-700 text-xs">
                              {formik.errors.signupName}
                            </div>
                          ) : null}
                        </div>

                        <div className="font-Mulish w-full">
                          <p className="pb-1 text-xs font-semibold text-left">
                            Email address
                          </p>
                          <div className="relative flex">
                            <input
                              type={signupEmail ? "email" : "text"}
                              placeholder="Enter your email address"
                              name="signupEmail"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.signupEmail}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                          </div>
                          {formik.touched.signupEmail &&
                          formik.errors.signupEmail ? (
                            <div className="text-red-700 text-xs">
                              {formik.errors.signupEmail}
                            </div>
                          ) : null}
                        </div>
                        <div className="font-Mulish w-full">
                          <p className="pb-1 text-xs font-semibold text-left">
                            Password
                          </p>
                          <div className="relative flex">
                            <input
                              type={signupPassword ? "password" : "text"}
                              placeholder="Enter password"
                              name="signupPassword"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.signupPassword}
                              className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                              {signupPassword ? (
                                <FiEye onClick={toggleSignupPassword} />
                              ) : (
                                <FiEyeOff onClick={toggleSignupPassword} />
                              )}
                            </div>
                          </div>
                          {formik.touched.signupPassword &&
                          formik.errors.signupPassword ? (
                            <div className="text-red-700 text-xs">
                              {formik.errors.signupPassword}
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
                              placeholder="Enter password again"
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

                        <p className="text-xs font-Mulish text-left">
                          Use 8 or more characters with a mix of letters,
                          numbers & symbols
                        </p>
                        <div className="text-xs font-Mulish text-left py-1">
                          By creating an account, you agree to our
                          <span className="underline"> Terms of use</span> and
                          <span className="underline"> Privacy Policy</span>.
                        </div>
                        <div className="recaptcha-wrapper relative overflow-hidden h-16">
                          <ReCAPTCHA
                            sitekey="6Ld6ajsqAAAAAAdhucCJmnHptqRujQi32TJNh6QT"
                            onChange={handleCaptchaChange}
                            size="normal"
                          />
                        </div>
                        <button
                          className="flex items-center justify-center w-full font-Inter h-10 bg-black rounded-3xl text-white text-sm my-2"
                          type="submit"
                        >
                          <div>Sign up</div>
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="flex items-center justify-center text-sm pt-3">
                  <p>Already have an Account?</p>
                  &nbsp;
                  <button className="underline" onClick={toggleSection}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {showResetPassword && (
          <div className="relative w-full h-full">
            <img src={login_bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute z-20 w-full h-auto flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 mx-auto">
              <div className="sm:w-[400px] w-[300px] sm:px-10 px-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-4 text-center">
                <div className="flex items-center mt-6 sm:mb-0 mb-4">
                  <div
                    className="rounded-full w-7 h-7 bg-white"
                    onClick={handleBackToExplain}
                  >
                    <div className="flex items-center justify-center cursor-pointer">
                      <ImArrowLeft className="text-[22px] pt-[6.5px] pr-[1px]" />
                    </div>
                  </div>
                  <div className="ml-2 text-sm font-Inter font-semibold">
                    Back
                  </div>
                </div>

                <p className="sm:my-7 sm:mx-16 my-2 mx-8 font-Inter text-lg">
                  Reset Password
                </p>
                <div>
                  <Formik
                    initialValues={{
                      newPassword: "",
                      confirmNewPassword: "",
                    }}
                    validationSchema={Yup.object({
                      newPassword: Yup.string()
                        .min(8, "Must be 8 characters or more")
                        .required("Required"),
                      confirmNewPassword: Yup.string()
                        .oneOf(
                          [Yup.ref("newPassword"), null],
                          "Passwords must match"
                        )
                        .required("Required"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      // Handle form submission logic here
                      // Remember to call setSubmitting(false) when done
                    }}
                  >
                    {(formik) => (
                      <form
                        className="flex flex-col items-center gap-4 mt-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="font-Mulish sm:w-[300px] w-[200px]">
                          <p className="pb-1 text-xs font-semibold">
                            New Password
                          </p>
                          <div className="relative flex">
                            <input
                              type={newPassword ? "password" : "text"}
                              placeholder="Set new password"
                              name="newPassword"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.loginPassword}
                              className="w-72 h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                            />
                            <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                              {newPassword ? (
                                <FiEye onClick={toggleNewPassword} />
                              ) : (
                                <FiEyeOff onClick={toggleNewPassword} />
                              )}
                            </div>
                          </div>
                          {formik.touched.newPassword &&
                          formik.errors.newPassword ? (
                            <div className="text-red-700 text-xs">
                              {formik.errors.newPassword}
                            </div>
                          ) : null}
                        </div>
                        <div className="font-Mulish sm:w-[300px] w-[200px]">
                          <p className="pb-1 text-xs font-semibold">
                            Confirm Password
                          </p>
                          <div className="relative flex">
                            <input
                              type={confirmNewPassword ? "password" : "text"}
                              placeholder="Confirm password"
                              name="confirmNewPassword"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.confirmNewPassword}
                              className="w-72 h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0 transition"
                            />
                            <div className="absolute text-sm right-[20px] top-[11px] text-[#6C6C6C] cursor-pointer">
                              {confirmNewPassword ? (
                                <FiEye onClick={toggleConfirmNewPassword} />
                              ) : (
                                <FiEyeOff onClick={toggleConfirmNewPassword} />
                              )}
                            </div>
                          </div>
                          {formik.touched.confirmNewPassword &&
                          formik.errors.confirmNewPassword ? (
                            <div className="text-red-700 text-xs">
                              {formik.errors.confirmNewPassword}
                            </div>
                          ) : null}
                        </div>
                      </form>
                    )}
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full font-Inter h-10 bg-black rounded-3xl text-white text-sm mt-5"
                    >
                      Reset
                    </button>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )}

        {showExplain && (
          <div className="relative w-full h-full">
            <img src={login_bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute z-20 w-full h-auto flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 mx-auto">
              <div className="sm:w-[400px] w-[300px] sm:px-10 px-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-4 text-center">
                <div className="flex items-center mt-6 sm:mb-0 mb-4">
                  <div
                    className="rounded-full w-7 h-7 bg-white"
                    onClick={handleBackDescribeClick}
                  >
                    <div className="flex items-center justify-center cursor-pointer">
                      <ImArrowLeft className="text-[22px] pt-[6.5px] pr-[1px]" />
                    </div>
                  </div>
                  <div className="ml-2 font-Inter text-sm font-semibold">
                    Back
                  </div>
                </div>

                <p className="text center py-3 font-semibold text-xl">
                  Forgot Password
                </p>
                <p className="text-xs font-Inter text-left pt-3">
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password. <br />
                  <br />
                  For security reasons, we do NOT store your password. So rest
                  assured that we will never send your password via email.
                </p>

                <p className="font-Mulish text-xs font-semibold text-left my-5">
                  Enter OTP Sent Via Email
                </p>
                <div className="flex justify-center items-center sm:gap-3 gap-2 mb-3">
                  <input
                    ref={pin1Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) =>
                      handleInputChange(pin1Ref, e.target.value, pin2Ref)
                    }
                    onKeyDown={(e) => handleKeyDown(pin1Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                  <input
                    ref={pin2Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) =>
                      handleInputChange(pin2Ref, e.target.value, pin3Ref)
                    }
                    onKeyDown={(e) => handleKeyDown(pin2Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                  <input
                    ref={pin3Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) =>
                      handleInputChange(pin3Ref, e.target.value, pin4Ref)
                    }
                    onKeyDown={(e) => handleKeyDown(pin3Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                  <input
                    ref={pin4Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) =>
                      handleInputChange(pin4Ref, e.target.value, pin5Ref)
                    }
                    onKeyDown={(e) => handleKeyDown(pin4Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                  <input
                    ref={pin5Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) =>
                      handleInputChange(pin5Ref, e.target.value, pin6Ref)
                    }
                    onKeyDown={(e) => handleKeyDown(pin5Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                  <input
                    ref={pin6Ref}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    onChange={(e) => handleInputChange(pin6Ref, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(pin6Ref, e)}
                    className="sm:text-xl text-xs sm:w-10 w-8 border-b-1 focus:border-b-1 focus:border-[#11142D] border-[#11142D] border-t-transparent border-l-transparent border-r-transparent
                focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent text-center focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full font-Inter h-10 bg-black rounded-3xl text-white text-sm mt-5"
                  onClick={handleVerifyClick}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

        {showForgotPassword && (
          <div className="relative w-full h-full">
            <img src={login_bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute z-20 w-full h-auto flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 mx-auto">
              <div className="sm:w-[400px] w-[300px] sm:px-10 px-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl py-4 text-center">
                {emailInput && (
                  <div>
                    <div className="flex items-center mt-6 sm:mb-0 mb-4">
                      <div
                        className="h-7 w-7 rounded-full bg-white"
                        onClick={handleBackClick}
                      >
                        <div className="flex items-center justify-center cursor-pointer">
                          <ImArrowLeft className="text-[22px] pt-[6.5px] pr-[1px]" />
                        </div>
                      </div>
                      <div className="ml-2 font-Inter text-sm font-semibold">
                        Back
                      </div>
                    </div>

                    <p className="text center py-3 font-semibold text-xl">
                      Reset Password
                    </p>
                    <p className="text-xs font-Inter text-left pt-3">
                      Enter the email address you used when you joined and we’ll
                      send you instructions to reset your password. <br />
                      <br />
                      For security reasons, we do NOT store your password. So
                      rest assured that we will never send your password via
                      email.
                    </p>
                    <div className="text-left">
                      <Formik
                        initialValues={{
                          email: "",
                        }}
                        validationSchema={Yup.object({
                          email: Yup.string()
                            .required("Email is required")
                            .test(
                              "valid-email",
                              "Email must be valid",
                              function (value) {
                                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                              }
                            ),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                          api
                            .post(API_URLS.user.forgetPassword, values)
                            .then((res) => {
                              console.log(res);
                              emailRef.current = values.email;
                              handleResetPasswordClick();
                            })
                            .catch(function (error) {
                              console.error(error);
                            });
                        }}
                      >
                        {(formik) => (
                          <form
                            className="flex flex-col items-center gap-4 my-6"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="font-Mulish w-full">
                              <p className="pb-1 text-xs font-semibold text-left">
                                Email
                              </p>
                              <div className="relative flex">
                                <input
                                  type="email"
                                  placeholder="Enter your registered email"
                                  name="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  className="w-full h-9 border border-gray-400 px-2 rounded-lg sm:text-xs text-[11px] focus:outline-none focus:ring-0"
                                />
                              </div>
                              {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-700 text-xs">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </div>
                            <button
                              type="submit"
                              className="flex items-center justify-center w-full font-Inter h-10 bg-black rounded-3xl text-white text-sm mt-5"
                            >
                              Continue
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Login;
