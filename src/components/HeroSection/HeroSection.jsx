import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const animationFrameRef = useRef(null);
  const lastScrollY = useRef(0);
  const throttleTimeoutRef = useRef(null);
  const isVideoComplete = useRef(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video properties
    video.muted = true;
    video.preload = 'metadata';
    video.currentTime = 0;
    video.pause();

    // Prevent scrolling initially
    document.body.style.overflow = 'hidden';

    const handleScroll = (e) => {
      // If video is complete, allow normal scrolling
      if (isVideoComplete.current) {
        return;
      }

      // Prevent default scroll behavior
      e.preventDefault();
      e.stopPropagation();

      // Throttle scroll events for better performance
      if (throttleTimeoutRef.current) {
        return;
      }

      throttleTimeoutRef.current = setTimeout(() => {
        throttleTimeoutRef.current = null;
      }, 16); // ~60fps

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        // Get scroll delta
        const delta = e.deltaY || e.detail || e.wheelDelta;
        const scrollDirection = delta > 0 ? 1 : -1;

        // Calculate current progress based on video time
        if (video.duration && !isNaN(video.duration)) {
          const currentProgress = video.currentTime / video.duration;
          const newProgress = Math.max(0, Math.min(1, currentProgress + (scrollDirection * 0.02)));

          // Set video time based on new progress
          const targetTime = newProgress * video.duration;

          // Check if video has reached the end
          if (newProgress >= 1) {
            isVideoComplete.current = true;
            setShowScrollIndicator(true);
            // Allow scrolling to continue to next sections
            document.body.style.overflow = 'auto';
            // Dispatch custom event to notify header about video completion
            window.dispatchEvent(new CustomEvent('videoComplete', { detail: { isComplete: true } }));
            return;
          }

          // Update video time
          if (Math.abs(video.currentTime - targetTime) > 0.01) {
            video.currentTime = targetTime;
          }
        }
      });
    };

    // Handle video metadata load
    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        video.currentTime = 0;
        setIsVideoLoaded(true);
        // Dispatch custom event to notify header about video start
        window.dispatchEvent(new CustomEvent('videoStart', { detail: { isStarted: true } }));
      }
    };

    // Handle video error
    const handleVideoError = () => {
      setVideoError(true);
      console.error('Error loading video');
      // Allow scrolling if video fails to load
      document.body.style.overflow = 'auto';
      // Dispatch custom event to notify header about video completion (error case)
      window.dispatchEvent(new CustomEvent('videoComplete', { detail: { isComplete: true } }));
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleVideoError);
    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleVideoError);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
      // Reset body overflow
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="hero-section" aria-label="Hero" role="region" ref={heroSectionRef}>
      <div className="video-background-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          playsInline
          muted
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload"
          disableRemotePlayback
          webkit-playsinline="true"
        >
          <source src="/videos/parallax.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="video-overlay"></div>

        {/* Scroll indicator */}
        {/* {showScrollIndicator && (
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <p>Scroll to continue</p>
          </div>
        )} */}

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
      </div>
    </section>
  );
};

export default HeroSection;