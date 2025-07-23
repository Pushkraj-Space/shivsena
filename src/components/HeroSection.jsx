import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <main>
            <section className="hero-section" aria-label="Hero" role="region">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 16 }}
                >
                    <h1 className="hero-title">शिवसेना</h1>
                    <p className="hero-subtitle">
                        गर्व से कहो हम हिंदू हैं
                    </p>
                    <div className="hero-buttons">
                        <a href="#about" className="btn btn-primary btn-lg" aria-label="Learn about us">
                            आमच्याबद्दल जाणून घ्या
                        </a>
                        <a href="#contact" className="btn btn-secondary btn-lg" aria-label="Contact us">
                            संपर्क साधा
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default HeroSection 