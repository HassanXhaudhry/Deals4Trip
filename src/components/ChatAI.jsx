import React, { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import mask from "../assets/mask.png";
import MyFooter from "../components/Footer";
import chatbg from "../assets/chatbg.png";
import arrow from "../assets/arrow.png";

const ChatAI = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const handleChatClick = () => {
    setShowChatBox(true);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center py-4 relative">
        <div className="w-full max-w-[1380px] m-0 p-0">
          {!showChatBox ? (
            <Fragment>
              <motion.div
                {...fadeInUp}
                className="flex flex-col space-y-4 px-4 sm:px-10 py-12 items-center"
              >
                <div className="md:text-5xl text-4xl font-bold text-center text-[#80A102]">
                  HI THERE
                </div>
                <div className="md:text-4xl text-3xl font-bold text-center">
                  I'm Atlas, your AI travel assistant
                </div>
              </motion.div>
              <motion.div
                {...fadeInUp}
                className="flex flex-col relative items-center justify-center w-full h-auto xl:px-48 lg:px-32 md:px-20 sm:px-10 px-6 py-20"
              >
                <div className="w-full h-auto relative border border-[#80A102] rounded-xl py-10 px-10">
                  <div className="flex absolute items-center justify-center cursor-pointer top-[-35px] left-1/2 transform -translate-x-1/2 bg-[#80A102] w-16 rounded-full h-16">
                    <img src={mask} alt="" className="h-12 w-12" />
                  </div>
                  <div className="py-10 xl:px-10 lg:px-8 md:px-6 sm:px-4 px-2 md:text-xl text-lg font-semibold">
                    Consider me your very own virtual travel agent - share your
                    next trip idea with me, and I'll help create a trip plan
                    just for you. Live the World's travel expertise, I am
                    committed to making your trip unforgettable! <br /> <br />{" "}
                    Not sure where you want to go yet? Let’s chat about the type
                    of trip you have in mind and I’ll recommend a destination
                    that’s perfect for you. <br /> <br /> Looking for somewhere
                    to stay? Once we know where you’re headed, I’ll happily
                    recommend hotels based on your budget and travel style.
                  </div>
                </div>
              </motion.div>
              <div
                onClick={handleChatClick}
                className="w-44 px-8 text-md float-right font-semibold h-auto xl:mx-44 lg:mx-32 md:mx-20 sm:mx-10 mx-8 mb-5 py-3 bg-[#80A102] text-white hover:bg-white hover:text-[#80A102] hover:border-none text-center rounded-3xl shadow-lg cursor-pointer"
              >
                Chat with AI
              </div>
            </Fragment>
          ) : (
            <motion.div {...fadeInUp} className="px-4 sm:px-6 md:px-8">
  <div className="flex flex-col md:flex-row justify-center h-auto my-6 mx-auto max-w-6xl shadow-lg border border-gray-200 rounded-xl">
    <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
      <div className=" h-[500px] py-4 md:py-8">Chat</div>
      <div className="w-full flex flex-col gap-4 py-4 md:py-8">
        <div className="flex flex-wrap gap-2 text-xs  mb-4">
          <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-[#666666] bg-white hover:bg-[#80A102] hover:text-white text-[#666666] shadow-lg">
            I want to plan a trip
          </button>
          <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-[#666666] bg-white hover:bg-[#80A102] hover:text-white text-[#666666] shadow-lg">
            I have a question
          </button>
          <button className="w-auto px-3 py-2 text-xs sm:text-sm rounded-3xl border border-[#666666] bg-white hover:bg-[#80A102] hover:text-white text-[#666666] shadow-lg">
            I want to book a hotel
          </button>
        </div>
        <div className="relative flex items-center w-full mt-auto">
          <textarea
            placeholder="Ask Question"
            name="question"
            id="question"
            className="w-full h-20 text-xs sm:text-sm border px-2 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 resize-none pr-10"
          />
          <img
            src={arrow}
            alt=""
            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
          />
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
      <img src={chatbg} alt="" className="max-w-full h-auto" />
    </div>
  </div>
</motion.div>
          )}
        </div>
      </div>
      <MyFooter />
    </Fragment>
  );
};

export default ChatAI;
