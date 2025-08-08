import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import ScrollArrow from "./ScrollArrow";
import memories from "../data/memories.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MemoryLane() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        sliderRef.current?.slickPrev();
      } else if (event.key === 'ArrowRight') {
        sliderRef.current?.slickNext();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden">
      {/* Top Wave */}
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen transparent">
        {/* Title - Added responsive text sizing and spacing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12 text-[#2C3E50] drop-shadow-2xl tracking-wide animate-titleFade px-4">
          A Walk Down Memory Lane
        </h2>

        {/* Carousel */}
        <div className="w-full max-w-4xl px-2 sm:px-4 md:px-6 flex justify-center relative">
          {/* Left Arrow Button - Made smaller on mobile */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2C3E50] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <Slider ref={sliderRef} {...settings} className="w-full">
            {memories.map((mem, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center w-full h-full text-center px-2 sm:px-4"
              >
                <div className="flex justify-center w-full animate-imageZoom">
                  <img
                    src={mem.image}
                    alt="memory"
                    className="rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-[#fff5d7] max-h-[280px] sm:max-h-[350px] md:max-h-[450px] w-full max-w-[320px] sm:max-w-none object-contain transition-transform duration-700 hover:scale-105 hover:shadow-[#f8b500]/70"
                  />
                </div>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#2C3E50] italic font-medium animate-captionFade max-w-xs sm:max-w-4xl md:max-w-10xl leading-relaxed px-2">
                  {mem.caption}
                </p>
              </div>
            ))}
          </Slider>

          {/* Right Arrow Button - Made smaller on mobile */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2C3E50] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
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
        @keyframes captionFade {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
        .animate-imageZoom {
          animation: imageZoom 1.4s ease forwards;
        }
        .animate-captionFade {
          animation: captionFade 1s ease forwards 0.3s;
        }
      `}</style>
    </section>
  );
}
