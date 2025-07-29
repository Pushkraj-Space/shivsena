import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CurrentLeadershipPage = () => {
  const { t } = useTranslation();

  const leaders = [
    {
      name: t('eknathShindeFull'),
      title: t('mainLeader'),
      img: '/leaders/eknath_shinde.jpg',
      description: t('eknathShindeDescription', { returnObjects: true }),
      highlights: t('eknathShindeHighlights', { returnObjects: true })
    },
    {
      name: 'गुलाबराव पाटील',
      title: t('minister'),
      img: '/leaders/gulabraopatil.jpg',
    },
    {
      name: 'उदय सामंत',
      title: t('minister'),
      img: '/leaders/Uday_Samant.jpg',
    },
    {
      name: 'दादाजी भुसे',
      title: t('minister'),
      img: '/leaders/dadaji_bhuse.jpg',
    },
    {
      name: 'शंभूराज देसाई',
      title: t('minister'),
      img: '/leaders/shambhuraj_desai.jpg',
    },
    {
      name: 'संदीपन भुमरे',
      title: t('minister'),
      img: '/leaders/sandipan_bhumre.jpg',
    },
    {
      name: 'श्रीकांत शिंदे',
      title: t('mp'),
      img: '/leaders/shrikan_shinde.jpg',
    },
    {
      name: 'दीपक केसरकर',
      title: t('minister'),
      img: '/leaders/deepak_kesarkar.jpg',
    },
    {
      name: 'प्रताप सरनाईक',
      title: t('mla'),
      img: '/leaders/pratap_sernaik.jpg',
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: 'spring' } },
  };

  return (
    <motion.div
      className="current-leadership-page"
      style={{ background: '#f7fafc', minHeight: '100vh', padding: '32px 0' }}
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.h1
        style={{ textAlign: 'center', color: '#b45309', fontWeight: 800, fontSize: '2.5rem', marginBottom: 24, letterSpacing: 1 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('currentLeadershipTitle')}
      </motion.h1>
      {/* Main Leader Card */}
      <motion.div
        className="main-leader-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 28,
          boxShadow: '0 4px 32px #e0c97f55',
          padding: 32,
          maxWidth: 700,
          margin: '0 auto 40px',
        }}
        variants={cardVariant}
      >
        <motion.img
          src={leaders[0].img}
          alt={leaders[0].name}
          style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 24px #b4530999', border: '6px solid #f7fafc', marginBottom: 18 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.96, rotate: -2 }}
        />
        <motion.h2 style={{ color: '#b45309', fontWeight: 700, fontSize: '1.7rem', margin: 0 }}>{leaders[0].name}</motion.h2>
        <div style={{ color: '#333', fontWeight: 600, fontSize: '1.1rem', marginBottom: 10 }}>{leaders[0].title}</div>
        <ul style={{ color: '#444', fontSize: '1.05rem', margin: '10px 0 0 0', padding: 0, listStyle: 'none' }}>
          {leaders[0].description.map((desc, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>{desc}</motion.li>
          ))}
        </ul>
        <ul style={{ color: '#b45309', fontWeight: 600, fontSize: '1.05rem', margin: '16px 0 0 0', padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {leaders[0].highlights.map((h, i) => (
            <motion.li key={i} style={{ background: '#fffbe7', borderRadius: 8, padding: '4px 12px' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>{h}</motion.li>
          ))}
        </ul>
      </motion.div>
      {/* Other Leaders Grid */}
      <motion.div
        className="leaders-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 32,
          maxWidth: 1100,
          margin: '0 auto',
        }}
        variants={containerVariant}
      >
        {leaders.slice(1).map((leader, idx) => (
          <motion.div
            key={leader.name}
            className="leader-card"
            variants={cardVariant}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #b4530999' }}
            style={{
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 2px 12px #e0c97f33',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.2s',
            }}
          >
            <motion.img
              src={leader.img}
              alt={leader.name}
              style={{ width: 110, height: 110, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 12px #b4530999', border: '4px solid #f7fafc', marginBottom: 12 }}
              whileHover={{ scale: 1.12, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
            />
            <div style={{ color: '#b45309', fontWeight: 700, fontSize: '1.1rem', marginBottom: 2 }}>{leader.name}</div>
            <div style={{ color: '#333', fontWeight: 500, fontSize: '1rem', marginBottom: 2 }}>{leader.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CurrentLeadershipPage; 