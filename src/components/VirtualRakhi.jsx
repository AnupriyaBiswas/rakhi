import React, { useState } from "react";
import Draggable from "react-draggable";
import Confetti from "react-confetti";

export default function VirtualRakhi() {
  const [tied, setTied] = useState(false);

  const handleDrop = () => {
    setTied(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col text-center px-4 overflow-hidden">
      {/* Top Wave - Yellow */}
      <div className="absolute top-0 left-0 w-full">
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

      {/* Bottom Wave - Pink */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Matching heading style from other pages */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 mt-10 text-[#2C3E50] drop-shadow-2xl tracking-wide">
          Happy Rakhi!
        </h2>

        <div className="relative flex justify-center items-center w-full flex-1">
          {/* Wrist Image - fills most of the available height */}
          <img
            src="/assets/wrist.png"
            alt="wrist"
            className="max-h-[70vh] w-auto pointer-events-none"
          />

          {/* Rakhi - starts from right side */}
          {!tied && (
            <Draggable onStop={handleDrop}>
              <img
                src="/assets/rakhi.png"
                alt="rakhi"
                className="w-20 cursor-grab absolute right-10 top-1/2 -translate-y-1/2 z-10"
              />
            </Draggable>
          )}

          {/* Confetti & Message */}
          {tied && (
            <>
              <Confetti />
              <div className="absolute top-full mt-4 bg-white shadow-lg p-4 rounded-lg">
                <p className="text-lg font-semibold">
                  Wishing you love, laughter &amp; a lot of Money so that you can buy me Cool Shit!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}