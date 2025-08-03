import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSmoothScroll } from '../../utils/smoothScroll';

// Create context for scroll-related functionality
const ScrollContext = createContext({
    smoothScrollEnabled: true,
    toggleSmoothScroll: () => { },
    scrollProgress: 0,
});

/**
 * ScrollProvider component that provides smooth scrolling functionality
 * and scroll-related data to the entire application
 */
export const ScrollProvider = ({ children }) => {
    // State to control whether smooth scrolling is enabled
    const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(true);

    // Track scroll progress (0 to 1) for animations based on scroll position
    const [scrollProgress, setScrollProgress] = useState(0);

    // Initialize smooth scrolling
    const { scrollY } = useSmoothScroll({
        enabled: smoothScrollEnabled,
        // Adjust these values for different scroll feels
        damping: 25,
        stiffness: 180,
    });

    // Toggle smooth scrolling on/off
    const toggleSmoothScroll = () => {
        setSmoothScrollEnabled(prev => !prev);
    };

    // Track scroll progress for animations
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider
            value={{
                smoothScrollEnabled,
                toggleSmoothScroll,
                scrollProgress,
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook to use the scroll context
export const useScroll = () => useContext(ScrollContext);

export default ScrollProvider;