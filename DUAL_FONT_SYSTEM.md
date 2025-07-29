# Dual Font System Documentation

## Overview
The Shiv Sena website now features a dual font system that allows you to choose different fonts for headings and body text independently. This provides more flexibility in typography and allows for better visual hierarchy.

## How It Works

### Font Selectors in Header
The header now contains two separate font selectors:
1. **शीर्षक फॉन्ट / Heading Font** - Controls all heading elements (h1, h2, h3, h4, h5, h6)
2. **मजकूर फॉन्ट / Body Font** - Controls all body text elements (paragraphs, spans, etc.)

### Available Fonts
Both selectors offer the same 10 font options:
- **Poppins** - Modern, geometric sans-serif
- **Mukta (Devanagari)** - Versatile Devanagari font
- **Anek Devanagari** - Contemporary Devanagari font
- **Munda Devanagari** - Classic Devanagari font
- **Yatra One** - Decorative Devanagari font
- **Noto Sans Devanagari** - Google's comprehensive sans-serif Devanagari
- **Noto Serif Devanagari** - Google's serif Devanagari font
- **Tiro Devanagari Marathi** - Elegant serif font for Marathi
- **Teko** - Modern display font
- **Proxima Nova Devanagari** - Premium Devanagari font

## Usage

### For Users
1. Look for the two font selectors in the top-right corner of the header
2. Click on either selector to see available fonts
3. Choose different fonts for headings and body text
4. Your selections are automatically saved and will persist across page reloads

### For Developers

#### CSS Variables
The system uses two CSS custom properties:
```css
:root {
  --heading-font: 'Poppins', sans-serif;  /* For headings */
  --primary-font: 'Poppins', sans-serif;  /* For body text */
}
```

#### JavaScript Functions
```javascript
import { applyDualFonts, getCurrentHeadingFont, getCurrentBodyFont } from './src/utils/fontUtils';

// Apply different fonts
applyDualFonts('yatra-one', 'mukta');

// Get current fonts
const headingFont = getCurrentHeadingFont();
const bodyFont = getCurrentBodyFont();
```

#### localStorage Keys
- `selectedHeadingFont` - Stores the heading font ID
- `selectedBodyFont` - Stores the body font ID
- `selectedFont` - Legacy key for backward compatibility

## Technical Implementation

### Components
- **FontSystem.jsx** - Main component with dual font selectors
- **FontSystem.css** - Styling for the dual font system
- **fontUtils.js** - Utility functions for font management

### Font Application
Fonts are applied using JavaScript that updates CSS variables:
```javascript
document.documentElement.style.setProperty('--heading-font', headingFontFamily);
document.documentElement.style.setProperty('--primary-font', bodyFontFamily);
```

### Responsive Design
- **Desktop**: Font selectors appear side by side in the header
- **Mobile**: Font selectors appear in the mobile menu
- **Tablet**: Font selectors stack vertically in the header

## Migration from Single Font System

The new system is backward compatible:
- Existing `selectedFont` localStorage values are automatically migrated
- Legacy `applyFont()` function still works but applies the same font to both headings and body
- Old FontSelector component can be replaced with FontSystem

## Best Practices

### Font Combinations
Some recommended font combinations:
- **Headings**: Yatra One + **Body**: Mukta (Devanagari)
- **Headings**: Teko + **Body**: Noto Sans Devanagari
- **Headings**: Poppins + **Body**: Anek Devanagari

### Performance
- All fonts are loaded from Google Fonts
- Font loading is optimized with preconnect links
- Font selections are cached in localStorage

## Troubleshooting

### Font Not Loading
1. Check internet connection (fonts load from Google Fonts)
2. Clear browser cache
3. Check browser console for errors

### Font Not Applying
1. Verify CSS variables are being set correctly
2. Check if the font ID exists in the fonts array
3. Ensure localStorage is working

### Mobile Issues
1. Font selectors may be hidden on very small screens
2. Check mobile menu for font selectors
3. Verify touch interactions work properly

## Future Enhancements

Potential improvements:
- Font preview in selectors
- Custom font upload capability
- Font weight selection
- Font size adjustment
- Theme-specific font presets 