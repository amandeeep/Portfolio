
import React from "react";

import cardDataAgain from "./Card_detail02";

import { FaCircleArrowRight } from "react-icons/fa6";




const Card = ({ title, description, image, dribble,link }) => (
  <div className="bg-white shadow-2xl rounded-2xl p-1  w-80 text-center items-centre transform transition-transform duration-300 hover:scale-105  ">
    <img
      src={image}
      alt={title}
      className="w-[100%] h-[200px] object-cover rounded-md mb-4  "
    />
    <h2 className="text-xl font-[700] mb-1">{title}</h2>
    <p className="text-gray-600 text-left p-[12px]">{description}</p>

    <div className="dono flex  hover:underline decoration-pink-600 underline-offset-3 transition-all ease-in-out duration-500 cursor-pointer">  
       <a href={link} target="_main">
        <p  className="text-black-800 text-left pt-[10px] p-[12px]">{dribble}</p></a>
       <p className="pt-[15px] "> <FaCircleArrowRight /></p>
       
       </div>
 
  </div>
);

const Cards2Two = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[80px] py-8 ">
      {cardDataAgain.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          dribble={card.dribble}
          link={card.link}
        />

      ))}
    </div>
  );
};

export default Cards2Two;


