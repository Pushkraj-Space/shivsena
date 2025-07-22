import React from 'react';
import { motion } from 'framer-motion';

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

const stories = [
    {
        title: 'दुवा – एका लहान मुलीचे आयुष्य वाचले',
        text: 'ठाण्यातील रहिवासी असलेली पाच वर्षांची दुवा ही रक्ताच्या दुर्मिळ आजाराने ग्रस्त होती. तिच्या कुटुंबाला उपचारांचा खर्च परवडणारा नव्हता. शिवसेना वैद्यकीय मदत कक्षात संपर्क केल्यावर मंगेश चिवटे आणि टीमने तातडीने मदत केली. मुख्यमंत्री आरोग्य निधी तून आर्थिक सहाय्य मिळवून दिले आणि आज दुवा पूर्णपणे बरी झाली आहे. तिच्या पालकांनी “शिवसेना आमच्या साठी देवदूत ठरली” असे भावनिक शब्दांत सांगितले.'
    },
    {
        title: 'शास्त्रीबाई – एका वृद्धेला नवा श्वास',
        text: '७२ वर्षांच्या शास्त्रीबाई यांना हृदयविकाराचा झटका आला होता. तातडीने आयसीयू आणि अँजिओप्लास्टीची गरज होती. त्यांचे कुटुंब गरीब होते. वैद्यकीय मदत कक्षाच्या माध्यमातून ३ दिवसांत मुख्यमंत्री सहाय्य निधी तून ₹१.८ लाखांची मदत मिळवून दिली गेली. आज त्या बऱ्या असून, पक्षाच्या कार्यकर्त्यांना आशीर्वाद देतात.'
    },
    {
        title: 'रोहन – अपघातग्रस्त तरुणाचा जीव वाचवला',
        text: 'कल्याण येथील १९ वर्षीय रोहन एका अपघातात गंभीर जखमी झाला होता. ब्रेन सर्जरीची तातडी होती. कक्षाने रात्रभर धावपळ करून आवश्यक कागदपत्रे सादर केली आणि उपचार सुरू झाले. यशस्वी शस्त्रक्रियेनंतर रोहन पुन्हा कॉलेजला जात आहे.'
    },
    {
        title: 'मुस्लिम विधवा महिलेची सिजेरियन डिलिव्हरी',
        text: 'मुलुंड परिसरातील एका मुस्लिम विधवा महिलेला सिजेरियन डिलिव्हरी ची गरज होती. खर्च झेपत नसल्याने तिने मदतीची याचना केली. शिवसेना वैद्यकीय मदत कक्षाने तिला खासगी रुग्णालयात मोफत उपचार मिळवून दिले. तिच्या चेहऱ्या वरचा आनंद – तोच आमचा पुरस्कार आहे.'
    }
];

const MedicalWorkPage = () => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            className="medical-work-page"
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
                केलेले काम
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>वैद्यकीय मदत कक्ष - रुग्णांचे अनुभव</b>
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
                ही अशी असंख्य छोटी -छोटी पण जीव वाचवणारी उदाहरणं म्हणजेच शिवसेना वैद्यकीय मदत कक्षाची खरी ओळख आहे.
            </motion.div>
        </motion.div>
    );
};

export default MedicalWorkPage; 