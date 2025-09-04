import { useEffect, useRef, useState } from 'react';
import videoFile from '../../../public/videos/Shiv Sena Song.mp4'

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const animationFrameRef = useRef(null);
  const lastScrollY = useRef(0);
  const throttleTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video properties
    video.muted = true;
    video.preload = 'metadata';
    video.currentTime = 0;
    video.pause();

    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (throttleTimeoutRef.current) {
        return;
      }

      throttleTimeoutRef.current = setTimeout(() => {
        throttleTimeoutRef.current = null;
      }, 0); // ~60fps

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        
        // Calculate video progress based on scroll position
        const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
        
        // Set video time based on progress
        if (video.duration && !isNaN(video.duration)) {
          const targetTime = progress * video.duration;
          // Increased threshold for smoother performance
          if (Math.abs(video.currentTime - targetTime) > 0.1) {
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
        
        // Set document height to match video duration for natural scroll boundaries
        const scrollRatio = 1; // Reduced for smoother scrolling
        const scrollHeight = video.duration * scrollRatio * 100; // Convert to pixels
        document.body.style.height = `${scrollHeight}px`;
      }
    };

    // Handle video error
    const handleVideoError = () => {
      setVideoError(true);
      console.error('Error loading video');
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleVideoError);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleVideoError);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
      // Reset document height
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="scroll-video-container h-[100vh] w-full">
      <video
        ref={videoRef}
        className="scroll-video"
        playsInline
        muted
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload"
        disableRemotePlayback
        webkit-playsinline="true"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
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
  );
};

export default ScrollVideo;
