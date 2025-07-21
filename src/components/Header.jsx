import React, { useState } from 'react'
import FontSelector from './FontSelector'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [leadershipDropdownOpen, setLeadershipDropdownOpen] = useState(false)
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
    const [mobileLeadershipDropdownOpen, setMobileLeadershipDropdownOpen] = useState(false)
    const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // Only one desktop dropdown open at a time
    const handleLeadershipEnter = () => {
        setLeadershipDropdownOpen(true);
        setAboutDropdownOpen(false);
    };
    const handleLeadershipLeave = () => setLeadershipDropdownOpen(false);
    const handleAboutEnter = () => {
        setAboutDropdownOpen(true);
        setLeadershipDropdownOpen(false);
    };
    const handleAboutLeave = () => setAboutDropdownOpen(false);

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
                                <li><Link to="/">मुख्यपृष्ठ</Link></li>
                                <li
                                    style={{ position: 'relative' }}
                                    onMouseEnter={handleLeadershipEnter}
                                    onMouseLeave={handleLeadershipLeave}
                                >
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>नेतृत्व ▾</span>
                                    {leadershipDropdownOpen && (
                                        <ul style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            background: '#fff',
                                            boxShadow: '0 2px 12px #e0c97f33',
                                            borderRadius: 8,
                                            minWidth: 180,
                                            zIndex: 10,
                                            padding: 0,
                                            margin: 0,
                                            listStyle: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 0,
                                        }}>
                                            <li><Link to="/founder" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>संस्थापक</Link></li>
                                            <li><Link to="/past-leader" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>ठाण्याचे वाघ</Link></li>
                                            <li><Link to="/current-leadership" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>वर्तमान नेतृत्व</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><a href="#about">आमची माहिती</a></li>
                                <li><a href="#programs">कार्यक्रम</a></li>
                                <li><a href="#media">मीडिया</a></li>
                                <li><a href="#news">बातमी</a></li>
                                <li><a href="#contact">संपर्क</a></li>
                                <li><Link to="/history">इतिहास</Link></li>
                                <li
                                    style={{ position: 'relative' }}
                                    onMouseEnter={handleAboutEnter}
                                    onMouseLeave={handleAboutLeave}
                                >
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>पक्षाविषयी ▾</span>
                                    {aboutDropdownOpen && (
                                        <ul style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            background: '#fff',
                                            boxShadow: '0 2px 12px #e0c97f33',
                                            borderRadius: 8,
                                            minWidth: 180,
                                            zIndex: 10,
                                            padding: 0,
                                            margin: 0,
                                            listStyle: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 0,
                                        }}>
                                            <li><Link to="/history" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>इतिहास आणि वारसा</Link></li>
                                            <li><Link to="/angle" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>दृष्टीकोन आणि ध्येय</Link></li>
                                            <li><Link to="/organizational-structure" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>संगठन रचना</Link></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <FontSelector />
                        </div>

                        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <div
                                style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                onClick={() => {
                                    setMobileLeadershipDropdownOpen(!mobileLeadershipDropdownOpen);
                                    setMobileAboutDropdownOpen(false);
                                }}
                            >
                                नेतृत्व ▾
                            </div>
                            {mobileLeadershipDropdownOpen && (
                                <ul style={{
                                    background: '#fff',
                                    borderRadius: 8,
                                    boxShadow: '0 2px 12px #e0c97f33',
                                    margin: '8px 0',
                                    padding: 0,
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                }}>
                                    <li><Link to="/founder" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संस्थापक</Link></li>
                                    <li><Link to="/past-leader" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>ठाण्याचे वाघ</Link></li>
                                    <li><Link to="/current-leadership" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>वर्तमान नेतृत्व</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <div
                                style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                onClick={() => {
                                    setMobileAboutDropdownOpen(!mobileAboutDropdownOpen);
                                    setMobileLeadershipDropdownOpen(false);
                                }}
                            >
                                पक्षाविषयी ▾
                            </div>
                            {mobileAboutDropdownOpen && (
                                <ul style={{
                                    background: '#fff',
                                    borderRadius: 8,
                                    boxShadow: '0 2px 12px #e0c97f33',
                                    margin: '8px 0',
                                    padding: 0,
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                }}>
                                    <li><Link to="/history" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>इतिहास आणि वारसा</Link></li>
                                    <li><Link to="/angle" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>दृष्टीकोन आणि ध्येय</Link></li>
                                    <li><Link to="/organizational-structure" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संगठन रचना</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#home">मुख्यपृष्ठ</a></li>
                        <li><a href="#about">आमची माहिती</a></li>
                        <li><a href="#programs">कार्यक्रम</a></li>
                        <li><a href="#media">मीडिया</a></li>
                        <li><a href="#news">बातमी</a></li>
                        <li><a href="#contact">संपर्क</a></li>
                        <li><Link to="/history" onClick={() => setIsMobileMenuOpen(false)}>इतिहास</Link></li>
                        <li className="mobile-font-selector">
                            <FontSelector />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header 