import { ELanguageCode } from '@/models/enums/shared.enum';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locales } from '../../i18n';

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: ELanguageCode.English,
  resources: locales,
});

export default i18next;
