
import React from "react";

import cardData from "./Card_deatail";



const Card = ({ title, description, image , toggle,setToggle}) => (
  <div className={`${toggle ?"bg-white" :"bg-blue-70"} shadow-2xl  rounded-2xl p-4 w-70 text-center items-center transform transition-transform duration-300 hover:scale-105`}>
    <img
      src={image}
      alt={title}
      className="w-[100px] h-[100px] object-cover rounded-md mb-4 shadow-black "
    />
    <h2 className="text-xl font-[700] mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[80px] py-8 ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Cards;

