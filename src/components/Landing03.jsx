import React from 'react'
import photoTwo from "../images/photoTwo.png" // Adjust the path based on the actual location of the image
import amandeep02 from "../images/amandeep03.png" // Adjust the path based on the actual location of the image
const Landing03 = () => {
return (
      <> 
     
    <div className='w-[93vw] pt-10 flex flex-col md:flex-row items-center justify-center  '>
           

    
     <div className="left py-auto px-auto hidden sm:flex md:w-1/2 w-full">
          <img src={amandeep02} alt='About Me'
          className='sm:h-[600px] h-[600px] mx-auto'/>
     </div>

     <div className="right flex flex-col justify-center pl-6 md:w-1/2 w-full mt-4 md:mt-0 ">
          <h1 className='text-3xl text-purple-800 pb-3 font-bold text-center md:text-left  '>About Me</h1>
          <p>Aspiring IT professional with expertise in Java, DSA and Web Development. Recognized for strong academic
performance and analytical skills. Passionate about problem-solving and MERN development. Aiming to apply my
skills in a challenging environment to develop efficient and scalable solutions.</p>
     </div>

     <div className="left py-10 px-auto  sm:hidden md:w-1/2 w-full">
          <img src={amandeep02} alt='About Me'
          className='sm:h-[500px] h-[600px] mx-auto'/>
     </div>

      
    </div>
    
    </>
    
)
}

export default Landing03
