import React from "react";
import ScrollArrow from "./ScrollArrow";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
        Happy Raksha Bandhan, Bhai!
      </h1>
      <p className="mt-4 text-lg md:text-2xl bg-black/50 px-4 py-2 rounded-lg">
        From your favorite sister 😉
      </p>
      <div className="absolute bottom-6">
        <ScrollArrow />
      </div>
    </section>
  );
}
