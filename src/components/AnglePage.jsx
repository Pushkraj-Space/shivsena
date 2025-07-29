import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const bannerImg = '/images/shivsena.jpg';
const images = [
  '/images/shivsena-banner-3.jpg',
  '/images/vyang/Gallery-Cartoonist 1.jpg',
  '/images/balasaheb.jpg',
  '/images/vyang/career as cartoonist.jpg',
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const imageVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring' } },
};

const AnglePage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="angle-page"
      style={{ background: '#fffbe7', minHeight: '100vh', padding: '40px 0' }}
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
      >
        <img src={bannerImg} alt="Shivsena Logo" style={{ width: 120, height: 120, borderRadius: '50%', boxShadow: '0 4px 24px #e0c97f', background: '#fff', padding: 8 }} />
      </motion.div>
      <motion.h1
        style={{ textAlign: 'center', color: '#b45309', fontWeight: 800, fontSize: '2.5rem', marginBottom: 24, letterSpacing: 1 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('anglePageTitle')}
      </motion.h1>
      <motion.p
        style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', maxWidth: 800, margin: '0 auto 24px', fontWeight: 500 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {t('anglePageIntro')}
      </motion.p>
      <motion.div
        style={{ maxWidth: 700, margin: '0 auto 32px', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: '24px 24px 12px 24px', textAlign: 'left' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12, textAlign: 'center' }}>{t('mainObjectives')}</h2>
        <ul style={{ color: '#333', fontSize: '1.08rem', fontWeight: 500, marginBottom: 0, paddingLeft: 24, lineHeight: 1.7 }}>
          <li>{t('objective1')}</li>
          <li>{t('objective2')}</li>
          <li>{t('objective3')}</li>
          <li>{t('objective4')}</li>
          <li>{t('objective5')}</li>
        </ul>
      </motion.div>
      <motion.p
        style={{ textAlign: 'center', color: '#b45309', fontWeight: 600, fontSize: '1.13rem', maxWidth: 800, margin: '0 auto 36px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <span dangerouslySetInnerHTML={{ __html: t('anglePageClosing') }} />
      </motion.p>
    </motion.div>
  );
};

export default AnglePage; 