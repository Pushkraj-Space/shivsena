import React, { useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    // Ensure normal scrolling is enabled
    document.body.style.overflow = 'auto';
    
    // Listen for video events from App.jsx
    const handleVideoStart = () => {
      console.log('Video started from HeroSection');
    };

    const handleVideoComplete = () => {
      console.log('Video completed from HeroSection');
    };

    window.addEventListener('videoStart', handleVideoStart);
    window.addEventListener('videoComplete', handleVideoComplete);

    return () => {
      window.removeEventListener('videoStart', handleVideoStart);
      window.removeEventListener('videoComplete', handleVideoComplete);
    };
  }, []);

  return (
    <section className="hero-section" aria-label="Hero" role="region">
      <div className="video-background-wrapper">
        {/* Overlay for better text readability */}
        <div className="video-overlay"></div>

        {/* Hero content can be added here if needed */}
        <div className="hero-content">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;