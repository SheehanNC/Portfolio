"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import { slideInFromLeft } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const HeroContent = () => {
  return (
    <motion.div
       // Adjust delay as needed
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3"
    >
      <motion.div
      variants={slideInFromTop}
        className="Welcome-box py-3 px-4 border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-sm">
          Welcome to Sheehan's Portfolio!
        </h1>
      </motion.div>
      <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Explore my
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              works and skills{" "}
            </span>
            crafted with passion
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm an aspiring student enthusiastic about expanding my skills in website development.
          Let's embark on this learning journey together as I continue to grow my knowledge in full stack development
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
    </motion.div>
  );
};
