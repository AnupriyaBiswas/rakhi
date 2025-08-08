import React, { useState } from "react";
import wishes from "../data/wishes.json";

export default function WishGenerator() {
  const [wish, setWish] = useState("");

  const generateWish = () => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
  };

  return (
    <section className="py-12 bg-green-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Rakhi Wish Generator</h2>
      <button
        onClick={generateWish}
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600"
      >
        Generate Wish
      </button>
      {wish && <p className="mt-6 text-lg font-semibold">{wish}</p>}
    </section>
  );
}
