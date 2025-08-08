import React from "react";

export default function Collection() {
  // Array of collection images
  const images = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    src: `/assets/collection${index + 1}.jpeg`,
    alt: `Memory Collection ${index + 1}`
  }));

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-12 text-[#2C3E50] drop-shadow-2xl tracking-wide animate-titleFade px-4">
          Memories
        </h2>

        {/* Images Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl border-4 border-[#fff5d7] animate-imageZoom hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-br from-[#f8b500] to-[#f06292] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
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
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
        .animate-imageZoom {
          animation: imageZoom 0.8s ease forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
