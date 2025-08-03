import React from 'react';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
import { useTranslation } from 'react-i18next';
import './StrengthSection.css';

const StrengthSection = () => {
    const { t } = useTranslation();

    const strengthBlocks = [
        {
            id: 1,
            title: t('marathiIdentity'),
            description: t('marathiIdentityDescription'),
            background: 'white'
        },
        {
            id: 2,
            title: t('nationalismAndHonesty'),
            description: t('nationalismAndHonestyDescription'),
            background: 'orange'
        },
        {
            id: 3,
            title: t('peopleFirst'),
            description: t('peopleFirstDescription'),
            background: 'white'
        },
        {
            id: 4,
            title: t('actionOverWords'),
            description: t('actionOverWordsDescription'),
            background: 'white'
        },
        {
            id: 5,
            title: t('fearlessLeadership'),
            description: t('fearlessLeadershipDescription'),
            background: 'white'
        },
        {
            id: 6,
            title: t('unityAndSolidarity'),
            description: t('unityAndSolidarityDescription'),
            background: 'white'
        }
    ];

    const blockAnimations = [
        'fade-in',
        'slide-in-left',
        'scale-in',
        'rotate-in',
        'fade-in-up',
    ];

    return (
        <section className="section strength-section">
            <div className="container">
                <h2 className="section-title">
                    {t('marathiMindStrength')}
                </h2>
                <p className="section-subtitle">
                    {t('partyPrinciplesAndGoals')}
                </p>

                <div className="strength-grid">
                    {strengthBlocks.map((block, index) => {
                        let animation = "fade-in-up";
                        if (block.id === 1 || block.id === 4) animation = "slide-in-left";
                        else if (block.id === 3 || block.id === 5) animation = "slide-in-right";
                        else if (block.id === 2) animation = "fade-in-down";
                        else if (block.id === 6) animation = "fade-in-up";
                        return (
                            <AnimatedOnScroll
                                key={block.id}
                                animation={animation}
                                delay={index * 0.25}
                            >
                                <div className={`strength-block strength-block-${block.background}`}>
                                    <h3>{block.title}</h3>
                                    <p>{block.description}</p>
                                </div>
                            </AnimatedOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StrengthSection;