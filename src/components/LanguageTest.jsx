import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageTest = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Language Test Component</h2>
      <p>Current Language: {i18n.language}</p>
      <p>Welcome Message: {t('welcomeMessage')}</p>
      <p>Home: {t('home')}</p>
      <p>About: {t('about')}</p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => changeLanguage('en')}
          style={{ margin: '0 10px', padding: '10px 20px' }}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('mr')}
          style={{ margin: '0 10px', padding: '10px 20px' }}
        >
          मराठी
        </button>
      </div>
    </div>
  );
};

export default LanguageTest; 