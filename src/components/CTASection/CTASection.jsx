import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CTASection = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    const ctaItems = [
        {
            id: 1,
            icon: 'fas fa-user-plus',
            title: t('registerMembership'),
            description: t('registerMembershipDescription'),
            buttonText: t('register'),
            buttonLink: '#register'
        },
        {
            id: 2,
            icon: 'fas fa-hands-helping',
            title: t('becomeVolunteer'),
            description: t('becomeVolunteerDescription'),
            buttonText: t('becomeVolunteer'),
            buttonLink: '#volunteer'
        },
        {
            id: 3,
            icon: 'fas fa-hand-holding-heart',
            title: t('makeDonation'),
            description: t('makeDonationDescription'),
            buttonText: t('makeDonation'),
            buttonLink: '#donate'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section cta-section">
            <style>{`
                .cta-section {
                    background: var(--light-gray, #f8f9fa);
                    color: var(--text-color, #333333);
                    padding: 5rem 0;
                    position: relative;
                }

                .cta-section .container {
                    position: relative;
                    z-index: 2;
                }

                .cta-section .section-title {
                    color: var(--primary-color, #F37021);
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .cta-section .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 4px;
                    background: var(--gradient-primary, linear-gradient(135deg, #ff6b35 0%, #f7931e 100%));
                    border-radius: 2px;
                }

                .cta-section .section-subtitle {
                    color: var(--text-light, #666666);
                    text-align: center;
                    font-size: 1.2rem;
                    margin-bottom: 4rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.6;
                }

                .cta-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2.5rem;
                    margin-top: 3rem;
                }

                .cta-card {
                    background: var(--white, #ffffff);
                    padding: 3rem 2.5rem;
                    border-radius: 15px;
                    box-shadow: var(--shadow-medium, 0 4px 20px rgba(0, 0, 0, 0.15));
                    transition: all 0.3s ease;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                .cta-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-heavy, 0 8px 30px rgba(0, 0, 0, 0.2));
                }

                .cta-icon {
                    width: 80px;
                    height: 80px;
                    background: var(--gradient-primary, linear-gradient(135deg, #ff6b35 0%, #f7931e 100%));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    font-size: 2rem;
                    color: white;
                    transition: all 0.3s ease;
                }

                .cta-card:hover .cta-icon {
                    transform: scale(1.1);
                }

                .cta-card h3 {
                    color: var(--text-color, #333333);
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .cta-card p {
                    color: var(--text-light, #666666);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    font-size: 1rem;
                }

                .cta-button {
                    background: var(--gradient-primary, linear-gradient(135deg, #ff6b35 0%, #f7931e 100%));
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    display: inline-block;
                    font-size: 1rem;
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-medium, 0 4px 20px rgba(0, 0, 0, 0.15));
                }

                @media (max-width: 768px) {
                    .cta-section {
                        padding: 3rem 0;
                    }
                    
                    .cta-section .section-title {
                        font-size: 2.5rem;
                    }
                    
                    .cta-section .section-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 3rem;
                    }
                    
                    .cta-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        margin-top: 2rem;
                    }
                    
                    .cta-card {
                        padding: 2.5rem 2rem;
                    }
                    
                    .cta-icon {
                        width: 70px;
                        height: 70px;
                        font-size: 1.8rem;
                    }
                    
                    .cta-card h3 {
                        font-size: 1.3rem;
                    }
                    
                    .cta-card p {
                        font-size: 0.95rem;
                    }
                    
                    .cta-button {
                        padding: 10px 25px;
                        font-size: 0.95rem;
                    }
                }

                @media (max-width: 480px) {
                    .cta-section .section-title {
                        font-size: 2rem;
                    }
                    
                    .cta-card {
                        padding: 2rem 1.5rem;
                    }
                    
                    .cta-icon {
                        width: 60px;
                        height: 60px;
                        font-size: 1.5rem;
                    }
                    
                    .cta-card h3 {
                        font-size: 1.2rem;
                    }
                    
                    .cta-card p {
                        font-size: 0.9rem;
                    }
                }
            `}</style>

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('activelyParticipate')}
                </motion.h2>

                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t('participateInOurWork')}
                </motion.p>

                <div className="cta-grid">
                    {ctaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="cta-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="cta-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.buttonLink} className="cta-button">
                                {item.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTASection;