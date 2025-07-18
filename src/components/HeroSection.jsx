import React from 'react'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">शिवसेना</h1>
                <p className="hero-subtitle">
                    गर्व से कहो हम हिंदू हैं
                </p>
                <div className="hero-buttons">
                    <a href="#about" className="btn btn-primary btn-lg">
                        आमच्याबद्दल जाणून घ्या
                    </a>
                    <a href="#contact" className="btn btn-secondary btn-lg">
                        संपर्क साधा
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 