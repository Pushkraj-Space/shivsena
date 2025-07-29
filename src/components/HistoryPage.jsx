import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const balasahebImg = '/images/vyang/balasaheb image black and white.jpg';
const sahebImg = '/images/saheb.jpeg';
const bannerImg = '/images/historybanner.jpg';
const dharmaveerImg = '/images/shivsena-banner-2.jpg';

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const quoteVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const leaderSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  alignItems: 'center',
  gap: 32,
  margin: '40px 0',
  padding: '0 5vw',
};

const leaderSectionMobileStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  margin: '32px 0',
  padding: '0 4vw',
};

const imageStyle = {
  width: '100%',
  maxWidth: 320,
  height: 'auto',
  borderRadius: 20,
  boxShadow: '0 4px 24px #e0c97f',
  objectFit: 'cover',
  aspectRatio: '3/4',
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

const HistoryPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className="history-page" style={{ background: '#fffbe7', minHeight: '100vh', paddingBottom: 40 }}>
      <motion.div initial="hidden" animate="visible" variants={sectionVariant} className="history-header" style={{ textAlign: 'center', padding: '40px 0 20px' }}>
        <img src={bannerImg} alt="Shivsena Banner" style={{ height: '50%', width: '100%', maxWidth: '60%', borderRadius: 20, boxShadow: '0 4px 24px #e0c97f', margin: '0 auto', display: 'block' }} />
        <h1 style={{ fontSize: isMobile ? '2rem' : '2.5rem', margin: '24px 0 8px', color: '#d97706', fontWeight: 700 }}>{t('balasahebInspirationTitle')}</h1>
        <motion.p variants={quoteVariant} style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: '#333', fontWeight: 500, marginBottom: 0 }}>
          "{t('balasahebQuote1')}"
        </motion.p>
        <p style={{ color: '#666', marginTop: 8 }}>{t('balasahebQuoteDescription')}</p>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="leader-section"
        style={isMobile ? leaderSectionMobileStyle : leaderSectionStyle}
      >
        <motion.img
          src={balasahebImg}
          alt="Balasaheb Thackeray"
          style={imageStyle}
          initial={{ x: isMobile ? 0 : -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div style={{ maxWidth: 700, width: '100%' }}>
          <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.3rem' : '2rem' }}>{t('balasahebIntroduction')}</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 12 }}>
            {t('balasahebIntroductionDescription')}
          </p>
          <ul style={{ color: '#333', fontSize: isMobile ? '0.98rem' : '1.05rem', marginBottom: 12, paddingLeft: 18 }}>
            <li>{t('balasahebAchievement1')}</li>
            <li>{t('balasahebAchievement2')}</li>
            <li>{t('balasahebAchievement3')}</li>
            <li>{t('balasahebAchievement4')}</li>
            <li>{t('balasahebAchievement5')}</li>
          </ul>
          <motion.div variants={quoteVariant}>
            <strong>{t('balasahebThoughtsTitle')}</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>"{t('balasahebThought1')}"</li>
              <li>"{t('balasahebThought2')}"</li>
              <li>"{t('balasahebThought3')}"</li>
            </ul>
          </motion.div>
          <motion.div variants={sectionVariant} style={{ marginTop: 16 }}>
            <strong>{t('whyBalasahebInspiration')}</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>{t('balasahebInspiration1')}</li>
              <li>{t('balasahebInspiration2')}</li>
              <li>{t('balasahebInspiration3')}</li>
              <li>{t('balasahebInspiration4')}</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.div initial="hidden" animate="visible" variants={sectionVariant} className="history-header" style={{ textAlign: 'center', padding: '20px 0 10px' }}>
        <h1 style={{ fontSize: isMobile ? '1.3rem' : '2rem', margin: '24px 0 8px', color: '#b91c1c', fontWeight: 700 }}>{t('anandDigheInspirationTitle')}</h1>
        <motion.p variants={quoteVariant} style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#333', fontWeight: 500, marginBottom: 0 }}>
          "{t('anandDigheQuote1')}"
        </motion.p>
        <p style={{ color: '#666', marginTop: 8 }}>{t('anandDigheQuoteDescription')}</p>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="leader-section"
        style={isMobile ? leaderSectionMobileStyle : leaderSectionStyle}
      >
        <motion.img
          src={sahebImg}
          alt="Anand Dighe Saheb"
          style={imageStyle}
          initial={{ x: isMobile ? 0 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div style={{ maxWidth: 700, width: '100%' }}>
          <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.3rem' : '2rem' }}>{t('anandDigheIntroduction')}</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 12 }}>
            {t('anandDigheIntroductionDescription')}
          </p>
                      <ul style={{ color: '#333', fontSize: isMobile ? '0.98rem' : '1.05rem', marginBottom: 12, paddingLeft: 18 }}>
              <li>{t('anandDigheAchievement1')}</li>
              <li>{t('anandDigheAchievement2')}</li>
              <li>{t('anandDigheAchievement3')}</li>
              <li>{t('anandDigheAchievement4')}</li>
              <li>{t('anandDigheAchievement5')}</li>
            </ul>
          <motion.div variants={quoteVariant}>
            <strong>{t('anandDigheThoughtsTitle')}</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>"{t('anandDigheThought1')}"</li>
              <li>"{t('anandDigheThought2')}"</li>
              <li>"{t('anandDigheThought3')}"</li>
            </ul>
          </motion.div>
          <motion.div variants={sectionVariant} style={{ marginTop: 16 }}>
            <strong>{t('whyAnandDigheInspiration')}</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>{t('anandDigheInspiration1')}</li>
              <li>{t('anandDigheInspiration2')}</li>
              <li>{t('anandDigheInspiration3')}</li>
              <li>{t('anandDigheInspiration4')}</li>
            </ul>
            <p style={{ marginTop: 8, color: '#b91c1c', fontWeight: 600 }}>
              {t('anandDigheTitleDescription')}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HistoryPage; 