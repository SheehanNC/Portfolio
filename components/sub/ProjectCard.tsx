"use client"
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string; 
}

const ProjectCard = ({ src, title, description,url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[3]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white" style={{ backgroundImage: 'linear-gradient(to left, #2196F3, #9C27B0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{title}</h1>
        <p className="mt-2 text-gray-300" style={{fontFamily:"cursive"}}>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline" style={{ fontFamily: "cursive" }} onClick={() => console.log("Link clicked!")}>
          {url}  {/* Or a more descriptive text for the link */}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;