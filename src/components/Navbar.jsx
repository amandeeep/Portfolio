


import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Frame from "../images/Frame.svg";
import R from "../images/R.png";

const Navbar = ({ toggle, setToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { list: "Home", to: "home" },
    { list: "My Projects", to: "projects" },
    { list: "Academics / Certificates", to: "academics" },
    { list: "Feedbacks", to: "feedbacks" },
  ];

  return (
    <div className="bg-purple-600 w-full py-4  sticky top-0 z-50">
      <div className="container flex items-center justify-evenly">

        {/* Logo */}
        <ScrollLink to="home" smooth={true} duration={700} offset={-70}>
          <img src={R} alt="Logo" className="bg-white rounded cursor-pointer w-45 h-11 object-contain" />
        </ScrollLink>

        {/* Desktop/Nav */}
        <nav className={`${isOpen ? "flex flex-col p-6 absolute top-18.5 w-full bg-purple-600 text-white" : "hidden"} md:flex gap-4 text-white text-[1.15rem] font-medium`}>
          {data.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-70}
              className="cursor-pointer px-3 transition hover:text-yellow-400 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.list}
            </ScrollLink>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ScrollLink to="contact" smooth={true} duration={700} offset={-70}>
          <button className="hidden md:flex bg-white px-4 py-2 rounded-sm text-black hover:scale-105 transition">
            Contact Me
          </button>
        </ScrollLink>

        {/* Theme Toggle */}
        <div className="text-4xl ml-6 cursor-pointer text-white" onClick={() => setToggle(!toggle)}>
          {toggle ? <MdOutlineLightMode /> : <MdDarkMode />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
