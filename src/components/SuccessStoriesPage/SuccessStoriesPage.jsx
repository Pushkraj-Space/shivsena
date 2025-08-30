import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
    '/docs/यशोगाथा आणि ठळक कामगिरी_files/1.jpg',
    '/docs/यशोगाथा आणि ठळक कामगिरी_files/2.jpg',
];

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

const SuccessStoriesPage = () => {
    const isMobile = useIsMobile();
    const { t } = useTranslation();
    
    return (
        <motion.div 
            className="success-stories-page mt-20"
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
                {t('successStoriesTitle')}
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                {t('successStoriesIntro')}
            </motion.div>
            {/* Stats Section */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>{t('civicDevelopment')}</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>{t('civicDev1')}</li>
                        <li>{t('civicDev2')}</li>
                        <li>{t('civicDev3')}</li>
                    </ul>
                </motion.div>
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>{t('womenEmpowerment')}</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>{t('womenEmp1')}</li>
                        <li>{t('womenEmp2')}</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Images Row */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, justifyContent: 'center', alignItems: 'center' }}
            >
                {images.map((src, i) => (
                    <motion.img
                        key={src}
                        src={src}
                        alt={`Success story ${i + 1}`}
                        style={{ width: isMobile ? '100%' : 380, height: isMobile ? 180 : 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', background: '#fff' }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 * i }}
                    />
                ))}
            </motion.div>
            {/* Sectoral Achievements */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32 }}
            >
                <motion.div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>{t('infrastructureDevelopment')}</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>{t('infraDev1')}</li>
                        <li>{t('infraDev2')}</li>
                        <li>{t('infraDev3')}</li>
                    </ul>
                </motion.div>
                <motion.div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>{t('educationReforms')}</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>{t('eduReform1')}</li>
                        <li>{t('eduReform2')}</li>
                        <li>{t('eduReform3')}</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Healthcare Achievements */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }}
            >
                <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12, textAlign: 'center' }}>{t('healthcareAchievements')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: 24 }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: '#b91c1c', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 8 }}>{t('healthAchieve1')}</h3>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: '#b91c1c', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 8 }}>{t('healthAchieve2')}</h3>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: '#b91c1c', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 8 }}>{t('healthAchieve3')}</h3>
                    </div>
                </div>
            </motion.div>
            {/* Closing Note */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
            >
                शिवसेनेची यशोगाथा म्हणजे कार्यकर्त्यांची निष्ठा, नेतृत्वाची दूरदृष्टी आणि जनतेच्या विश्वासाचे बळ. आज एकनाथ शिंदे साहेबांच्या नेतृत्वात ही यशोगाथा अधिक गतिमान झाली आहे.
            </motion.div>
        </motion.div>
    );
};

export default SuccessStoriesPage; 