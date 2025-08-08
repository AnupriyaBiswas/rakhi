import React from "react";
import ProgressBar from "./ProgressBar";
import leaderboard from "../data/leaderboard.json";

export default function Leaderboard() {
  // Emoji array for different lines
  const emojis = ["🔫", "🎤", "📹"];

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      {/* Top Wave */}
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
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-8 text-[#2C3E50] drop-shadow-2xl tracking-wide">
          Brother Leaderboard
        </h2>
        <div className="max-w-sm sm:max-w-md lg:max-w-lg w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 animate-cardFade border border-white/20">
          <img
            src={leaderboard.image}
            alt={leaderboard.name}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#fff5d7] shadow-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] text-center">
            {leaderboard.name}
          </h3>
          <ul className="mt-4 text-gray-700">
            {leaderboard.titles.map((title, idx) => (
              <li key={idx} className="mb-1 text-sm sm:text-base">
                {emojis[idx] || "⭐"} {title}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="mb-2 font-semibold text-[#2C3E50] text-sm sm:text-base">
              Sibling Bond Level
            </p>
            <ProgressBar value={leaderboard.bondLevel} />
          </div>
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
            fill="#f8b500"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes cardFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cardFade {
          animation: cardFade 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
