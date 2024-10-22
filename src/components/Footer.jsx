import React from "react";
import { Footer } from "flowbite-react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import letter from "../assets/newsletter.png";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MyFooter = () => {
  const { t } = useTranslation();
  return (
    <Footer className="w-full mt-auto">
      <div className="w-full">
        <div className="w-full h-auto py-8 sm:h-32 sm:flex sm:justify-center sm:items-center bg-[#80A102]">
          <div className="container mx-auto px-6 sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 mb-4 sm:mb-0">
                <img src={letter} alt="Newsletter Icon" />
              </div>
              <div className="flex flex-col text-center sm:text-left text-white gap-1">
                <span>{t("YOUR TRAVEL JOURNEY STARTS HERE")}</span>
                <span>{t("Sign up and we'll send the best deals to you")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 items-center justify-center mt-4 sm:mt-0">
              <input
                className="peer w-full sm:w-auto lg:w-96 h-10 bg-white text-black font-normal border border-transparent focus:outline-none text-sm px-3 py-2.5"
                placeholder="Enter your email..."
                type="email"
              />
              <button
                disabled
                className="bg-white text-[#80A102] py-2 px-4 text-sm cursor-pointer h-10 w-full sm:w-32 mt-4 sm:mt-0"
                type="button"
              >
                {t("SUBSCRIBE")}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8 max-w-7xl px-6 pt-10 pb-4">
            <div className="lg:col-span-2">
              <Footer.Title title="CONTACT US" />
              <Footer.LinkGroup col>
                <div>Tel: +971 4 5124150</div>
                <div>Fax: +971 4 455 8556</div>
                <a href="info@deals4trip.com" className="underline">
                  info@deals4trip.com
                </a>
                <div>
                  {t("Level 2902, Marina Plaza, Dubai Marina,")}
                  <br />
                 {t("Dubai, United Arab Emirates")} 
                </div>
              </Footer.LinkGroup>
            </div>

            <div className="lg:col-span-2">
              <Footer.Title title="OUR COMPANY" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/aboutus">About Us</Footer.Link>
                <Footer.Link href="deals">Deals</Footer.Link>
                <Footer.Link href="testimonials">Testimonials</Footer.Link>
                <Footer.Link href="/blogs">Blogs</Footer.Link>
                <Footer.Link href="/contactus">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="lg:col-span-3">
              <Footer.Title title="ABOUT US" />
              <Footer.LinkGroup col>
                <div className="text-sm space-y-2">
                  <p>
                  {t("If you are planning a holiday in Dubai, Abu Dhabi, Al Ain, Fujairah, Ajman, RAK, Maldives, Oman, Kenya and Zanzibar with destinations of your choice, just let us know your tour requirements (number of guests, start date of tour, length of stay, cities and places you want to visit, class of hotel or activities and hospitality you desire) and we will arrange and operate the best tour for you.")}
                  </p>
                  <p>
                  {t("Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals.")}
                  </p>
                  <p>
                  {t("The highest level of market knowledge, transparency, technology utilization, and transaction experience will be provided.")}
                  </p>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 pb-8 md:pt-2">
          <div className="container mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center">
            <Footer.Copyright
              by=" Deals4Trip All rights reserved"
              year={2024}
            />
            <div className="flex space-x-3 justify-center items-center px-4">
              <TbWorld className="pb-[1px] h-5 w-5 text-[#666666]" />
              <span className="text-sm">English (US)</span>
              <Footer.Icon href="/" icon={FaFacebookF} />
              <Footer.Icon href="/" icon={FaXTwitter} />
              <Footer.Icon href="/" icon={FaInstagram} />
              <Footer.Icon href="/" icon={FaYoutube} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
