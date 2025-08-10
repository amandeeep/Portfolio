import React, { useState, useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6  h-[40px] w-[40px] cursor-pointer p-3 flex justify-center items-center rounded-full bg-blue-600 text-white text-xl shadow-lg hover:bg-blue-700 transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowDownLong className="rotate-180 r"/>
      </button>
    )
  );
};

export default ScrollToTopButton;