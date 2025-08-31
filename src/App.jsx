import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition/PageTransition';
import ScrollProvider from './components/ScrollProvider/ScrollProvider';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SectionDivider from './components/SectionDivider/SectionDivider';
import './i18n';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FontTest from './components/FontTest/FontTest';
import InspirationSection from './components/InspirationSection/InspirationSection';
import EknathSection from './components/EknathSection/EknathSection';
import StrengthSection from './components/StrengthSection/StrengthSection';
import NewsCarousel from './components/NewsCarousel/NewsCarousel';
import MediaSection from './components/MediaSection/MediaSection';
import CartoonsSection from './components/CartoonsSection/CartoonsSection';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import HistoryPage from './components/HistoryPage/HistoryPage';
import FounderPage from './components/FounderPage/FounderPage';
import PastLeaderPage from './components/PastLeaderPage/PastLeaderPage';
import CurrentLeadershipPage from './components/CurrentLeadershipPage/CurrentLeadershipPage';
import AnglePage from './components/AnglePage/AnglePage';
import OrganizationalStructurePage from './components/OrganizationalStructurePage/OrganizationalStructurePage';
import InitiativesAndProjects from './components/InitiativesAndProjects/InitiativesAndProjects';
import SuccessStoriesPage from './components/SuccessStoriesPage/SuccessStoriesPage';
import MedicalInfoPage from './components/MedicalInfoPage/MedicalInfoPage';
import MedicalWorkPage from './components/MedicalWorkPage/MedicalWorkPage';
import MedicalMembersPage from './components/MedicalMembersPage/MedicalMembersPage';
import MediaNewsPage from './components/MediaNewsPage/MediaNewsPage';
import ContactPage from './components/ContactPage/ContactPage';
import AnimatedOnScroll from './components/AnimatedOnScroll/AnimatedOnScroll';
import StaggeredAnimation from './components/StaggeredAnimation/StaggeredAnimation';
import TextAnimation from './components/TextAnimation/TextAnimation';
import AnimationShowcase from './components/AnimationShowcase/AnimationShowcase';
import CardStackingDemo from './components/CardStackingGSAP/CardStackingDemo';
import CardSliderDemo from './components/CardSliderDemo';
import SimpleSlider from './components/SimpleSlider';
import { isMobile, shouldDisableAnimations } from './utils/mobileOptimization';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [showFallback, setShowFallback] = useState(false);
    const [isSlowConnection, setIsSlowConnection] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [animationsDisabled, setAnimationsDisabled] = useState(false);
    const videoRef = useRef(null);
    const homeRef = useRef(null);

    useEffect(() => {
        const mobile = isMobile();
        const disableAnimations = shouldDisableAnimations();

        setIsMobileDevice(mobile);
        setAnimationsDisabled(disableAnimations);

        if (isHome) {
            if ('connection' in navigator) {
                const connection = navigator.connection;
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
                    setIsSlowConnection(true);
                    setShowFallback(true);
                }
            }

            const fallbackTimer = setTimeout(() => {
                if (!videoLoaded) {
                    setShowFallback(true);
                }
            }, 2000);

            const preloadVideo = () => {
                if (videoRef.current && !isSlowConnection) {
                    videoRef.current.load();
                }
            };

            const loadTimer = setTimeout(preloadVideo, 200);

            return () => {
                clearTimeout(fallbackTimer);
                clearTimeout(loadTimer);
            };
        }
    }, [isHome, videoLoaded, isSlowConnection]);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
        setShowFallback(false);
    };

    const handleVideoError = () => {
        setVideoError(true);
        setShowFallback(true);
    };

    const getVideoSource = () => {
        if (isSlowConnection) {
            return null;
        }
        return "/videos/Shiv Sena Song.mp4";
    };

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

    return (
        <div className="App" style={{ overflowX: 'hidden', width: '100%' }}>
            {isHome ? (
                <>
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

                    <Header />
                    <AnimatedWrapper animation="fade-in-up" delay={0}>
                        <HeroSection />
                    </AnimatedWrapper>
                </>
            ) : (
                <Header />
            )}
            {/* <Header /> */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <>
                            <InspirationSection />
                            <CardStackingDemo />
                            <CardSliderDemo />
                            <AnimatedWrapper animation="slide-in-left" distance={60} duration={1.1} delay={0.1}>
                                <MediaSection />
                            </AnimatedWrapper>
                            <SimpleSlider />
                            <AnimatedWrapper animation="slide-in-up" distance={70} duration={1.0} delay={0.1}>
                                <CTASection />
                            </AnimatedWrapper>
                        </>
                    } />
                    <Route path="/history" element={<PageTransition><HistoryPage /></PageTransition>} />
                    <Route path="/founder" element={<PageTransition><FounderPage /></PageTransition>} />
                    <Route path="/past-leader" element={<PageTransition><PastLeaderPage /></PageTransition>} />
                    <Route path="/current-leadership" element={<PageTransition><CurrentLeadershipPage /></PageTransition>} />
                    <Route path="/angle" element={<PageTransition><AnglePage /></PageTransition>} />
                    <Route path="/organizational-structure" element={<PageTransition><OrganizationalStructurePage /></PageTransition>} />
                    <Route path="/initiatives-and-projects" element={<PageTransition><InitiativesAndProjects /></PageTransition>} />
                    <Route path="/success-stories" element={<PageTransition><SuccessStoriesPage /></PageTransition>} />
                    <Route path="/medical-info" element={<PageTransition><MedicalInfoPage /></PageTransition>} />
                    <Route path="/medical-work" element={<PageTransition><MedicalWorkPage /></PageTransition>} />
                    <Route path="/medical-members" element={<PageTransition><MedicalMembersPage /></PageTransition>} />
                    <Route path="/media-news" element={<PageTransition><MediaNewsPage /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                </Routes>
            </AnimatePresence>

            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes loadingAnimation {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    
                    /* Disable tap highlight on mobile */
                    * {
                        -webkit-tap-highlight-color: transparent;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -khtml-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    
                    /* Allow text selection where needed */
                    p, h1, h2, h3, h4, h5, h6, span, div {
                        -webkit-user-select: text;
                        -khtml-user-select: text;
                        -moz-user-select: text;
                        -ms-user-select: text;
                        user-select: text;
                    }
                    
                    /* Remove focus outline on mobile */
                    *:focus {
                        outline: none;
                    }
                    
                    /* Improve touch targets */
                    button, a, [role="button"] {
                        -webkit-tap-highlight-color: transparent;
                        touch-action: manipulation;
                    }
                    
                    /* Mobile-specific optimizations */
                    @media (max-width: 768px) {
                        body {
                            -webkit-tap-highlight-color: transparent;
                            -webkit-touch-callout: none;
                        }
                        
                        /* Remove any default mobile styling */
                        input, textarea, select {
                            -webkit-appearance: none;
                            border-radius: 0;
                        }
                        
                        /* Ensure smooth scrolling */
                        html, body {
                            -webkit-overflow-scrolling: touch;
                            scroll-behavior: smooth;
                        }
                    }
                `
            }} />
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollProvider>
                <ScrollProgress />
                <Layout />
            </ScrollProvider>
        </Router>
    );
}

export default App;