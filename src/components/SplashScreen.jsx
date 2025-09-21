import React from 'react';
import { useState, useEffect } from 'react';
import A_logo from "../images/A_logo.jpeg"


const SplashScreen = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2100); // Show splash screen for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`h-screen w-screen flex flex-col items-center justify-center bg-[#0D2F58] text-white transition-opacity duration-2000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0 }}
        >
            <img
                src={A_logo}
                className="w-20 h-20 rounded-lg mb-6 animate-spin-scale filter-img-color"
                alt="Logo"
            />
            <div className="h-4" /> {/* One line gap */}
            <h1 className="text-4xl font-bold animate-bounce text-center z-100">
                Hello ! Welcome To <br />
                <span className="text-[#00FFC6]">My Portfolio ...</span>
            </h1>
            <style>
                {`
                @keyframes spin-scale {
                    0% {
                        transform: scale(0.5) rotate(0deg);
                    }
                    100% {
                        transform: scale(1) rotate(360deg);
                    }
                }
                .animate-spin-scale {
                    animation: spin-scale 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .filter-img-color {
                    filter: hue-rotate(120deg) saturate(2) brightness(1.2);
                }
                `}
            </style>
        </div>
    );
};
export default SplashScreen;