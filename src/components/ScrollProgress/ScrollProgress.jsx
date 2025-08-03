import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useScroll } from '../ScrollProvider/ScrollProvider';
import './ScrollProgress.css';

/**
 * ScrollProgress component displays a visual indicator of scroll progress
 * and provides visual feedback during scrolling
 */
const ScrollProgress = ({ color = '#F37021' }) => {
    const { scrollProgress } = useScroll();

    // Create a smoother progress value with spring physics
    const smoothProgress = useSpring(scrollProgress, {
        damping: 20,
        stiffness: 100,
        mass: 0.5,
    });

    // Transform the progress (0-1) to width percentage (0-100%)
    const width = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    return (
        <div className="scroll-progress-container">
            <motion.div
                className="scroll-progress-bar"
                style={{
                    width,
                    backgroundColor: color,
                }}
            />
        </div>
    );
};

export default ScrollProgress;