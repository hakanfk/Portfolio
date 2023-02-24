import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import Experience from "components/Experience";
import Skills from "components/Skills";
import Contact from "components/Contact";
import { AiOutlineUp } from "react-icons/ai";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className=" bg-[#090909] text-slate-200 h-screen snap-y snap-proximity
     overflow-y-scroll z-0 scroll-smooth scrollbar-hide overflow-x-hidden"
    >
      <Head>
        <title>Hakans Portfolio</title>
      </Head>

      <Link
        href="#hero"
        className="w-16 h-24 rounded-full absolute bottom-0 right-0 m-2 md:m-16 md:my-10 cursor-pointer
         bg-transparent hover:bg-blue-800 transition duration-700 
      z-50 flex justify-center items-center flex-col"
      >
        <AiOutlineUp />
        To Top
      </Link>

      {/* Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
