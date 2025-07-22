import React from "react";
import { motion } from "framer-motion";

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

const InitiativesAndProjects = () => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            className="initiatives-projects-page"
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
                उपक्रम आणि प्रकल्प
            </motion.h1>
            {/* Section 1: 1966-1990 + 1990-2000 */}
            <motion.div
                className="initiatives-content"
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
                    margin: '0 auto 40px',
                }}
                variants={containerVariant}
            >
                <motion.div
                    variants={fadeInLeft}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 12 }}>१९६६ - १९९०: मराठी अस्मितेचा लढा</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>स्थानिक रोजगारासाठी ‘मराठी माणसाला प्राधान्य’ हे धोरण</li>
                        <li>मिल मजदूरांच्या हक्कांसाठी आंदोलने</li>
                        <li>मुंबईतील भूमिपुत्रांचे हक्क जपणारी शिवसेनेची पहिली चळवळ</li>
                        <li>अनधिकृत बांधकामांवरील ‘गावठाण धोरण’</li>
                    </ul>
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', margin: '32px 0 12px' }}>१९९० - २०००: सत्तेची वाटचाल आणि लोकाभिमुख निर्णय</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>१९९५ मध्ये पहिल्यांदा शिवसेना–भाजप सरकारची स्थापना — बाळासाहेब ठाकरे यांचे बाह्य नेतृत्व आणि मुख्यमंत्री मनोहर जोशी यांच्या नेतृत्वात कार्य</li>
                        <li>मराठी शाळांना प्रोत्साहन, महिलांसाठी ‘सावित्रीबाई फुले योजना’</li>
                        <li>आनंद दिघे साहेबांचे ठाण्यातील नेतृत्व, जनतेच्या प्रश्नांसाठी सातत्याने संघर्ष</li>
                        <li>झोपडपट्टी पुनर्वसन प्रकल्पांची सुरुवात</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={fadeInRight}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}
                >
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/3-1.jpg"
                        alt="Initiative 1"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 16 }}
                        whileHover={{ scale: 1.07, rotate: -2 }}
                        whileTap={{ scale: 0.97, rotate: 2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/6.jpg"
                        alt="Initiative 2"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 0 }}
                        whileHover={{ scale: 1.07, rotate: 2 }}
                        whileTap={{ scale: 0.97, rotate: -2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                </motion.div>
            </motion.div>
            {/* Section 2: 2000-2014 + 2014-2022 */}
            <motion.div
                className="initiatives-content"
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column-reverse' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 24 : 48,
                    background: '#fff',
                    borderRadius: 24,
                    boxShadow: '0 4px 32px #e0c97f55',
                    padding: isMobile ? 16 : 32,
                    maxWidth: 1100,
                    margin: '0 auto 40px',
                }}
                variants={containerVariant}
            >
                <motion.div
                    variants={fadeInLeft}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}
                >
                    <motion.img
                        src="/docs/उपक्रम आणि प्रकल्प_files/8.jpg"
                        alt="Initiative 3"
                        style={{ width: isMobile ? 220 : 320, height: isMobile ? 180 : 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 8px 32px #b4530999', border: '6px solid #fffbe7', marginBottom: 0 }}
                        whileHover={{ scale: 1.07, rotate: 2 }}
                        whileTap={{ scale: 0.97, rotate: -2 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                    />
                </motion.div>
                <motion.div
                    variants={fadeInRight}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 12 }}>२०००-२०१४: संघटन विस्तार व सामाजिक कार्य</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>ग्रामीण महाराष्ट्रात शिवसेनेची पाळंमुळे बळकट झाली</li>
                        <li>कामगार सेना, युवासेना, विद्यार्थी सेना, महिला आघाडी यांचे सशक्तीकरण</li>
                        <li>शेतकरी आंदोलने, विजेच्या दराविरुद्ध मोर्चे</li>
                        <li>शिवसैनिकांचे पूर, दुष्काळ, आपत्ती काळात मदत कार्य</li>
                    </ul>
                    <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', margin: '32px 0 12px' }}>२०१४-२०२२: विकास आणि राजकीय स्थैर्य</h3>
                    <ul style={{ fontSize: isMobile ? '1rem' : '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.7 }}>
                        <li>केंद्र आणि राज्यात भागीदारीतून विकासकामे</li>
                        <li>पालिका आणि स्थानिक स्वराज्य संस्थांमध्ये प्रभावी सहभाग</li>
                        <li>शिवसेनेच्या नेतृत्वाखाली विविध सामाजिक उपक्रम</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Quote Block */}
            <motion.div
                variants={quoteVariant}
                style={{ background: '#fffbe7', borderLeft: '6px solid #b45309', padding: '12px 18px', borderRadius: 12, margin: '18px auto', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', boxShadow: '0 2px 12px #e0c97f33', maxWidth: 900 }}
            >
                “शिवसेनेच्या उपक्रमांनी महाराष्ट्राच्या सामाजिक, आर्थिक आणि सांस्कृतिक जीवनात आमूलाग्र बदल घडवले आहेत.”
            </motion.div>
        </motion.div>
    );
};

export default InitiativesAndProjects; 