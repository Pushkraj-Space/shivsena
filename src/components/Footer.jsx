import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-50">
                        <div className="footer-content">
                            <h3>शिवसेना</h3>
                            <p>
                                शिवसेना हा महाराष्ट्रातील एक प्रमुख राजकीय पक्ष आहे. हिंदू हृदयसम्राट बाळासाहेब ठाकरे यांनी
                                स्थापन केलेल्या या पक्षाचे मुख्य ध्येय मराठी अस्मितेचे संरक्षण आणि जनतेच्या हितासाठी कार्य करणे आहे.
                            </p>
                        </div>
                    </div>

                    <div className="col-25">
                        <div className="footer-links">
                            <h4>त्वरित लिंक्स</h4>
                            <ul>
                                <li><a href="#home">मुख्यपृष्ठ</a></li>
                                <li><a href="#about">आमची माहिती</a></li>
                                <li><a href="#programs">कार्यक्रम</a></li>
                                <li><a href="#media">मीडिया</a></li>
                                <li><a href="#news">बातमी</a></li>
                                <li><a href="#contact">संपर्क</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-25">
                        <div className="footer-links">
                            <h4>शिवसेना मुख्यालय</h4>
                            <ul>
                                <li>शिवसेना भवन</li>
                                <li>दादर, मुंबई - 400028</li>
                                <li>फोन: +91 22 2430 0000</li>
                                <li>ईमेल: info@shivsena.org</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/Shivsenaofc" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/shivsenaofc" aria-label="X" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/shivsenaofc/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>

                    <div className="copyright">
                        <p>&copy; 2025 शिवसेना. सर्व हक्क राखीव.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 