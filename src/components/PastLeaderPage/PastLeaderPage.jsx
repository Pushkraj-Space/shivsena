import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const leaderImg = '/images/saheb.jpeg';

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

const PastLeaderPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <motion.div
      className="past-leader-page"
      style={{ background: '#fffbe7', minHeight: '100vh', padding: isMobile ? '24px 0' : '48px 0' }}
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.h1
        style={{ textAlign: 'center', color: '#b91c1c', fontWeight: 800, fontSize: isMobile ? '2rem' : '2.7rem', marginBottom: 24, letterSpacing: 1 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('pastLeaderTitle')}
      </motion.h1>
      <motion.div
        className="past-leader-content"
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
          margin: '0 auto',
        }}
        variants={containerVariant}
      >
        <motion.div
          variants={fadeInLeft}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.img
            src={leaderImg}
            alt="Anand Dighe Saheb"
            style={{
              width: isMobile ? 220 : 320,
              height: isMobile ? 220 : 320,
              objectFit: 'cover',
              borderRadius: 24,
              boxShadow: '0 8px 32px #b91c1c99',
              border: '6px solid #fffbe7',
              marginBottom: isMobile ? 16 : 0,
            }}
            whileHover={{ scale: 1.07, rotate: 2 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
          />
        </motion.div>
        <motion.div
          variants={fadeInRight}
          style={{ flex: 2, color: '#333', fontSize: isMobile ? '1.05rem' : '1.18rem', lineHeight: 1.7, fontWeight: 500 }}
        >
          {t('pastLeaderIntro')}<br /><br />
          <span dangerouslySetInnerHTML={{ __html: t('pastLeaderDescription') }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PastLeaderPage; 