import React from 'react';
import './FontTest.css';

const FontTest = () => {
    const fonts = [
        {
            id: 'poppins',
            name: 'Poppins',
            family: 'Poppins, sans-serif',
            description: 'Modern, geometric sans-serif font with excellent readability'
        },
        {
            id: 'mukta',
            name: 'Mukta (Devanagari)',
            family: 'Mukta, sans-serif',
            description: 'Versatile Devanagari font with excellent readability and multiple weights'
        },
        {
            id: 'anek-devanagari',
            name: 'Anek Devanagari',
            family: 'Anek Devanagari, sans-serif',
            description: 'Contemporary Devanagari font with clean, modern design'
        },
        {
            id: 'munda-devanagari',
            name: 'Munda Devanagari',
            family: 'Munda, sans-serif',
            description: 'Classic Devanagari font with traditional appeal'
        },
        {
            id: 'yatra-one',
            name: 'Yatra One',
            family: 'Yatra One, cursive',
            description: 'Decorative Devanagari font with artistic flair'
        },
        {
            id: 'noto-sans-devanagari',
            name: 'Noto Sans Devanagari',
            family: 'Noto Sans Devanagari, sans-serif',
            description: 'Google\'s comprehensive sans-serif Devanagari font with excellent coverage'
        },
        {
            id: 'noto-serif-devanagari',
            name: 'Noto Serif Devanagari',
            family: 'Noto Serif Devanagari, serif',
            description: 'Google\'s serif Devanagari font with traditional typography'
        },
        {
            id: 'tiro-devanagari-marathi',
            name: 'Tiro Devanagari Marathi',
            family: 'Tiro Devanagari Marathi, serif',
            description: 'Elegant serif font specifically designed for Marathi text'
        },
        {
            id: 'teko',
            name: 'Teko',
            family: 'Teko, sans-serif',
            description: 'Modern display font with geometric design and excellent readability'
        },
        {
            id: 'proxima-nova',
            name: 'Proxima Nova Devanagari',
            family: 'Proxima Nova, sans-serif',
            description: 'Premium Devanagari font with modern design and excellent readability'
        }
    ];

    const testTexts = {
        hindi: 'शिवसेना - गर्व से कहो हम हिंदू हैं',
        english: 'Shiv Sena - Say with Pride, We are Hindus',
        mixed: 'शिवसेना Shiv Sena - गर्व से कहो हम हिंदू हैं'
    };

    return (
        <div className="font-test">
            <div className="container">
                <h2 className="font-test-title">Dual Font System Demo</h2>
                <p className="font-test-subtitle">Use the font selectors in the header to choose different fonts for headings and body text</p>

                <div className="font-system-demo">
                    <h3>Current Font System</h3>
                    <p>This page demonstrates the new dual font system. You can now choose different fonts for:</p>
                    <ul>
                        <li><strong>Headings:</strong> All h1, h2, h3, h4, h5, h6 elements use the heading font</li>
                        <li><strong>Body Text:</strong> All paragraphs, spans, and other text elements use the body font</li>
                    </ul>
                </div>

                <div className="font-test-grid">
                    {fonts.map((font) => (
                        <div key={font.id} className="font-test-card">
                            <div className="font-test-header">
                                <h3 style={{ fontFamily: font.family }}>{font.name}</h3>
                                <p className="font-description">{font.description}</p>
                            </div>

                            <div className="font-test-content">
                                <div className="test-text-section">
                                    <h4>Hindi Text:</h4>
                                    <p style={{ fontFamily: font.family }} className="test-text">
                                        {testTexts.hindi}
                                    </p>
                                </div>

                                <div className="test-text-section">
                                    <h4>English Text:</h4>
                                    <p style={{ fontFamily: font.family }} className="test-text">
                                        {testTexts.english}
                                    </p>
                                </div>

                                <div className="test-text-section">
                                    <h4>Mixed Text:</h4>
                                    <p style={{ fontFamily: font.family }} className="test-text">
                                        {testTexts.mixed}
                                    </p>
                                </div>
                            </div>

                            <div className="font-test-footer">
                                <div className="font-test-buttons">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            document.documentElement.style.setProperty('--heading-font', font.family);
                                            localStorage.setItem('selectedHeadingFont', font.id);
                                        }}
                                    >
                                        Apply as Heading Font
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            document.documentElement.style.setProperty('--primary-font', font.family);
                                            localStorage.setItem('selectedBodyFont', font.id);
                                        }}
                                    >
                                        Apply as Body Font
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FontTest; 