import React, { useState } from 'react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="text-center">
                        <span>शिवसेना - गर्व से कहो हम हिंदू हैं </span>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <div className="logo-text">शिवसेना</div>
                        </div>

                        <nav className="nav-menu">
                            <ul>
                                <li><a href="#home">मुख्यपृष्ठ</a></li>
                                <li><a href="#about">आमची माहिती</a></li>
                                <li><a href="#programs">कार्यक्रम</a></li>
                                <li><a href="#media">मीडिया</a></li>
                                <li><a href="#news">बातमी</a></li>
                                <li><a href="#contact">संपर्क</a></li>
                            </ul>
                        </nav>

                        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
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
        </header>
    )
}

export default Header 