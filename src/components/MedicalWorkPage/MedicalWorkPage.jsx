import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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

const MedicalWorkPage = () => {
    const isMobile = useIsMobile();
    const { t } = useTranslation();

    const stories = [
        {
            title: t('medicalStory1Title'),
            text: t('medicalStory1Text'),
        },
        {
            title: t('medicalStory2Title'),
            text: t('medicalStory2Text'),
        },
        {
            title: t('medicalStory3Title'),
            text: t('medicalStory3Text'),
        },
        {
            title: t('medicalStory4Title'),
            text: t('medicalStory4Text'),
        },
    ];

    return (
        <motion.div
            className="medical-work-page mt-20"
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
                {t('medicalWorkTitle')}
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>{t('medicalWorkSubtitle')}</b>
            </motion.div>
            {/* Stories */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32 }}
            >
                {stories.map((story, idx) => (
                    <motion.div
                        key={story.title}
                        style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28, display: 'flex', flexDirection: 'column', gap: 8 }}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 style={{ color: idx % 2 === 0 ? '#b45309' : '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.3rem', marginBottom: 8 }}>{story.title}</h2>
                        <p style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', marginBottom: 0 }}>{story.text}</p>
                    </motion.div>
                ))}
            </motion.div>
            {/* Closing Note */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
            >
                {t('medicalWorkClosing')}
            </motion.div>
        </motion.div>
    );
};

export default MedicalWorkPage; 