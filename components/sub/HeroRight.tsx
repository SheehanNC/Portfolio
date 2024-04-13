"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export const HeroRight = () => {
  return (
 <motion.div variants={slideInFromRight(0.6)} initial="hidden" animate="visible">
  
      <div className="flex justify-center space-x-6">
        <motion.a variants={slideInFromRight(0.6)} href="https://github.com/SheehanNC">
          <FaGithub className="text-purple-500 hover:text-pink-700 cursor-pointer icon text-4xl" />
        </motion.a>
        <motion.a variants={slideInFromRight(0.6)} href="https://www.linkedin.com/in/sheehan-nag-chowdhury-092043181/">
          <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer icon text-4xl" />
        </motion.a>
        <motion.a variants={slideInFromRight(0.6)} href="https://www.instagram.com/lmao_404_/">
          <FaInstagram className="text-pink-500 hover:text-red-700 cursor-pointer icon text-4xl" />
        </motion.a>
        <hr></hr>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="flex justify-center items-center mt-20">
        <motion.img 
          src="/media/web_icons.png" 
          alt="Your Image" 
          className="max-w-full max-h-full flex justify-center items-center" 
          variants={slideInFromRight(0.8)} 
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroRight;