import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';

import { toast } from 'react-toastify';

const Landing06 = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm( import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  form.current,
  {
    publicKey: import.meta.env.VITE_PUBLIC_KEY, // ✅ Correct key name
  })
      .then(
        () => {
          // toast.success('Thanks of Contacting');
                toast.success('Thanks of Contacting', { position: "top-center" });
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="text-center items-center">
      <div className="upper text-center items-center pt-[40px]">
        <p className="font-[500]">Get In Touch</p>
        <h1 className="text-3xl font-[650]">Contact Me</h1>
        <p className="max-[400px]:p-5 font-[500]">
        "Open to new challenges and exciting projects. Reach out anytime."
        </p>
      </div>

      <div className="lower">
        <div className="flex text-black items-center justify-center p-4 mb-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl border-1 border-blue-500"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="flex text-xs mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-2 border-1 border-blue-500 rounded text-sm"
                  name="from_name"
                  required
                />
              </div>
              <div>
                <label className="flex text-xs mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full p-2 border-1 border-blue-500 rounded text-sm"
                  name="from_email"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex text-xs mb-1">Phone number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-2 border-1 border-blue-500 rounded text-sm"
                  name="from_contact"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex text-xs mb-1">Choose a topic</label>
                <select
                  className="w-full p-2 border-1 border-blue-500 rounded text-sm"
                  name="Topic_name"
                >
                  <option value="">Select one...</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="flex text-xs mb-1">Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows="4"
                  className="w-full p-2 border-1 border-blue-500 rounded text-sm"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I accept the terms
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, x: -100 }, // start from left
  visible: {
    opacity: 1,
    x: 0, // move to original position
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Landing06Motion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
    <Landing06/>
  </motion.div>
);

export default Landing06Motion;
