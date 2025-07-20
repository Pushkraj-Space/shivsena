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

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            {/* <FontTest /> */}
            <InspirationSection />
            <EknathSection />
            <StrengthSection />
            <NewsCarousel />
            <MediaSection />
            <CartoonsSection />
            <CTASection />
            <Footer />
        </div>
    )
}

export default App 