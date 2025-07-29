import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MedicalMembersPage = () => {
    const { t } = useTranslation();

    const officerLinksLeft = [
        { text: t('divisionalSecretary'), url: 'https://shivsena.zaplontech.com/divisional-secretary/' },
        { text: t('stateExecutiveMember'), url: 'https://shivsena.zaplontech.com/state-executive-member/' },
    ];
    const officerLinksRight = [
        { text: t('divisionalLiaisonHead'), url: 'https://shivsena.zaplontech.com/divisional-liaison-head/' },
    ];
    const regionLinksLeft = [
        { text: t('mumbai'), url: 'https://shivsena.zaplontech.com/mumbai-officers-list/' },
        { text: t('amravatiDistrict'), url: 'https://shivsena.zaplontech.com/amravati-district-officers-list/' },
        { text: t('ahilyanagarDistrict'), url: 'https://shivsena.zaplontech.com/ahilyanagar-district-officers-list/' },
        { text: t('kolhapurDistrict'), url: 'https://shivsena.zaplontech.com/kolhapur-district-officers-list/' },
        { text: t('beedDistrict'), url: 'https://shivsena.zaplontech.com/beed-district-officers-list/' },
        { text: t('nashikDistrict'), url: 'https://shivsena.zaplontech.com/nashik-district-officers-list/' },
    ];
    const regionLinksRight = [
        { text: t('washimDistrict'), url: 'https://shivsena.zaplontech.com/washim-district-officers-list/' },
        { text: t('sangliDistrict'), url: 'https://shivsena.zaplontech.com/sangli-district-officers-list/' },
        { text: t('solapurDistrict'), url: 'https://shivsena.zaplontech.com/solapur-district-officers-list/' },
        { text: t('puneCity'), url: 'https://shivsena.zaplontech.com/pune-city-officers-list/' },
        { text: t('vidarbha'), url: 'https://shivsena.zaplontech.com/vidarbha-officers-list/' },
    ];

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    };
    const sectionVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="info-page-container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}
        >
            <motion.h1 variants={sectionVariant} className="info-page-title" style={{ fontFamily: 'Mukta', fontWeight: 700, fontSize: 36, marginBottom: 24, textAlign: 'center', color: '#F37021', textShadow: '1px 1px 8px #0002' }}>
                {t('medicalMembersTitle')}
            </motion.h1>
            <motion.p variants={sectionVariant} style={{ textAlign: 'center', fontSize: 18, marginBottom: 24, color: '#333', fontFamily: 'Mukta' }}>
                {t('medicalMembersSubtitle')}<br />
                <span style={{ fontSize: 15, color: '#666' }}>{t('medicalMembersNote')}</span>
            </motion.p>
            <motion.div variants={sectionVariant} className="officer-links-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {officerLinksLeft.map(link => (
                            <li key={link.text} style={{ marginBottom: 12 }}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="info-link-card" style={{ display: 'block', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001', padding: '12px 18px', color: '#F37021', fontWeight: 600, fontSize: 18, textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {officerLinksRight.map(link => (
                            <li key={link.text} style={{ marginBottom: 12 }}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="info-link-card" style={{ display: 'block', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001', padding: '12px 18px', color: '#F37021', fontWeight: 600, fontSize: 18, textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <motion.h2 variants={sectionVariant} style={{ fontFamily: 'Mukta', fontWeight: 600, fontSize: 28, marginBottom: 18, color: '#222', textAlign: 'center' }}>
                {t('districtOfficersList')}
            </motion.h2>
            <motion.div variants={sectionVariant} className="region-links-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {regionLinksLeft.map(link => (
                            <li key={link.text} style={{ marginBottom: 12 }}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="info-link-card" style={{ display: 'block', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001', padding: '12px 18px', color: '#F37021', fontWeight: 600, fontSize: 18, textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {regionLinksRight.map(link => (
                            <li key={link.text} style={{ marginBottom: 12 }}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="info-link-card" style={{ display: 'block', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001', padding: '12px 18px', color: '#F37021', fontWeight: 600, fontSize: 18, textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MedicalMembersPage; 