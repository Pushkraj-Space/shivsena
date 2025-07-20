# Font Switching System Guide

## Overview
This system allows you to easily switch between 9 different fonts across your entire website:
- **Poppins** - Modern, geometric sans-serif font
- **Mukta (Devanagari)** - Versatile Devanagari font with excellent readability
- **Anek Devanagari** - Contemporary Devanagari font
- **Munda Devanagari** - Classic Devanagari font
- **Yatra One** - Decorative Devanagari font
- **Noto Sans Devanagari** - Google's comprehensive sans-serif Devanagari font
- **Noto Serif Devanagari** - Google's serif Devanagari font
- **Tiro Devanagari Marathi** - Elegant serif font for Marathi text
- **Teko** - Modern display font with geometric design
- **Proxima Nova Devanagari** - Premium Devanagari font with modern design

## How to Use

### 1. Font Selector in Header
- Look for the font selector button in the top-right corner of the header
- Click it to see all available fonts
- Select any font to apply it instantly to the entire website
- Your choice is automatically saved and will persist across page reloads

### 2. Font Test Page
- Scroll down to the "Font Comparison" section
- You can see how each font looks with Hindi, English, and mixed text
- Click "Apply This Font" on any card to switch to that font

### 3. Programmatic Font Switching
You can also switch fonts programmatically using the utility functions:

```javascript
import { 
  setPoppins, 
  setMukta,
  setAnekDevanagari, 
  setMundaDevanagari, 
  setYatraOne,
  setNotoSansDevanagari,
  setNotoSerifDevanagari,
  setTiroDevanagariMarathi,
  setTeko,
  setProximaNova,
  applyFont 
} from './src/utils/fontUtils';

// Quick functions for each font
setPoppins();
setMukta();
setAnekDevanagari();
setMundaDevanagari();
setYatraOne();
setNotoSansDevanagari();
setNotoSerifDevanagari();
setTiroDevanagariMarathi();
setTeko();
setProximaNova();

// Or use the generic function
applyFont('poppins');
applyFont('mukta');
applyFont('anekDevanagari');
applyFont('mundaDevanagari');
applyFont('yatraOne');
applyFont('notoSansDevanagari');
applyFont('notoSerifDevanagari');
applyFont('tiroDevanagariMarathi');
applyFont('teko');
applyFont('proximaNova');
```

## Font Details

### Poppins
- **Type**: Modern sans-serif
- **Best for**: Clean, professional look
- **Supports**: Latin characters
- **Weights**: 100-900

### Mukta (Devanagari)
- **Type**: Versatile sans-serif
- **Best for**: General purpose Hindi text
- **Supports**: Devanagari script
- **Weights**: 200-800

### Anek Devanagari
- **Type**: Contemporary Devanagari
- **Best for**: Modern Hindi text
- **Supports**: Devanagari script
- **Weights**: 100-800

### Munda Devanagari
- **Type**: Classic Devanagari
- **Best for**: Traditional Hindi text
- **Supports**: Devanagari script
- **Weights**: 400-700

### Yatra One
- **Type**: Decorative Devanagari
- **Best for**: Artistic, decorative text
- **Supports**: Devanagari script
- **Weights**: 400 (single weight)

### Noto Sans Devanagari
- **Type**: Comprehensive sans-serif
- **Best for**: Universal Hindi text support
- **Supports**: Devanagari script with extensive coverage
- **Weights**: 100-900

### Noto Serif Devanagari
- **Type**: Traditional serif
- **Best for**: Formal Hindi text and publications
- **Supports**: Devanagari script with extensive coverage
- **Weights**: 200-900

### Tiro Devanagari Marathi
- **Type**: Elegant serif
- **Best for**: Marathi text and literature
- **Supports**: Devanagari script (Marathi optimized)
- **Weights**: 400 (with italic variants)

### Teko
- **Type**: Modern display font
- **Best for**: Headlines and display text
- **Supports**: Latin characters
- **Weights**: 300-700

### Proxima Nova Devanagari
- **Type**: Premium sans-serif
- **Best for**: Professional Hindi text and branding
- **Supports**: Devanagari script
- **Weights**: 300-800

## Technical Implementation

### CSS Variables
The system uses CSS custom properties (variables) for easy font management:

```css
:root {
  --primary-font: 'Poppins', sans-serif;
  --heading-font: 'Poppins', sans-serif;
}
```

### Font Application
Fonts are applied using JavaScript that updates these CSS variables:

```javascript
document.documentElement.style.setProperty('--primary-font', fontFamily);
document.documentElement.style.setProperty('--heading-font', fontFamily);
```

### Persistence
Font choices are saved in localStorage and automatically restored on page load.

## Customization

### Adding New Fonts
1. Add the font link to `index.html`
2. Add font details to the `fonts` array in `FontSelector.jsx`
3. Add font details to the `fonts` object in `fontUtils.js`

### Changing Default Font
Modify the default font in `src/index.css`:

```css
:root {
  --primary-font: 'Your-Font', sans-serif;
  --heading-font: 'Your-Font', sans-serif;
}
```

## Browser Console Commands
You can test fonts directly in the browser console:

```javascript
// Import the utility (if available)
import('./src/utils/fontUtils.js').then(module => {
  module.setPoppins();
  module.setMukta();
  module.setAnekDevanagari();
  module.setMundaDevanagari();
  module.setYatraOne();
  module.setNotoSansDevanagari();
  module.setNotoSerifDevanagari();
  module.setTiroDevanagariMarathi();
  module.setTeko();
  module.setProximaNova();
});
```

// Or apply directly
document.documentElement.style.setProperty('--primary-font', 'Poppins, sans-serif');
document.documentElement.style.setProperty('--heading-font', 'Poppins, sans-serif');
```

## Removing Font Test Section
After you've decided on a font, you can remove the FontTest component:

1. Remove the import from `App.jsx`
2. Remove the `<FontTest />` component from the JSX
3. Delete the `FontTest.jsx` and `FontTest.css` files

The font selector in the header will remain for easy switching.

## Notes
- All fonts are loaded from Google Fonts
- Font switching is instant and smooth
- The system works on both desktop and mobile
- Font preferences are saved per browser/device 