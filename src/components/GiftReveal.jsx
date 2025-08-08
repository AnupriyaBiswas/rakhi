import React, { useState, useEffect } from "react";
import config from "../data/config.json";

export default function GiftReveal() {
  const [timeLeft, setTimeLeft] = useState("");
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(config.revealDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setReveal(true);
        clearInterval(countdown);
      } else {
        const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${hrs}h ${mins}m ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="py-12 bg-purple-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Gift Reveal</h2>
      {!reveal ? (
        <p className="text-xl">Revealing in: {timeLeft}</p>
      ) : (
        <img
          src="/assets/gift.jpg"
          alt="gift"
          className="mx-auto rounded-lg shadow-lg max-w-xs"
        />
      )}
    </section>
  );
}
