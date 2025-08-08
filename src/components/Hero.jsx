import React from "react";
import ScrollArrow from "./ScrollArrow";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Top Wave - Yellow */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#f06292"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Bottom Wave - Pink */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#f8b500"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-20">
        {/* Content Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-6xl">
          {/* Left Column - Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#2C3E50] drop-shadow-2xl tracking-wide">
              Happy Rakhi, Bhai!
            </h1>
            <p className="text-lg md:text-2xl text-[#2C3E50] font-medium px-4 py-2 rounded-lg transition-opacity duration-1000 ease-out delay-200">
              From your favorite Didi 😉
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end animate-scaleIn">
            <img
              src="/assets/christmas-ghibli.png"
              alt="Ghibli Image"
              className="w-150 md:w-150 rounded-lg shadow-2xl border-4 border-[#fff5d7]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 animate-bounce z-10">
        <ScrollArrow />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 1s ease forwards 0.3s;
        }
      `}</style>
    </section>
  );
}