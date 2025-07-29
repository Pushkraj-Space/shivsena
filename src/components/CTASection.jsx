import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
    const { t } = useTranslation();
    // State to control when the animation starts
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

    // useEffect to trigger the animation when the component mounts
    useEffect(() => {
        // A small delay ensures the component has rendered before
        // the `isVisible` state changes, allowing the CSS transition to work.
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150); // Adjust this delay as needed

        // Cleanup the timer if the component unmounts before the timer fires
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <section className="section cta-section">
            <div className="container">
                <h2 className="section-title">{t('activelyParticipate')}</h2>
                <p className="section-subtitle">
                    {t('participateInOurWork')}
                </p>

                <div className="row">
                    {ctaItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`col-33 fade-in-up ${isVisible ? 'animate-in' : ''}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="cta-card">
                                <i className={item.icon} style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '2rem' }}></i>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.buttonLink} className="btn btn-primary btn-lg">
                                    {item.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTASection;