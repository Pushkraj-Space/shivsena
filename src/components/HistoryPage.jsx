import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HistoryPage.css';

const balasahebImg = '/images/vyang/balasaheb image black and white.jpg';
const sahebImg = '/images/saheb.jpeg';
const bannerImg = '/images/historybanner.jpg';

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const quoteVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
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

const TimelineItem = ({ year, title, description, achievements, quote, image, isEven, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-year">{year}</div>
        <h3 className="timeline-title">{title}</h3>
        {image && (
          <motion.img
            src={image}
            alt={title}
            style={{
              width: '100%',
              maxWidth: 200,
              height: 'auto',
              borderRadius: 15,
              margin: '15px auto',
              display: 'block',
              boxShadow: '0 4px 20px rgba(217, 119, 6, 0.2)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          />
        )}
        <p className="timeline-description">{description}</p>
        {achievements && achievements.length > 0 && (
          <ul className="timeline-achievements">
            {achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}
        {quote && (
          <div className="timeline-quote">"{quote}"</div>
        )}
      </div>
    </div>
  );
};

const HistoryPage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const timelineData = [
    {
      year: "1966",
      title: "शिवसेना की स्थापना",
      description: "बालासाहेब ठाकरे द्वारा महाराष्ट्र के लोगों के अधिकारों की रक्षा के लिए शिवसेना की स्थापना की गई। यह एक ऐतिहासिक क्षण था जब महाराष्ट्र के लोगों की आवाज को मजबूती मिली।",
      achievements: [
        "महाराष्ट्र के लोगों के अधिकारों की रक्षा का संकल्प",
        "राजनीतिक पार्टी के रूप में पंजीकरण",
        "मुंबई में पहला कार्यालय स्थापित",
        "लोकप्रिय समर्थन प्राप्त करना शुरू"
      ],
      quote: "महाराष्ट्र के लिए, महाराष्ट्र के लोगों के लिए, महाराष्ट्र की संस्कृति के लिए",
      image: balasahebImg
    },
    {
      year: "1970",
      title: "पहली चुनावी जीत",
      description: "शिवसेना ने अपना पहला चुनाव लड़ा और जीता। यह पार्टी के लिए एक बड़ी उपलब्धि थी और महाराष्ट्र की राजनीति में शिवसेना का प्रवेश सुनिश्चित हुआ।",
      achievements: [
        "पहली बार चुनाव में भागीदारी",
        "मुंबई नगर निगम में प्रतिनिधित्व",
        "जनता का विश्वास जीतना",
        "राजनीतिक मान्यता प्राप्त करना"
      ],
      quote: "जनता का समर्थन ही हमारी सबसे बड़ी ताकत है"
    },
    {
      year: "1985",
      title: "नगर निगम में बहुमत",
      description: "शिवसेना ने मुंबई नगर निगम चुनाव में बहुमत प्राप्त किया। यह पार्टी के विकास का एक महत्वपूर्ण मोड़ था।",
      achievements: [
        "मुंबई नगर निगम में बहुमत",
        "पहली बार मेयर पद प्राप्त",
        "शहरी विकास में योगदान",
        "जनता की सेवा का अवसर"
      ],
      quote: "शहर की सेवा, लोगों की सेवा"
    },
    {
      year: "1995",
      title: "पहली सरकार का गठन",
      description: "शिवसेना और भारतीय जनता पार्टी के गठबंधन ने महाराष्ट्र में सरकार बनाई। यह पार्टी के इतिहास का स्वर्णिम काल था।",
      achievements: [
        "महाराष्ट्र में पहली सरकार",
        "मुख्यमंत्री पद प्राप्त",
        "राज्य के विकास में योगदान",
        "राष्ट्रीय राजनीति में पहचान"
      ],
      quote: "सत्ता जनता के लिए, जनता की सेवा के लिए",
      image: sahebImg
    },
    {
      year: "2000",
      title: "आनंद दिघे का नेतृत्व",
      description: "आनंद दिघे साहेब ने शिवसेना के नेतृत्व को संभाला और पार्टी को नई ऊंचाइयों तक पहुंचाया। उनका योगदान अविस्मरणीय है।",
      achievements: [
        "पार्टी संगठन को मजबूत किया",
        "युवाओं को प्रेरित किया",
        "जनता के बीच विश्वास बढ़ाया",
        "शिवसेना की विचारधारा को आगे बढ़ाया"
      ],
      quote: "शिवसेना की विचारधारा हमारी पहचान है"
    },
    {
      year: "2012",
      title: "बालासाहेब की विरासत",
      description: "बालासाहेब ठाकरे के निधन के बाद उनकी विरासत को आगे बढ़ाने का संकल्प। शिवसेना ने उनके सपनों को साकार करने का वादा किया।",
      achievements: [
        "बालासाहेब के सपनों को साकार करना",
        "महाराष्ट्र के विकास में योगदान",
        "लोगों की सेवा जारी रखना",
        "शिवसेना की विचारधारा को बनाए रखना"
      ],
      quote: "बालासाहेब के सपनों का महाराष्ट्र बनाएंगे"
    },
    {
      year: "2022",
      title: "वर्तमान युग",
      description: "शिवसेना आज भी महाराष्ट्र और देश के विकास में अग्रणी भूमिका निभा रही है। पार्टी का भविष्य उज्ज्वल है।",
      achievements: [
        "डिजिटल युग में पार्टी का विकास",
        "युवाओं को राजनीति में शामिल करना",
        "सामाजिक कल्याण के कार्य",
        "राष्ट्र निर्माण में योगदान"
      ],
      quote: "आधुनिक भारत के निर्माण में शिवसेना का योगदान"
    }
  ];

  return (
    <div className="history-page" style={{ background: '#fffbe7', minHeight: '100vh', paddingBottom: 40 }}>
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="history-header"
        style={{ textAlign: 'center', padding: '40px 0 20px' }}
      >
        <motion.img
          src={bannerImg}
          alt="Shivsena Banner"
          style={{
            height: '50%',
            width: '100%',
            maxWidth: '60%',
            borderRadius: 20,
            boxShadow: '0 4px 24px #e0c97f',
            margin: '0 auto',
            display: 'block'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        />
        <motion.h1
          style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            margin: '24px 0 8px',
            color: '#d97706',
            fontWeight: 700
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          शिवसेना का इतिहास
        </motion.h1>
        <motion.p
          variants={quoteVariant}
          style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#333',
            fontWeight: 500,
            marginBottom: 0
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          "समय के साथ बदलते हुए भी अपनी जड़ों से जुड़े रहना ही सच्ची सफलता है"
        </motion.p>
        <motion.p
          style={{ color: '#666', marginTop: 8 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          महाराष्ट्र के गौरवशाली इतिहास की यात्रा
        </motion.p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="history-timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              achievements={item.achievements}
              quote={item.quote}
              image={item.image}
              isEven={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(245, 158, 11, 0.05))',
          margin: '40px 20px',
          borderRadius: 20
        }}
      >
        <motion.h2
          style={{
            color: '#b45309',
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginBottom: 20
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          भविष्य की ओर
        </motion.h2>
        <motion.p
          style={{
            color: '#444',
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: 800,
            margin: '0 auto',
            lineHeight: 1.6
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          शिवसेना का इतिहास महाराष्ट्र के लोगों के संघर्ष, साहस और सफलता की कहानी है।
          आज भी हम बालासाहेब ठाकरे के सपनों को साकार करने के लिए प्रतिबद्ध हैं।
          भविष्य में भी शिवसेना महाराष्ट्र और देश के विकास में अग्रणी भूमिका निभाएगी।
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HistoryPage; 