import React from 'react';
import { motion } from 'framer-motion';

const InspirationSection = () => {
    // Parent container variants for the whole section content
    const sectionContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Stagger children (title, subtitle, then rows)
                delayChildren: 0.1,    // Initial delay before first child starts
            },
        },
    };

    // Variants for the main section title and subtitle
    const textVariants = {
        hidden: { opacity: 0, y: 40 }, // Increased y for more pronounced slide-up
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 85, // Slightly more stiffness
                damping: 17,
                mass: 0.8, // Added mass for a heavier, smoother feel
            },
        },
    };

    // Variants for the row containing leader cards, to stagger the cards
    const rowVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each leader card
                delayChildren: 0.2,   // Delay before the first card in the row starts
            },
        },
    };

    // Variants for the individual leader cards
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.7, rotateY: 90 }, // Start smaller and rotated
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0, // Rotate back to normal
            transition: {
                type: 'spring',
                stiffness: 120, // Snappier spring for the card's main entry
                damping: 25,
                mass: 1, // More mass for a substantial feel
                duration: 0.8, // Overall duration for control
            },
        },
    };

    // Variants for the image within the leader card (more dynamic zoom/pan)
    const imageVariants = {
        hidden: { scale: 1.1, x: -10, filter: 'grayscale(100%)' }, // Slightly zoomed, shifted, grayscale
        visible: {
            scale: 1,
            x: 0,
            filter: 'grayscale(0%)', // Remove grayscale
            transition: {
                type: 'spring',
                stiffness: 60, // Softer spring for subtle image movement
                damping: 10,
                delay: 0.3, // Image animation starts slightly after card
            },
        },
    };

    return (
        <section className="section inspiration-section">
            <motion.div
                className="container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of container is in view
                variants={sectionContainerVariants} // Apply container orchestration
            >
                <motion.h2
                    className="section-title"
                    variants={textVariants} // Inherits from sectionContainerVariants
                >
                    आमचे प्रेरणास्थान
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    variants={textVariants} // Inherits from sectionContainerVariants
                >
                    आमच्या पक्षाच्या प्रेरणास्थान असलेल्या महान नेत्यांची ओळख
                </motion.p>

                <motion.div
                    className="row"
                    variants={rowVariants} // Orchestrates card animations
                >
                    <motion.div
                        className="col-50"
                        variants={cardVariants} // Individual card animation
                    >
                        <div className="leader-card">
                            <motion.div
                                className="leader-image"
                                variants={imageVariants} // Image animation within card
                            >
                                <img
                                    src="/images/balkadu.jpg"
                                    alt="हिंदू हृदयसम्राट बाळासाहेब ठाकरे"
                                />
                            </motion.div>
                            <div className="leader-info">
                                <h3 className="leader-name">हिंदू हृदयसम्राट बाळासाहेब ठाकरे</h3>
                                <p className="leader-description">
                                    शिवसेना संस्थापक बाळासाहेब ठाकरे यांचे नेतृत्व आणि विचारधारा
                                    आमच्या पक्षाचे प्रेरणास्थान आहे. त्यांच्या मार्गदर्शनाखाली
                                    शिवसेना महाराष्ट्रातील जनतेच्या हितासाठी कार्य करत आहे.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-50"
                        variants={cardVariants} // Individual card animation
                    >
                        <div className="leader-card">
                            <motion.div
                                className="leader-image"
                                variants={imageVariants} // Image animation within card
                            >
                                <img
                                    src="/images/saheb.jpeg"
                                    alt="धर्मवीर आनंद दिघे साहेब"
                                />
                            </motion.div>
                            <div className="leader-info">
                                <h3 className="leader-name">धर्मवीर आनंद दिघे साहेब</h3>
                                <p className="leader-description">
                                    धर्मवीर आनंद दिघे साहेब यांचे नेतृत्व आणि त्याग आमच्या पक्षाचे
                                    प्रेरणास्थान आहे. त्यांच्या कार्यशैलीने शिवसेनेला नवीन दिशा
                                    मिळाली.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default InspirationSection;