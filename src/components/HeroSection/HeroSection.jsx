import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Wait a bit for the video to be available in the DOM
    const timer = setTimeout(() => {
      const video = document.querySelector('.hero-bg-video');
      if (!video) {
        console.log('Video element not found');
        return;
      }

      console.log('Video element found:', video);
      console.log('Video src:', video.src);
      console.log('Video readyState:', video.readyState);

      // Set video properties for continuous playback
      video.muted = true;
      video.preload = 'metadata';
      video.currentTime = 0;
      
      // Ensure video plays
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video started playing successfully');
          })
          .catch(error => {
            console.log('Auto-play prevented:', error);
            // Try to play on user interaction
            const playOnInteraction = () => {
              video.play().catch(e => console.log('Still cannot play:', e));
              document.removeEventListener('click', playOnInteraction);
              document.removeEventListener('touchstart', playOnInteraction);
            };
            document.addEventListener('click', playOnInteraction);
            document.addEventListener('touchstart', playOnInteraction);
          });
      }

      // Allow normal scrolling from the start
      document.body.style.overflow = 'auto';

      // Handle video metadata load
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded');
        if (video.duration && !isNaN(video.duration)) {
          video.currentTime = 0;
          setIsVideoLoaded(true);
          // Dispatch custom event to notify header about video start
          window.dispatchEvent(new CustomEvent('videoStart', { detail: { isStarted: true } }));
        }
      };

      // Handle video error
      const handleVideoError = () => {
        console.error('Video error:', video.error);
        setVideoError(true);
        // Dispatch custom event to notify header about video completion (error case)
        window.dispatchEvent(new CustomEvent('videoComplete', { detail: { isComplete: true } }));
      };

      // Handle video end - restart it for continuous loop
      const handleVideoEnded = () => {
        console.log('Video ended, restarting...');
        video.currentTime = 0;
        video.play().catch(error => {
          console.log('Auto-play prevented on loop:', error);
        });
      };

      // Handle video load
      const handleLoadedData = () => {
        console.log('Video data loaded');
        setIsVideoLoaded(true);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('ended', handleVideoEnded);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('ended', handleVideoEnded);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero" role="region">
      <div className="video-background-wrapper">
        {/* Video is now handled by App.jsx, so we don't need a duplicate video element here */}
        
        {/* Overlay for better text readability */}
        <div className="video-overlay"></div>

        {!isVideoLoaded && !videoError && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
            <p>Loading video...</p>
          </div>
        )}

        {videoError && (
          <div className="video-error">
            <p>Error loading video. Please refresh the page.</p>
          </div>
        )}

        {/* Hero content */}
        {/* <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">शिवसेना</span>
            </h1>
            <div className="hero-description">
              <p>
                <span className="description-line">जनतेच्या सेवेसाठी, राज्याच्या विकासासाठी</span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;