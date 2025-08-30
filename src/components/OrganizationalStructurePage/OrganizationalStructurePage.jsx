import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const stageImg = '/images/shivsena-banner-2.jpg';
const balasahebImg = '/images/shivsena-banner-4.jpg';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

const OrganizationalStructurePage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="org-structure-page mt-20"
      style={{ background: '#fafafa', minHeight: '100vh', padding: '0 0 40px 0' }}
      initial="hidden"
      animate="visible"
    >
      {/* Top Highlight Box */}
      <motion.div
        style={{ background: '#fdebc8', color: '#6b4a09', fontWeight: 600, fontSize: '1.15rem', maxWidth: 800, margin: '0 auto', borderRadius: 12, padding: '18px 24px', textAlign: 'center', marginTop: 32, marginBottom: 32, boxShadow: '0 2px 12px #e0c97f33' }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t('orgStructureIntro')}
      </motion.div>

      {/* Section 1: मुख्य नेतृत्व */}
      <motion.div
        className="org-section org-leadership"
        style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
          gap: 40, maxWidth: 1100, margin: '0 auto 48px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: '32px 24px',
        }}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ color: '#222', fontWeight: 700, fontSize: '2rem', marginBottom: 12, borderBottom: '1.5px dotted #b45309', display: 'inline-block' }}>{t('mainLeadership')}</h2>
          <ul style={{ color: '#222', fontSize: '1.13rem', fontWeight: 500, margin: '18px 0 0 0', paddingLeft: 18, lineHeight: 1.7 }}>
            <li><b>{t('mainLeader1')}</b></li>
            <li><b>{t('mainLeader2')}</b></li>
            <li><b>{t('mainLeader3')}</b></li>
          </ul>
        </div>
        <motion.img
          src={balasahebImg}
          alt="Balasaheb Thackeray"
          style={{ width: 340, maxWidth: '90vw', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', objectFit: 'cover' }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Section 2: पक्ष संरचना */}
      <motion.div
        className="org-section org-structure"
        style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
          gap: 40, maxWidth: 1100, margin: '0 auto 48px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: '32px 24px',
        }}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={stageImg}
          alt="Shivsena Stage"
          style={{ width: 340, maxWidth: '90vw', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', objectFit: 'cover' }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ color: '#222', fontWeight: 700, fontSize: '2rem', marginBottom: 12, borderBottom: '1.5px dotted #b45309', display: 'inline-block' }}>{t('partyStructure')}</h2>
          <ul style={{ color: '#222', fontSize: '1.13rem', fontWeight: 500, margin: '18px 0 0 0', paddingLeft: 18, lineHeight: 1.7 }}>
            <li><b>{t('partyStruct1')}</b></li>
            <li><b>{t('partyStruct2')}</b></li>
            <li><b>{t('partyStruct3')}</b></li>
            <li><b>{t('partyStruct4')}</b></li>
            <li><b>{t('partyStruct5')}</b></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Info Box */}
      <motion.div
        style={{ background: '#f6f6f6', color: '#222', fontWeight: 500, fontSize: '1.08rem', maxWidth: 900, margin: '0 auto', borderRadius: 12, padding: '18px 24px', textAlign: 'center', boxShadow: '0 2px 12px #e0c97f33' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span dangerouslySetInnerHTML={{ __html: t('orgStructureClosing') }} />
      </motion.div>
    </motion.div>
  );
};

export default OrganizationalStructurePage; 