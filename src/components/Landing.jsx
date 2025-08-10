import React from 'react';
import HighlightText from '../Reuse/HighlightText';
import Button from '../Reuse/Button';

import amandeep from "../images/amandeep.png"
import { motion } from 'framer-motion';

import Landing03 from './Landing03';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Landing = ({toggle , setToggle}) => {
  return (
    <div className="">
      <div className={`body flex  justify-center  items-center flex-col md:flex-row  max-w-[93vw] m-auto `}>
        <div className="left px-4  w-full md:w-1/2 flex gap-3 flex-col   pt-20">
          <div className="name text-lg font-[750]">Hey, I am Amandeep</div>
          <div className="content text-3xl font-bold">
            I am a  <HighlightText text="Frontend Developer" /> <br /> and create Websites
          </div>
          <div className="">
I’m a passionate Front-End Developer. I specialize in building responsive, accessible, and performance-optimized web interfaces using modern technologies like HTML, CSS, JavaScript, and frameworks such as React. With a blend of creativity and technical skill, I turn design concepts into functional, interactive websites that users love.

          </div>
          <div className="btn mt-5">
          <Link to ="/contacts">
            <Button text="Get in Touch" />
            </Link>
          </div>
        </div>
       
        <div className="right  w-full md:w-1/2  overflow-hidden bg-cover ">
          <img src={amandeep} className="mt-14" alt="Amandeep Singh's profile" />
        </div>
        
      </div>

  
    </div>
  );
};

// export default Landing;



const containerVariants = {
  hidden: { opacity: 0, x: -100 }, // start from left
  visible: {
    opacity: 1,
    x: 0, // move to original position
    transition: { duration: 0.5, ease: "linear" },
  },
};

const LandingMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
    <Landing />
    <Landing03/>
  </motion.div>
);

export default LandingMotion;
