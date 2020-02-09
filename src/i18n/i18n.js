import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // React Options
    react: {
      transEmptyNodeValue: '',
    },
    // ns: ['common', 'error'],
    // defaultNS: 'common',

    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'error'],
    defaultNS: 'common',
  });

export default i18n;