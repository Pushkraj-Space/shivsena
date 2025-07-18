import React, { useState, useEffect } from 'react'

const NewsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const newsItems = [
        {
            id: 1,
            image: '/images/shivsena-banner.jpg',
            title: '२०२४ विधानसभा निवडणुकांत दणदणीत विजय',
            description: 'शिवसेना पक्षाने २०२४ च्या विधानसभा निवडणुकांत दणदणीत विजय मिळवला. मुख्यमंत्री एकनाथ शिंदे यांच्या नेतृत्वाखाली पक्षाचा विस्तार झाला.',
            category: 'निवडणूक',
            date: '२०२४',
            link: '#'
        },
        {
            id: 2,
            image: '/images/shivsena-banner-2.jpg',
            title: 'पक्षाचा विस्तार आणि संघटन बळकटीकरण',
            description: 'शिवसेना पक्षाचा विस्तार सर्वत्र होत आहे. नवीन कार्यकर्ते पक्षात सामील होत आहेत.',
            category: 'संघटन',
            date: '२०२४',
            link: '#'
        },
        {
            id: 3,
            image: '/images/shivsena-banner-3.jpg',
            title: 'शौर्यगाथेतील कुटुंबांना आर्थिक मदत',
            description: 'शौर्यगाथेतील कुटुंबांना आर्थिक मदत पुरवण्यात येत आहे. सरकार त्यांच्या कल्याणासाठी कार्य करत आहे.',
            category: 'कल्याण',
            date: '२०२४',
            link: '#'
        },
        {
            id: 4,
            image: '/images/shivsena-banner-4.jpg',
            title: 'महाराष्ट्रातील विकास प्रकल्प',
            description: 'महाराष्ट्रातील विकास प्रकल्पांना गती मिळत आहे. जनतेच्या हितासाठी नवीन योजना सुरू केल्या आहेत.',
            category: 'विकास',
            date: '२०२४',
            link: '#'
        },
        {
            id: 5,
            image: '/images/shivsena-banner.jpg',
            title: 'शेतकरी कल्याण कार्यक्रम',
            description: 'शेतकरी कल्याणासाठी विविध कार्यक्रम राबवण्यात येत आहेत. शेतकऱ्यांना आर्थिक मदत पुरवण्यात येत आहे.',
            category: 'शेती',
            date: '२०२४',
            link: '#'
        },
        {
            id: 6,
            image: '/images/shivsena-banner-2.jpg',
            title: 'युवा कल्याण आणि रोजगार',
            description: 'युवकांना रोजगार मिळवण्यास मदत करण्यासाठी विविध कार्यक्रम राबवण्यात येत आहेत.',
            category: 'युवा',
            date: '२०२४',
            link: '#'
        }
    ]

    // Auto-rotate news items
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % newsItems.length)
        }, 3500) // Slightly faster than EknathSection

        return () => clearInterval(interval)
    }, [newsItems.length, isPaused])

    const handleCardHover = (index) => {
        setIsPaused(true)
        setActiveIndex(index)
    }

    const handleCardLeave = () => {
        setIsPaused(false)
    }

    return (
        <section className="section news-carousel">
            <div className="container">
                <h2 className="section-title">महत्वाचे क्षण व ठळक घडामोडी (२०२४-२०२५)</h2>
                <p className="section-subtitle">
                    आमच्या पक्षाच्या महत्वाच्या क्षणांची झलक
                </p>

                <div className="news-cards-container">
                    <div className="news-cards">
                        {newsItems.map((item, index) => (
                            <div
                                key={item.id}
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
                                            <span>ताजी बातमी</span>
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
                                            अधिक वाचा
                                        </a>
                                        <button className="btn btn-icon">
                                            <i className="fas fa-share-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
    )
}

export default NewsCarousel 