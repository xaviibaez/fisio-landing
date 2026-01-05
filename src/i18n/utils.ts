import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  // Handle special routes that have different names per language
  const routeMap: Record<string, Record<keyof typeof ui, string>> = {
    '/nosaltres': { ca: '/nosaltres', es: '/nosotros', en: '/about-us' },
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
