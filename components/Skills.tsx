import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import Exhibit from "./Exhibit";
import SkillCircle from "./SkillCircle";

type Props = {};

function Skills({}: Props) {
  return (
    <div className=" h-screen flex flex-col justify-start items-center relative">
      <motion.h2
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false }}
        className="mt-24 uppercase tracking-[15px] text-[32px]
      font-light"
      >
        Skills
      </motion.h2>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="mt-2 font-extralight text-gray-400 text-lg tracking-widest"
      >
        Hover Over a Card to See Profiency
      </motion.h3>
      <div
        className="absolute top-48 w-full h-[30%] mt-28 bg-orange-900 -skew-y-6 hover:bg-orange-600 transition-colors duration-700
      transform ease-in-out"
      />
      <div
        className="absolute top-48 w-full h-[30%] mt-28 bg-blue-900 -skew-y-6 hover:bg-orange-600 transition-colors duration-700
      transform ease-in-out"
      />

      <div className="md:flex mt-6 md:mt-16 z-20 gap-y-5 md:gap-y-0 gap-x-3 grid grid-cols-2">
        <Exhibit title="JS-TS" />
        <Exhibit title="REACT NATIVE" />
        <Exhibit title="REACT" />
        <Exhibit title="TAILWIND" />
        <Exhibit title="SOLIDITY" />
        <Exhibit title="PUPPETEER" />
      </div>

      {/*  <div className="md:hidden mt-12 grid grid-cols-4 gap-x-4">
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
      </div> */}
      <div
        className="relative group rounded-full hover:border-2 border-[#250d6e] p-1 
       md:mt-0 mt-12 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600 transition duration-1000 overflow-hidden"
      >
        <div className="bg-blue-600/50 p-1 group-hover:top-0 transition-all duration-500 rounded-full -ml-1  w-full h-full absolute -top-24" />
        <Link href="#contact">
          <AiOutlineDown className="w-6 h-6 animate-bounce " />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}

export default Skills;
