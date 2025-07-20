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
                <h2 className="font-test-title">Font Comparison</h2>
                <p className="font-test-subtitle">Click on any font to apply it to the entire website</p>

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
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        document.documentElement.style.setProperty('--primary-font', font.family);
                                        document.documentElement.style.setProperty('--heading-font', font.family);
                                        localStorage.setItem('selectedFont', font.id);
                                    }}
                                >
                                    Apply This Font
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FontTest; 