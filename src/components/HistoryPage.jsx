import React from 'react';
import { motion } from 'framer-motion';

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
  const isMobile = useIsMobile();
  return (
    <div className="history-page" style={{ background: '#fffbe7', minHeight: '100vh', paddingBottom: 40 }}>
      <motion.div initial="hidden" animate="visible" variants={sectionVariant} className="history-header" style={{ textAlign: 'center', padding: '40px 0 20px' }}>
        <img src={bannerImg} alt="Shivsena Banner" style={{ height: '50%', width: '100%', maxWidth: '60%', borderRadius: 20, boxShadow: '0 4px 24px #e0c97f', margin: '0 auto', display: 'block' }} />
        <h1 style={{ fontSize: isMobile ? '2rem' : '2.5rem', margin: '24px 0 8px', color: '#d97706', fontWeight: 700 }}>प्रेरणा स्थान – हिंदुदयसम्राट बाळासाहेब ठाकरे</h1>
        <motion.p variants={quoteVariant} style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: '#333', fontWeight: 500, marginBottom: 0 }}>
          "जिथे अन्याय तिथे शिवसेना"
        </motion.p>
        <p style={{ color: '#666', marginTop: 8 }}>ही घोषणा केवळ नारानती, ती बाळासाहेब ठाकरे यांच्या जीवनाची शिकवण होती.</p>
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
          <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.3rem' : '2rem' }}>बाळासाहेब ठाकरे यांचा परिचय</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 12 }}>
            हिंदुदयसम्राट बाळासाहेब ठाकरे हे महाराष्ट्रातील लाखो कार्यकर्त्यांचे प्रेरणास्थान आहेत. त्यांनी मराठी माणसाच्या अस्मितेसाठी आणि हिंदुत्वासाठी आपले संपूर्ण आयुष्य समर्पित केले.
          </p>
          <ul style={{ color: '#333', fontSize: isMobile ? '0.98rem' : '1.05rem', marginBottom: 12, paddingLeft: 18 }}>
            <li>१९६६ – शिवसेनेची स्थापना</li>
            <li>मराठी माणसाचा आवाज – मुंबईत स्थानिकांना न्याय मिळावा म्हणून लढा</li>
            <li>हिंदुत्वाचा पुरस्कार – धर्माभिमान व हिंदू विचारधारेचा प्रचार</li>
            <li>सामाजिक कामात पुढाकार – गरीबांसाठी, गरजूंना मदतकार्य</li>
            <li>व्यंगचित्रकार ते राजकीय नेते – आपल्या तीक्ष्ण भाष्याने जनतेच्या मनात जागा मिळवली</li>
          </ul>
          <motion.div variants={quoteVariant}>
            <strong>बाळासाहेब ठाकरे यांचे विचार – अमूल्य ठेवा</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>"शिवसेना ही कोणत्याही एका व्यक्तीची नाही, ती प्रत्येक सामान्य माणसाची आहे."</li>
              <li>"मराठी माणूस हा डोकं वर करून जगलाच पाहिजे."</li>
              <li>"हिंदू हा माझा श्वास आहे."</li>
            </ul>
          </motion.div>
          <motion.div variants={sectionVariant} style={{ marginTop: 16 }}>
            <strong>का आहेत बाळासाहेब ठाकरे प्रेरणास्थान?</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>अन्यायाविरुद्ध झुंज देण्याची शिकवण</li>
              <li>समाजासाठी निःस्वार्थ कार्य</li>
              <li>नेतृत्वाची अचूक दिशा</li>
              <li>कार्यकर्त्यांमध्ये आत्मविश्वास जागवण्याची मत्ता</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.div initial="hidden" animate="visible" variants={sectionVariant} className="history-header" style={{ textAlign: 'center', padding: '20px 0 10px' }}>
        <h1 style={{ fontSize: isMobile ? '1.3rem' : '2rem', margin: '24px 0 8px', color: '#b91c1c', fontWeight: 700 }}>प्रेरणा स्थान – ठाण्याचे धर्मवीर आनंद दिघे साहेब</h1>
        <motion.p variants={quoteVariant} style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#333', fontWeight: 500, marginBottom: 0 }}>
          "कार्यकर्ता हा माझा आत्मा आहे."
        </motion.p>
        <p style={{ color: '#666', marginTop: 8 }}>ही घोषणा केवळ शब्द नव्हे, तर आनंद दिघे साहेबांच्या कार्यशैलीचे मूळ तत्त्वज्ञान होते.</p>
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
          <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.3rem' : '2rem' }}>आनंद दिघे यांचा परिचय</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: 12 }}>
            धर्मवीर आनंद दिघे साहेब हे ठाण्यातील शिवसेनेचे अपैलू नेते होते. त्यांना "कार्यकर्त्यांचा देव" म्हणून ओळखले जाते. प्रत्येक संकटात कार्यकर्त्यांच्या पाठीशी ठाम उभं राहणं, हे त्यांचं जीवनधर्म होतं.
          </p>
          <ul style={{ color: '#333', fontSize: isMobile ? '0.98rem' : '1.05rem', marginBottom: 12, paddingLeft: 18 }}>
            <li>शिवसेनेचे ठाणे जिल्हा प्रमुख म्हणून अनेक वर्षे कार्यरत</li>
            <li>ठाणे जिल्ह्यात शिवसेनेची मजबूत संघटना उभी केली</li>
            <li>गरजूंसाठी व कार्यकर्त्यांसाठी नेहमी तत्पर</li>
            <li>सामाजिक न्यायासाठी अनेक आंदोलने</li>
            <li>कोणत्याही पदाचा आग्रह न धरता जनतेसाठी अहोरात्र काम</li>
          </ul>
          <motion.div variants={quoteVariant}>
            <strong>आनंद दिघे साहेबांचे विचार – प्रत्येक शिवसैनिकासाठी प्रेरणा</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>"नेता होण्यापेक्षा कार्यकर्त्यांचा आधार बना."</li>
              <li>"जनतेच्या समस्या हेच माझं काम आहे."</li>
              <li>"शिवसैनिकांच्या रणासाठी शेवटपर्यंत झुंज देईन."</li>
            </ul>
          </motion.div>
          <motion.div variants={sectionVariant} style={{ marginTop: 16 }}>
            <strong>का आहेत आनंद दिघे साहेब प्रेरणास्थान?</strong>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>कार्यकर्त्यांवर निस्सीम प्रेम</li>
              <li>ठाण्याला संघटनात्मक दृष्टिकोनातून मजबूत केलं</li>
              <li>गरीबांसाठी वाहिनी सेवा, गरजूंना मदतकार्य</li>
              <li>कोणताही भेदभाव न करता सर्वांना मदत</li>
            </ul>
            <p style={{ marginTop: 8, color: '#b91c1c', fontWeight: 600 }}>
              "धर्मवीर" ही उपाधी त्यांना लोकांनी दिलेली आहे – कारण ते केवळ राजकीय नेते नव्हते, तर कार्यकर्त्यांच्या जीवनाचा अविभाज्य भाग होते.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HistoryPage; 