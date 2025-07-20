// Font utility functions for easy font switching

const fonts = {
    poppins: {
        id: 'poppins',
        name: 'Poppins',
        family: 'Poppins, sans-serif'
    },
    mukta: {
        id: 'mukta',
        name: 'Mukta (Devanagari)',
        family: 'Mukta, sans-serif'
    },
    anekDevanagari: {
        id: 'anek-devanagari',
        name: 'Anek Devanagari',
        family: 'Anek Devanagari, sans-serif'
    },
    mundaDevanagari: {
        id: 'munda-devanagari',
        name: 'Munda Devanagari',
        family: 'Munda, sans-serif'
    },
    yatraOne: {
        id: 'yatra-one',
        name: 'Yatra One',
        family: 'Yatra One, cursive'
    },
    notoSansDevanagari: {
        id: 'noto-sans-devanagari',
        name: 'Noto Sans Devanagari',
        family: 'Noto Sans Devanagari, sans-serif'
    },
    notoSerifDevanagari: {
        id: 'noto-serif-devanagari',
        name: 'Noto Serif Devanagari',
        family: 'Noto Serif Devanagari, serif'
    },
    tiroDevanagariMarathi: {
        id: 'tiro-devanagari-marathi',
        name: 'Tiro Devanagari Marathi',
        family: 'Tiro Devanagari Marathi, serif'
    },
    teko: {
        id: 'teko',
        name: 'Teko',
        family: 'Teko, sans-serif'
    },
    proximaNova: {
        id: 'proxima-nova',
        name: 'Proxima Nova Devanagari',
        family: 'Proxima Nova, sans-serif'
    }
};

/**
 * Apply a font to the entire website
 * @param {string} fontId - The font ID (poppins, anekDevanagari, mundaDevanagari, yatraOne)
 */
export const applyFont = (fontId) => {
    const font = fonts[fontId];
    if (!font) {
        console.error(`Font ${fontId} not found`);
        return;
    }

    // Apply font to CSS variables
    document.documentElement.style.setProperty('--primary-font', font.family);
    document.documentElement.style.setProperty('--heading-font', font.family);

    // Save to localStorage
    localStorage.setItem('selectedFont', font.id);

    console.log(`Applied font: ${font.name}`);
};

/**
 * Get the current font
 * @returns {object} Current font object
 */
export const getCurrentFont = () => {
    const savedFontId = localStorage.getItem('selectedFont') || 'poppins';
    return fonts[savedFontId] || fonts.poppins;
};

/**
 * Get all available fonts
 * @returns {object} All fonts object
 */
export const getAllFonts = () => {
    return fonts;
};

/**
 * Initialize font from localStorage on page load
 */
export const initializeFont = () => {
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
        applyFont(savedFont);
    }
};

// Quick access functions for each font
export const setPoppins = () => applyFont('poppins');
export const setMukta = () => applyFont('mukta');
export const setAnekDevanagari = () => applyFont('anekDevanagari');
export const setMundaDevanagari = () => applyFont('mundaDevanagari');
export const setYatraOne = () => applyFont('yatraOne');
export const setNotoSansDevanagari = () => applyFont('notoSansDevanagari');
export const setNotoSerifDevanagari = () => applyFont('notoSerifDevanagari');
export const setTiroDevanagariMarathi = () => applyFont('tiroDevanagariMarathi');
export const setTeko = () => applyFont('teko');
export const setProximaNova = () => applyFont('proximaNova');

// Initialize font when this module is imported
if (typeof window !== 'undefined') {
    initializeFont();
} 