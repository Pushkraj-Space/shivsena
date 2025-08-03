import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../utils/useInView';
import './StaggeredAnimation.css';

export default function StaggeredAnimation({
    children,
    staggerDelay = 0.1,
    animation = "fade-in-up",
    distance = 30,
    duration = 0.6,
    threshold = 0.1,
    once = true,
    className = "",
    style = {}
}) {
    const [ref, inView] = useInView({ threshold, triggerOnce: once });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1
            }
        }
    };

    const getItemVariants = () => {
        const baseTransition = {
            duration,
            ease: [0.25, 0.1, 0.25, 1]
        };

        switch (animation) {
            case "fade-in-up":
                return {
                    hidden: {
                        opacity: 0,
                        y: distance,
                        filter: "blur(2px)"
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.6 },
                            y: { duration: duration },
                            filter: { duration: duration * 0.8 }
                        }
                    }
                };

            case "fade-in-down":
                return {
                    hidden: {
                        opacity: 0,
                        y: -distance,
                        filter: "blur(2px)"
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.6 },
                            y: { duration: duration },
                            filter: { duration: duration * 0.8 }
                        }
                    }
                };

            case "slide-in-left":
                return {
                    hidden: {
                        opacity: 0,
                        x: -distance,
                        scale: 0.95
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.5 },
                            x: { duration: duration },
                            scale: { duration: duration * 0.8 }
                        }
                    }
                };

            case "slide-in-right":
                return {
                    hidden: {
                        opacity: 0,
                        x: distance,
                        scale: 0.95
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.5 },
                            x: { duration: duration },
                            scale: { duration: duration * 0.8 }
                        }
                    }
                };

            case "scale-in":
                return {
                    hidden: {
                        opacity: 0,
                        scale: 0.8,
                        rotateY: -10
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.6 },
                            scale: { duration: duration },
                            rotateY: { duration: duration * 0.8 }
                        }
                    }
                };

            case "bounce-in":
                return {
                    hidden: {
                        opacity: 0,
                        y: distance,
                        scale: 0.5
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 200
                        }
                    }
                };

            case "flip-in":
                return {
                    hidden: {
                        opacity: 0,
                        rotateX: 90,
                        scale: 0.8
                    },
                    visible: {
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.4 },
                            rotateX: { duration: duration },
                            scale: { duration: duration * 0.8 }
                        }
                    }
                };

            default:
                return {
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: baseTransition
                    }
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            className={`staggered-container ${className}`}
            style={style}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    className="staggered-item"
                    variants={getItemVariants()}
                    style={{
                        willChange: "transform, opacity, filter",
                        backfaceVisibility: "hidden"
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
} 