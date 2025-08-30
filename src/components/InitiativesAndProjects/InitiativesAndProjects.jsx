import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring' } },
};
const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring' } },
};
const quoteVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1.1, opacity: 1, transition: { duration: 0.7, type: 'spring', bounce: 0.5 } },
};

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
};

const InitiativesAndProjects = () => {
    const isMobile = useIsMobile();
    const { t } = useTranslation();
    
    return (
        <motion.div
            className="initiatives-projects-page mt-20"
            style={{ background: '#fffbe7', minHeight: '100vh', padding: isMobile ? '24px 0' : '48px 0' }}
            initial="hidden"
            animate="visible"
            variants={containerVariant}
        >
            <motion.h1
                style={{ textAlign: 'center', color: '#b45309', fontWeight: 800, fontSize: isMobile ? '2rem' : '2.7rem', marginBottom: 24, letterSpacing: 1 }}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {t('initiativesProjectsTitle')}
            </motion.h1>
            {/* Section 1: 1966-1990 + 1990-2000 */}
            <motion.div
                className="initiatives-content"
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 24 : 48,
                    background: '#fff',
                    borderRadius: 24,
                    boxShadow: '0 4px 32px #e0c97f55',
                    padding: isMobile ? 16 : 32,
                    maxWidth: 1100,
                    margin: '0 auto 40px',
                }}
                variants={containerVariant}
            >
                <motion.div
                    variants={fadeInLeft}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 12 }}>{t('period1966_1990')}</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>{t('initiative1966_1')}</li>
                        <li>{t('initiative1966_2')}</li>
                        <li>{t('initiative1966_3')}</li>
                        <li>{t('initiative1966_4')}</li>
                    </ul>
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', margin: '32px 0 12px' }}>{t('period1990_2000')}</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>{t('initiative1990_1')}</li>
                        <li>{t('initiative1990_2')}</li>
                        <li>{t('initiative1990_3')}</li>
                        <li>{t('initiative1990_4')}</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={fadeInRight}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}
                >
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/3-1.jpg"
                        alt="Initiative 1"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 16 }}
                        whileHover={{ scale: 1.07, rotate: -2 }}
                        whileTap={{ scale: 0.97, rotate: 2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                    <motion.div
                        variants={quoteVariant}
                        style={{ background: '#fffbe7', borderRadius: 16, padding: isMobile ? 16 : 24, textAlign: 'center', boxShadow: '0 4px 16px #e0c97f33' }}
                    >
                        <p style={{ color: '#b45309', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', margin: 0, fontStyle: 'italic' }}>
                            "जिथे अन्याय तिथे शिवसेना"
                        </p>
                        <p style={{ color: '#666', fontSize: isMobile ? '0.9rem' : '1rem', margin: '8px 0 0 0' }}>
                            - बाळासाहेब ठाकरे
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Section 2: 2000-2010 + 2010-2020 */}
            <motion.div
                className="initiatives-content"
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 24 : 48,
                    background: '#fff',
                    borderRadius: 24,
                    boxShadow: '0 4px 32px #e0c97f55',
                    padding: isMobile ? 16 : 32,
                    maxWidth: 1100,
                    margin: '0 auto 40px',
                }}
                variants={containerVariant}
            >
                <motion.div
                    variants={fadeInLeft}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}
                >
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/6.jpg"
                        alt="Initiative 2"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 16 }}
                        whileHover={{ scale: 1.07, rotate: 2 }}
                        whileTap={{ scale: 0.97, rotate: -2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                    <motion.div
                        variants={quoteVariant}
                        style={{ background: '#fffbe7', borderRadius: 16, padding: isMobile ? 16 : 24, textAlign: 'center', boxShadow: '0 4px 16px #e0c97f33' }}
                    >
                        <p style={{ color: '#b45309', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', margin: 0, fontStyle: 'italic' }}>
                            "कार्यकर्ता हा माझा आत्मा आहे"
                        </p>
                        <p style={{ color: '#666', fontSize: isMobile ? '0.9rem' : '1rem', margin: '8px 0 0 0' }}>
                            - आनंद दिघे साहेब
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={fadeInRight}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 12 }}>{t('period2000_2010')}</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>{t('initiative2000_1')}</li>
                        <li>{t('initiative2000_2')}</li>
                        <li>{t('initiative2000_3')}</li>
                        <li>{t('initiative2000_4')}</li>
                    </ul>
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', margin: '32px 0 12px' }}>{t('period2010_2020')}</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>{t('initiative2010_1')}</li>
                        <li>{t('initiative2010_2')}</li>
                        <li>{t('initiative2010_3')}</li>
                        <li>{t('initiative2010_4')}</li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Section 3: 2020-Present */}
            <motion.div
                className="initiatives-content"
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 24 : 48,
                    background: '#fff',
                    borderRadius: 24,
                    boxShadow: '0 4px 32px #e0c97f55',
                    padding: isMobile ? 16 : 32,
                    maxWidth: 1100,
                    margin: '0 auto 40px',
                }}
                variants={containerVariant}
            >
                <motion.div
                    variants={fadeInLeft}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 12 }}>{t('period2020_present')}</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>{t('initiative2020_1')}</li>
                        <li>{t('initiative2020_2')}</li>
                        <li>{t('initiative2020_3')}</li>
                        <li>{t('initiative2020_4')}</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={fadeInRight}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}
                >
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/8.jpg"
                        alt="Initiative 3"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 16 }}
                        whileHover={{ scale: 1.07, rotate: -2 }}
                        whileTap={{ scale: 0.97, rotate: 2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                    <motion.div
                        variants={quoteVariant}
                        style={{ background: '#fffbe7', borderRadius: 16, padding: isMobile ? 16 : 24, textAlign: 'center', boxShadow: '0 4px 16px #e0c97f33' }}
                    >
                        <p style={{ color: '#b45309', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', margin: 0, fontStyle: 'italic' }}>
                            "विकास हा आमचा ध्यास"
                        </p>
                        <p style={{ color: '#666', fontSize: isMobile ? '0.9rem' : '1rem', margin: '8px 0 0 0' }}>
                            - एकनाथ शिंदे
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Closing Note */}
            <motion.div
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                शिवसेनेची ही वाटचाल म्हणजे कार्यकर्त्यांची ताकद, नेतृत्वाची दूरदृष्टी आणि जनतेच्या विश्वासाचे बळ. आज एकनाथ शिंदे साहेबांच्या नेतृत्वात ही वाटचाल अधिक गतिमान झाली आहे.
            </motion.div>
        </motion.div>
    );
};

export default InitiativesAndProjects; 