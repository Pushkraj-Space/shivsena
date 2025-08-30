import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const founderImg = '/images/balasaheb.jpg';

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

const FounderPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <motion.div
      className="founder-page  mt-20"
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
        {t('founderBalasahebThackeray')}
      </motion.h1>
      <motion.div
        className="founder-content"
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
            src={founderImg}
            alt="Balasaheb Thackeray"
            style={{
              width: isMobile ? 220 : 320,
              height: isMobile ? 220 : 320,
              objectFit: 'cover',
              borderRadius: 24,
              boxShadow: '0 8px 32px #b4530999',
              border: '6px solid #fffbe7',
              marginBottom: isMobile ? 16 : 0,
            }}
            whileHover={{ scale: 1.07, rotate: -2 }}
            whileTap={{ scale: 0.97, rotate: 2 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
          />
        </motion.div>
        <motion.div
          variants={fadeInRight}
          style={{ flex: 2, color: '#333', fontSize: isMobile ? '1.05rem' : '1.18rem', lineHeight: 1.7, fontWeight: 500 }}
        >
          <span style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem' }}>{t('hindudaySamratBalasaheb')}</span> हे शिवसेनेचे संस्थापक आणि मराठी जनतेचे प्रेरणास्थान. २३ जानेवारी १९२६ रोजी जन्मलेले बाळासाहेब एक प्रतिभावंत व्यंगचित्रकार, पत्रकार, आणि प्रभावी वक्ते होते. त्यांनी <b>“मराठी माणसाला न्याय मिळवून देणे आणि हिंदुत्वाला बळ देणे”</b> या उद्देशाने १९६६ साली शिवसेनेची स्थापना केली.<br /><br />
          बाळासाहेबांनी नेहमीच स्पष्ट, रोखठोक आणि बिनधास्त भूमिका घेतली. त्यांनी शिवसेनेला केवळ राजकीय पक्ष न ठेवता ती एक भावनिक लाट, एक चळवळ बनवली. मराठी अस्मिता, हिंदू एकता, राष्ट्रप्रेम, आणि जनतेसाठी सततचा लढा हे त्यांचे प्रमुख मुद्दे होते.<br /><br />
          <motion.div variants={quoteVariant} style={{ background: '#fffbe7', borderLeft: '6px solid #b45309', padding: '12px 18px', borderRadius: 12, margin: '18px 0', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', boxShadow: '0 2px 12px #e0c97f33' }}>
            “माझा कार्यकर्ता माझ्या लेकरासारखा आहे“, ही त्यांची भावना आजही प्रत्येक शिवसैनिकाच्या मनात जिवंत आहे...............
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FounderPage; 