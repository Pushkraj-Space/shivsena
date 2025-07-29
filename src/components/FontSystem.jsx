import React, { useState, useEffect } from 'react';
import './FontSystem.css';

const FontSystem = () => {
    const [headingFont, setHeadingFont] = useState('poppins');
    const [bodyFont, setBodyFont] = useState('poppins');
    const [isHeadingOpen, setIsHeadingOpen] = useState(false);
    const [isBodyOpen, setIsBodyOpen] = useState(false);

    const fonts = [
        {
            id: 'poppins',
            name: 'Poppins',
            family: 'Poppins, sans-serif',
            preview: 'Aa'
        },
        {
            id: 'mukta',
            name: 'Mukta (Devanagari)',
            family: 'Mukta, sans-serif',
            preview: 'आ'
        },
        {
            id: 'anek-devanagari',
            name: 'Anek Devanagari',
            family: 'Anek Devanagari, sans-serif',
            preview: 'आ'
        },
        {
            id: 'munda-devanagari',
            name: 'Munda Devanagari',
            family: 'Munda, sans-serif',
            preview: 'आ'
        },
        {
            id: 'yatra-one',
            name: 'Yatra One',
            family: 'Yatra One, cursive',
            preview: 'आ'
        },
        {
            id: 'noto-sans-devanagari',
            name: 'Noto Sans Devanagari',
            family: 'Noto Sans Devanagari, sans-serif',
            preview: 'आ'
        },
        {
            id: 'noto-serif-devanagari',
            name: 'Noto Serif Devanagari',
            family: 'Noto Serif Devanagari, serif',
            preview: 'आ'
        },
        {
            id: 'tiro-devanagari-marathi',
            name: 'Tiro Devanagari Marathi',
            family: 'Tiro Devanagari Marathi, serif',
            preview: 'आ'
        },
        {
            id: 'teko',
            name: 'Teko',
            family: 'Teko, sans-serif',
            preview: 'Aa'
        },
        {
            id: 'proxima-nova',
            name: 'Proxima Nova Devanagari',
            family: 'Proxima Nova, sans-serif',
            preview: 'आ'
        }
    ];

    useEffect(() => {
        // Load saved font preferences from localStorage
        const savedHeadingFont = localStorage.getItem('selectedHeadingFont') || 'poppins';
        const savedBodyFont = localStorage.getItem('selectedBodyFont') || 'poppins';

        setHeadingFont(savedHeadingFont);
        setBodyFont(savedBodyFont);
        applyFonts(savedHeadingFont, savedBodyFont);
    }, []);

    const applyFonts = (headingFontId, bodyFontId) => {
        const headingFontData = fonts.find(f => f.id === headingFontId);
        const bodyFontData = fonts.find(f => f.id === bodyFontId);

        if (headingFontData) {
            document.documentElement.style.setProperty('--heading-font', headingFontData.family);
            localStorage.setItem('selectedHeadingFont', headingFontId);
        }

        if (bodyFontData) {
            document.documentElement.style.setProperty('--primary-font', bodyFontData.family);
            localStorage.setItem('selectedBodyFont', bodyFontId);
        }
    };

    const handleHeadingFontChange = (fontId) => {
        setHeadingFont(fontId);
        applyFonts(fontId, bodyFont);
        setIsHeadingOpen(false);
    };

    const handleBodyFontChange = (fontId) => {
        setBodyFont(fontId);
        applyFonts(headingFont, fontId);
        setIsBodyOpen(false);
    };

    const currentHeadingFontData = fonts.find(f => f.id === headingFont);
    const currentBodyFontData = fonts.find(f => f.id === bodyFont);

    return (
        <div className="font-system">
            {/* Heading Font Selector */}
            <div className="font-selector-group">
                <label className="font-selector-label">शीर्षक / Heading</label>
                <div className="font-selector">
                    <button
                        className="font-selector-toggle heading-font-toggle"
                        onClick={() => {
                            setIsHeadingOpen(!isHeadingOpen);
                            setIsBodyOpen(false);
                        }}
                        aria-label="Change heading font"
                    >
                        <span className="font-preview" style={{ fontFamily: currentHeadingFontData?.family }}>
                            {currentHeadingFontData?.preview}
                        </span>
                        <span className="font-name">{currentHeadingFontData?.name}</span>
                        <i className={`fas fa-chevron-${isHeadingOpen ? 'up' : 'down'}`}></i>
                    </button>

                    {isHeadingOpen && (
                        <div className="font-dropdown">
                            {fonts.map((font) => (
                                <button
                                    key={font.id}
                                    className={`font-option ${headingFont === font.id ? 'active' : ''}`}
                                    onClick={() => handleHeadingFontChange(font.id)}
                                    style={{ fontFamily: font.family }}
                                >
                                    <span className="font-preview">{font.preview}</span>
                                    <span className="font-name">{font.name}</span>
                                    {headingFont === font.id && (
                                        <i className="fas fa-check"></i>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Body Font Selector */}
            <div className="font-selector-group">
                <label className="font-selector-label">मजकूर / Body</label>
                <div className="font-selector">
                    <button
                        className="font-selector-toggle body-font-toggle"
                        onClick={() => {
                            setIsBodyOpen(!isBodyOpen);
                            setIsHeadingOpen(false);
                        }}
                        aria-label="Change body font"
                    >
                        <span className="font-preview" style={{ fontFamily: currentBodyFontData?.family }}>
                            {currentBodyFontData?.preview}
                        </span>
                        <span className="font-name">{currentBodyFontData?.name}</span>
                        <i className={`fas fa-chevron-${isBodyOpen ? 'up' : 'down'}`}></i>
                    </button>

                    {isBodyOpen && (
                        <div className="font-dropdown">
                            {fonts.map((font) => (
                                <button
                                    key={font.id}
                                    className={`font-option ${bodyFont === font.id ? 'active' : ''}`}
                                    onClick={() => handleBodyFontChange(font.id)}
                                    style={{ fontFamily: font.family }}
                                >
                                    <span className="font-preview">{font.preview}</span>
                                    <span className="font-name">{font.name}</span>
                                    {bodyFont === font.id && (
                                        <i className="fas fa-check"></i>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FontSystem; 