import locales from '@/locales';
import { ELanguageCode } from '@/models/enums/shared.enum';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export default i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: ELanguageCode.English,
  resources: locales,
});
