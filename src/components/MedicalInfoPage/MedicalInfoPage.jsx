import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const suImg = '/docs/संक्षिप्त माहिती_files/su.jpg';

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: 'spring' } },
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

const MedicalInfoPage = () => {
    const isMobile = useIsMobile();
    const { t } = useTranslation();
    
    return (
        <motion.div
            className="medical-info-page mt-20"
            style={{ background: '#fffbe7', minHeight: '100vh', padding: isMobile ? '24px 0' : '48px 0' }}
            initial="hidden"
            animate="visible"
            variants={containerVariant}
        >
            {/* Title */}
            <motion.h1
                style={{ textAlign: 'center', color: '#b45309', fontWeight: 800, fontSize: isMobile ? '2rem' : '2.7rem', marginBottom: 24, letterSpacing: 1 }}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {t('medicalInfoTitle')}
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>{t('medicalHelpDeskIntro')}</b> {t('medicalHelpDeskDescription')}
            </motion.div>
            {/* Motto */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 700, margin: '0 auto 24px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
            >
                {t('medicalHelpMotto')}
            </motion.div>
            {/* Impact */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                {t('medicalHelpImpact')}
            </motion.div>
            {/* Features + Image */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32, alignItems: 'center' }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>{t('medicalHelpFeatures')}</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>{t('medicalFeature1')}</li>
                        <li>{t('medicalFeature2')}</li>
                        <li>{t('medicalFeature3')}</li>
                        <li>{t('medicalFeature4')}</li>
                        <li>{t('medicalFeature5')}</li>
                    </ul>
                </motion.div>
                <motion.img
                    src={suImg}
                    alt="Medical Help"
                    style={{ width: isMobile ? '100%' : 380, height: isMobile ? 180 : 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', background: '#fff' }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                />
            </motion.div>
            {/* Values and Leadership */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>मूल्ये आणि नेतृत्व</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>रुग्ण सेवा हीच ईश्वर सेवा – हे मूल्य आमच्या कार्याचे आधार</li>
                        <li>कोणत्याही भेदभावाशिवाय सर्वांना मदत</li>
                        <li>कार्यकर्त्यांची निष्ठा आणि समर्पण</li>
                        <li>नेतृत्वाचे मार्गदर्शन आणि सहाय्य</li>
                    </ul>
                </motion.div>
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>भविष्यातील योजना</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>संपूर्ण महाराष्ट्रात कक्षाचा विस्तार</li>
                        <li>आधुनिक वैद्यकीय सुविधांची उपलब्धता</li>
                        <li>डिजिटल प्लॅटफॉर्मचा विकास</li>
                        <li>अधिक कार्यकर्त्यांचे प्रशिक्षण</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Closing Note */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
            >
                शिवसेना वैद्यकीय मदत कक्ष हा केवळ एक सेवा केंद्र नाही, तर जनतेशी जोडलेल्या भावनिक बंधाचे प्रतीक आहे. आमचा विश्वास आहे की आरोग्य हा प्रत्येक नागरिकाचा मूलभूत हक्क आहे.
            </motion.div>
        </motion.div>
    );
};

export default MedicalInfoPage; 