import React, { useState, useEffect } from 'react';
import AnimatedOnScroll from './AnimatedOnScroll';

const MediaSection = () => {
    const [activeTab, setActiveTab] = useState('happenings');
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // For overall section animation
    const [staggeredVisible, setStaggeredVisible] = useState(false); // For staggered internal elements

    const latestHappenings = [
        {
            id: 1,
            title: 'मुख्यमंत्री एकनाथ शिंदे यांची नागपूर येथील कार्यक्रम',
            time: '2 तासांपूर्वी',
            category: 'कार्यक्रम',
            icon: 'fas fa-calendar-alt'
        },
        {
            id: 2,
            title: 'शिवसेना कार्यकर्त्यांची बैठक',
            time: '4 तासांपूर्वी',
            category: 'बैठक',
            icon: 'fas fa-users'
        },
        {
            id: 3,
            title: 'जनतेशी संवाद कार्यक्रम',
            time: '6 तासांपूर्वी',
            category: 'संवाद',
            icon: 'fas fa-comments'
        },
        {
            id: 4,
            title: 'विकास प्रकल्पांची प्रगती',
            time: '8 तासांपूर्वी',
            category: 'विकास',
            icon: 'fas fa-chart-line'
        },
        {
            id: 5,
            title: 'राज्यातील महत्वाचे निर्णय',
            time: '1 दिवसापूर्वी',
            category: 'निर्णय',
            icon: 'fas fa-gavel'
        }
    ];

    const featuredVideos = [
        {
            id: 1,
            thumbnail: '/images/shivsena-banner.jpg',
            title: 'मुख्यमंत्री एकनाथ शिंदे यांचे भाषण',
            duration: '15:30',
            views: '2.5K',
            category: 'भाषण'
        },
        {
            id: 2,
            thumbnail: '/images/shivsena-banner-2.jpg',
            title: 'शिवसेना कार्यकर्त्यांची रॅली',
            duration: '8:45',
            views: '1.8K',
            category: 'रॅली'
        },
        {
            id: 3,
            thumbnail: '/images/shivsena-banner-3.jpg',
            title: 'जनतेशी संवाद कार्यक्रम',
            duration: '12:20',
            views: '3.2K',
            category: 'संवाद'
        }
    ];

    const upcomingPrograms = [
        {
            id: 1,
            date: 'May 03, 2025',
            time: '10:00 AM',
            title: 'दसरा मेळावा',
            description: 'नागपूर येथील दसरा मेळावा',
            location: 'नागपूर',
            category: 'मेळावा',
            attendees: '5000+'
        },
        {
            id: 2,
            date: 'May 02, 2025',
            time: '3:00 PM',
            title: 'मेगा रॅली',
            description: 'मुंबई येथील मेगा रॅली',
            location: 'मुंबई',
            category: 'रॅली',
            attendees: '10000+'
        },
        {
            id: 3,
            date: 'May 01, 2025',
            time: '9:00 AM',
            title: 'कार्यकर्ता प्रशिक्षण',
            description: 'कार्यकर्त्यांचे प्रशिक्षण कार्यक्रम',
            location: 'पुणे',
            category: 'प्रशिक्षण',
            attendees: '500+'
        }
    ];

    // Auto-rotate videos
    useEffect(() => {
        if (isPlaying) return;

        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % featuredVideos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [featuredVideos.length, isPlaying]);

    const handleVideoHover = (index) => {
        setIsPlaying(true);
        setCurrentVideo(index);
    };

    const handleVideoLeave = () => {
        setIsPlaying(false);
    };

    // Effect to trigger the animation on component mount for the section
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150);
        return () => clearTimeout(timer);
    }, []);

    // Effect to trigger staggered animation when activeTab changes
    useEffect(() => {
        setStaggeredVisible(false); // Reset to trigger animation again
        const timer = setTimeout(() => {
            setStaggeredVisible(true);
        }, 300); // Small delay after tab change
        return () => clearTimeout(timer);
    }, [activeTab]); // Rerun when activeTab changes

    // Define the animated styles as a JavaScript object for the overall section
    const animatedSectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    };

    const happeningAnimations = [
        'funny-bounce',
        'slide-in-left',
        'scale-in',
        'rotate-in',
        'fade-in-up',
    ];
    const videoAnimations = [
        'scale-in',
        'slide-in-right',
        'funny-bounce',
    ];
    const programAnimations = [
        'fade-in-down',
        'slide-in-left',
        'rotate-in',
    ];

    return (
        <section className="section media-section" style={animatedSectionStyle}>
            <div className="container">
                <h2 className="section-title">लाईव्ह अपडेट्स / मीडिया</h2>
                <p className="section-subtitle">
                    ताज्या घडामोडी आणि आगामी कार्यक्रमांची माहिती
                </p>

                <div className="media-tabs">
                    <button
                        className={`media-tab ${activeTab === 'happenings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('happenings')}
                    >
                        <i className="fas fa-newspaper"></i>
                        ताज्या घडामोडी
                    </button>
                    <button
                        className={`media-tab ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('videos')}
                    >
                        <i className="fas fa-play-circle"></i>
                        ठळक व्हिडिओज
                    </button>
                    <button
                        className={`media-tab ${activeTab === 'programs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('programs')}
                    >
                        <i className="fas fa-calendar"></i>
                        आगामी कार्यक्रम
                    </button>
                </div>

                <div className="media-content">
                    {activeTab === 'happenings' && (
                        <div className="happenings-grid">
                            {latestHappenings.map((happening, index) => (
                                <AnimatedOnScroll
                                    key={happening.id}
                                    animation={happeningAnimations[index % happeningAnimations.length]}
                                    delay={index * 0.25}
                                >
                                    <div
                                        className={`happening-card`}
                                    >
                                        <div className="happening-icon">
                                            <i className={happening.icon}></i>
                                        </div>
                                        <div className="happening-content">
                                            <div className="happening-meta">
                                                <span className="happening-category">{happening.category}</span>
                                                <span className="happening-time">{happening.time}</span>
                                            </div>
                                            <h4 className="happening-title">{happening.title}</h4>
                                        </div>
                                        <div className="happening-arrow">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </AnimatedOnScroll>
                            ))}
                        </div>
                    )}

                    {activeTab === 'videos' && (
                        <div className="videos-showcase">
                            <div className={`featured-video ${staggeredVisible ? 'stagger-in from-top' : ''}`}>
                                <div className="video-player">
                                    <img
                                        src={featuredVideos[currentVideo].thumbnail}
                                        alt={featuredVideos[currentVideo].title}
                                    />
                                    <div className="video-overlay">
                                        <button className="play-btn-large">
                                            <i className="fas fa-play"></i>
                                        </button>
                                        <div className="video-info">
                                            <h3>{featuredVideos[currentVideo].title}</h3>
                                            <div className="video-stats">
                                                <span><i className="fas fa-clock"></i> {featuredVideos[currentVideo].duration}</span>
                                                <span><i className="fas fa-eye"></i> {featuredVideos[currentVideo].views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-thumbnails">
                                {featuredVideos.map((video, index) => (
                                    <AnimatedOnScroll
                                        key={video.id}
                                        animation={videoAnimations[index % videoAnimations.length]}
                                        delay={index * 0.3}
                                    >
                                        <div
                                            className={`video-thumbnail ${index === currentVideo ? 'active' : ''}`}
                                            onClick={() => setCurrentVideo(index)}
                                            onMouseEnter={() => handleVideoHover(index)}
                                            onMouseLeave={handleVideoLeave}
                                        >
                                            <img src={video.thumbnail} alt={video.title} />
                                            <div className="thumbnail-overlay">
                                                <div className="play-button">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                                <div className="thumbnail-info">
                                                    <span className="duration">{video.duration}</span>
                                                    <span className="category">{video.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedOnScroll>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'programs' && (
                        <div className="programs-timeline">
                            {upcomingPrograms.map((program, index) => (
                                <AnimatedOnScroll
                                    key={program.id}
                                    animation={programAnimations[index % programAnimations.length]}
                                    delay={index * 0.28}
                                >
                                    <div className={`program-card`}>
                                        <div className="program-date-badge">
                                            <div className="date-day">{new Date(program.date).getDate()}</div>
                                            <div className="date-month">{new Date(program.date).toLocaleDateString('mr-IN', { month: 'short' })}</div>
                                        </div>
                                        <div className="program-content">
                                            <div className="program-header">
                                                <h3 className="program-title">{program.title}</h3>
                                                <span className="program-category">{program.category}</span>
                                            </div>
                                            <p className="program-description">{program.description}</p>
                                            <div className="program-details">
                                                <div className="detail-item">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>{program.location}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <i className="fas fa-clock"></i>
                                                    <span>{program.time}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <i className="fas fa-users"></i>
                                                    <span>{program.attendees}</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline-primary btn-sm">
                                                <i className="fas fa-calendar-plus"></i>
                                                रिमाइंडर सेट करा
                                            </button>
                                        </div>
                                    </div>
                                </AnimatedOnScroll>
                            ))}
                        </div>
                    )}
                </div>

                <div className="media-footer">
                    <div className="media-stats">
                        <div className={`stat-item ${isVisible ? 'stagger-in from-bottom' : ''}`} style={{ transitionDelay: '0.8s' }}>
                            <i className="fas fa-eye"></i>
                            <span>50K+ दर्शक</span>
                        </div>
                        <div className={`stat-item ${isVisible ? 'stagger-in from-bottom' : ''}`} style={{ transitionDelay: '0.9s' }}>
                            <i className="fas fa-video"></i>
                            <span>100+ व्हिडिओज</span>
                        </div>
                        <div className={`stat-item ${isVisible ? 'stagger-in from-bottom' : ''}`} style={{ transitionDelay: '1.0s' }}>
                            <i className="fas fa-calendar-check"></i>
                            <span>25+ कार्यक्रम</span>
                        </div>
                    </div>
                    <a href="#more" className={`btn btn-primary btn-lg ${isVisible ? 'stagger-in from-bottom' : ''}`} style={{ transitionDelay: '1.1s' }}>
                        <i className="fas fa-external-link-alt"></i>
                        सर्व मीडिया पहा
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MediaSection;