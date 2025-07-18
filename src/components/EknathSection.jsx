import React, { useState, useEffect } from 'react'

const EknathSection = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const activities = [
        {
            id: 1,
            image: '/images/shivsena-banner.jpg',
            title: 'मुख्यमंत्री माझी लाडकी बहीण योजना',
            subtitle: 'माझी लेक, माझा अभिमान',
            description: 'मुख्यमंत्री माझी लाडकी बहिण योजना मधून महिलांना मिळतोय दरमहा ₹1500 चा सन्मान!',
            category: 'महिला सक्षमीकरण'
        },
        {
            id: 2,
            image: '/images/shivsena-banner-2.jpg',
            title: 'शेतकरी कल्याण कार्य',
            subtitle: 'शेती आणि शेतकरी प्रथम',
            description: 'शेतकऱ्यांच्या कल्याणासाठी विविध योजना आणि कार्यक्रम राबवण्यात येत आहेत.',
            category: 'शेती विकास'
        },
        {
            id: 3,
            image: '/images/shivsena-banner-3.jpg',
            title: 'पुरस्कार वितरण',
            subtitle: 'कर्तृत्वाचा सन्मान',
            description: 'विविध क्षेत्रातील उत्कृष्ट कामगिरी करणाऱ्यांना पुरस्कार वितरण करण्यात येत आहे.',
            category: 'सन्मान'
        },
        {
            id: 4,
            image: '/images/shivsena-banner-4.jpg',
            title: 'गोसेवा कार्य',
            subtitle: 'गायीची सेवा ही ईश्वराची सेवा',
            description: 'गोसेवा आणि पशुसंवर्धनासाठी विविध कार्यक्रम राबवण्यात येत आहेत.',
            category: 'गोसेवा'
        }
    ]

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

    return (
        <section className="section eknath-section">
            <div className="container">
                <h2 className="section-title">एकनाथ पर्व...</h2>
                <p className="section-subtitle">
                    मुख्यमंत्री एकनाथ शिंदे यांच्या नेतृत्वाखाली महाराष्ट्रातील विकासाचे कार्य
                </p>

                <div className="highlighted-cards-container">
                    <div className="highlighted-cards">
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
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
                                        <button className="btn btn-primary btn-sm">अधिक जाणून घ्या</button>
                                    </div>
                                </div>
                            </div>
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

                <div className="activities-description">
                    <h3>नेते आणि त्यांची कर्तृत्वगाथा</h3>
                    <p>
                        मुख्यमंत्री एकनाथ शिंदे यांच्या नेतृत्वाखाली महाराष्ट्रात विकासाचे नवीन अध्याय लिहिले जात आहेत.
                        त्यांच्या कार्यशैलीने जनतेला खऱ्या अर्थाने सरकार जवळ आणले आहे.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default EknathSection 