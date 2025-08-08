import React from "react";

export default function Farewell() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16">
        {/* Left Column - Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src="/assets/new-year-ghibli.png"
            alt="New Year Ghibli"
            className="max-w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-contain rounded-2xl shadow-2xl border-4 border-[#fff5d7] animate-imageZoom"
          />
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2C3E50] drop-shadow-2xl tracking-wide animate-titleFade leading-tight">
            Until Next Time...!
          </h1>
        </div>
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

      {/* Animations */}
      <style jsx="true">{`
        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes imageZoom {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
        .animate-imageZoom {
          animation: imageZoom 1.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
