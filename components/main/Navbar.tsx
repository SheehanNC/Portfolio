import React from 'react'

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-sm z-40 px-10">
      <div className="w-full h-full flex items-center justify-between px-10">
        <div className="flex items-center">
          {/* Logo */}
          <img src="/Space_logo.png" style={{ width: '35px', height: 'auto' }} alt="Logo" className="mr-2" />

          {/* Title */}
          <span className="text-purple-500 text-xl hidden md:block" style={{ fontFamily: "fantasy" }}>Sheehan's Portfolio</span>
        </div>

        <div className="flex gap-8">
          <div className="flex gap-5">
            <a href="#about-me" className="nav-link text-purple-500 hover:text-white">About me</a>
            <a href="#skills" className="nav-link text-purple-500 hover:text-white">Skills</a>
            <a href="#projects" className="nav-link text-purple-500 hover:text-white">Projects</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
