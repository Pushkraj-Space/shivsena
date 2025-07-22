import React from 'react';
import { motion } from 'framer-motion';

const officerLinksLeft = [
    { text: 'विभागीय सचिव', url: 'https://shivsena.zaplontech.com/divisional-secretary/' },
    { text: 'राज्य कार्यकारिणी सदस्य', url: 'https://shivsena.zaplontech.com/state-executive-member/' },
];
const officerLinksRight = [
    { text: 'विभागीय संपर्क प्रमुख', url: 'https://shivsena.zaplontech.com/divisional-liaison-head/' },
];
const regionLinksLeft = [
    { text: 'मुंबई', url: 'https://shivsena.zaplontech.com/mumbai-officers-list/' },
    { text: 'अमरावती जिल्हा', url: 'https://shivsena.zaplontech.com/amravati-district-officers-list/' },
    { text: 'अहमदनगर (अहिल्यानगर) जिल्हा', url: 'https://shivsena.zaplontech.com/ahilyanagar-district-officers-list/' },
    { text: 'कोल्हापूर जिल्हा', url: 'https://shivsena.zaplontech.com/kolhapur-district-officers-list/' },
    { text: 'बीड जिल्हा', url: 'https://shivsena.zaplontech.com/beed-district-officers-list/' },
    { text: 'नाशिक जिल्हा', url: 'https://shivsena.zaplontech.com/nashik-district-officers-list/' },
];
const regionLinksRight = [
    { text: 'वाशीम जिल्हा', url: 'https://shivsena.zaplontech.com/washim-district-officers-list/' },
    { text: 'सांगली जिल्हा', url: 'https://shivsena.zaplontech.com/sangli-district-officers-list/' },
    { text: 'सोलापूर जिल्हा', url: 'https://shivsena.zaplontech.com/solapur-district-officers-list/' },
    { text: 'पुणे शहर', url: 'https://shivsena.zaplontech.com/pune-city-officers-list/' },
    { text: 'विदर्भ', url: 'https://shivsena.zaplontech.com/vidarbha-officers-list/' },
];

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MedicalMembersPage = () => {
    return (
        <motion.div
            className="info-page-container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}
        >
            <motion.h1 variants={sectionVariant} className="info-page-title" style={{ fontFamily: 'Mukta', fontWeight: 700, fontSize: 36, marginBottom: 24, textAlign: 'center', color: '#F37021', textShadow: '1px 1px 8px #0002' }}>
                पदाधिकारी यादी
            </motion.h1>
            <motion.p variants={sectionVariant} style={{ textAlign: 'center', fontSize: 18, marginBottom: 24, color: '#333', fontFamily: 'Mukta' }}>
                वैद्यकीय मदत कक्ष - प्रमुख ठिकाणं व संपर्क<br />
                <span style={{ fontSize: 15, color: '#666' }}>(कृपया पदाधिकाऱ्यांच्या अधिक माहितीसाठी त्या विभागाकार क्लिक करा)</span>
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
                जिल्हानिहाय पदाधिकारी यादी
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