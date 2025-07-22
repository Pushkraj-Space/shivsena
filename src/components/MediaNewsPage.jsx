import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        title: '“ऑपरेशन सिंदूर” संदर्भात सर्वपक्षीय प्रतिनिधीमंडळे पाठविण्याचा निर्णय',
        url: 'https://shivsena.zaplontech.com/the-central-government-will-send-seven-delegations-of-mps-from-all-parties-abroad-will-share-information-about-operation-sindoor-with-the-whole-world/',
        date: 'May 17, 2025',
        excerpt: 'भारत सरकारने “ऑपरेशन सिंदूर” अंतर्गत ७ सर्वपक्षीय प्रतिनिधीमंडळे ३३ देशांमध्ये पाठविण्याचा निर्णय...',
        image: '/docs/बातम्या व माध्यमे_files/os-r64c0oix81fwyze66acypeit7q794oabzpv7mj5yfc.jpg',
    },
    {
        title: '“हिंदुत्व सोडून नरकात गेले, आता स्वर्ग शोधत आहेत” – एकनाथ शिंदे',
        url: 'https://shivsena.zaplontech.com/eknath-shinde-takes-a-dig-at-uddhav-thackeray-says-straying-from-babasahebs-ideal-leads-to-hell/',
        date: 'May 17, 2025',
        excerpt: 'मुख्यमंत्री एकनाथ शिंदे यांनी उद्धव ठाकरे यांच्या नेतृत्वाखालील शिवसेनेवर टीका करताना म्हटले...',
        image: '/docs/बातम्या व माध्यमे_files/es2-r64b8gfe04sycie3zl59c0xj27bgzv8hs0nbuf0j9k.jpg',
    },
    {
        title: '“कोणतेही शहर मागे राहू नये” – उपमुख्यमंत्री एकनाथ शिंदे',
        url: 'https://shivsena.zaplontech.com/no-city-should-be-left-behind-says-maharashtra-deputy-cm-eknath-shinde-pushes-urban-growth/',
        date: 'May 16, 2025',
        excerpt: 'उपमुख्यमंत्री एकनाथ शिंदे यांनी महाराष्ट्रातील सर्व शहरांचा समतोल विकास होण्याचे महत्त्व अधोरेखित...',
        image: '/docs/बातम्या व माध्यमे_files/es-r64axc054pksymjqxs26ttz60253wt2u8yqheji8w8.jpg',
    },
];

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MediaNewsPage = () => {
    return (
        <motion.div
            className="info-page-container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}
        >
            <motion.h1 variants={cardVariant} className="info-page-title" style={{ fontFamily: 'Mukta', fontWeight: 700, fontSize: 36, marginBottom: 24, textAlign: 'center', color: '#F37021', textShadow: '1px 1px 8px #0002' }}>
                बातम्या व माध्यमे
            </motion.h1>
            <motion.div variants={cardVariant} className="media-news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                {newsItems.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        variants={cardVariant}
                        className="media-news-card"
                        style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0002', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 420 }}
                    >
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: 200, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                        <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ fontFamily: 'Mukta', fontWeight: 600, fontSize: 22, color: '#222', marginBottom: 8 }}>{item.title}</h2>
                            <div style={{ fontSize: 15, color: '#888', marginBottom: 8 }}>{item.date}</div>
                            <div style={{ fontSize: 17, color: '#444', marginBottom: 16 }}>{item.excerpt}</div>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', color: '#F37021', fontWeight: 600, fontSize: 16, textDecoration: 'none', border: '1px solid #F37021', borderRadius: 6, padding: '7px 18px', alignSelf: 'flex-start', transition: 'background 0.2s, color 0.2s' }}>
                                अधिक वाचा
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MediaNewsPage; 