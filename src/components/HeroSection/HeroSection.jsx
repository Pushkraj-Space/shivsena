import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    // Define animation variants for better organization and reusability
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between child animations
                delayChildren: 0.2,   // Delay before child animations start
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80, // Slightly stiffer spring for more responsiveness
                damping: 15,   // Slightly less damping for a subtle bounce
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                mass: 0.5, // Add mass for a more natural feel
            },
        },
    };

    return (
        <main>
            <section className="hero-section" aria-label="Hero" role="region" style={{ position: 'relative', overflow: 'hidden' }}>

                {/* <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        शिवसेना
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        गर्व से कहो हम हिंदू हैं
                    </motion.p>
                    <motion.div className="hero-buttons">
                        <motion.a
                            href="#about"
                            className="btn btn-primary btn-lg"
                            aria-label="Learn about us"
                            variants={buttonVariants}
                        >
                            आमच्याबद्दल जाणून घ्या
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary btn-lg"
                            aria-label="Contact us"
                            variants={buttonVariants}
                            style={{ marginLeft: '1rem' }}
                        >
                            संपर्क साधा
                        </motion.a>
                    </motion.div>
                </motion.div> */}
            </section>
        </main>
    );
};

export default HeroSection;