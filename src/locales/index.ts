const locales = {
  en: {
    translation: {
      ...require('./en/auth.json'),
      ...require('./en/shared.json'),
    },
  },
  ja: {
    translation: {
      ...require('./ja/auth.json'),
      ...require('./ja/shared.json'),
    },
  },
  vi: {
    translation: {
      ...require('./vi/auth.json'),
      ...require('./vi/shared.json'),
    },
  },
} as const;

export default locales;
