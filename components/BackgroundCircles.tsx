import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.3, 0.2, 0.8, 0.6],
        scale: [1, 1.5, 3, 1.1, 0.8],
      }}
      transition={{
        duration: 2.5,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="relative z-10 flex justify-center items-center"
    >
      <div
        className="absolute w-24 h-24
       rounded-full border border-[#686161] opacity-5 animate-pulse  "
      />
      <div
        className="absolute w-48 h-48
       rounded-full border border-[#514b4b] animate-pulse opacity-5 "
      />

      <div
        className="absolute w-72 h-72
       rounded-full border border-red-100 animate-pulse opacity-10  transition "
      />
      <div
        className="absolute w-[24rem] h-[24rem]
       rounded-full border border-[#98d52e] animate-pulse opacity-10 delay-100 "
      />
      <div
        className="absolute w-[28rem] h-[28rem]
       rounded-full border border-red-300 animate-pulse opacity-60 delay-100 "
      />
      <div
        className="absolute w-[32rem] h-[32rem]
       rounded-full border border-[#a17e7e] animate-pulse opacity-20 delay-100 "
      />
    </motion.div>
  );
}

export default BackgroundCircles;
