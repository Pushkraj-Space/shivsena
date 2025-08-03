/**
 * Smooth Scroll Utility
 * Provides a premium scrolling experience with physics-based animations
 */

import { useEffect } from 'react';
import { useSpring } from 'framer-motion';

// Configuration for the scroll physics
const SCROLL_PHYSICS = {
    damping: 30,  // Higher damping means less oscillation
    stiffness: 200, // Higher stiffness means faster scrolling
    mass: 1, // Mass affects the momentum
    restSpeed: 0.01, // Speed at which the animation is considered "at rest"
};

/**
 * Creates a smooth scrolling effect for the entire page
 * @param {Object} options - Configuration options
 * @param {boolean} options.enabled - Whether smooth scrolling is enabled
 * @param {number} options.damping - Damping factor (default: 30)
 * @param {number} options.stiffness - Stiffness factor (default: 200)
 */
export const useSmoothScroll = ({
    enabled = true,
    damping = SCROLL_PHYSICS.damping,
    stiffness = SCROLL_PHYSICS.stiffness,
} = {}) => {
    // Create a spring for the scroll position
    const scrollY = useSpring(0, {
        damping,
        stiffness,
        mass: SCROLL_PHYSICS.mass,
        restSpeed: SCROLL_PHYSICS.restSpeed,
    });

    useEffect(() => {
        if (!enabled) return;

        // Store the current scroll position
        let currentScrollY = window.scrollY;

        // Set the initial scroll position
        scrollY.set(currentScrollY);

        // Create a wrapper element for the content
        const contentWrapper = document.createElement('div');
        contentWrapper.style.position = 'fixed';
        contentWrapper.style.width = '100%';
        contentWrapper.style.top = '0';
        contentWrapper.style.left = '0';
        contentWrapper.style.willChange = 'transform';

        // Move all body children to the wrapper
        const body = document.body;
        const originalChildren = Array.from(body.children);
        originalChildren.forEach(child => {
            if (child !== contentWrapper) {
                contentWrapper.appendChild(child);
            }
        });

        // Add the wrapper to the body
        body.appendChild(contentWrapper);

        // Set body height to maintain scroll area
        const setBodyHeight = () => {
            body.style.height = `${contentWrapper.scrollHeight}px`;
        };

        // Update on resize
        window.addEventListener('resize', setBodyHeight);
        setBodyHeight();

        // Handle scroll events
        const handleScroll = () => {
            currentScrollY = window.scrollY;
            scrollY.set(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Update the transform on animation frame
        const unsubscribe = scrollY.onChange(value => {
            contentWrapper.style.transform = `translate3d(0, ${-value}px, 0)`;
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', setBodyHeight);
            window.removeEventListener('scroll', handleScroll);
            unsubscribe();

            // Restore original DOM structure
            originalChildren.forEach(child => {
                if (body.contains(contentWrapper) && contentWrapper.contains(child)) {
                    body.appendChild(child);
                }
            });

            if (body.contains(contentWrapper)) {
                body.removeChild(contentWrapper);
            }

            body.style.height = '';
            window.scrollTo(0, currentScrollY);
        };
    }, [enabled, scrollY]);

    return { scrollY };
};

/**
 * Scrolls to a specific element with a smooth animation
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Configuration options
 */
export const scrollToElement = (elementId, options = {}) => {
    const {
        offset = 0,
        duration = 800,
        easing = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    } = options;

    const element = document.getElementById(elementId);
    if (!element) return;

    const start = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - start;
    let startTime = null;

    const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easing(progress);

        window.scrollTo(0, start + distance * easedProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};

/**
 * Creates a parallax effect for elements when scrolling
 * @param {number} speed - The speed of the parallax effect (1 = normal, <1 = slower, >1 = faster)
 * @returns {Object} - The ref to attach to the element and the transform style
 */
export const useParallax = (speed = 0.5) => {
    const ref = React.useRef(null);
    const [transformStyle, setTransformStyle] = React.useState('translateY(0)');

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const scrollY = window.scrollY;
            const rect = ref.current.getBoundingClientRect();
            const elementY = rect.top + scrollY;
            const viewportHeight = window.innerHeight;

            // Only apply parallax when element is in viewport
            if (elementY > scrollY - rect.height && elementY < scrollY + viewportHeight) {
                const offset = (scrollY - elementY + viewportHeight) * speed;
                setTransformStyle(`translateY(${offset}px)`);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    return { ref, style: { transform: transformStyle, willChange: 'transform' } };
};

export default useSmoothScroll;