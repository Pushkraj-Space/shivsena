import React from 'react';
import { motion } from 'framer-motion';

const images = [
    '/docs/यशोगाथा आणि ठळक कामगिरी_files/1.jpg',
    '/docs/यशोगाथा आणि ठळक कामगिरी_files/2.jpg',
];

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

const SuccessStoriesPage = () => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            className="success-stories-page"
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
                यशोगाथा आणि ठळक कामगिरी
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                शिवसेनेची वाटचाल म्हणजे कार्यकर्त्यांची ताकद, नेतृत्वाची दूरदृष्टी आणि जनतेच्या विश्वासाचे बळ. १९६६ पासून अनेक ऐतिहासिक टप्पे शिवसेनेने पार केले आहेत आणि आज एकनाथ शिंदे साहेबांच्या नेतृत्वात ही वाटचाल अधिक गतिमान झाली आहे.
            </motion.div>
            {/* Stats Section */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>नागरी विकास</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>३00+ कोटींचा निधी फक्त ठाणे जिल्ह्यातील रस्ते आणि ड्रेनेज प्रकल्पांसाठी (२०२३-२४)</li>
                        <li>मुंबई मेट्रो लाईन २A आणि ७: दररोज २ लाखांहून अधिक प्रवासी</li>
                        <li>१0,000+ शिवभोजन थाळ्या रोज वितरित ३0+ शहरांमध्ये</li>
                    </ul>
                </motion.div>
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>महिला सक्षमीकरण</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>१.२५ कोटी महिलांनी “लाडकी बहिण योजना” साठी अर्ज केले (२०२४ मध्ये)</li>
                        <li>₹१५०० चा निधी महिलांच्या खात्यावर थेट वर्ग</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Images Row */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, justifyContent: 'center', alignItems: 'center' }}
            >
                {images.map((src, i) => (
                    <motion.img
                        key={src}
                        src={src}
                        alt={`Success story ${i + 1}`}
                        style={{ width: isMobile ? '100%' : 380, height: isMobile ? 180 : 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', background: '#fff' }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 * i }}
                    />
                ))}
            </motion.div>
            {/* Sectoral Achievements */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>कृषी आणि ग्रामीण विकास</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>७ लाख शेतकऱ्यांना शिवगौरव योजनेंतर्गत लाभ</li>
                        <li>२५ जिल्ह्यांमध्ये नवे सौर सिंचन प्रकल्प सुरू</li>
                    </ul>
                </motion.div>
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>औद्योगिक संधी</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>१४ नवीन औद्योगिक क्लस्टर्स – १.५ लाख नवीन रोजगारांची शक्यता</li>
                        <li>“मेक इन महाराष्ट्र” उपक्रमांतर्गत ८,000+ MSME नोंदण्या</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* Personal Stories */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32 }}
            >
                <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.3rem' : '1.7rem', marginBottom: 18 }}>यशोगाथा</h2>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 8 }}>शेतीतील क्रांती - जळगाव जिल्हा</h3>
                        <p style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', marginBottom: 8 }}>“शिवगौरव शेतकरी योजना” मुळे दुष्काळी भागातील शेतकऱ्यांना तातडीने बी-बियाण्यांचा पुरवठा झाला. यामुळे उत्पादनात 35% वाढ झाली.</p>
                        <p style={{ color: '#666', fontWeight: 500, fontStyle: 'italic', marginBottom: 0 }}>“शासनाने वेळेत मदत केली नसती, तर माझं शेत सोडावं लागलं असतं.”</p>
                        <p style={{ color: '#b45309', fontWeight: 700, marginTop: 4 }}>– सुनील पाटील, शेतकरी</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: 8 }}>लाडकी बहिण - बुलढाणा जिल्हा</h3>
                        <p style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', marginBottom: 8 }}>“लाडकी बहिण” योजनेमुळे एका विधवा महिलेला स्वतःचा किराणा व्यवसाय सुरू करता आला.</p>
                        <p style={{ color: '#666', fontWeight: 500, fontStyle: 'italic', marginBottom: 0 }}>“या पैशातून मी मुलीला शिकवते आणि दुकान चालवते. आता कोणापुढे हात पसरावा लागत नाही.”</p>
                        <p style={{ color: '#b91c1c', fontWeight: 700, marginTop: 4 }}>– कविता ताई साखरे</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SuccessStoriesPage; 