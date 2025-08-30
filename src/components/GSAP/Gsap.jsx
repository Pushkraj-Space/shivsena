import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import InspirationSection from '../InspirationSection/InspirationSection';
import EknathSection from '../EknathSection/EknathSection';
import { isMobile, shouldDisableAnimations } from '../../utils/mobileOptimization';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';

function Gsap() {  

    const location = useLocation()
    const isHome = location.pathname === "/"
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const [showFallback, setShowFallback] = useState(false)
    const [isSlowConnection, setIsSlowConnection] = useState(false)
    const [isMobileDevice, setIsMobileDevice] = useState(false)
    const [animationsDisabled, setAnimationsDisabled] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        // Check device capabilities
        const mobile = isMobile();
        const disableAnimations = shouldDisableAnimations();

        setIsMobileDevice(mobile);
        setAnimationsDisabled(disableAnimations);

        if (isHome) {
            // Check for slow connection
            if ('connection' in navigator) {
                const connection = navigator.connection
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
                    setIsSlowConnection(true)
                    setShowFallback(true)
                }
            }

            // Show fallback after 2 seconds if video hasn't loaded (reduced from 3s)
            const fallbackTimer = setTimeout(() => {
                if (!videoLoaded) {
                    setShowFallback(true)
                }
            }, 2000)

            // Preload video with lower priority
            const preloadVideo = () => {
                if (videoRef.current && !isSlowConnection) {
                    videoRef.current.load()
                }
            }

            // Delay video loading slightly to prioritize other content
            const loadTimer = setTimeout(preloadVideo, 200)

            return () => {
                clearTimeout(fallbackTimer)
                clearTimeout(loadTimer)
            }
        }
    }, [isHome, videoLoaded, isSlowConnection])

    const handleVideoLoad = () => {
        setVideoLoaded(true)
        setShowFallback(false)
    }

    const handleVideoError = () => {
        setVideoError(true)
        setShowFallback(true)
    }

    // Choose video source based on connection speed
    const getVideoSource = () => {
        if (isSlowConnection) {
            return null // Don't load video on slow connections
        }
        // You can add multiple video sources here for different qualities
        return "/videos/Shiv Sena Song.mp4"
    }

    // Conditional animation wrapper for mobile optimization
    const AnimatedWrapper = ({ children, animation, delay = 0, distance = 40, duration = 0.8 }) => {
        if (animationsDisabled || isMobileDevice) {
            return <div>{children}</div>;
        }

        return (
            <AnimatedOnScroll
                animation={animation}
                delay={delay}
                distance={distance}
                duration={duration}
            >
                {children}
            </AnimatedOnScroll>
        );
    };

    const transitionDivsRef = useRef([]);
    const seperatorSection = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        transitionDivsRef.current.forEach((div, index) => {

            const heights = [100, 200, 400, 200, 300];
      
            gsap.to(div, {
                scrollTrigger: {
                    trigger: seperatorSection.current,
                    scrub: true,
                    start: 'bottom bottom',
                    end: 'bottom +=100',
                },
                height: `${heights[index]}px`,
                ease: 'none',
            });
        });

        gsap.to(seperatorSection.current, {
            scrollTrigger: {
                trigger: seperatorSection.current,
                scrub: true,
                start: 'bottom bottom',
                end: 'bottom +=100',
            },
            opacity: 0,
            ease: 'none',
        });

    }, []);

    return (
        <>
            <main>
                
                <section ref={seperatorSection}>
                    {/* <p className="text-white font-sans text-xl">Scroll</p> */}
                    {isHome ? (
                <>
                    {(showFallback || videoError || isSlowConnection) && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #eab308 100%)',
                                zIndex: 0,
                                pointerEvents: 'none',
                            }}
                        />
                    )}

                    {getVideoSource() && (
                        <video
                            ref={videoRef}
                            className="hero-bg-video"
                            src={getVideoSource()}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            loading="lazy"
                            onLoadedData={handleVideoLoad}
                            onError={handleVideoError}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                                zIndex: videoLoaded ? 0 : -1,
                                pointerEvents: 'none',
                                maxWidth: '100vw',
                                opacity: videoLoaded ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                            }}
                        />
                    )}

                    {!videoLoaded && !showFallback && !isSlowConnection && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1,
                                color: 'white',
                                fontSize: '1.2rem',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{ marginBottom: '10px' }}>Loading...</div>
                            <div style={{
                                width: '40px',
                                height: '4px',
                                background: 'rgba(255,255,255,0.3)',
                                borderRadius: '2px',
                                margin: '0 auto',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '4px',
                                    background: 'white',
                                    borderRadius: '2px',
                                    animation: 'loadingAnimation 1.5s infinite ease-in-out',
                                    transform: 'translateX(-100%)'
                                }}></div>
                            </div>
                        </div>
                    )}

                    {/* <Header /> */}
                    <AnimatedWrapper animation="fade-in-up" delay={0}>
                        <HeroSection />
                    </AnimatedWrapper>
                </>
            ) : (
                // <Header />
                <></>
            )}
                </section>

                <section className="relative z-10">
                    <div className='grid grid-cols-5 absolute w-full h-auto left-0 bottom-full items-end'>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} ref={(el) => {
                            if (el) {
                                transitionDivsRef.current[index] = el;
                            }
                        }} className="bg-white h-0"></div>
                        ))}
                    </div>
                    <div className='bg-white h-screen'>
                <InspirationSection />
                    </div>
                </section>

            </main>
        </>
    )
}

export default Gsap
