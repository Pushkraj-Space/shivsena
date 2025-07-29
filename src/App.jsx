import React from 'react'
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

    return (
        <div className="App" style={{ overflowX: 'hidden', width: '100%' }}>
            {isHome ? (
                <>
                    <video
                        className="hero-bg-video"
                        src="/videos/Shiv Sena Song.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            objectFit: 'cover',
                            zIndex: 0,
                            pointerEvents: 'none',
                            maxWidth: '100vw',
                        }}
                    />
                    {/* <div className="logo"> */}
                    {/* <div className="logo-text" style={{ position: 'fixed', top: 0, zIndex: 1000, display: 'block' }}>शिवसेना</div> */}
                    {/* </div> */}

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
