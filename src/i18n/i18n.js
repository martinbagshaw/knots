import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(HttpApi)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // React Options
    react: {
      transEmptyNodeValue: ''
    },
    // crossDomain for gihub pages, get CORS
    // - different path for different environments
    crossDomain: true,
    backend: { 
      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (host !== 'localhost:3000' ? 'https://github.com/martinbagshaw/knots/tree/gh-pages' : '') + '/locales/{{lng}}/{{ns}}.json';
      },
    },
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18next;
