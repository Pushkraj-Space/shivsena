import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { optimizeScroll, isMobile, shouldDisableAnimations } from '../../utils/mobileOptimization';

// Create context for scroll-related functionality
const ScrollContext = createContext({
    smoothScrollEnabled: false, // Disabled by default for mobile
    toggleSmoothScroll: () => { },
    scrollProgress: 0,
    isScrolling: false,
});

/**
 * Optimized ScrollProvider component that provides scroll tracking
 * without heavy DOM manipulation for better mobile performance
 */
export const ScrollProvider = ({ children }) => {
    // Disable smooth scrolling by default on mobile for better performance
    const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(!isMobile());
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
        setScrollProgress(progress);

        // Set scrolling state for performance optimizations
        setIsScrolling(true);

        // Clear scrolling state after a short delay
        setTimeout(() => setIsScrolling(false), 150);
    }, []);

    // Create optimized scroll listener
    const optimizedScrollHandler = useCallback(
        optimizeScroll(handleScroll),
        [handleScroll]
    );

    // Toggle smooth scrolling on/off (disabled on mobile)
    const toggleSmoothScroll = useCallback(() => {
        if (!isMobile()) {
            setSmoothScrollEnabled(prev => !prev);
        }
    }, []);

    // Initialize scroll tracking
    useEffect(() => {
        // Disable animations on low-end devices
        if (shouldDisableAnimations()) {
            // Add CSS to disable animations
            const style = document.createElement('style');
            style.textContent = `
                * {
                    animation: none !important;
                    transition: none !important;
                    transform: none !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Add scroll listener with passive option for better performance
        window.addEventListener('scroll', optimizedScrollHandler, {
            passive: true,
            capture: false
        });

        // Initialize scroll progress
        handleScroll();

        return () => {
            window.removeEventListener('scroll', optimizedScrollHandler);
        };
    }, [optimizedScrollHandler, handleScroll]);

    // Provide context value
    const contextValue = {
        smoothScrollEnabled,
        toggleSmoothScroll,
        scrollProgress,
        isScrolling,
    };

    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook to use the scroll context
export const useScroll = () => useContext(ScrollContext);

export default ScrollProvider;