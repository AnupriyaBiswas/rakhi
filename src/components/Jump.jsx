import React, { useRef, useState, useEffect } from "react";

export default function Jump({ pauseMusic, resumeMusic, isMusicPlaying }) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(false);
  const [musicWasPlaying, setMusicWasPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        // Store current music state before pausing it
        setMusicWasPlaying(isMusicPlaying);
        if (isMusicPlaying) {
          pauseMusic();
        }
        
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
        
        // Resume music if it was playing before
        if (musicWasPlaying) {
          resumeMusic();
        }
      }
    }
  };

  // Handle video end events
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    
    // Resume music if it was playing before
    if (musicWasPlaying) {
      resumeMusic();
    }
  };

  // Stop video when component unmounts (page changes)
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      
      // Resume music if it was playing before and video was active
      if (isVideoPlaying && musicWasPlaying) {
        resumeMusic();
      }
    };
  }, []);

  // Handle page visibility change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
        
        if (isVideoPlaying && musicWasPlaying) {
          resumeMusic();
        }
        
        setIsVideoPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVideoPlaying, musicWasPlaying, resumeMusic]);

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      {/* Top Wave - Yellow */}
      <div className="absolute top-0 left-0 w-full">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-12 text-[#2C3E50] drop-shadow-2xl tracking-wide animate-titleFade px-4">
          You Jump, I Jump
        </h2>

        {/* Two Column Layout - Increased Gap */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Mothers' Question */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-4 border-[#fff5d7] animate-fadeInUp w-full">
              {/* Removed Icon - Just Text Header */}
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C3E50]">Our Mothers:</h3>
              </div>
              <p className="text-lg sm:text-xl text-[#2C3E50] italic leading-relaxed text-center">
                "একজন ঝাঁপ দিলে কি আর একজনও ঝাঁপ দিবি???"
              </p>
            </div>

            {/* Arrow Pointing Right (Desktop) / Down (Mobile) - Removed White Container */}
            <div className="flex justify-center mt-6 lg:mt-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
              <div className="animate-bounce">
                {/* Mobile Arrow - Points Down */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={3} 
                  stroke="#2C3E50" 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:hidden"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                
                {/* Desktop Arrow - Points Right - Removed White Background Container */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={3} 
                  stroke="#2C3E50" 
                  className="w-10 h-10 lg:w-12 lg:h-12 hidden lg:block"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Our Response & Video */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-0 sm:p-8 shadow-xl border-4 border-[#fff5d7] animate-fadeInUp mb-2 w-full">
              {/* Removed Icon - Just Text Header */}
              <div className="flex items-center justify-center mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C3E50]">Literally Us:</h3>
              </div>
              {/* Removed "Our answer speaks louder than words" text */}
            </div>

            {/* Video Container */}
            <div 
              className="relative w-full"
              onMouseEnter={() => setHoveredVideo(true)}
              onMouseLeave={() => setHoveredVideo(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] rounded-2xl shadow-2xl border-4 border-[#fff5d7] animate-imageZoom object-cover"
                onEnded={handleVideoEnd}
                controls={false}
                preload="metadata"
              >
                <source src="/assets/jump.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Show when video is paused */}
              <button
                onClick={playVideo}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div className="bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C3E50]"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Pause Button Overlay - Show on hover when video is playing */}
              <button
                onClick={playVideo}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  isVideoPlaying && hoveredVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C3E50]"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Pink */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
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
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
        .animate-imageZoom {
          animation: imageZoom 1.4s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards 0.5s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
