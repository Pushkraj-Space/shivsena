import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../utils/useInView';
import './TextAnimation.css';

export default function TextAnimation({
    children,
    animation = "reveal",
    delay = 0,
    duration = 0.8,
    staggerDelay = 0.05,
    threshold = 0.1,
    once = true,
    className = "",
    style = {}
}) {
    const [ref, inView] = useInView({ threshold, triggerOnce: once });
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
        } else if (!inView && !once) {
            controls.start("hidden");
            setHasAnimated(false);
        }
    }, [inView, controls, once, hasAnimated]);

    const text = typeof children === 'string' ? children : children?.props?.children || '';
    const words = text.split(' ');
    const characters = text.split('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay
            }
        }
    };

    const getAnimationVariants = () => {
        const baseTransition = {
            duration,
            ease: [0.25, 0.1, 0.25, 1]
        };

        switch (animation) {
            case "reveal":
                return {
                    hidden: {
                        opacity: 0,
                        y: 50,
                        filter: "blur(4px)"
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

            case "typewriter":
                return {
                    hidden: {
                        opacity: 0,
                        width: 0
                    },
                    visible: {
                        opacity: 1,
                        width: "100%",
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.3 },
                            width: { duration: duration }
                        }
                    }
                };

            case "slide-up":
                return {
                    hidden: {
                        opacity: 0,
                        y: 30,
                        scale: 0.95
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.5 },
                            y: { duration: duration },
                            scale: { duration: duration * 0.8 }
                        }
                    }
                };

            case "fade-in":
                return {
                    hidden: {
                        opacity: 0,
                        filter: "blur(2px)"
                    },
                    visible: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: {
                            ...baseTransition,
                            opacity: { duration: duration * 0.8 },
                            filter: { duration: duration * 0.6 }
                        }
                    }
                };

            case "scale-in":
                return {
                    hidden: {
                        opacity: 0,
                        scale: 0.8,
                        rotateY: -15
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
                        y: 40,
                        scale: 0.5
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 200,
                            delay: delay
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

    const renderContent = () => {
        if (animation === "typewriter") {
            return (
                <motion.div
                    className={`text-animation typewriter ${className}`}
                    style={{
                        ...style,
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }}
                    initial="hidden"
                    animate={controls}
                    variants={getAnimationVariants()}
                >
                    {children}
                </motion.div>
            );
        }

        if (animation === "word-by-word") {
            return (
                <motion.div
                    ref={ref}
                    className={`text-animation word-by-word ${className}`}
                    style={style}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="word"
                            variants={getAnimationVariants()}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>
            );
        }

        if (animation === "character-by-character") {
            return (
                <motion.div
                    ref={ref}
                    className={`text-animation character-by-character ${className}`}
                    style={style}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {characters.map((char, index) => (
                        <motion.span
                            key={index}
                            className="character"
                            variants={getAnimationVariants()}
                            style={{ display: 'inline-block' }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.div>
            );
        }

        // Default animation
        return (
            <motion.div
                ref={ref}
                className={`text-animation ${animation} ${className}`}
                style={style}
                initial="hidden"
                animate={controls}
                variants={getAnimationVariants()}
            >
                {children}
            </motion.div>
        );
    };

    return renderContent();
} 