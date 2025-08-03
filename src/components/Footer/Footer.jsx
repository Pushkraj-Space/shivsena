import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-logo">{t('shivsena')}</span>
                </div>

                <div className="footer-links">
                    <a href="#home">{t('home')}</a>
                    <a href="#about">{t('about')}</a>
                    <a href="#programs">{t('programs')}</a>
                    <a href="#media">{t('media')}</a>
                    <a href="#contact">{t('contact')}</a>
                </div>

                <div className="footer-social">
                    <a href="https://www.facebook.com/Shivsenaofc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/shivsenaofc" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/shivsenaofc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; 2025 {t('shivsena')}. {t('allRightsReserved')}.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
