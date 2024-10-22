"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFile } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/githubdp.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 mt-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* <Image
              src={githubdp}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            /> */}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-7xl">Hello, I'm <span className="text-blue-600   font-bold">Deepanshu</span> </span> <br />
        {/* I'm a{" "} */}
        {/* <br /> */}
        <p className="font-cust mt-2">
        I’m a Software Development Engineer with a strong background in both frontend, backend development and mobile app development, machine learning.
        </p>
      </motion.h1>
      {/* <div className="bg-white absolute top-1/3 left-0 border-4 border-black text-green-600 hover:border-2 hover:w-16"
        // initial={{ width: "20px", border: "2px solid #fff" }}
        // animate={{ width: "100px", border: "2px solid #fff" }}
      >
resume
      </div> */}
      {/* <div className="absolute bottom-[40%] left--125 z-10" data-aos="fade-in">
        <ul className="flex flex-col items-end">
          <li className="bg-blue w-full h-full flex justify-end text-2xl hover:translate-x-[115px] transition-transform duration-300"><a className="text-right h-full w-full py-4 px-5" href="https://www.linkedin.com/in/ben-rogers-dev"
            target="_blank"><span className="socials-text">LinkedIn</span> <div className="text-2xl ml-6"><FontAwesomeIcon icon={faGithub}/></div
            ></a></li>
          <li className="bg-dark-grey w-full h-full flex justify-end text-2xl hover:translate-x-[115px] transition-transform duration-300"> <a className="text-right h-full w-full py-4 px-5" href="https://github.com/ben04rogers"
            target="_blank"><span className="socials-text">GitHub</span><i className="fab fa-github fa-2x text-2xl ml-6"></i
            ></a></li>
          <li className="bg-white w-full h-full flex justify-end text-2xl hover:translate-x-[115px] transition-transform duration-300"><a className="text-right h-full w-full py-4 px-5" href="mailto:benrogers1299@outlook.com"><span className="socials-text">Email</span><i className="fas fa-envelope fa-2x text-2xl ml-6"></i></a></li>
        </ul>
      </div> */}
      <motion.div
        // <motion.div></motion.div>
        className="flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <a
          className="group  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/deepanshu04/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          className="group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://github.com/deepanshu0304"
          target="_blank"
        >
          <span className="opacity-70">Github</span>
           <FaGithub className="opacity-70" />
        </a>
        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/deepanshu0304"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/deepanshu0304"
          target="_blank"
        >
          Linkedin <BsLinkedin className="opacity-70" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/deepanshu0304"
          target="_blank"
        >
          Resume <FaFile className="opacity-70" />
        </a> */}
        <a
          className="group   text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://drive.google.com/file/d/1CY8kU70OmIWUki27O4N9Y-3Ni_HWSNEf/view?usp=drive_link"
          target="_blank"
        >
          <span className="opacity-70">Resume</span>
          <FaFile className="opacity-70" />
        </a>
        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/deepanshu0304"
          target="_blank"
        >
          Resume <FaFile className="opacity-70" />
        </a> */}
      </motion.div>
      <div className='my-24 w-full flex justify-center items-center'>
        <a href='#experiences'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}
