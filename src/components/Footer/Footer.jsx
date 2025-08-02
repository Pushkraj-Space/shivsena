import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-content">
                        <h3>{t('shivsena')}</h3>
                        <p>
                            {t('aboutDescription')}
                        </p>
                    </div>

                    <div className="footer-headquarters">
                        <h4>{t('shivsena')} {t('headquarters')}</h4>
                        <ul>
                            <li>{t('shivsena')} {t('building')}</li>
                            <li>{t('dadar')}, {t('mumbai')} - 400028</li>
                            <li>{t('phone')}: +91 22 2430 0000</li>
                            <li>{t('email')}: info@shivsena.org</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>{t('quickLinks')}</h4>
                    <ul>
                        <li><a href="#home">{t('home')}</a></li>
                        <li><a href="#about">{t('about')}</a></li>
                        <li><a href="#programs">{t('programs')}</a></li>
                        <li><a href="#media">{t('media')}</a></li>
                        <li><a href="#news">{t('news')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <div className="social-icons">
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

                    <div className="copyright">
                        <p>&copy; 2025 {t('shivsena')}. {t('allRightsReserved')}.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
