import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('../messages/en.json').then(module => module.default),
  pt: () => import('../messages/pt.json').then(module => module.default),
  fr: () => import('../messages/fr.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale ?? 'en']();
