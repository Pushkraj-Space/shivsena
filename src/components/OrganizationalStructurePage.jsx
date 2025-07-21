import React from 'react';
import { motion } from 'framer-motion';

const stageImg = '/images/shivsena-banner-2.jpg';
const balasahebImg = '/images/shivsena-banner-4.jpg';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

const OrganizationalStructurePage = () => {
  return (
    <motion.div
      className="org-structure-page"
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
        शिवसेना ही एका मजबूत आणि कार्यक्षम संघटन रचनेवर उभी असलेली चळवळ आहे.<br />
        प्रत्येक स्तरावर कार्यकर्त्यांची ताकद, स्थानिक सहभाग आणि शिस्तबद्ध यंत्रणा ही पक्षाची खरी ओळख आहे.
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
          <h2 style={{ color: '#222', fontWeight: 700, fontSize: '2rem', marginBottom: 12, borderBottom: '1.5px dotted #b45309', display: 'inline-block' }}>मुख्य नेतृत्व</h2>
          <ul style={{ color: '#222', fontSize: '1.13rem', fontWeight: 500, margin: '18px 0 0 0', paddingLeft: 18, lineHeight: 1.7 }}>
            <li><b>हिंदुहृदयसम्राट बाळासाहेब ठाकरे</b> – संस्थापक, प्रेरणास्थान</li>
            <li><b>धर्मवीर आनंद दिघे साहेब</b> – कार्यकर्त्यांचे मार्गदर्शक व जनतेचा आवाज</li>
            <li><b>मा. उपमुख्यमंत्री एकनाथ शिंदे साहेब</b> – वर्तमानातील सक्रिय नेतृत्व, विकासाचा चेहरा</li>
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
          <h2 style={{ color: '#222', fontWeight: 700, fontSize: '2rem', marginBottom: 12, borderBottom: '1.5px dotted #b45309', display: 'inline-block' }}>पक्ष संरचना</h2>
          <ul style={{ color: '#222', fontSize: '1.13rem', fontWeight: 500, margin: '18px 0 0 0', paddingLeft: 18, lineHeight: 1.7 }}>
            <li><b>पक्षप्रमुख / उपमुख्यमंत्री</b> – धोरणनिर्मिती व पक्षदिशा</li>
            <li><b>सचिवालय / कार्यकारिणी मंडळ</b> – संघटन व कार्यवाहीची जबाबदारी</li>
            <li><b>जिल्हा / शहर / तालुका अध्यक्ष</b> – स्थानिक युनिटचे नेतृत्व</li>
            <li><b>युवासेना, महिला आघाडी, कामगार सेना, युवा सेना</b> – विविध घटकांचे प्रतिनिधित्व</li>
            <li><b>कार्यकर्ते</b> – पक्षाचे खरे आधारस्तंभ, जनतेशी थेट संपर्क ठेवणारे</li>
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
        शिवसेनेची रचना ही <b>“तळगाळापासून शिखराकडे”</b> अशी आहे — जेथे प्रत्येक कार्यकर्ता हा नेतृत्वाचा वाटा उचलू शकतो आणि समाजसेवेसाठी योगदान देऊ शकतो. हाच संघटनात्मक पाया शिवसेनेला एक सशक्त, लोकाभिमुख आणि कार्यक्षम पक्ष बनवतो.
      </motion.div>
    </motion.div>
  );
};

export default OrganizationalStructurePage; 