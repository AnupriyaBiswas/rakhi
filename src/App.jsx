import React, { useRef, useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import MemoryLane from "./components/MemoryLane";
import Leaderboard from "./components/Leaderboard";
import VirtualRakhi from "./components/VirtualRakhi";
// import WishGenerator from "./components/WishGenerator";
import GiftReveal from "./components/GiftReveal";
import Antics from "./components/Antics";
import Collection from  "./components/Collection"
import Jump from "./components/Jump";
import GoodBye from "./components/GoodBye";

export default function App() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMusicLoaded, setIsMusicLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  // Handle first user interaction for autoplay policy
  const handleFirstInteraction = useCallback(() => {
    if (!isUserInteracted) {
      setIsUserInteracted(true);
      // Try to play music after first user interaction
      const audio = audioRef.current;
      if (audio && isMusicLoaded && !isMusicPlaying) {
        audio.play().catch(error => {
          console.log("Still can't autoplay:", error);
        });
      }
    }
  }, [isUserInteracted, isMusicLoaded, isMusicPlaying]);

  // Add event listeners for first user interaction
  useEffect(() => {
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [handleFirstInteraction]);

  // Initialize music when loaded and try immediate autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isMusicLoaded) {
      audio.volume = 0.3;
      audio.loop = true;

      const handlePlay = () => {
        setIsMusicPlaying(true);
        setLoadError(null);
      };
      
      const handlePause = () => setIsMusicPlaying(false);
      const handleEnded = () => setIsMusicPlaying(false);
      
      const handleError = (e) => {
        console.error("Audio playback error:", e);
        setIsMusicPlaying(false);
        setLoadError("Playback error");
      };

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      // **NEW: Try to start music immediately when loaded**
      const attemptAutoplay = async () => {
        try {
          await audio.play();
          console.log("✅ Music started automatically on page load!");
        } catch (error) {
          console.log("❌ Autoplay blocked by browser - waiting for user interaction");
        }
      };

      attemptAutoplay();

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [isMusicLoaded]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !isMusicLoaded) {
      console.log("Audio not ready");
      return;
    }

    try {
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Error toggling music:", error.name, error.message);
      setIsMusicPlaying(false);
      
      // Don't show AbortError to user as it's usually harmless
      if (error.name !== 'AbortError') {
        setLoadError(error.message);
      }
    }
  }, [isMusicLoaded]);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      try {
        audio.pause();
      } catch (error) {
        console.error("Error pausing music:", error);
      }
    }
  }, []);

  const resumeMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (audio && audio.paused && isMusicLoaded) {
      try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (error) {
        console.error("Error resuming music:", error);
        if (error.name !== 'AbortError') {
          setLoadError(error.message);
        }
      }
    }
  }, [isMusicLoaded]);

  return (
    <Router>
      <div className="font-sans">
        {/* Background Music */}
        <audio
          ref={audioRef}
          onLoadedData={() => {
            console.log("Audio loaded successfully");
            setIsMusicLoaded(true);
            setLoadError(null);
          }}
          onCanPlayThrough={() => {
            setIsMusicLoaded(true);
            setLoadError(null);
          }}
          onError={(e) => {
            const error = e.target.error;
            console.error("Audio loading failed:", error);
            
            let errorMessage = "Unknown error";
            if (error) {
              switch (error.code) {
                case error.MEDIA_ERR_ABORTED:
                  errorMessage = "Loading aborted";
                  break;
                case error.MEDIA_ERR_NETWORK:
                  errorMessage = "Network error";
                  break;
                case error.MEDIA_ERR_DECODE:
                  errorMessage = "Decode error";
                  break;
                case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                  errorMessage = "File format not supported";
                  break;
                default:
                  errorMessage = "Media error";
              }
            }
            
            setLoadError(errorMessage);
            setIsMusicLoaded(false);
          }}
          preload="auto"
          crossOrigin="anonymous"
          autoPlay
        >
          <source src="/assets/music.mpeg" type="audio/mpeg" />
          <source src="/assets/music.ogg" type="audio/ogg" />
          <source src="/assets/music.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>

        {/* Minimalist Music Control Button */}
        <button
          onClick={toggleMusic}
          disabled={!isMusicLoaded}
          className={`fixed top-6 right-6 z-50 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 ${
            !isMusicLoaded ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label={isMusicPlaying ? "Pause Music" : "Play Music"}
          title={isMusicPlaying ? "Pause Music" : "Play Music"}
        >
          {isMusicPlaying ? (
            // Pause Icon - Shows when music IS playing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon - Shows when music IS NOT playing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

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
                <Antics 
                  pauseMusic={pauseMusic}
                  resumeMusic={resumeMusic}
                  isMusicPlaying={isMusicPlaying}
                />
                <Collection />
                <Jump
                  pauseMusic={pauseMusic}
                  resumeMusic={resumeMusic}
                  isMusicPlaying={isMusicPlaying}
                />
                <GoodBye />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
