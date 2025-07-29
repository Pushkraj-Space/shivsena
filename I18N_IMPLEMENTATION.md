# Internationalization (i18n) Implementation

## Overview
This Shiv Sena website has been successfully integrated with internationalization (i18n) support for English and Marathi languages using `react-i18next`.

## Features Implemented

### 1. Language Selector
- Added a language selector dropdown in the header
- Available in both desktop and mobile navigation
- Supports English (en) and Marathi (mr)
- Language preference is saved in localStorage

### 2. Translated Components
The following components have been updated with i18n support:

#### Header Component
- Navigation menu items
- Dropdown menus (About, Leadership, Our Work, Medical Help)
- Mobile menu items

#### Footer Component
- Company information
- Contact details
- Quick links
- Copyright notice

#### Inspiration Section
- Section titles and descriptions
- Leader names and descriptions
- Famous quotes from leaders

### 3. Translation Files
All translations are centralized in `src/i18n.js` with the following structure:

#### English Translations (en)
- Header navigation
- Footer content
- Section titles
- Leader information
- Common UI elements

#### Marathi Translations (mr)
- Complete Marathi translations for all content
- Maintains cultural and linguistic authenticity

## Technical Implementation

### Dependencies Added
```json
{
  "react-i18next": "^latest",
  "i18next": "^latest", 
  "i18next-browser-languagedetector": "^latest"
}
```

### Key Files
1. **`src/i18n.js`** - Main i18n configuration and translations
2. **`src/components/LanguageSelector.jsx`** - Language switching component
3. **`src/components/LanguageSelector.css`** - Styling for language selector

### Configuration
- Fallback language: Marathi (mr)
- Language detection: localStorage and browser navigator
- Debug mode: disabled for production

## Usage

### Adding New Translations
1. Add new translation keys to both `enTranslations` and `mrTranslations` objects in `src/i18n.js`
2. Use the `t()` function in components: `{t('translationKey')}`

### Example
```javascript
// In i18n.js
const enTranslations = {
  newKey: 'English text'
};

const mrTranslations = {
  newKey: 'मराठी मजकूर'
};

// In component
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <div>{t('newKey')}</div>;
};
```

### Language Switching
The language selector automatically:
- Changes the current language
- Saves preference to localStorage
- Updates all translated content immediately

## Current Status
✅ Header navigation translated
✅ Footer content translated  
✅ Inspiration section translated
✅ Language selector implemented
✅ Mobile responsive design
✅ Localization persistence

## Next Steps
To complete the i18n implementation, the following components need translation updates:

1. **HeroSection** - Main landing content
2. **EknathSection** - Current leadership information
3. **StrengthSection** - Party strengths and achievements
4. **NewsCarousel** - News and media content
5. **MediaSection** - Media gallery and content
6. **CartoonsSection** - Cartoon gallery
7. **CTASection** - Call-to-action content
8. **All Page Components** - Individual page content

## Testing
A test component (`LanguageTest.jsx`) has been added to verify i18n functionality. It can be removed once all translations are complete.

## Browser Support
- Modern browsers with localStorage support
- Graceful fallback to Marathi if language detection fails
- Responsive design for all screen sizes 