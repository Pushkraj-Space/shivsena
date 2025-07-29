import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
        aria-label={t('selectLanguage')}
      >
        <option value="mr">{t('marathi')}</option>
        <option value="en">{t('english')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector; 