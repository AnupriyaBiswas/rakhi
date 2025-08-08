import React from "react";
import Hero from "./components/Hero";
import MemoryLane from "./components/MemoryLane";
import Leaderboard from "./components/Leaderboard";
import VirtualRakhi from "./components/VirtualRakhi";
import WishGenerator from "./components/WishGenerator";
import GiftReveal from "./components/GiftReveal";

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <MemoryLane />
      <Leaderboard />
      <VirtualRakhi />
      <WishGenerator />
      <GiftReveal />
    </div>
  );
}
