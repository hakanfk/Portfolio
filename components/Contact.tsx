import { motion } from "framer-motion";
import React from "react";

type Props = {};

const arr = [
  "We Can Do It Together",
  "Call Me 0553 986 05 39",
  "I love Css More Than You",
];

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-start items-center isolate">
      <div className="flex flex-col justify-center items-center">
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
          className="mt-28 uppercase tracking-[15px] text-[32px]
      font-light"
        >
          Contact Me
        </motion.h2>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="mt-4 font-extralight text-gray-400 text-lg tracking-widest"
        >
          Hover Over a Card to See Contact Adresses
        </motion.h3>
      </div>

      <div className="group transition-all duration-500 w-full md:w-1/2 md:h-1/2 mt-12 m-auto flex justify-center items-center cursor-pointer  ">
        <div className="flex mt-28 relative w-full h-full z-0 group-hover:scale-110 transition-all duration-500">
          <div className="absolute top-4 left-56 md:left-[45%]  w-64 h-64 opacity-70  rounded-full bg-purple-300 animate-float blur-xl  mix-blend-multiply " />
          <div className="absolute top-4 left-28 md:left-[25%] w-64 h-64 opacity-70 rounded-full bg-yellow-300 blur-xl mix-blend-multiply animate-float animation-delay-2  " />
          <div className="absolute top-12 left-44 md:left-[35%] w-64 h-64 opacity-70 rounded-full bg-pink-300 blur-xl  mix-blend-multiply animate-float animation-delay-4  " />
        </div>
        <div className="z-50 absolute group left-32 md:left-[40%] top-52 group-hover:scale-110 transition-all duration-500  ">
          {/* FrontFace */}

          <div className="z-20 absolute  w-96 backdrop-blur-2xl h-60 mt-24 animate-blob rounded-3xl bg-[#262f70]/20 transition-all duration-500 text-slate-300 flex flex-col p-3 px-4 backface-hidden origin-center ">
            <div className=" tracking-widest text-xl flex justify-end m-2 ">
              VISA
            </div>
            <div className="w-10 h-10 mb-2">
              <img src="/chip.png" alt="" />
            </div>
            <div className="mt-4 text-2xl tracking-widest font-extralight">
              Furkan Hakan Karaaslan
            </div>
            <div className="mt-6 flex justify-between text tracking-widest font-extralight">
              0553 986 05 39 <span className="mr-2">novictim40@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-32 -mt-8 ">
        <div className="flex justify-between">
          <div className=" w-36 md:w-72  bg-[#090909] h-32 -ml-4  blur z-30" />
          <div className=" w-44 md:w-72 bg-[#090909] -mr-4 h-32  blur z-30" />
        </div>

        <h2 className="absolute z-10 text-white animate-passing uppercase font-light text-[12px] md:text-[20px] tracking-[1px] ">
          We Can Do It Together
        </h2>
      </div>
    </div>
  );
}

export default Contact;
