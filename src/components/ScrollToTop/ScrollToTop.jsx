import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

/**
 * ScrollToTop component provides a button that appears when scrolling down
 * and allows users to smoothly scroll back to the top of the page
 */
const ScrollToTop = ({ threshold = 300 }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down past threshold
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top-button"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    <i className="fas fa-arrow-up"></i>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;