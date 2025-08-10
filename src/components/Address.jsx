 import React from 'react'

 import { motion } from 'framer-motion';
 
 const Address = () => {
return (
    <div>
        {/* <div className="upper"></div> */}
        <h1 className=' text-4xl font-bold text-center p-2'>My Location</h1>
        <p className=' text-xl font-bold text-center p-3'>Mahagun P.G. Near Ryan International School <br></br> Hapur Bypass, Ghaziabad, Uttar Pradesh </p>

        <div className="map mb-3 flex items-center justify-center p-5" >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3406195092102!2d77.49749147533736!3d28.67945577563918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf24412771981%3A0x64678b7f0626c47!2sMahagun%20boys%20hostel!5e0!3m2!1sen!2sin!4v1746413139921!5m2!1sen!2sin" 
                width="94%" 
                height="450" 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='border-1'>
            </iframe>
        </div>
    </div>
)
 }
 
 const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  
  const AddressMotion = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Address/>
    </motion.div>
  );
  
  export default AddressMotion;
 