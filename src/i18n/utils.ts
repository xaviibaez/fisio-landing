import { ui, defaultLang, type LangKey } from './ui';

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export type TranslationFunction = (key: TranslationKey) => string;

export function getLangKey(lang: keyof typeof ui): LangKey {
  return lang as LangKey;
}

const localeByLang: Record<keyof typeof ui, string> = {
  ca: 'ca-ES',
  es: 'es-ES',
  en: 'en-GB',
};

/** Formatea una fecha según el idioma. Por defecto mes corto (short); usa { month: 'long' } para mes completo. */
export function formatLocaleDate(
  date: Date,
  lang: keyof typeof ui,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
): string {
  const locale = localeByLang[lang];
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric', ...options });
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui): TranslationFunction {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  // Handle special routes that have different names per language
  const routeMap: Record<string, Record<keyof typeof ui, string>> = {
    '/nosaltres': { ca: '/nosaltres', es: '/nosotros', en: '/about-us' },
    '/galeria':   { ca: '/galeria',   es: '/galeria',   en: '/gallery' },
    '/serveis':   { ca: '/serveis',   es: '/servicios', en: '/services' },
    '/blog':      { ca: '/blog',      es: '/blog',      en: '/blog' },
  };

  // Check if this path needs translation
  for (const [basePath, translations] of Object.entries(routeMap)) {
    if (path === basePath || path.startsWith(basePath + '/')) {
      const translatedPath = path.replace(basePath, translations[lang]);
      if (lang === defaultLang) {
        return translatedPath;
      }
      return `/${lang}${translatedPath}`;
    }
  }

  // Default behavior
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
