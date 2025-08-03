import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../ScrollProvider/ScrollProvider';
import './SectionDivider.css';

/**
 * SectionDivider component adds a visually interesting separator between sections
 * with scroll-reactive animations
 */
const SectionDivider = ({
    color = '#F37021',
    height = 120,
    pattern = 'wave', // 'wave', 'curve', 'angle', 'zigzag'
    invert = false,
    backgroundColor = 'transparent'
}) => {
    const { scrollProgress } = useScroll();

    // Generate SVG path based on pattern type
    const getPath = () => {
        switch (pattern) {
            case 'wave':
                return invert
                    ? `M0,${height} C150,0 350,${height} 500,0 C650,${height} 850,0 1000,${height} L1000,0 L0,0 Z`
                    : `M0,0 C150,${height} 350,0 500,${height} C650,0 850,${height} 1000,0 L1000,${height} L0,${height} Z`;
            case 'curve':
                return invert
                    ? `M0,${height} Q500,0 1000,${height} L1000,0 L0,0 Z`
                    : `M0,0 Q500,${height} 1000,0 L1000,${height} L0,${height} Z`;
            case 'angle':
                return invert
                    ? `M0,${height} L500,0 L1000,${height} L1000,0 L0,0 Z`
                    : `M0,0 L500,${height} L1000,0 L1000,${height} L0,${height} Z`;
            case 'zigzag':
                return invert
                    ? `M0,${height} L250,0 L500,${height} L750,0 L1000,${height} L1000,0 L0,0 Z`
                    : `M0,0 L250,${height} L500,0 L750,${height} L1000,0 L1000,${height} L0,${height} Z`;
            default:
                return invert
                    ? `M0,${height} C150,0 350,${height} 500,0 C650,${height} 850,0 1000,${height} L1000,0 L0,0 Z`
                    : `M0,0 C150,${height} 350,0 500,${height} C650,0 850,${height} 1000,0 L1000,${height} L0,${height} Z`;
        }
    };

    // Calculate animation values based on scroll progress
    const pathVariants = {
        initial: {
            d: getPath(),
        },
        animate: {
            d: getPath(),
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="section-divider" style={{ height: `${height}px`, backgroundColor }}>
            <svg
                className="divider-svg"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
            >
                <motion.path
                    variants={pathVariants}
                    initial="initial"
                    animate="animate"
                    fill={color}
                    d={getPath()}
                />
            </svg>
        </div>
    );
};

export default SectionDivider;