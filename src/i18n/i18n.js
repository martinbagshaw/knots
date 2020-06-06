import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// relative imports outside of src not supported
// import bowline from "/public/locales/en/bowline.json";
// import cloveHitch from "/public/locales/en/clove-hitch.json";
// import common from "/public/locales/en/common.json";
// import figure8 from "/public/locales/en/figure-8.json";
// import italianHitch from "/public/locales/en/italian-hitch.json";

// const resources = {
//  en: {
//   bowline, cloveHitch, common, figure8, italianHitch
//  }
// };

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
    // https://stackoverflow.com/questions/59774175/react-i18next-backend-path-different-in-local-and-production-environment
    // - different path for different environments

    // - look in sources for website - locales not present, though they should be in the root folder
    // - try the other method again
    // - run 'npm run deploy' to publish, pushing master alone does nothing
    // https://martinbagshaw.github.io/knots/locales/en/common.json
    lng: 'en',
    // resources,
    crossDomain: true,
    backend: { 
      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (host !== 'localhost:3000' ? '%PUBLIC_URL%/locales/{{lng}}/{{ns}}.json' : '/locales/{{lng}}/{{ns}}.json');
      },
    },
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18next;
