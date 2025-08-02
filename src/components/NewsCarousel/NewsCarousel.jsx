import React, { useState, useEffect } from 'react';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
import { useTranslation } from 'react-i18next';

const NewsCarousel = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // State to control animation

    const newsItems = [
        {
            id: 1,
            image: '/images/shivsena-banner.jpg',
            title: t('electionVictory2024'),
            description: t('electionVictoryDescription'),
            category: t('election'),
            date: '2024',
            link: '#'
        },
        {
            id: 2,
            image: '/images/shivsena-banner-2.jpg',
            title: t('partyExpansion'),
            description: t('partyExpansionDescription'),
            category: t('organization'),
            date: '2024',
            link: '#'
        },
        {
            id: 3,
            image: '/images/shivsena-banner-3.jpg',
            title: t('braveFamiliesSupport'),
            description: t('braveFamiliesSupportDescription'),
            category: t('welfare'),
            date: '2024',
            link: '#'
        },
        {
            id: 4,
            image: '/images/shivsena-banner-4.jpg',
            title: t('maharashtraDevelopment'),
            description: t('maharashtraDevelopmentDescription'),
            category: t('development'),
            date: '2024',
            link: '#'
        },
        {
            id: 5,
            image: '/images/shivsena-banner.jpg',
            title: t('farmerWelfareProgram'),
            description: t('farmerWelfareProgramDescription'),
            category: t('agriculture'),
            date: '2024',
            link: '#'
        },
        {
            id: 6,
            image: '/images/shivsena-banner-2.jpg',
            title: t('youthWelfareEmployment'),
            description: t('youthWelfareEmploymentDescription'),
            category: t('youth'),
            date: '2024',
            link: '#'
        }
    ];

    const newsAnimations = [
        'fade-in',
        'slide-in-left',
        'scale-in',
        'rotate-in',
        'fade-in-up',
        'fade-in-down',
    ];

    // Auto-rotate news items
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % newsItems.length);
        }, 3500); // Slightly faster than EknathSection

        return () => clearInterval(interval);
    }, [newsItems.length, isPaused]);

    const handleCardHover = (index) => {
        setIsPaused(true);
        setActiveIndex(index);
    };

    const handleCardLeave = () => {
        setIsPaused(false);
    };

    // Effect to trigger the animation on component mount
    useEffect(() => {
        // A small delay to ensure the component is mounted before setting isVisible to true,
        // which then triggers the CSS transition.
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    // Define the animated styles as a JavaScript object
    const animatedWrapperStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    };

    return (
        // Apply the dynamic style to the wrapper div
        <div style={animatedWrapperStyle}>
            <section className="section news-carousel">
                <div className="container">
                    <h2 className="section-title">{t('importantMoments2024')}</h2>
                    <p className="section-subtitle">
                        {t('partyImportantMoments')}
                    </p>

                    <div className="news-cards-container">
                        <div className="news-cards">
                            {newsItems.map((item, index) => (
                                <AnimatedOnScroll
                                    key={item.id}
                                    animation="fade-in-up"
                                    delay={index * 0.25}
                                >
                                    <div
                                        className={`news-card ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                        onMouseEnter={() => handleCardHover(index)}
                                        onMouseLeave={handleCardLeave}
                                    >
                                        <div className="news-card-image">
                                            <img src={item.image} alt={item.title} />
                                            <div className="news-card-badge">
                                                <span className="category">{item.category}</span>
                                                <span className="date">{item.date}</span>
                                            </div>
                                            <div className="news-card-overlay">
                                                <div className="overlay-content">
                                                    <i className="fas fa-newspaper"></i>
                                                    <span>{t('breakingNews')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-card-body">
                                            <div className="news-card-header">
                                                <h3 className="news-title">{item.title}</h3>
                                                <div className="news-meta">
                                                    <span className="news-category">{item.category}</span>
                                                    <span className="news-date">{item.date}</span>
                                                </div>
                                            </div>
                                            <p className="news-description">{item.description}</p>
                                            <div className="news-card-actions">
                                                <a href={item.link} className="btn btn-outline-primary btn-sm">
                                                    <i className="fas fa-arrow-right"></i>
                                                    {t('readMore')}
                                                </a>
                                                <button className="btn btn-icon">
                                                    <i className="fas fa-share-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedOnScroll>
                            ))}
                        </div>

                        <div className="news-navigation">
                            <div className="news-indicators">
                                {newsItems.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`news-indicator ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <span className="indicator-dot"></span>
                                        <span className="indicator-label">{index + 1}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="news-controls">
                                <button
                                    className="control-btn prev"
                                    onClick={() => setActiveIndex((prev) => prev === 0 ? newsItems.length - 1 : prev - 1)}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button
                                    className="control-btn next"
                                    onClick={() => setActiveIndex((prev) => (prev + 1) % newsItems.length)}
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsCarousel;