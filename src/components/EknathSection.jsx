import React, { useState, useEffect } from 'react'
import AnimatedOnScroll from './AnimatedOnScroll'
import { useTranslation } from 'react-i18next'

const EknathSection = () => {
    const { t } = useTranslation();
    const [currentCard, setCurrentCard] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const activities = [
        {
            id: 1,
            image: '/images/shivsena-banner.jpg',
            title: t('ladkiBahinScheme'),
            subtitle: t('ladkiBahinSubtitle'),
            description: t('ladkiBahinDescription'),
            category: t('womenEmpowerment')
        },
        {
            id: 2,
            image: '/images/shivsena-banner-2.jpg',
            title: t('farmerWelfare'),
            subtitle: t('farmerWelfareSubtitle'),
            description: t('farmerWelfareDescription'),
            category: t('agricultureDevelopment')
        },
        {
            id: 3,
            image: '/images/shivsena-banner-3.jpg',
            title: t('awardDistribution'),
            subtitle: t('awardDistributionSubtitle'),
            description: t('awardDistributionDescription'),
            category: t('honor')
        },
        {
            id: 4,
            image: '/images/shivsena-banner-4.jpg',
            title: t('gosevaWork'),
            subtitle: t('gosevaSubtitle'),
            description: t('gosevaDescription'),
            category: t('goseva')
        }
    ]

    const cardAnimations = [
        'slide-in-right',
        'slide-in-left',
        'scale-in',
        // 'rotate-in-up-left',
        // 'rotate-in-up-right',
        // 'rotate-in-down-left',
        // 'rotate-in-down-right',
        // 'rotate-in-left-up',
        // 'rotate-in-up-right',
    ];

    // Set section to visible when component mounts
    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Auto-rotate cards (only when not hovered)
    useEffect(() => {
        if (isHovered) return; // Pause auto-rotation when hovered

        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % activities.length)
        }, 4000) // Change card every 4 seconds

        return () => clearInterval(interval)
    }, [activities.length, isHovered])

    const handleCardHover = (index) => {
        setIsHovered(true)
        setCurrentCard(index)
    }

    const handleCardLeave = () => {
        setIsHovered(false)
    }

    // Animation styles (can also be placed in a separate CSS file)
    const animationStyles = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .eknath-section-enter {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .section-title-enter {
            animation: fadeInUp 0.6s ease-out 0.2s forwards;
            opacity: 0;
        }
        
        .section-subtitle-enter {
            animation: fadeInUp 0.6s ease-out 0.4s forwards;
            opacity: 0;
        }
        
        .highlighted-cards-container-enter {
            animation: fadeInUp 0.8s ease-out 0.6s forwards;
            opacity: 0;
        }
        
        .activities-description-enter {
            animation: fadeInUp 0.8s ease-out 0.8s forwards;
            opacity: 0;
        }
        
        .highlighted-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .highlighted-card:hover {
            transform: translateY(-5px);
        }
        
        .highlighted-card.active {
            animation: fadeIn 0.5s ease-out;
        }
        
        .indicator {
            transition: transform 0.2s ease, background-color 0.2s ease;
        }
        
        .indicator:hover {
            transform: scale(1.2);
        }
        
        .indicator.active {
            animation: fadeIn 0.3s ease-out;
        }
    `

    return (
        <>
            <style>{animationStyles}</style>
            <section className={`section eknath-section ${isVisible ? 'eknath-section-enter' : ''}`}>
                <div className="container">
                    <h2 className={`section-title ${isVisible ? 'section-title-enter' : ''}`}>{t('eknathEra')}</h2>
                    <p className={`section-subtitle ${isVisible ? 'section-subtitle-enter' : ''}`}>
                        {t('eknathLeadershipDescription')}
                    </p>

                    <div className={`highlighted-cards-container ${isVisible ? 'highlighted-cards-container-enter' : ''}`}>
                        <div className="highlighted-cards">
                            {activities.map((activity, index) => (
                                <AnimatedOnScroll
                                    key={activity.id}
                                    animation="fade-in-up"
                                    delay={index * 0.25}
                                >
                                    <div
                                        className={`highlighted-card ${index === currentCard ? 'active' : ''}`}
                                        onClick={() => setCurrentCard(index)}
                                        onMouseEnter={() => handleCardHover(index)}
                                        onMouseLeave={handleCardLeave}
                                    >
                                        <div className="card-image">
                                            <img src={activity.image} alt={activity.alt} />
                                            <div className="card-overlay">
                                                <div className="card-category">{activity.category}</div>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="card-title">{activity.title}</h3>
                                            <h4 className="card-subtitle">{activity.subtitle}</h4>
                                            <p className="card-description">{activity.description}</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-sm">{t('learnMore')}</button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedOnScroll>
                            ))}
                        </div>

                        <div className="card-indicators">
                            {activities.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentCard ? 'active' : ''}`}
                                    onClick={() => setCurrentCard(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={`activities-description ${isVisible ? 'activities-description-enter' : ''}`}>
                        <h3>{t('leadersAndAchievements')}</h3>
                        <p>
                            {t('eknathAchievementsDescription')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EknathSection