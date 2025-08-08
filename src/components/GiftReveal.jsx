import React, { useState } from "react";

export default function GiftReveal() {
  const [curtainOpen, setCurtainOpen] = useState(false);

  const handleCurtainClick = () => {
    setCurtainOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Top Wave - Pink */}
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

      {/* Bottom Wave - Yellow */}
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Matching heading style from other pages */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-[#2C3E50] drop-shadow-2xl tracking-wide animate-titleFade">
          Gift Reveal
        </h2>

        {/* Gift Reveal with Curtain Animation */}
        <div className="relative w-full max-w-2xl h-96 mx-auto">
          {/* Gift Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/assets/gift.jpeg"
              alt="gift"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
            />
          </div>

          {/* Click Message - Only show when curtain is closed */}
          {!curtainOpen && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div 
                className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl border-4 border-yellow-400 cursor-pointer pointer-events-auto hover:bg-white hover:scale-105 transition-all duration-300"
                onClick={handleCurtainClick}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#2C3E50] text-center">
                  🍫 Click for a Gift 
                </p>
              </div>
            </div>
          )}

            {/* Left Curtain */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-800 via-red-700 to-red-600 border-r-4 border-yellow-400 curtain-left"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  #F94680 0px,
                  #FEBD17 20px,
                  #F94680 20px,
                  #FEBD17 40px
                )`,
                transform: curtainOpen ? 'translateX(-100%)' : 'translateX(0)',
                transition: 'transform 2s ease-in-out'
              }}
            >
              {/* Curtain decorative elements */}
              <div className="absolute top-0 right-0 w-2 h-full bg-yellow-400"></div>
              <div className="absolute top-4 right-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-16 right-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-28 right-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
            </div>

            {/* Right Curtain */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-800 via-red-700 to-red-600 border-l-4 border-yellow-400 curtain-right"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  #F94680 0px,
                  #FEBD17 20px,
                  #F94680 20px,
                  #FEBD17 40px
                )`,
                transform: curtainOpen ? 'translateX(100%)' : 'translateX(0)',
                transition: 'transform 2s ease-in-out'
              }}
            >
              {/* Curtain decorative elements */}
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
              <div className="absolute top-4 left-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-16 left-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-28 left-2 w-1 h-8 bg-yellow-300 rounded-full"></div>
            </div>

            {/* Curtain Rod */}
            <div className="absolute -top-6 left-0 w-full h-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full shadow-lg"></div>
            <div className="absolute -top-8 -left-4 w-8 h-8 bg-yellow-600 rounded-full shadow-lg"></div>
            <div className="absolute -top-8 -right-4 w-8 h-8 bg-yellow-600 rounded-full shadow-lg"></div>
          </div>
      </div>

      {/* Animations */}
      <style jsx>{`
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
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
}