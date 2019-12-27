const languages = {
  en: require('../content/en.yml'),
  fr: require('../content/fr.yml'),
};

const defaultLang = 'en';
const lang = navigator.language || navigator.userLanguage;
const langsLookup = {
  'fr-BE': 'fr',
  'fr-CA': 'fr',
  'fr-CH': 'fr',
  'fr-FR': 'fr',
  'fr-LU': 'fr',
  'fr-MC': 'fr',
};

export default Object.assign(languages[defaultLang], languages[langsLookup[lang] || {}] || {});
