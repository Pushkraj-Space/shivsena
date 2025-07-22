import React from 'react';
import { motion } from 'framer-motion';

const suImg = '/docs/संक्षिप्त माहिती_files/su.jpg';

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

const MedicalInfoPage = () => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            className="medical-info-page"
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
                संक्षिप्त माहिती
            </motion.h1>
            {/* Intro */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>शिवसेना वैद्यकीय मदत कक्ष</b> हा उपक्रम गरजू रुग्णांना तातडीने मदत पोहोचवण्यासाठी स्थापन करण्यात आला. १७ नोव्हेंबर २०१७ रोजी महाराष्ट्र राज्याचे त्या वेळचे नगरविकास मंत्री व आजचे विद्यमान उपमुख्यमंत्री एकनाथ शिंदे साहेब व खासदार डॉ.श्रीकांत शिंदे यांच्या पुढाकाराने ठाणे जिल्ह्यात या कक्षाची सुरुवात झाली.
            </motion.div>
            {/* Motto */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 700, margin: '0 auto 24px', background: '#fffbe7', borderLeft: '6px solid #b45309', borderRadius: 12, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 12 : 24, fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#b45309', textAlign: 'center' }}
            >
                या कक्षाचे ब्रीदवाक्य आहे — "रुग्ण सेवा हीच ईश्वर सेवा."
            </motion.div>
            {/* Impact */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                आजपर्यंत हजारो गरजू रुग्णांना या कक्षाच्या माध्यमातून मोफत किंवा सवलतीच्या दरात औषधोपचार, शस्त्रक्रिया, तपासण्या व मुख्यमंत्री वैद्यकीय सहाय्यता निधी तून आर्थिक मदत मिळाली आहे. या कक्षाचे कार्य उपमुख्यमंत्री एकनाथ शिंदे यांच्या मार्गदर्शना खाली आणि शिवसेना वैद्यकीय मदत कक्ष व मुख्यमंत्री वैद्यकीय सहाय्यता निधी मुळ संकल्पक मंगेश चिवटे यांच्या व्यवस्थापनाखाली संपूर्ण महाराष्ट्रात विस्तारत आहे.
            </motion.div>
            {/* Features + Image */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32, alignItems: 'center' }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>प्रमुख वैशिष्ट्ये:</h2>
                    <ul style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', paddingLeft: 18, margin: 0 }}>
                        <li>सातत्याने रुग्णसेवा: हजारो रुग्णांना आजवर मदत – शस्त्रक्रिया, औषधे, आयसीयू सुविधा, तपासण्या आणि कागदपत्र मार्गदर्शन.</li>
                        <li>मुख्यमंत्री आरोग्य निधी सहाय्य: कक्षाच्या माध्यमातून शासनाकडून आर्थिक मदतीसाठी अर्ज प्रक्रियेचे मार्गदर्शन.</li>
                        <li>दैनंदिन सेवा केंद्र: गरजू नागरिकांसाठी ठाणे येथील कार्यालयातून तातडीने मदत उपलब्ध.</li>
                        <li>टोल-फ्री हेल्पलाइन व संपर्क सेवा: कोणतीही अडचण असल्यास त्वरित सहाय्य.</li>
                        <li>विशेष उपचार प्रकरणे: अपघातग्रस्त, गंभीर आजारांतील शस्त्रक्रिया यासाठी खास मार्गदर्शन व मदत.</li>
                    </ul>
                </motion.div>
                <motion.img
                    src={suImg}
                    alt="Medical Help"
                    style={{ width: isMobile ? '100%' : 380, height: isMobile ? 180 : 220, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 24px #e0c97f', background: '#fff' }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                />
            </motion.div>
            {/* Values and Leadership */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 1100, margin: '0 auto 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 32 }}
            >
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b45309', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>मानवी मूल्यांवर आधारित कार्य:</h2>
                    <p style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', marginBottom: 8 }}>
                        या कक्षाचे सर्व काम <b>“सेवा हीच शिवधर्म”</b> या तत्त्वावर आधारित आहे. उपमुख्यमंत्री एकनाथ शिंदे यांच्या मार्गदर्शना खाली, आणि खासदार डॉ. श्रीकांत शिंदे यांच्या दूरदृष्टीने या कक्षाचा कार्यभाग अतिशय यशस्वी पणे सुरू आहे.
                    </p>
                </motion.div>
                <motion.div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 28 }} variants={cardVariant}>
                    <h2 style={{ color: '#b91c1c', fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: 12 }}>कक्षाचे नेतृत्व — मंगेश चिवटे व राम राऊत</h2>
                    <p style={{ color: '#333', fontSize: isMobile ? '1rem' : '1.08rem', marginBottom: 8 }}>
                        या उपक्रमाचे प्रमुख समन्वयक मंगेश चिवटे यांनी सुरुवाती पासून आजपर्यंत वैद्यकीय मदत कक्षाचे संचालन अत्यंत कार्यक्षमतेने केले आहे.
                    </p>
                </motion.div>
            </motion.div>
            {/* Leadership Impact */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>त्यांच्या नेतृत्वाखाली:</b>
                <ul style={{ margin: '8px 0 0 18px', color: '#333', fontSize: isMobile ? '1rem' : '1.08rem' }}>
                    <li>हजारो रुग्णांना मोफत व उपचार मिळाले.</li>
                    <li>अनेक रुग्णांना मुख्यमंत्री वैद्यकीय सहाय्यता निधीतून तातडीने आर्थिक मदत मिळवून दिली गेली.</li>
                    <li>विविध भागांतील शिवसेना शाखांच्या समन्वयातून व्यापक नेटवर्क तयार झाले.</li>
                </ul>
                <p style={{ marginTop: 8, color: '#b45309', fontWeight: 600 }}>
                    मंगेश चिवटे व राम राऊत हे केवळ व्यवस्थापक नव्हे, तर सामाजिक बांधिलकी ने प्रेरित असलेले संवेदनशील नेतृत्व आहेत. ते रुग्णांच्या गरजा समजून घेत वैयक्तिक पातळी वर मदतीचे तंत्र आखतात, हेच कक्षाच्या यशामागील खरे कारण ठरते.
                </p>
            </motion.div>
            {/* Expansion and Importance */}
            <motion.div
                variants={sectionVariant}
                style={{ maxWidth: 900, margin: '0 auto 32px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0c97f33', padding: isMobile ? 16 : 32, fontSize: isMobile ? '1.05rem' : '1.18rem', color: '#333', fontWeight: 500 }}
            >
                <b>वाढता विस्तार:</b> सुरुवातीला ठाण्यात सुरू झालेला हा उपक्रम आता कल्याण, डोंबिवली, अंबरनाथ, बदलापूर आणि आसपासच्या परिसरांमध्ये देखील विस्तारलेला आहे. शिवसेनेच्या स्थानिक शाखांच्या सहकार्याने, याचे कार्यक्षेत्र अधिक व्यापक होत आहे.<br /><br />
                <b>हे का महत्त्वाचे आहे?</b> आजच्या यंत्रवत आणि महागड्या आरोग्य व्यवस्थेत, शिवसेनेने उभा केलेला हा वैद्यकीय मदत कक्ष म्हणजे गरिबांचा आधार, वृद्धांचा विश्वास आणि सर्वसामान्यांचा <b>‘आरोग्य साथी’.</b>
            </motion.div>
        </motion.div>
    );
};

export default MedicalInfoPage; 