import React, { useState } from "react";
import Draggable from "react-draggable";
import Confetti from "react-confetti";

export default function VirtualRakhi() {
  const [tied, setTied] = useState(false);

  const handleDrop = () => {
    setTied(true);
  };

  return (
    <section className="py-12 bg-pink-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Tie a Virtual Rakhi</h2>
      <div className="relative flex justify-center items-center min-h-[300px]">
        <img src="/assets/wrist.png" alt="wrist" className="w-64" />
        {!tied && (
          <Draggable onStop={handleDrop}>
            <img
              src="/assets/rakhi.png"
              alt="rakhi"
              className="w-20 absolute top-0 cursor-grab"
            />
          </Draggable>
        )}

        {tied && (
          <>
            <Confetti />
            <div className="absolute top-full mt-4 bg-white shadow-lg p-4 rounded-lg">
              <p className="text-lg font-semibold">
                Wishing you love, laughter & lots of sweets, Bhai!
              </p>
            </div>
          </>
        )}
      </div>
    </section >
  );
}
