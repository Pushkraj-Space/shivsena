import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslation();
    // Define animation variants for better organization and reusability
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between child animations
                delayChildren: 0.4,   // Delay before child animations start
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
                stiffness: 100, // Stiffer spring for more responsiveness
                damping: 18,    // Balanced damping for a subtle bounce
                mass: 0.8,      // Add mass for a more natural feel
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 22,
                mass: 0.6, // Add mass for a more natural feel
                delay: 0.2,
            },
        },
    };

    // Background animation variant
    const bgVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 0.15,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="hero-section" aria-label="Hero" role="region">
            {/* Animated background elements */}
            {/* <motion.div
                className="hero-bg-pattern"
                variants={bgVariants}
                initial="hidden"
                animate="visible"
            ></motion.div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="hero-title" variants={itemVariants}>
                    {t('heroTitle')}
                </motion.h1>
                <motion.p className="hero-subtitle" variants={itemVariants}>
                    {t('heroSubtitle')}
                </motion.p>
                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.div variants={buttonVariants}>
                        <Button
                            to="/about"
                            variant="primary"
                            size="lg"
                            icon={<i className="fas fa-arrow-right"></i>}
                        >
                            {t('learnMore')}
                        </Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} style={{ marginLeft: '1rem' }}>
                        <Button
                            to="/contact"
                            variant="outline"
                            size="lg"
                        >
                            {t('contactUs')}
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div> */}
        </section>
    );
};

export default HeroSection;