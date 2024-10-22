"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    // <></>
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
    // <div className='my-20 w-full flex justify-center items-center'>
    //   <a href='#experiences'>
    //     <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
    //       <motion.div
    //         animate={{
    //           y: [0, 24, 0],
    //         }}
    //         transition={{
    //           duration: 1.5,
    //           repeat: Infinity,
    //           repeatType: "loop",
    //         }}
    //         className='w-3 h-3 rounded-full bg-secondary mb-1'
    //       />
    //     </div>
    //   </a>
    // </div>
      //     <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      //   <a href='#about'>
      //     <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
      //       <motion.div
      //         animate={{
      //           y: [0, 24, 0],
      //         }}
      //         transition={{
      //           duration: 1.5,
      //           repeat: Infinity,
      //           repeatType: "loop",
      //         }}
      //         className='w-3 h-3 rounded-full bg-secondary mb-1'
      //       />
      //     </div>
      //   </a>
      // </div>
  );
}
