import React, { useState } from 'react'
import FontSelector from './FontSelector'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

    // Keyboard accessibility for dropdowns
    const handleDropdownKey = (e, openFn, closeFn, isOpen) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFn(!isOpen);
        } else if (e.key === 'Escape') {
            closeFn(false);
        }
    };

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

                        <nav className="nav-menu" aria-label="Main navigation">
                            <ul>
                                <li><Link to="/">मुख्यपृष्ठ</Link></li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600 }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={aboutDropdownOpen}
                                        aria-controls="about-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setAboutDropdownOpen, setAboutDropdownOpen, aboutDropdownOpen)}
                                    >पक्षाविषयी ▾</span>
                                    <AnimatePresence>
                                        {aboutDropdownOpen && (
                                            <motion.ul
                                                id="about-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 180, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
                                                role="menu"
                                                aria-label="पक्षाविषयी"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/history" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">इतिहास आणि वारसा</Link></li>
                                                <li><Link to="/angle" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">दृष्टीकोन आणि ध्येय</Link></li>
                                                <li><Link to="/organizational-structure" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">संगठन रचना</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleLeadershipEnter} onMouseLeave={handleLeadershipLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600 }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={leadershipDropdownOpen}
                                        aria-controls="leadership-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setLeadershipDropdownOpen, setLeadershipDropdownOpen, leadershipDropdownOpen)}
                                    >नेतृत्व ▾</span>
                                    <AnimatePresence>
                                        {leadershipDropdownOpen && (
                                            <motion.ul
                                                id="leadership-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
                                                role="menu"
                                                aria-label="नेतृत्व"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/founder" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">बाळासाहेब ठाकरे</Link></li>
                                                <li><Link to="/past-leader" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">आनंद दिघे</Link></li>
                                                <li><Link to="/current-leadership" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">एकनाथ शिंदे</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleInitiativesEnter} onMouseLeave={handleInitiativesLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600 }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={initiativesDropdownOpen}
                                        aria-controls="initiatives-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setInitiativesDropdownOpen, setInitiativesDropdownOpen, initiativesDropdownOpen)}
                                    >आमचे कार्य ▾</span>
                                    <AnimatePresence>
                                        {initiativesDropdownOpen && (
                                            <motion.ul
                                                id="initiatives-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
                                                role="menu"
                                                aria-label="आमचे कार्य"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/initiatives-and-projects" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>उपक्रम आणि प्रकल्प</Link></li>
                                                <li><Link to="/success-stories" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>यशोगाथा आणि ठळक कामगिरी</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative' }} onMouseEnter={handleMedicalEnter} onMouseLeave={handleMedicalLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600 }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={medicalDropdownOpen}
                                        aria-controls="medical-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setMedicalDropdownOpen, setMedicalDropdownOpen, medicalDropdownOpen)}
                                    >वैद्यकीय मदत कक्ष ▾</span>
                                    <AnimatePresence>
                                        {medicalDropdownOpen && (
                                            <motion.ul
                                                id="medical-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
                                                role="menu"
                                                aria-label="वैद्यकीय मदत कक्ष"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/medical-info" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संक्षिप्त माहिती</Link></li>
                                                <li><Link to="/medical-work" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>केलेले काम</Link></li>
                                                <li><Link to="/medical-members" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पदाधिकारी यादी</Link></li>
                                                {/* <li><Link to="/medical-events" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पुढील कार्यक्रम</Link></li> */}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li><Link to="/media-news">बातम्या व माध्यमे</Link></li>
                                <li><Link to="/contact">संपर्क</Link></li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <FontSelector />
                        </div>

                        <div className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" tabIndex={0} role="button" aria-expanded={isMobileMenuOpen} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleMobileMenu(); }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className={`mobile-menu active`}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 60 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile menu"
                        >
                            <ul>
                                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>मुख्यपृष्ठ</Link></li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileAboutDropdownOpen} aria-controls="mobile-about-menu" role="button" onClick={() => { setMobileAboutDropdownOpen(!mobileAboutDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileAboutDropdownOpen, setMobileAboutDropdownOpen, mobileAboutDropdownOpen)}>पक्षाविषयी ▾</div>
                                    <AnimatePresence>
                                        {mobileAboutDropdownOpen && (
                                            <motion.ul id="mobile-about-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/history" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>इतिहास आणि वारसा</Link></li>
                                                <li><Link to="/angle" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>दृष्टीकोन आणि ध्येय</Link></li>
                                                <li><Link to="/organizational-structure" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संगठन रचना</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileLeadershipDropdownOpen} aria-controls="mobile-leadership-menu" role="button" onClick={() => { setMobileLeadershipDropdownOpen(!mobileLeadershipDropdownOpen); setMobileAboutDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileLeadershipDropdownOpen, setMobileLeadershipDropdownOpen, mobileLeadershipDropdownOpen)}>नेतृत्व ▾</div>
                                    <AnimatePresence>
                                        {mobileLeadershipDropdownOpen && (
                                            <motion.ul id="mobile-leadership-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/founder" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संस्थापक: बाळासाहेब ठाकरे</Link></li>
                                                <li><Link to="/past-leader" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>धर्मवीर आनंद दिघे</Link></li>
                                                <li><Link to="/current-leadership" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>वर्तमान नेतृत्व: एकनाथ शिंदे</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileInitiativesDropdownOpen} aria-controls="mobile-initiatives-menu" role="button" onClick={() => { setMobileInitiativesDropdownOpen(!mobileInitiativesDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileInitiativesDropdownOpen, setMobileInitiativesDropdownOpen, mobileInitiativesDropdownOpen)}>आमचे कार्य ▾</div>
                                    <AnimatePresence>
                                        {mobileInitiativesDropdownOpen && (
                                            <motion.ul id="mobile-initiatives-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/initiatives-and-projects" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>उपक्रम आणि प्रकल्प</Link></li>
                                                <li><Link to="/success-stories" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>यशोगाथा आणि ठळक कामगिरी</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center' }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileMedicalDropdownOpen} aria-controls="mobile-medical-menu" role="button" onClick={() => { setMobileMedicalDropdownOpen(!mobileMedicalDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileMedicalDropdownOpen, setMobileMedicalDropdownOpen, mobileMedicalDropdownOpen)}>वैद्यकीय मदत कक्ष ▾</div>
                                    <AnimatePresence>
                                        {mobileMedicalDropdownOpen && (
                                            <motion.ul id="mobile-medical-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/medical-info" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>संक्षिप्त माहिती</Link></li>
                                                <li><Link to="/medical-work" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>केलेले काम</Link></li>
                                                <li><Link to="/medical-members" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पदाधिकारी यादी</Link></li>
                                                <li><Link to="/medical-events" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पुढील कार्यक्रम</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li><Link to="/media-news" onClick={() => setIsMobileMenuOpen(false)}>बातम्या व माध्यमे</Link></li>
                                <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>संपर्क</Link></li>
                                <li className="mobile-font-selector"><FontSelector /></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header 