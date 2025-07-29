import React, { useState } from 'react'
import FontSystem from './FontSystem'
import LanguageSelector from './LanguageSelector'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
    const { t } = useTranslation()
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [leadershipDropdownOpen, setLeadershipDropdownOpen] = useState(false)
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
    const [mobileLeadershipDropdownOpen, setMobileLeadershipDropdownOpen] = useState(false)
    const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false)
    const [initiativesDropdownOpen, setInitiativesDropdownOpen] = useState(false)
    const [mobileInitiativesDropdownOpen, setMobileInitiativesDropdownOpen] = useState(false)
    const [medicalDropdownOpen, setMedicalDropdownOpen] = useState(false)
    const [mobileMedicalDropdownOpen, setMobileMedicalDropdownOpen] = useState(false)

    // Check if we're on the home page
    const isHomePage = location.pathname === '/'

    // Dynamic text color based on current page - ensure contrast with header background
    const textColor = '#333' // Always use dark text for better visibility
    const linkColor = '#333' // Always use dark text for better visibility

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
        <header className="header" style={{ background: 'transparent', backdropFilter: 'blur(2px)', zIndex: 2, position: 'relative' }}>
            {/* <div className="header-top">
                <div className="container">
                    <div className="text-center">
                        <span>शिवसेना - गर्व से कहो हम हिंदू हैं </span>
                    </div>
                </div>
            </div> */}

            <div className="header-main">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <div className="logo-text" style={{ position: 'sticky', top: 0, zIndex: 1000, display: 'none', width: `100%` }}>&nbsp;</div>
                        </div>

                        <nav className="nav-menu" aria-label="Main navigation">
                            <ul>
                                <li><Link to="/" style={{ color: linkColor }}>{t('home')}</Link></li>
                                <li style={{ position: 'relative', overflow: 'visible' }} onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600, color: textColor }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={aboutDropdownOpen}
                                        aria-controls="about-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setAboutDropdownOpen, setAboutDropdownOpen, aboutDropdownOpen)}
                                    >{t('about')} ▾</span>
                                    <AnimatePresence>
                                        {aboutDropdownOpen && (
                                            <motion.ul
                                                id="about-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 180, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none', height: 'auto', overflowY: 'visible', overflowX: 'visible' }}
                                                role="menu"
                                                aria-label="पक्षाविषयी"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/history" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">{t('historyLegacy')}</Link></li>
                                                <li><Link to="/angle" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">{t('visionMission')}</Link></li>
                                                <li><Link to="/organizational-structure" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setAboutDropdownOpen(false)} role="menuitem">{t('organizationalStructure')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative', overflow: 'visible' }} onMouseEnter={handleLeadershipEnter} onMouseLeave={handleLeadershipLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600, color: textColor }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={leadershipDropdownOpen}
                                        aria-controls="leadership-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setLeadershipDropdownOpen, setLeadershipDropdownOpen, leadershipDropdownOpen)}
                                    >{t('leadership')} ▾</span>
                                    <AnimatePresence>
                                        {leadershipDropdownOpen && (
                                            <motion.ul
                                                id="leadership-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none', height: 'auto', overflowY: 'visible', overflowX: 'visible' }}
                                                role="menu"
                                                aria-label="नेतृत्व"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/founder" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">{t('balasahebThackeray')}</Link></li>
                                                <li><Link to="/past-leader" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">{t('anandDighe')}</Link></li>
                                                <li><Link to="/current-leadership" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }} onClick={() => setLeadershipDropdownOpen(false)} role="menuitem">{t('eknathShinde')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative', overflow: 'visible' }} onMouseEnter={handleInitiativesEnter} onMouseLeave={handleInitiativesLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600, color: textColor }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={initiativesDropdownOpen}
                                        aria-controls="initiatives-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setInitiativesDropdownOpen, setInitiativesDropdownOpen, initiativesDropdownOpen)}
                                    >{t('ourWork')} ▾</span>
                                    <AnimatePresence>
                                        {initiativesDropdownOpen && (
                                            <motion.ul
                                                id="initiatives-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none', height: 'auto', overflowY: 'visible', overflowX: 'visible' }}
                                                role="menu"
                                                aria-label="आमचे कार्य"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/initiatives-and-projects" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('initiativesProjects')}</Link></li>
                                                <li><Link to="/success-stories" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('successStories')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li style={{ position: 'relative', overflow: 'visible' }} onMouseEnter={handleMedicalEnter} onMouseLeave={handleMedicalLeave}>
                                    <span
                                        style={{ cursor: 'pointer', fontWeight: 600, color: textColor }}
                                        tabIndex={0}
                                        aria-haspopup="true"
                                        aria-expanded={medicalDropdownOpen}
                                        aria-controls="medical-menu"
                                        role="button"
                                        onKeyDown={e => handleDropdownKey(e, setMedicalDropdownOpen, setMedicalDropdownOpen, medicalDropdownOpen)}
                                    >{t('medicalHelp')} ▾</span>
                                    <AnimatePresence>
                                        {medicalDropdownOpen && (
                                            <motion.ul
                                                id="medical-menu"
                                                style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 12px #e0c97f33', borderRadius: 8, minWidth: 220, zIndex: 10, padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none', height: 'auto', overflowY: 'visible', overflowX: 'visible' }}
                                                role="menu"
                                                aria-label="वैद्यकीय मदत कक्ष"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                            >
                                                <li><Link to="/medical-info" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('briefInfo')}</Link></li>
                                                <li><Link to="/medical-work" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('workDone')}</Link></li>
                                                <li><Link to="/medical-members" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('officeBearers')}</Link></li>
                                                {/* <li><Link to="/medical-events" style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>पुढील कार्यक्रम</Link></li> */}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li><Link to="/media-news" style={{ color: linkColor }}>{t('newsMedia')}</Link></li>
                                <li><Link to="/contact" style={{ color: linkColor }}>{t('contact')}</Link></li>
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <FontSystem />
                            <LanguageSelector />
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
                                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: linkColor }}>{t('home')}</Link></li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', color: textColor }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileAboutDropdownOpen} aria-controls="mobile-about-menu" role="button" onClick={() => { setMobileAboutDropdownOpen(!mobileAboutDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileAboutDropdownOpen, setMobileAboutDropdownOpen, mobileAboutDropdownOpen)}>{t('about')} ▾</div>
                                    <AnimatePresence>
                                        {mobileAboutDropdownOpen && (
                                            <motion.ul id="mobile-about-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/history" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('historyLegacy')}</Link></li>
                                                <li><Link to="/angle" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('visionMission')}</Link></li>
                                                <li><Link to="/organizational-structure" onClick={() => { setMobileAboutDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('organizationalStructure')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', color: textColor }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileLeadershipDropdownOpen} aria-controls="mobile-leadership-menu" role="button" onClick={() => { setMobileLeadershipDropdownOpen(!mobileLeadershipDropdownOpen); setMobileAboutDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileLeadershipDropdownOpen, setMobileLeadershipDropdownOpen, mobileLeadershipDropdownOpen)}>{t('leadership')} ▾</div>
                                    <AnimatePresence>
                                        {mobileLeadershipDropdownOpen && (
                                            <motion.ul id="mobile-leadership-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/founder" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('founder')}: {t('balasahebThackeray')}</Link></li>
                                                <li><Link to="/past-leader" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('pastLeader')}: {t('anandDighe')}</Link></li>
                                                <li><Link to="/current-leadership" onClick={() => { setMobileLeadershipDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('currentLeadership')}: {t('eknathShinde')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', color: textColor }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileInitiativesDropdownOpen} aria-controls="mobile-initiatives-menu" role="button" onClick={() => { setMobileInitiativesDropdownOpen(!mobileInitiativesDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileInitiativesDropdownOpen, setMobileInitiativesDropdownOpen, mobileInitiativesDropdownOpen)}>{t('ourWork')} ▾</div>
                                    <AnimatePresence>
                                        {mobileInitiativesDropdownOpen && (
                                            <motion.ul id="mobile-initiatives-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/initiatives-and-projects" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('initiativesProjects')}</Link></li>
                                                <li><Link to="/success-stories" onClick={() => { setMobileInitiativesDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('successStories')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li>
                                    <div style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', color: textColor }} tabIndex={0} aria-haspopup="true" aria-expanded={mobileMedicalDropdownOpen} aria-controls="mobile-medical-menu" role="button" onClick={() => { setMobileMedicalDropdownOpen(!mobileMedicalDropdownOpen); setMobileLeadershipDropdownOpen(false); }} onKeyDown={e => handleDropdownKey(e, setMobileMedicalDropdownOpen, setMobileMedicalDropdownOpen, mobileMedicalDropdownOpen)}>{t('medicalHelp')} ▾</div>
                                    <AnimatePresence>
                                        {mobileMedicalDropdownOpen && (
                                            <motion.ul id="mobile-medical-menu" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #e0c97f33', margin: '8px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'visible', maxHeight: 'none' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
                                                <li><Link to="/medical-info" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('briefInfo')}</Link></li>
                                                <li><Link to="/medical-work" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('workDone')}</Link></li>
                                                <li><Link to="/medical-members" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('officeBearers')}</Link></li>
                                                <li><Link to="/medical-events" onClick={() => { setMobileMedicalDropdownOpen(false); setIsMobileMenuOpen(false); }} style={{ display: 'block', padding: '10px 18px', color: '#b45309', textDecoration: 'none' }}>{t('upcomingEvents')}</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li><Link to="/media-news" onClick={() => setIsMobileMenuOpen(false)} style={{ color: linkColor }}>{t('newsMedia')}</Link></li>
                                <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: linkColor }}>{t('contact')}</Link></li>
                                <li className="mobile-font-selector"><FontSystem /></li>
                                <li className="mobile-language-selector"><LanguageSelector /></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header 