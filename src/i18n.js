import i18n from 'i18n-js';

import en from './locale/en.json';
import hi from './locale/hi.json';
import zhhk from './locale/zh-hk.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = {en, hi, zhhk};

export default i18n;
