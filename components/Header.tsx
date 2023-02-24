import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
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
        >
          <p className=" text-gray-500 hover:text-slate-200 ">Get In Touch</p>
          <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
