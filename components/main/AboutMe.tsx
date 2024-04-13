// AboutMe.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20  z-[3]">
      <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About Me</h1>
      </motion.div>

      <div className="about-me-container">
        <motion.div className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        Hi there! <br></br>I'm <span className="gradient-text">Sheehan Nag Chowdhury</span>, a passionate web developer based in, a passionate web developer based in India. 
        </motion.div>
        <motion.div  className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
        I love crafting beautiful and functional websites that make an impact. 
        Currently, I'm delving deep into the world of software development, learning about data structures, algorithms, and backend technologies.  
        Let's create something amazing together! 
        </motion.div>
      </div>
    </section>
  );
};


export default AboutMe;
  