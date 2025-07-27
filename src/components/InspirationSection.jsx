import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leaders = [
    {
        name: 'हिंदू हृदयसम्राट बाळासाहेब ठाकरे',
        image: '/images/thakresaheb.jpeg',
        description:
            'शिवसेना संस्थापक बाळासाहेब ठाकरे यांचे नेतृत्व आणि विचारधारा आमच्या पक्षाचे प्रेरणास्थान आहे. त्यांच्या मार्गदर्शनाखाली शिवसेना महाराष्ट्रातील जनतेच्या हितासाठी कार्य करत आहे.',
        quotes: [
            "मी झुकणार नाही, वाकणार नाही, मी फक्त मराठी माणसासाठी लढत राहणार!",
            "जो हिंदुत्वाशी गद्दारी करेल, तो या देशात टिकू शकत नाही.",
            "शिवसेना ही मराठी माणसाच्या अस्मितेची चळवळ आहे.",
        ],
    },
    {
        name: 'धर्मवीर आनंद दिघे साहेब',
        image: '/images/dighesaheb.jpeg',
        description:
            'धर्मवीर आनंद दिघे साहेब यांचे नेतृत्व आणि त्याग आमच्या पक्षाचे प्रेरणास्थान आहे. त्यांच्या कार्यशैलीने शिवसेनेला नवीन दिशा मिळाली.',
        quotes: [
            "कार्यकर्ता हा माझा आत्मा आहे.",
            "समाजासाठी झिजा, राजकारण आपोआप मागे लागेल.",
            "जनतेच्या हाकेला प्रतिसाद देणं म्हणजेच खरं नेतृत्व.",
        ]
    },
];

const cardFlipTransition = {
    type: 'spring',
    stiffness: 55,
    damping: 16,
    duration: 1.05,
};

const InspirationSection = () => {
    const [flipped, setFlipped] = useState(Array(leaders.length).fill(false));
    const [quoteIndices, setQuoteIndices] = useState(
        leaders.map(() => Math.floor(Math.random() * 3))
    );

    const handleFlip = idx => {
        setFlipped(prev => prev.map((val, i) => (i === idx ? !val : val)));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndices(prev =>
                prev.map((_, idx) => Math.floor(Math.random() * leaders[idx].quotes.length))
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section inspiration-section">
            <style>{`
                .flip-card {
                    width: 100%;
                    max-width: 500px;
                    margin: 20px auto;
                    aspect-ratio: 3/3.5;
                    perspective: 1200px;
                }

                .flip-card-inner {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                }

                .flip-card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    backface-visibility: hidden;
                    border-radius: 20px;
                    overflow: hidden;
                }

                .flip-card-back {
                    transform: rotateY(180deg);
                }

                .flip-card-front img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                    transition: filter 0.6s ease;
                }

                .flip-card:hover .flip-card-front img {
                    filter: grayscale(0%);
                }

                .black-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.56);
                    color: #f37021;
                    font-size: 20px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-align: center;
                    padding: 16px 10px;
                    transition: all 0.3s ease;
                }

                @media (min-width: 768px) {
                    .flip-card {
                        margin: 20px;
                    }
                    .black-overlay {
                        font-size: 22px;
                        padding: 20px 12px;
                    }
                }

                .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
            `}</style>

            <div className="container">
                <h2 className="section-title">आमचे प्रेरणास्थान</h2>
                <p className="section-subtitle">
                    आमच्या पक्षाच्या प्रेरणास्थान असलेल्या महान नेत्यांची ओळख
                </p>

                <div className="row">
                    {leaders.map((leader, idx) => (
                        <div
                            key={idx}
                            className="flip-card"
                            onClick={() => handleFlip(idx)}
                            style={{ cursor: 'pointer' }}
                        >
                            <motion.div
                                className="flip-card-inner"
                                animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                                transition={cardFlipTransition}
                            >
                                {/* Front */}
                                <div className="flip-card-face flip-card-front" style={{ position: 'relative' }}>
                                    <img src={leader.image} alt={leader.name} />
                                    <div className="black-overlay">{leader.name}</div>
                                </div>

                                {/* Back */}
                                <div
                                    className="flip-card-face flip-card-back"
                                    style={{
                                        background: '#1a1a1a',
                                        color: '#fff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 28,
                                        textAlign: 'center',
                                    }}
                                >
                                    <h3 className="leader-name" style={{ fontSize: 20 }}>
                                        {leader.name}
                                    </h3>
                                    <p className="leader-description" style={{ marginTop: 15, color: '#fff' }}>
                                        {leader.description}
                                    </p>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={quoteIndices[idx]}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -40 }}
                                            transition={{ duration: 1 }}
                                            style={{
                                                marginTop: 24,
                                                fontStyle: 'italic',
                                                fontSize: 16,
                                                color: '#f37021',
                                                maxWidth: '90%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            “{leader.quotes[quoteIndices[idx]]}”
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationSection;
