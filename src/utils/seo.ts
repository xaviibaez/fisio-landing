import { siteConfig } from '../config';

export interface AlternateLanguage {
  lang: string;
  url: string;
}

/**
 * Generates alternate language URLs for hreflang tags
 */
export function getAlternateLanguages(currentPath: string, currentLang: string): AlternateLanguage[] {
  const baseUrl = siteConfig.url;
  const alternates: AlternateLanguage[] = [];
  
  // Normalize path (remove language prefix)
  let normalizedPath = currentPath;
  if (currentPath.startsWith('/es/') || currentPath.startsWith('/en/')) {
    normalizedPath = currentPath.replace(/^\/(es|en)/, '') || '/';
  }
  
  // Translate special routes
  const translatePath = (path: string, targetLang: string): string => {
    // Service paths
    const serviceMatch = path.match(/\/(serveis|servicios|services)\/(.+)/);
    if (serviceMatch) {
      const slug = serviceMatch[2];
      const serviceWord = targetLang === 'ca' ? 'serveis' : targetLang === 'es' ? 'servicios' : 'services';
      return `/${serviceWord}/${slug}`;
    }
    
    // About us page
    if (path === '/nosaltres' || path === '/nosotros' || path === '/about-us') {
      return targetLang === 'ca' ? '/nosaltres' : targetLang === 'es' ? '/nosotros' : '/about-us';
    }
    
    // Gallery page
    if (path === '/galeria' || path === '/gallery') {
      return targetLang === 'en' ? '/gallery' : '/galeria';
    }
    
    return path;
  };
  
  const languages = ['ca', 'es', 'en'];
  
  for (const lang of languages) {
    if (lang === currentLang) continue;
    
    const translatedPath = translatePath(normalizedPath, lang);
    const prefix = lang === 'ca' ? '' : `/${lang}`;
    const fullPath = `${prefix}${translatedPath}`;
    
    alternates.push({
      lang: lang === 'ca' ? 'ca-ES' : lang === 'es' ? 'es-ES' : 'en-GB',
      url: `${baseUrl}${fullPath}`,
    });
  }
  
  // Add current language
  alternates.push({
    lang: currentLang === 'ca' ? 'ca-ES' : currentLang === 'es' ? 'es-ES' : 'en-GB',
    url: `${baseUrl}${currentPath}`,
  });
  
  // Add x-default (usually the default language)
  alternates.push({
    lang: 'x-default',
    url: `${baseUrl}${normalizedPath}`,
  });
  
  return alternates;
}

/**
 * Generates LocalBusiness schema.org JSON-LD
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    '@id': `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone1.replace(/\s/g, ''),
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.province,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.0676', // Cambrils coordinates - update if needed
      longitude: '1.0564',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '€€',
    image: `${siteConfig.url}/og-image.jpg`,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
  };
}

/**
 * Generates BreadcrumbList schema.org JSON-LD
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates Article schema.org JSON-LD for blog posts
 */
export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${title.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
}

/**
 * Generates Service schema.org JSON-LD
 */
export function generateServiceSchema(
  name: string,
  description: string,
  provider: string = siteConfig.name
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description: description,
    provider: {
      '@type': 'Physiotherapy',
      name: provider,
      '@id': `${siteConfig.url}#business`,
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.contact.address.city,
    },
  };
}
