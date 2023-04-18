import { Languages, LANGUAGE_STORE_KEY } from '@lib/data';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import DE from './de';
import EN from './en';

export function initializeI18n() {
  return i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: EN
      },
      de: {
        translation: DE
      }
    },
    lng: 'de',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
      skipOnVariables: false
    }
  });
}

export const changeLanguage = (lang: Languages) => {
  i18n.changeLanguage(lang, (error) => {
    if (!error && typeof window !== 'undefined')
      localStorage.setItem(LANGUAGE_STORE_KEY, lang);
  });
};

export const getInitialLanguage = (): Languages => {
  let language = 'en';
  language = localStorage.getItem(LANGUAGE_STORE_KEY) ?? language;
  const url = new URLSearchParams(window.location.search);
  language = url.get('hl') ?? language;
  return language as Languages;
};