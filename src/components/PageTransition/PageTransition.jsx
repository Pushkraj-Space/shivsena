import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 30,
            scale: 0.98,
            filter: "blur(4px)"
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
        },
        out: {
            opacity: 0,
            y: -20,
            scale: 0.98,
            filter: "blur(2px)"
        }
    };

    const pageTransition = {
        type: 'tween',
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(2px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{
                willChange: "transform, opacity, filter",
                backfaceVisibility: "hidden"
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PageTransition;