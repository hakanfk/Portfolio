import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function PageButton({}: Props) {
  return (
    <div className="flex gap-x-8">
      <motion.div
        className="flex gap-x-8"
        initial={{
          opacity: 0,
          x: -500,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <div className="relative mt-4 group">
          <div
            className="transition duration-300 group-hover:opacity-100 absolute z-0 h-8 w-24
           opacity-50 bg-gradient-to-r from-pink-600 to-purple-600 filter blur-md hover:blur-lg
      rounded-lg"
          />
          <div
            className="group-hover: flex justify-center items-center relative z-10 h-8 w-24 px-3 py-1 rounded-full bg-black
            text-slate-300 hover:text-white"
          >
            <Link href="#about">About</Link>
          </div>
        </div>
        <div className="relative mt-4 group">
          <div
            className="transition duration-300  group-hover:opacity-100 absolute z-0 h-8 w-24 opacity-50 bg-gradient-to-r from-pink-600 to-purple-600 filter blur-md hover:blur-lg
      rounded-lg"
          />
          <div
            className="group-hover: relative flex justify-center items-center h-8 w-24 z-10 px-3 py-1 rounded-full bg-black
            text-slate-300 hover:text-white"
          >
            <Link href="#experience">Experience</Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex gap-x-8"
        initial={{
          opacity: 0,
          x: 500,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <div className="relative mt-4 group">
          <div
            className="transition duration-300 group-hover:opacity-100 absolute z-0 h-8 w-24 opacity-50 bg-gradient-to-r from-pink-600 to-purple-600 filter blur-md hover:blur-lg
      rounded-lg"
          />
          <div
            className="group-hover: flex justify-center items-center relative h-8 w-24 z-10 px-3 py-1 rounded-full bg-black
            text-slate-300 hover:text-white"
          >
            <Link href="#skills">Skills</Link>
          </div>
        </div>
        <div className="relative mt-4 group">
          <div
            className="transition duration-300 group-hover:opacity-100 absolute z-0 h-8 w-24 opacity-50 bg-gradient-to-r from-pink-600 to-purple-600 filter blur-md hover:blur-lg
      rounded-lg"
          />
          <div
            className="group-hover: flex justify-center items-center relative h-8 w-24 z-10 px-3 py-1 rounded-full bg-black
      text-slate-300 hover:text-white"
          >
            <Link href="about">Projects</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PageButton;
