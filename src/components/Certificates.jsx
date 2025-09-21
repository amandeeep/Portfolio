import React from 'react'

import { motion } from 'framer-motion'

import one from "../components/pdf/infosys01.png"
import two from  "../components/pdf/youtube01.png"
import three from "../components/pdf/infosys02.png"
import four from "../components/pdf/oracle.png"






const Data = [
  {
    title: "TensorFlow",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati fuga illo, nisi id officiis fugit eum cu",
    image: one,
    button:"Download ->",
    link:"https://drive.google.com/file/d/1YyD4ESQ53HoSQRPuvd7iZ0n1v2cuSBeX/view?usp=sharing"
  },
  {
    title: "TCS job simulation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati fuga illo, nisi id officiis fugit eum cu",
    image: two,
     button:"Download ->",
     link:"https://drive.google.com/file/d/1QUpRj86mLn5CPv--9f12ZKkadVQLS1XR/view?usp=sharing"
  },
  {
    title: "Python Programming",
    description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati fuga illo, nisi id officiis fugit eum cu",
    image: three,
    button:"Download ->",
    link:"https://drive.google.com/file/d/1XFPKBdTTQB6cF4G8g9RwM521o2413wnR/view?usp=sharing"
  },

  {
    title: "Generative AI Professional",
    description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati fuga illo, nisi id officiis fugit eum cu",
    image: four,
    button:"Download ->",
    link:"https://drive.google.com/file/d/1XC2sKQBWKhd9ZHlVMtQg7_M-vCcPVw4x/view?usp=drive_link"
  },
 
];






const Certificates = () => {
return (
    <div id='certificates'>
      
        <div className="upper pl-20 pt-10">
            <h1 className='text-3xl font-bold'>Certificates</h1>
            <p className='text-2xl font-bold'>and Achivements</p>
        </div>

        <div className="down grid gap-6 grid-cols-1 p-10 md:grid-cols-3 md:p-15  ">
             {Data.map((certi, index) => (
             <div className="cards bg-white rounded-2xl shadow-lg p- hover:shadow-2xl transition-shadow overflow-hidden " key={index}>
                    <div className='bg-gray-300 p-1'>
                        <img 
                            src={certi.image}
                            alt={certi.title}
                            className="w-full h-58  rounded-xl  object-fill "
                           
                        />
                    </div>
                    
                    <div className='bg-[#262634] text-white p-5 text-center'>
                        <div className="title text-2xl text-center font-bold pb-1">{certi.title}</div>
                        <p className='detail'>{certi.description}</p>
                        <br />
                        <a href={certi.link} target='_main'> <button  className='bg-blue-700 px-5 py-2 rounded-xl font-bold hover:bg-blue-600 hover:scale-105 duration-700'>{certi.button}</button>
                        </a>
                    </div>
             </div>
             ))}
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

const CertificatesWithMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
   <Certificates/>
  </motion.div>
);

export default CertificatesWithMotion;
