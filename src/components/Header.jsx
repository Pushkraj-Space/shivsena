import React, { useState } from 'react'
import FontSelector from './FontSelector'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [leadershipDropdownOpen, setLeadershipDropdownOpen] = useState(false)
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
    const [mobileLeadershipDropdownOpen, setMobileLeadershipDropdownOpen] = useState(false)
    const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false)
    const [initiativesDropdownOpen, setInitiativesDropdownOpen] = useState(false)
    const [mobileInitiativesDropdownOpen, setMobileInitiativesDropdownOpen] = useState(false)
    const [medicalDropdownOpen, setMedicalDropdownOpen] = useState(false)
    const [mobileMedicalDropdownOpen, setMobileMedicalDropdownOpen] = useState(false)
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
    const handleInitiativesEnter = () => {
        setInitiativesDropdownOpen(true);
        setLeadershipDropdownOpen(false);
    };
    const handleInitiativesLeave = () => setInitiativesDropdownOpen(false);
    const handleMedicalEnter = () => {
        setMedicalDropdownOpen(true);
        setLeadershipDropdownOpen(false);
    };
    const handleMedicalLeave = () => setMedicalDropdownOpen(false);
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
                                <li style={{ position: 'relative' }} onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>पक्षाविषयी ▾</span>
                                    {aboutDropdownOpen && (
                                        <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 180, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                            <li><Link to="/history" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>इतिहास आणि वारसा</Link></li>
                                            <li><Link to="/angle" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>दृष्टीकोन आणि ध्येय</Link></li>
                                            <li><Link to="/organizational-structure" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)}>संगठन रचना</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleLeadershipEnter} onMouseLeave={handleLeadershipLeave}>
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>नेतृत्व ▾</span>
                                    {leadershipDropdownOpen && (
                                        <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                            <li><Link to="/founder" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>बाळासाहेब ठाकरे</Link></li>
                                            <li><Link to="/past-leader" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>आनंद दिघे</Link></li>
                                            <li><Link to="/current-leadership" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)}>एकनाथ शिंदे</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleInitiativesEnter} onMouseLeave={handleInitiativesLeave}>
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>आमचे कार्य ▾</span>
                                    {initiativesDropdownOpen && (
                                        <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                            <li><Link to="/initiatives-and-projects" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>उपक्रम आणि प्रकल्प</Link></li>
                                            <li><Link to="/success-stories" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>यशोगाथा आणि ठळक कामगिरी</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleMedicalEnter} onMouseLeave={handleMedicalLeave}>
                                    <span style={{ cursor: 'pointer', fontWeight: 600 }}>वैद्यकीय मदत कक्ष ▾</span>
                                    {medicalDropdownOpen && (
                                        <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                            <li><Link to="/medical-info" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संक्षिप्त माहिती</Link></li>
                                            <li><Link to="/medical-work" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>केलेले काम</Link></li>
                                            <li><Link to="/medical-members" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पदाधिकारी यादी</Link></li>
                                            {/* <li><Link to="/medical-events" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पुढील कार्यक्रम</Link></li> */}
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/media-news">बातम्या व माध्यमे</Link></li>
                                <li><Link to="/contact">संपर्क</Link></li>
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
                        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>मुख्यपृष्ठ</Link></li>
                        <li>
                            <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => { setMobileAboutDropdownOpen(!mobileAboutDropdownOpen); setMobileLeadershipDropdownOpen(false); }}>पक्षाविषयी ▾</div>
                            {mobileAboutDropdownOpen && (
                                <ul style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <li><Link to="/history" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>इतिहास आणि वारसा</Link></li>
                                    <li><Link to="/angle" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>दृष्टीकोन आणि ध्येय</Link></li>
                                    <li><Link to="/organizational-structure" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संगठन रचना</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => { setMobileLeadershipDropdownOpen(!mobileLeadershipDropdownOpen); setMobileAboutDropdownOpen(false); }}>नेतृत्व ▾</div>
                            {mobileLeadershipDropdownOpen && (
                                <ul style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <li><Link to="/founder" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संस्थापक: बाळासाहेब ठाकरे</Link></li>
                                    <li><Link to="/past-leader" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>धर्मवीर आनंद दिघे</Link></li>
                                    <li><Link to="/current-leadership" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>वर्तमान नेतृत्व: एकनाथ शिंदे</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => { setMobileInitiativesDropdownOpen(!mobileInitiativesDropdownOpen); setMobileLeadershipDropdownOpen(false); }}>आमचे कार्य ▾</div>
                            {mobileInitiativesDropdownOpen && (
                                <ul style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <li><Link to="/initiatives-and-projects" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>उपक्रम आणि प्रकल्प</Link></li>
                                    <li><Link to="/success-stories" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>यशोगाथा आणि ठळक कामगिरी</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => { setMobileMedicalDropdownOpen(!mobileMedicalDropdownOpen); setMobileLeadershipDropdownOpen(false); }}>वैद्यकीय मदत कक्ष ▾</div>
                            {mobileMedicalDropdownOpen && (
                                <ul style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <li><Link to="/medical-info" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संक्षिप्त माहिती</Link></li>
                                    <li><Link to="/medical-work" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>केलेले काम</Link></li>
                                    <li><Link to="/medical-members" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पदाधिकारी यादी</Link></li>
                                    <li><Link to="/medical-events" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पुढील कार्यक्रम</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/media-news" onClick={() => setIsMobileMenuOpen(false)}>बातम्या व माध्यमे</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>संपर्क</Link></li>
                        <li className="mobile-font-selector"><FontSelector /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header 