import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { AiOutlineDown } from "react-icons/ai";
import PageButton from "./PageButton";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: ["Hi, I'm Hakan", "I like Trabzonspor", "But I like to code more"],
    delaySpeed: 2000,
    loop: true,
  });

  return (
    <div className="relative flex flex-col justify-center items-center h-screen z-0 top-24 ">
      <div
        className="absolute -top-60 -left-40 bg-gradient-to-tr from-pink-600 to-blue-400 opacity-20 z-50 w-96 rounded-full h-96 animate-float
        blur-2xl"
      />
      <div className="z-10">
        <BackgroundCircles />
      </div>
      <div className="z-20">
        <img
          src="lol.jpg"
          alt=""
          className=" w-32 h-32 rounded-full object-cover -mt-[4.5rem]"
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-3">
        <h2 className=" font-light tracking-[15px] text-xl text-center ">
          Software Engineer
        </h2>
        <h1 className="mt-2">
          <span className="text-[32px] ">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
      <div className="mt-12">
        <PageButton />
      </div>
      <div
        /*  initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }} */
        className=" rounded-full hover:border-2 border-[#250d6e] p-2
       mt-16 hover:scale-110 hover:shadow-2xl overflow-hidden hover:shadow-pink-600 group relative transition duration-500"
      >
        <div className="absolute -top-24   rounded-full transition-all duration-500 left-0 w-full h-full group-hover:top-0 group-hover:bg-gradient-to-b from-blue-900 to-pink-900" />
        <Link href="#about">
          <AiOutlineDown className="w-6 h-6 animate-bounce " />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
