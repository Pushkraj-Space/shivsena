import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

    const [quoteIndices, setQuoteIndices] = useState(
        leaders.map(() => Math.floor(Math.random() * 3))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndices(prev =>
                prev.map((_, idx) => Math.floor(Math.random() * leaders[idx].quotes.length))
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [leaders]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const leaderVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const leaderRightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <section className="section inspiration-section-fluid" style={{
            padding: '80px 20px',
            background: '#f4f4f4',
            overflow: 'hidden'
        }}>
            <style>{`
                .inspiration-section-fluid {
                    font-family: 'Poppins', sans-serif;
                }
                .inspiration-section-fluid .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }
                .inspiration-section-fluid .section-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    text-align: center;
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                }
                .inspiration-section-fluid .section-subtitle {
                    font-size: 1.2rem;
                    color: #5a6c7d;
                    max-width: 800px;
                    margin: 0 auto 60px;
                    text-align: center;
                }
                .inspiration-section-fluid .leader-row {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                }
                .inspiration-section-fluid .leader-item {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }
                .inspiration-section-fluid .leader-item:nth-child(even) {
                    flex-direction: row-reverse;
                }
                .inspiration-section-fluid .leader-image-container {
                    flex-shrink: 0;
                    width: 350px;
                    height: 350px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 8px solid #F37021;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }
                .inspiration-section-fluid .leader-image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .inspiration-section-fluid .leader-content {
                    flex: 1;
                    padding: 20px;
                }
                .inspiration-section-fluid .leader-name {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #2c3e50;
                    margin-bottom: 15px;
                }
                .inspiration-section-fluid .leader-description {
                    font-size: 1.1rem;
                    color: #5a6c7d;
                    line-height: 1.7;
                    margin-bottom: 20px;
                }
                .inspiration-section-fluid .leader-quote {
                    font-style: italic;
                    font-size: 1rem;
                    color: #F37021;
                    font-weight: 600;
                }
                @media (max-width: 992px) {
                    .inspiration-section-fluid .leader-item {
                        flex-direction: column !important;
                        text-align: center;
                    }
                    .inspiration-section-fluid .leader-image-container {
                        width: 250px;
                        height: 250px;
                    }
                }
                @media (max-width: 768px) {
                    .inspiration-section-fluid .section-title {
                        font-size: 2.2rem;
                    }
                    .inspiration-section-fluid .section-subtitle {
                        font-size: 1rem;
                        margin-bottom: 40px;
                    }
                    .inspiration-section-fluid .leader-name {
                        font-size: 2rem;
                    }
                    .inspiration-section-fluid .leader-image-container {
                        width: 200px;
                        height: 200px;
                    }
                }
            `}</style>

            <div className="container">
                <h2 className="section-title">{t('ourInspiration')}</h2>
                {/* <p className="section-subtitle">
                    {t('inspirationDescription')}
                </p> */}
                <motion.div
                    className="leader-row"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {leaders.map((leader, idx) => (
                        <motion.div
                            key={idx}
                            className="leader-item"
                            variants={idx % 2 === 0 ? leaderVariants : leaderRightVariants}
                        >
                            <div className="leader-image-container">
                                <img src={leader.image} alt={leader.name} />
                            </div>
                            <div className="leader-content">
                                <h3 className="leader-name">{leader.name}</h3>
                                <p className="leader-description">
                                    {leader.description}
                                </p>
                                <motion.p
                                    key={quoteIndices[idx]}
                                    className="leader-quote"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    "{leader.quotes[quoteIndices[idx]]}"
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* <SectionDivider pattern="wave" color="#dfcfa9" height={100} /> */}
        </section>
    );
};

export default InspirationSection;

