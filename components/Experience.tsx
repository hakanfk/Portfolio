import Link from "next/link";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { AiOutlineDown } from "react-icons/ai";

type Props = {};
type Category = {
  category: string;
};

type Projects = {
  id: number;
  name: string;
  category: string;
  description: string;
  link: string;
};

function Experience({}: Props) {
  const [topic, settopic] = useState("All");

  const projects: Projects[] = [
    {
      id: 1,
      name: "Lending Protocol",
      description:
        "A decentralized application for peer-to-peer lending, demonstrating the application of blockchain technology in creating secure, transparent financial transactions.",
      category: "Solidity",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
    {
      id: 1,
      name: "Simple AMM",
      description:
        "An Automated Market Maker (AMM) model implemented on the Ethereum network, showcasing the potential of decentralized exchanges.",
      category: "Solidity",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
    {
      id: 1,
      name: "Wardrobe",
      description:
        " An intuitive mobile application that helps users manage and visualize their wardrobe, aiding in daily outfit choices and organization.",
      category: "React-Native",
      link: "https://github.com/hakanfk/ReactNative-Wardrobe",
    },
    {
      id: 1,
      name: "English Auction",
      description:
        "This is an Ethereum-based smart contract implementing an English Auction system for NFT trading, where a single NFT can be auctioned off to the highest bidder within a set time period.",
      category: "Solidity",
      link: "https://github.com/hakanfk/DeFi-EnglishAuction",
    },
    {
      id: 1,
      name: "DeFi-Funding",
      description:
        "A simple funding project that users can fund the projects they want but minimum deposit amount is $50 dollar or its equivalent of ETH",
      category: "Solidity",
      link: "https://github.com/hakanfk/Solidity-Funding",
    },
    {
      id: 1,
      name: "Staking",
      description:
        "A staking contract for a hypothetical DeFi token, illustrating the potential of decentralized finance and the principle of earning interest through token staking.",
      category: "Solidity",
      link: "https://github.com/hakanfk/DeFi-Staking-Contract",
    },
    {
      id: 1,
      name: "Netflix Clone",
      description: "A simple Netflix Clone. Made by using free film API's",
      category: "React",
      link: "https://github.com/hakanfk/Netflix-Clone",
    },
    {
      id: 1,
      name: "Metaverse Website",
      description:
        "An immersive, interactive website showcasing the concept of the metaverse, demonstrating the merging of physical, augmented, and virtual reality.",
      category: "React",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
    {
      id: 1,
      name: "Shop Example",
      description:
        "An e-commerce website prototype demonstrating a streamlined user journey from product browsing to secure checkout.",
      category: "React",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
    {
      id: 1,
      name: "Puppeteer Bots",
      description:
        " A collection of automated bots utilizing Puppeteer, showcasing the capability to handle web scraping, task automation, and browser testing.",
      category: "Puppeteer",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
    {
      id: 1,
      name: "Cheap Flight",
      description:
        " A convenient ticket booking app streamlining the process of searching for flights, comparing prices, and securing reservations with a few taps.",
      category: "React-Native",
      link: "https://github.com/hakanfk/Cheap-Flight-App",
    },
    {
      id: 1,
      name: "Portfolio",
      description:
        "A visually appealing, responsive personal portfolio website that effectively showcases my projects, skills, and professional journey",
      category: "React",
      link: "https://github.com/hakanfk/Portfolio",
    },
    {
      id: 1,
      name: "Web Scraping",
      description:
        "A robust web scraping tool that extracts and organizes data from various web sources, demonstrating the power of automation in data acquisition.",
      category: "Puppeteer",
      link: "https://github.com/hakanfk/DeFi-Lending-Protocol",
    },
  ];

  const categories: Category[] = [
    { category: "All" },
    { category: "Solidity" },
    { category: "React" },
    { category: "React-Native" },
    { category: "Puppeteer" },
  ];
  function handleCategory(category: string) {
    settopic(category);
  }

  return (
    <div
      className="h-screen flex flex-col justify-center items-center relative p-16
  w-[80vw] mx-auto "
    >
      <div className="relative w-screen flex justify-center items-center -mt-6 ">
        <h2
          className="flex animate-torch   bg-gradient-to-r from-black via-white to-black bg-[length:230px_50px] bg-no-repeat  bg-clip-text text-transparent md:mt-10 uppercase tracking-[15px] font-base text-[32px]
      "
        >
          My Projects
        </h2>
      </div>

      <div className="flex flex-row max-w-[400px] py-6 md:max-w-none overflow-x-scroll scrollbar-hide ">
        {categories.map((item) => {
          return (
            <div className="relative md:mt-0  group mx-4  " key={item.category}>
              <div
                className="transition duration-300 group-hover:opacity-100 absolute z-0 h-8 w-32
           opacity-50 bg-gradient-to-r from-gray-700 to-gray-300 filter blur-md hover:blur-lg
      rounded-lg"
              />
              <div
                className="group-hover: flex justify-center items-center relative z-10 h-8 w-32 px-3 py-1 rounded-full bg-black
            text-slate-300 hover:text-white"
              >
                <button onClick={() => handleCategory(item.category)}>
                  {item.category}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="flex justify-start items-center md:py-20  gap-x-8 overflow-x-scroll group 
      cursor-pointer overflow-hidden  max-w-[360px] md:max-w-6xl scrollbar-hide"
      >
        {/* Card Section */}

        {projects
          .filter((project) => topic === "All" || project.category === topic)
          .map((project) => {
            return (
              <div
                key={project.id}
                className="min-w-[16rem] md:min-w-[18rem] md:max-w-[18rem] h-[300px] md:h-[380px] group group-hover:scale-95 group-hover:blur-sm hover:!blur-none bg-black mt-2 md:mt-6 flex hover:!scale-100 transition-all duration-200 shadow-md shadow-white
        flex-col justify-between py-6 items-center relative overflow-hidden"
              >
                <div className=" text-gradient-to-r from-slate-100 to-red-600">
                  {project.name}
                </div>
                <p className="text-center px-[2px]">{project.description}</p>
                <div className="group flex justify-center items-center z-50">
                  <input type="button" value="" />
                  <span
                    className="flex  m-auto px-2 py-1 rounded-full bg-slate-200 
            text-black tracking-wide hover:scale-110 transition-all duration-300 
             font-light"
                  >
                    <Link href={project.link} target="_blank">
                      Github Link
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div
        className="relative overflow-hidden group rounded-full hover:border-2 border-[#250d6e] p-1
       mt-10 md:mt-6  hover:scale-110 hover:shadow-2xl hover:shadow-gray-300 transition duration-700"
      >
        <div className=" bg-gradient-to-t from-gray-600 to-black p-1 group-hover:top-0 transition-all duration-500 rounded-full -ml-1  w-full h-full absolute -top-24" />
        <Link href="#skills">
          <AiOutlineDown className="w-6 h-6 animate-bounce " />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
          <AiOutlineDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}

export default Experience;
