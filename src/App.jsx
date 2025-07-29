import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './i18n'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FontTest from './components/FontTest'
import InspirationSection from './components/InspirationSection'
import EknathSection from './components/EknathSection'
import StrengthSection from './components/StrengthSection'
import NewsCarousel from './components/NewsCarousel'
import MediaSection from './components/MediaSection'
import CartoonsSection from './components/CartoonsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import HistoryPage from './components/HistoryPage'
import FounderPage from './components/FounderPage'
import PastLeaderPage from './components/PastLeaderPage'
import CurrentLeadershipPage from './components/CurrentLeadershipPage'
import AnglePage from './components/AnglePage'
import OrganizationalStructurePage from './components/OrganizationalStructurePage'
import InitiativesAndProjects from './components/InitiativesAndProjects'
import SuccessStoriesPage from './components/SuccessStoriesPage'
import MedicalInfoPage from './components/MedicalInfoPage'
import MedicalWorkPage from './components/MedicalWorkPage'
import MedicalMembersPage from './components/MedicalMembersPage'
import MediaNewsPage from './components/MediaNewsPage'
import ContactPage from './components/ContactPage'
import AnimatedOnScroll from "./components/AnimatedOnScroll";


function Layout() {
    const location = useLocation()
    const isHome = location.pathname === "/"
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const [showFallback, setShowFallback] = useState(false)
    const [isSlowConnection, setIsSlowConnection] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
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

    return (
        <div className="App" style={{ overflowX: 'hidden', width: '100%' }}>
            {isHome ? (
                <>
                    {/* Fallback background image */}
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

                    {/* Optimized video with lazy loading */}
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

                    {/* Loading indicator */}
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
                    <AnimatedOnScroll animation="fade-in-up" delay={0}><HeroSection /></AnimatedOnScroll>
                </>
            ) : (
                <Header />
            )}

            <Routes>
                <Route path="/" element={
                    <>
                        {/* <FontTest /> */}

                        <AnimatedOnScroll><InspirationSection /></AnimatedOnScroll>
                        <AnimatedOnScroll><EknathSection /></AnimatedOnScroll>
                        <AnimatedOnScroll><StrengthSection /></AnimatedOnScroll>
                        <AnimatedOnScroll><NewsCarousel /></AnimatedOnScroll>
                        <AnimatedOnScroll><MediaSection /></AnimatedOnScroll>
                        <AnimatedOnScroll><CartoonsSection /></AnimatedOnScroll>
                        <AnimatedOnScroll><CTASection /></AnimatedOnScroll>
                    </>
                } />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/founder" element={<FounderPage />} />
                <Route path="/past-leader" element={<PastLeaderPage />} />
                <Route path="/current-leadership" element={<CurrentLeadershipPage />} />
                <Route path="/angle" element={<AnglePage />} />
                <Route path="/organizational-structure" element={<OrganizationalStructurePage />} />
                <Route path="/initiatives-and-projects" element={<InitiativesAndProjects />} />
                <Route path="/success-stories" element={<SuccessStoriesPage />} />
                <Route path="/medical-info" element={<MedicalInfoPage />} />
                <Route path="/medical-work" element={<MedicalWorkPage />} />
                <Route path="/medical-members" element={<MedicalMembersPage />} />
                <Route path="/media-news" element={<MediaNewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />

            {/* Loading animation styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes loadingAnimation {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `
            }} />
        </div>
    )
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    )
}

export default App
