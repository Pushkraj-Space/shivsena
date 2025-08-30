import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionDivider from '../SectionDivider/SectionDivider';

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
        <section className="section inspiration-section-custom" style={{ 
            padding: '50px 0',
            background: '#ffffff'
        }}>
            <style>{`
                .inspiration-section-custom .flip-card {
                    width: 100%;
                    max-width: 350px;
                    margin: 15px auto;
                    aspect-ratio: 3/3;
                    perspective: 1200px;
                }

                .inspiration-section-custom .flip-card-inner {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                }

                .inspiration-section-custom .flip-card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    backface-visibility: hidden;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
                    transition: box-shadow 0.3s ease;
                }

                .inspiration-section-custom .flip-card:hover .flip-card-face {
                    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);
                }

                .inspiration-section-custom .flip-card-back {
                    transform: rotateY(180deg);
                }

                .inspiration-section-custom .flip-card-front {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: #ffffff;
                }

                .inspiration-section-custom .flip-card-front img {
                    width: 100%;
                    height: 80%;
                    object-fit: contain;
                    filter: grayscale(100%);
                    transition: filter 0.6s ease;
                    background: #ffffff;
                }

                .inspiration-section-custom .flip-card:hover .flip-card-front img {
                    filter: grayscale(0%);
                }

                .inspiration-section-custom .leader-name-section {
                    background: linear-gradient(135deg, #F37021 0%, #e65a1a 100%);
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-align: center;
                    padding: 15px 12px;
                    transition: all 0.3s ease;
                    height: 22%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-transform: uppercase;
                    border-top: 3px solid #d1451a;
                    box-shadow: 0 4px 15px rgba(243, 112, 33, 0.3);
                }

                .inspiration-section-custom .leader-name-section::before {
                    content: "✧";
                    margin-right: 8px;
                    color: #ffffff;
                    font-size: 14px;
                }

                .inspiration-section-custom .leader-name-section::after {
                    content: "✧";
                    margin-left: 8px;
                    color: #ffffff;
                    font-size: 14px;
                }

                @media (min-width: 768px) {
                    .inspiration-section-custom .flip-card {
                        margin: 15px;
                        max-width: 340px;
                    }
                    .inspiration-section-custom .leader-name-section {
                        font-size: 18px;
                        padding: 16px 14px;
                        letter-spacing: 2px;
                    }
                }

                .inspiration-section-custom .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }

                .inspiration-section-custom .section-title {
                    font-size: 2.4rem;
                    margin-bottom: 15px;
                    color: #2c3e50;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-bottom: 30px;
                }

                .inspiration-section-custom .section-subtitle {
                    font-size: 1.2rem;
                    margin-bottom: 30px;
                    color: #5a6c7d;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
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
                                <div className="flip-card-face flip-card-front">
                                    <img src={leader.image} alt={leader.name} />
                                    <div className="leader-name-section">{leader.name}</div>
                                </div>

                                {/* Back */}
                                <div
                                    className="flip-card-face flip-card-back"
                                    style={{
                                        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                                        color: '#ffffff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 20,
                                        textAlign: 'center',
                                    }}
                                >
                                    <h3 className="leader-name" style={{ 
                                        fontSize: 18, 
                                        marginBottom: 10,
                                        color: '#F37021',
                                        fontWeight: 'bold'
                                    }}>
                                        {leader.name}
                                    </h3>
                                    <p className="leader-description" style={{ 
                                        marginTop: 10, 
                                        color: '#ecf0f1', 
                                        fontSize: '14px',
                                        lineHeight: '1.5'
                                    }}>
                                        {leader.description}
                                    </p>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={quoteIndices[idx]}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -30 }}
                                            transition={{ duration: 0.8 }}
                                            style={{
                                                marginTop: 15,
                                                fontStyle: 'italic',
                                                fontSize: 14,
                                                color: '#F37021',
                                                maxWidth: '90%',
                                                textAlign: 'center',
                                                fontWeight: '500',
                                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                                            }}
                                        >
                                            "{leader.quotes[quoteIndices[idx]]}"
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <SectionDivider pattern="wave" color="#dfcfa9" height={100} /> */}
        </section>
    );
};

export default InspirationSection;
