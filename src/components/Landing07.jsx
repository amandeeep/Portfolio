import React from 'react'
import Frame from "../images/Frame.svg"
import OIP from "../images/OIP.webp"
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6"

import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Landing07 = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <div className="upper flex justify-around flex-col sm:flex-row items-center pt-3">
        <img src={OIP} className='bg-white rounded-sm w-60 h-15 object-contain'></img>

     <div className="middle "> 
     <ul className='flex max-[400px]:flex-col text-center cursor-pointer  gap-3 sm:gap-0 mt-5 mb-3 flex-row'>
          <Link to="/">
            <li  className='sm:p-3 p-0 hover:underline '>Home</li>
            </Link>

            <Link to="/projects">
            <li  className='sm:p-3 p-0 hover:underline '>My Projects</li>
            </Link>

            <Link to="/academics">
            <li  className='sm:p-3 p-0 hover:underline '>Academics</li>
            </Link>

            <Link to="/feedbacks">
            <li  className='sm:p-3 p-0 hover:underline '>Feedbacks</li>
            </Link>
            
        </ul>
        
     </div>
       
        <ul className='flex'>
          
            <li  className='p-2 text-2xl transform transition:transform duration-300 hover:scale-120'><FaFacebook /></li>
            
            <a href="https://www.instagram.com/amandeep_aluna_?igsh=YTcwbmp1ODU3dnBs" target='_main' >
            <li  className='p-2 text-2xl transform transition:transform duration-300 hover:scale-120'><FaInstagramSquare /></li>
            </a>

            <a href="https://github.com/amandeeep" target='_main'>
            <li  className='p-2 text-2xl transform transition:transform duration-300 hover:scale-120'><FaGithub /></li>
            </a>
           

            <a href="https://www.linkedin.com/in/amandeep-singh-74442936a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target='_main'>
            <li  className='p-2 text-2xl transform transition:transform duration-300 hover:scale-120'><FaLinkedin /></li>
            </a>

        </ul>
       
      </div>

      <hr className="border-t-2 border-whi my-4" />

      <div className="lower flex sm:flex-row flex-col text-center justify-between p-15">
        <div className="upar flex flex-row gap-2 cursor-none  items-center justify-center pb-5">
        <p>made with </p><span className="pt-2"><FaHeart/></span><span>by Amandeep</span>
        </div>
       

        <ul className='flex flex-col gap-2 cursor-pointer  sm:flex-row'>
          <a href="https://policies.google.com/privacy?hl=en-US" target="_main">
          <li className='pr-3 hover:underline '>Privacy Policy</li>
          </a>

          <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_main">
          <li className='pr-3 hover:underline' >Terms of Service</li>
          </a>
          
          <a href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop" target="_main">
          <li className='pr-3 hover:underline '> Cookies Settings</li>
          </a>
          <hr></hr>

          <a href='https://copyright.gov.in/'   target="_main">
          <li className='pr-3  hover:underline '> @copyright reserved</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "linear" },
  },
};

const Landing07Motion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
    <Landing07/>
  </motion.div>
);

export default Landing07Motion;

