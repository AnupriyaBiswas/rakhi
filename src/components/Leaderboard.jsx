import React from "react";
import ProgressBar from "./ProgressBar";
import leaderboard from "../data/leaderboard.json";

export default function Leaderboard() {
  return (
    <section className="py-12 bg-orange-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Brother Leaderboard</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={leaderboard.image}
          alt={leaderboard.name}
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold">{leaderboard.name}</h3>
        <ul className="mt-4 text-gray-700">
          {leaderboard.titles.map((title, idx) => (
            <li key={idx}>⭐ {title}</li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="mb-2 font-semibold">Sibling Bond Level</p>
          <ProgressBar value={leaderboard.bondLevel} />
        </div>
      </div>
    </section>
  );
}
