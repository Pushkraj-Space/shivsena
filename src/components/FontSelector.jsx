import React, { useState, useEffect } from 'react';
import './FontSelector.css';

const FontSelector = () => {
    const [currentFont, setCurrentFont] = useState('poppins');
    const [isOpen, setIsOpen] = useState(false);

    const fonts = [
        {
            id: 'poppins',
            name: 'Poppins',
            family: 'Poppins, sans-serif',
            preview: 'Aa'
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
        }
    ];

    useEffect(() => {
        // Load saved font preference from localStorage
        const savedFont = localStorage.getItem('selectedFont') || 'poppins';
        setCurrentFont(savedFont);
        applyFont(savedFont);
    }, []);

    const applyFont = (fontId) => {
        const font = fonts.find(f => f.id === fontId);
        if (font) {
            document.documentElement.style.setProperty('--primary-font', font.family);
            document.documentElement.style.setProperty('--heading-font', font.family);
            localStorage.setItem('selectedFont', fontId);
        }
    };

    const handleFontChange = (fontId) => {
        setCurrentFont(fontId);
        applyFont(fontId);
        setIsOpen(false);
    };

    const currentFontData = fonts.find(f => f.id === currentFont);

    return (
        <div className="font-selector">
            <button
                className="font-selector-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change font"
            >
                <span className="font-preview" style={{ fontFamily: currentFontData?.family }}>
                    {currentFontData?.preview}
                </span>
                <span className="font-name">{currentFontData?.name}</span>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </button>

            {isOpen && (
                <div className="font-dropdown">
                    {fonts.map((font) => (
                        <button
                            key={font.id}
                            className={`font-option ${currentFont === font.id ? 'active' : ''}`}
                            onClick={() => handleFontChange(font.id)}
                            style={{ fontFamily: font.family }}
                        >
                            <span className="font-preview">{font.preview}</span>
                            <span className="font-name">{font.name}</span>
                            {currentFont === font.id && (
                                <i className="fas fa-check"></i>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FontSelector; 