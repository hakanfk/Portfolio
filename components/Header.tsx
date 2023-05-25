import { motion } from "framer-motion";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  const [showModal, setshowModal] = useState(false);

  function handleModal() {
    setshowModal(true);
  }

  function handleCloseModal() {
    setshowModal(false);
  }

  return (
    <header
      className="sticky backdrop-blur-md top-0 flex flex-row justify-around max-w-[1440px] mx-auto p-4 mb-12
     "
    >
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://twitter.com/Frtr133"
          bgColor="transparent"
          fgColor="gray"
          className="hover:scale-110 transition duration-300
          cursor-pointer "
        />
        <SocialIcon
          url="https://youtube.com"
          bgColor="transparent"
          fgColor="gray"
          className="hover:scale-110 transition duration-300
          cursor-pointer"
        />
        <SocialIcon
          url="https://instagram.com"
          bgColor="transparent"
          fgColor="gray"
          className="hover:scale-110 transition duration-300
          cursor-pointer"
        />
      </motion.div>
      {/* Contact Me Section */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div
          className="flex gap-x-2 justify-center items-center 
            hover:text-white hover:scale-105 transition duration-300
             cursor-pointer
        "
          onClick={handleModal}
        >
          <p className=" text-gray-500 hover:text-slate-200 ">Get In Touch</p>
          <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed top-0  sm:-left-12 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Content */}
          <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black  relative bg-opacity-90 h-44 w-72 p-6 rounded-lg shadow-xl flex flex-col justify-start items-center">
            <div className="flex flex-row justify-between items-center mb-4 ">
              <h2 className="text-lg mr-0 font-semibold flex">Contact Me</h2>
              <button
                className="text-gray-600 absolute top-[1px] right-1 hover:text-gray-800"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            {/* Place your contact form or desired content here */}
            <p>Send your message to this mail: </p>
            <p>novictim40@gmail.com</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
