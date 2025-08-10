import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "180057267864"; // with country code and +
  const message = "Hello Amandeep! I saw your portfolio and would like to connect.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

return (
    <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-18 right-5.5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300
            sm:bottom-5 sm:right-18"
    >
        <FaWhatsapp size={24} />
    </a>
);
};

export default WhatsAppButton;