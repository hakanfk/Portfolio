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
          <div className="" />
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
          className="flex w-full mt-24 items-center md:w-2/3 flex-col"
        >
          <h2 className="text-lg text-orange-600 font-bold tracking-widest">
            A Little Background
          </h2>
          <p className=" md:w-[90%] mt-4 text-sm ">
            {/* Hi, It's me. Furkan Hakan Karaaslan. I'm currently 23 and living in
            Turkey, Istanbul. At the moment I'm studying Computer Engineering in
            Galatasaray University. For now I have no experience in Business
            World to show you but I'm willing to have some in near future and
            I'd be very grateful if it is you who decide to give me a chance. */}
            I'm Furkan Hakan Karaaslan, a Computer Engineering student at
            Galatasaray University in Istanbul. My curiosity in coding has led
            me to develop expertise in
            <h2 className=" text-orange-400 ">
              React, React Native, Solidity, and Puppeteer.
            </h2>
            <br />
            As a student, I've learned to adapt quickly to new technologies and
            have pushed my understanding through various personal projects. My
            interests in blockchain technology have led me to Solidity, and I've
            honed automation skills with Puppeteer.
            <br />
            <br />
            Driven by a passion for dynamic programming, I've honed my skills in
            React and React Native, building intuitive web and mobile
            applications. My projects reflect my strong grasp of component-based
            design and cross-platform development, demonstrating my commitment
            to delivering high-quality software products.
            <br />
            <br />
            While new to the professional world, I'm eager to bring my technical
            abilities to the business landscape and create significant,
            impactful solutions. Lets connect and explore potential
            opportunities.
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
