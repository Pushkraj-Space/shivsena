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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            {/* <FontTest /> */}
                            <InspirationSection />
                            <EknathSection />
                            <StrengthSection />
                            <NewsCarousel />
                            <MediaSection />
                            <CartoonsSection />
                            <CTASection />
                        </>
                    } />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/founder" element={<FounderPage />} />
                    <Route path="/past-leader" element={<PastLeaderPage />} />
                    <Route path="/current-leadership" element={<CurrentLeadershipPage />} />
                    <Route path="/angle" element={<AnglePage />} />
                    <Route path="/organizational-structure" element={<OrganizationalStructurePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App 