import React from 'react'
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimatedOnScroll from "./components/AnimatedOnScroll";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <AnimatedOnScroll animation="fade-in-up" delay={0}><HeroSection /></AnimatedOnScroll>
                            {/* <FontTest /> */}
                            <AnimatedOnScroll animation="slide-in-left" delay={0.4}><InspirationSection /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="slide-in-right" delay={0.4}><EknathSection /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="scale-in" delay={0.6}><StrengthSection /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="fade-in-down" delay={0.4}><NewsCarousel /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="rotate-in" delay={0.4}><MediaSection /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="slide-in-left" delay={0.4}><CartoonsSection /></AnimatedOnScroll>
                            <AnimatedOnScroll animation="fade-in-up" delay={0.4}><CTASection /></AnimatedOnScroll>
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
        </Router>
    )
}

export default App 