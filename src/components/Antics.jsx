import React, { useRef, useState, useEffect } from "react";

export default function BhaiAntics({ pauseMusic, resumeMusic, isMusicPlaying }) {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [musicWasPlaying, setMusicWasPlaying] = useState(false);

  const playVideo = (videoNumber) => {
    const currentVideo = videoNumber === 1 ? video1Ref.current : video2Ref.current;
    const otherVideo = videoNumber === 1 ? video2Ref.current : video1Ref.current;

    // Pause the other video if it's playing
    if (otherVideo && !otherVideo.paused) {
      otherVideo.pause();
    }

    // Play the selected video
    if (currentVideo) {
      if (currentVideo.paused) {
        // Store current music state before pausing it
        setMusicWasPlaying(isMusicPlaying);
        if (isMusicPlaying) {
          pauseMusic();
        }
        
        currentVideo.play();
        setActiveVideo(videoNumber);
      } else {
        currentVideo.pause();
        setActiveVideo(null);
        
        // Resume music if it was playing before
        if (musicWasPlaying) {
          resumeMusic();
        }
      }
    }
  };

  // Handle video end events - now just loops automatically
  const handleVideoEnd = (videoNumber) => {
    // Video will loop automatically due to the 'loop' attribute
    // Keep the active state since it's still playing
    setActiveVideo(videoNumber);
  };

  // Stop videos when component unmounts (page changes)
  useEffect(() => {
    return () => {
      // Cleanup function - runs when component unmounts
      if (video1Ref.current) {
        video1Ref.current.pause();
      }
      if (video2Ref.current) {
        video2Ref.current.pause();
      }
      
      // Resume music if it was playing before and a video was active
      if (activeVideo && musicWasPlaying) {
        resumeMusic();
      }
    };
  }, []);

  // Handle page visibility change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, pause all videos
        if (video1Ref.current && !video1Ref.current.paused) {
          video1Ref.current.pause();
        }
        if (video2Ref.current && !video2Ref.current.paused) {
          video2Ref.current.pause();
        }
        
        // Resume music if it was playing before
        if (activeVideo && musicWasPlaying) {
          resumeMusic();
        }
        
        setActiveVideo(null);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeVideo, musicWasPlaying, resumeMusic]);

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
          ভাইয়ের বিভিন্ন Antics
        </h2>

        {/* Videos Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-4xl">
          {/* Video 1 */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div 
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
              onMouseEnter={() => setHoveredVideo(1)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <video
                ref={video1Ref}
                className="w-full h-auto max-h-[280px] sm:max-h-[320px] lg:max-h-[380px] rounded-2xl shadow-2xl border-4 border-[#fff5d7] animate-imageZoom object-cover"
                onEnded={() => handleVideoEnd(1)}
                controls={false}
                loop={true}
                preload="metadata"
              >
                <source src="/assets/mehbooba.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Show when video is paused */}
              <button
                onClick={() => playVideo(1)}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  activeVideo === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
                onClick={() => playVideo(1)}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  activeVideo === 1 && hoveredVideo === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
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

          {/* Video 2 */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div 
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
              onMouseEnter={() => setHoveredVideo(2)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <video
                ref={video2Ref}
                className="w-full h-auto max-h-[280px] sm:max-h-[320px] lg:max-h-[380px] rounded-2xl shadow-2xl border-4 border-[#fff5d7] animate-imageZoom object-cover"
                onEnded={() => handleVideoEnd(2)}
                controls={false}
                loop={true}
                preload="metadata"
              >
                <source src="/assets/disco-dancer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Show when video is paused */}
              <button
                onClick={() => playVideo(2)}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  activeVideo === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
                onClick={() => playVideo(2)}
                className={`absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl transition-all duration-300 hover:bg-black/40 ${
                  activeVideo === 2 && hoveredVideo === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
        .animate-titleFade {
          animation: titleFade 1.2s ease forwards;
        }
        .animate-imageZoom {
          animation: imageZoom 1.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
