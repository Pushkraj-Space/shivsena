import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InspirationSection = () => {
    const { t } = useTranslation();
    
    const leaders = [
        {
            name: t('balasahebThackerayFull'),
            image: '/images/thakresaheb.jpeg',
            description: t('balasahebDescription'),
            quotes: [
                t('balasahebQuote1'),
                t('balasahebQuote2'),
                t('balasahebQuote3'),
            ],
        },
        {
            name: t('anandDigheFull'),
            image: '/images/dighesaheb.jpeg',
            description: t('anandDigheDescription'),
            quotes: [
                t('anandDigheQuote1'),
                t('anandDigheQuote2'),
                t('anandDigheQuote3'),
            ]
        },
    ];

    const cardFlipTransition = {
        type: 'spring',
        stiffness: 55,
        damping: 16,
        duration: 1.05,
    };

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
                <h2 className="section-title">{t('ourInspiration')}</h2>
                <p className="section-subtitle">
                    {t('inspirationDescription')}
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
