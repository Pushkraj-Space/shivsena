import React, { useState } from 'react'
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll'
import { useTranslation } from 'react-i18next'
import './CartoonsSection.css'

const CartoonsSection = () => {
    const { t } = useTranslation();
    const [selectedCartoon, setSelectedCartoon] = useState(null)

    const cartoons = [
        {
            id: 1,
            image: '/images/vyang/balasaheb image black and white.jpg',
            title: t('shivsenaFounder'),
            size: 'large'
        },
        {
            id: 2,
            image: '/images/vyang/career as cartoonist.jpg',
            title: t('mumbaiSher'),
            size: 'medium'
        },
        {
            id: 3,
            image: '/images/vyang/Gallery-Cartoonist 1.jpg',
            title: t('democracyAndPeople'),
            size: 'small'
        },
        {
            id: 4,
            image: '/images/vyang/Gallery-Cartoonist 2.jpg',
            title: t('farmerAndAgriculture'),
            size: 'medium'
        },
        {
            id: 5,
            image: '/images/vyang/Gallery-Cartoonist 3.jpg',
            title: t('youthPower'),
            size: 'large'
        },
        {
            id: 6,
            image: '/images/vyang/Gallery-Cartoonist 4.jpg',
            title: t('maharashtraPride'),
            size: 'small'
        },
        {
            id: 7,
            image: '/images/vyang/Gallery-Cartoonist 5.jpg',
            title: t('shivsenaMovement'),
            size: 'medium'
        },
        {
            id: 8,
            image: '/images/vyang/Gallery-Cartoonist 6.jpg',
            title: t('marathiMan'),
            size: 'small'
        },
        // {
        //     id: 9,
        //     image: '/images/vyang/balasaheb image black and white.jpg',
        //     title: 'शिवसेना शक्ती',
        //     size: 'large'
        // },
        // {
        //     id: 10,
        //     image: '/images/vyang/career as cartoonist.jpg',
        //     title: 'बाळासाहेब ठाकरे',
        //     size: 'medium'
        // },
        // {
        //     id: 11,
        //     image: '/images/vyang/Gallery-Cartoonist 1.jpg',
        //     title: 'मुंबई दर्शन',
        //     size: 'small'
        // },
        // {
        //     id: 12,
        //     image: '/images/vyang/Gallery-Cartoonist 2.jpg',
        //     title: 'शिवसेना विचार',
        //     size: 'medium'
        // },
        // {
        //     id: 13,
        //     image: '/images/vyang/Gallery-Cartoonist 3.jpg',
        //     title: 'मराठी अस्मिता',
        //     size: 'large'
        // },
        // {
        //     id: 14,
        //     image: '/images/vyang/Gallery-Cartoonist 4.jpg',
        //     title: 'शिवसेना संघर्ष',
        //     size: 'small'
        // },
        // {
        //     id: 15,
        //     image: '/images/vyang/Gallery-Cartoonist 5.jpg',
        //     title: 'बाळासाहेब विचार',
        //     size: 'medium'
        // },
        // {
        //     id: 16,
        //     image: '/images/vyang/Gallery-Cartoonist 6.jpg',
        //     title: 'शिवसेना विजय',
        //     size: 'large'
        // },
        // {
        //     id: 17,
        //     image: '/images/vyang/balasaheb image black and white.jpg',
        //     title: 'मराठी राज्य',
        //     size: 'small'
        // },
        // {
        //     id: 18,
        //     image: '/images/vyang/career as cartoonist.jpg',
        //     title: 'शिवसेना नेतृत्व',
        //     size: 'medium'
        // },
        // {
        //     id: 19,
        //     image: '/images/vyang/Gallery-Cartoonist 1.jpg',
        //     title: 'बाळासाहेब कार्य',
        //     size: 'small'
        // },
        // {
        //     id: 20,
        //     image: '/images/vyang/Gallery-Cartoonist 2.jpg',
        //     title: 'शिवसेना भविष्य',
        //     size: 'large'
        // },
        // {
        //     id: 21,
        //     image: '/images/vyang/Gallery-Cartoonist 3.jpg',
        //     title: 'मराठी भाषा',
        //     size: 'medium'
        // },
        // {
        //     id: 22,
        //     image: '/images/vyang/Gallery-Cartoonist 4.jpg',
        //     title: 'शिवसेना संस्कृती',
        //     size: 'small'
        // },
        // {
        //     id: 23,
        //     image: '/images/vyang/Gallery-Cartoonist 5.jpg',
        //     title: 'बाळासाहेब स्मृती',
        //     size: 'medium'
        // },
        // {
        //     id: 24,
        //     image: '/images/vyang/Gallery-Cartoonist 6.jpg',
        //     title: 'शिवसेना परंपरा',
        //     size: 'large'
        // }
    ]

    const cartoonAnimations = [
        'fade-in',
        'zoom-in',
        'slide-in-up',
        'slide-in-left',
        'slide-in-right',
        'fade-in-up',
        'fade-in-down',
        'zoom-in',
    ];

    const openModal = (cartoon) => {
        setSelectedCartoon(cartoon)
    }

    const closeModal = () => {
        setSelectedCartoon(null)
    }

    return (
        <section className="section cartoons-section">
            <div className="cartoons-header">
                <h2 className="section-title">{t('cartoons')}</h2>
                <p className="section-subtitle">
                    {t('balasahebPoliticalCartoons')}
                </p>
            </div>

            <div className="cartoons-gallery">
                {cartoons.map((cartoon, index) => (
                    <AnimatedOnScroll
                        key={cartoon.id}
                        animation="fade-in-up"
                        delay={index * 0.25}
                    >
                        <div
                            className={`gallery-item ${cartoon.size}`}
                            onClick={() => openModal(cartoon)}
                        >
                            <div className="item-image">
                                <img src={cartoon.image} alt={cartoon.title} />
                                <div className="item-overlay">
                                    <div className="overlay-content">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item-title">
                                <h3>{cartoon.title}</h3>
                            </div>
                        </div>
                    </AnimatedOnScroll>
                ))}
            </div>

            <div className="cartoons-footer">
                <div className="artist-signature">
                    <i className="fas fa-palette"></i>
                    <span>{t('balasahebThackeray')}</span>
                </div>
                <a href="#gallery" className="btn btn-outline-light">
                    {t('viewAllCartoons')}
                </a>
            </div>

            {/* Modal */}
            {selectedCartoon && (
                <div className="cartoon-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        <img src={selectedCartoon.image} alt={selectedCartoon.title} />
                        <h3>{selectedCartoon.title}</h3>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CartoonsSection 