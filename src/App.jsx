import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import MemoryLane from "./components/MemoryLane";
import Leaderboard from "./components/Leaderboard";
import VirtualRakhi from "./components/VirtualRakhi";
// import WishGenerator from "./components/WishGenerator";
import GiftReveal from "./components/GiftReveal";
import Antics from "./components/Antics";
import GoodBye from "./components/GoodBye";

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MemoryLane />
                <Leaderboard />
                <VirtualRakhi /> 
                {/* <WishGenerator /> */}
                <GiftReveal />
                <Antics />
                <GoodBye />
              </>
            }
          />
          {/* You can add more routes if you need separate pages */}
        </Routes>
      </div>
    </Router>
  );
}