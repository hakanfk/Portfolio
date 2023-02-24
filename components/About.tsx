import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center relative md:p-16
     w-[80vw] mx-auto "
    >
      {/* <div
        className="absolute -top-60 -left-40 bg-gradient-to-tr from-pink-600 to-blue-400 opacity-20 z-50 w-96 rounded-full h-96 animate-spin
        blur-2xl"
      /> */}
      <h3 className="absolute top-16 md:top-24 text-[28px] md:text-[32px] tracking-[20px] font-light">
        About
      </h3>
      <div className="flex flex-col mt-16 md:mt-0 md:flex-row sm:gap-x-4 md:justify-around items-center">
        <div className="relative mt-8 md:mt-0 h-32 w-full md:w-1/3 flex justify-center items-center text-center">
          <div className="animate-pulse w-36 h-36 md:w-60 md:h-60  bg-gradient-to-r from-[#3f5289] to-[#859398] absolute top-2 md:top-0 blur rounded-full" />
          <motion.img
            initial={{
              x: -500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            /* whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} */
            src="/lol.jpg"
            alt="lol"
            className="absolute top-4 md:top-0 w-32 h-32 md:w-56 md:h-56 object-cover object-center rounded-full flex"
          />
        </div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex w-full mt-12 items-center md:w-2/3 flex-col"
        >
          <h2 className="text-lg text-orange-600 font-bold tracking-widest">
            A Little Background
          </h2>
          <p className=" md:w-[90%] mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            enim. Nostrum maxime odio id quis ullam sit aliquam impedit nobis
            recusandae reprehenderit. Itaque sit omnis expedita aut fugit
            incidunt similique. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel debitis minus earum, doloremque tempore
            officiis quidem eum aperiam similique odio, beatae quaerat?
            Similique, autem reiciendis? Ipsam, officia nihil! Nemo, at. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Sapiente harum,
            quos deserunt repudiandae fugiat facere ea at odio sint dicta, quas
            veniam quod ducimus reiciendis excepturi provident tempora voluptas
            quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta voluptas recusandae nihil reprehenderit maiores perspiciatis
            illo quo illum fugiat dolor, magni, nesciunt porro quod commodi
            corrupti natus. Placeat, eveniet voluptate.
          </p>
        </motion.div>
      </div>
      <div
        className="relative group rounded-full hover:border-2 border-[#896814] p-1
       md:mt-20 mt-8 hover:scale-110 hover:shadow-2xl hover:shadow-orange-600 transition duration-1000 overflow-hidden"
      >
        <div className="bg-orange-600/50 p-1 group-hover:top-0 transition-all duration-500 rounded-full -ml-1  w-full h-full absolute -top-24" />
        <Link href="#experience">
          <AiOutlineDown className="w-6 h-6 animate-bounce " />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </motion.div>
  );
}

export default About;
