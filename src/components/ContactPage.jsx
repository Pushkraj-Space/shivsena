import React from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
    {
        icon: (
            <svg aria-hidden="true" viewBox="0 0 384 512" width={32} height={32} fill="#F37021"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
        ),
        title: 'पत्ता',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        icon: (
            <svg aria-hidden="true" viewBox="0 0 512 512" width={32} height={32} fill="#F37021"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
        ),
        title: 'ई-मेल',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: (
            <svg aria-hidden="true" viewBox="0 0 512 512" width={32} height={32} fill="#F37021"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
        ),
        title: 'दूरध्वनी',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
];

const socialLinks = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/Shivsenaofc' },
    { icon: 'fa-twitter', url: 'https://x.com/shivsenaofc' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/shivsenaofc/' },
    { icon: 'fa-youtube', url: 'https://www.youtube.com/@shivsenaofc' },
];

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
    return (
        <motion.div
            className="info-page-container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}
        >
            <motion.h1 variants={cardVariant} className="info-page-title" style={{ fontFamily: 'Mukta', fontWeight: 700, fontSize: 36, marginBottom: 24, textAlign: 'center', color: '#F37021', textShadow: '1px 1px 8px #0002' }}>
                संपर्क
            </motion.h1>
            <motion.div variants={cardVariant} className="contact-info-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 32, justifyContent: 'center' }}>
                {contactInfo.map((info, idx) => (
                    <motion.div
                        key={info.title}
                        variants={cardVariant}
                        className="contact-info-card"
                        style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0002', padding: '28px 24px', minWidth: 260, flex: 1, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        <div style={{ marginBottom: 16 }}>{info.icon}</div>
                        <h2 style={{ fontFamily: 'Mukta', fontWeight: 600, fontSize: 22, color: '#222', marginBottom: 8 }}>{info.title}</h2>
                        <div style={{ fontSize: 17, color: '#444' }}>{info.desc}</div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={cardVariant} style={{ marginBottom: 32, borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px #0002' }}>
                <iframe
                    src="/docs/संपर्क_files/maps.html"
                    title="Thane"
                    aria-label="Thane"
                    style={{ width: '100%', height: 350, border: 0 }}
                    loading="lazy"
                ></iframe>
            </motion.div>
            <motion.div variants={cardVariant} className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 24 }}>
                {socialLinks.map(link => (
                    <a
                        key={link.icon}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`fa ${link.icon}`}
                        style={{ background: '#000', color: '#fff', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, transition: 'background 0.2s, color 0.2s' }}
                    >
                        <i className={`fa ${link.icon}`}></i>
                    </a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ContactPage; 