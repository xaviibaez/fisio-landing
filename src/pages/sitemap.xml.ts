import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site || siteConfig.url;
  
  // Get all blog posts
  const blogPosts = await getCollection('blog');
  
  // Get all services
  const services = await getCollection('services');
  
  // Static pages
  const staticPages = [
    '', // Home (ca)
    '/es',
    '/en',
    '/blog',
    '/es/blog',
    '/en/blog',
    '/galeria',
    '/es/galeria',
    '/en/gallery',
    '/nosaltres',
    '/es/nosotros',
    '/en/about-us',
  ];
  
  // Generate blog post URLs
  const blogUrls = blogPosts.map((post) => {
    // Determine language from post ID or slug
    const lang = post.id.includes('/es/') ? 'es' : post.id.includes('/en/') ? 'en' : 'ca';
    const slug = post.slug;
    const prefix = lang === 'ca' ? '' : `/${lang}`;
    return `${prefix}/blog/${slug}`;
  });
  
  // Generate service URLs
  const serviceUrls = services.map((service) => {
    const lang = service.id.startsWith('ca/') ? 'ca' : 
                 service.id.startsWith('es/') ? 'es' : 'en';
    const slug = service.id.replace(/^(ca|es|en)\//, '').replace('.md', '');
    const serviceWord = lang === 'ca' ? 'serveis' : lang === 'es' ? 'servicios' : 'services';
    const prefix = lang === 'ca' ? '' : `/${lang}`;
    return `${prefix}/${serviceWord}/${slug}`;
  });
  
  // Combine all URLs
  const allUrls = [...staticPages, ...blogUrls, ...serviceUrls];
  
  // Helper function to get alternate URLs
  const getAlternateUrls = (currentUrl: string) => {
    const alternates: Array<{ lang: string; url: string }> = [];
    
    // Determine current language
    let currentLang = 'ca';
    let normalizedPath = currentUrl;
    
    if (currentUrl.startsWith('/es')) {
      currentLang = 'es';
      normalizedPath = currentUrl.replace('/es', '') || '/';
    } else if (currentUrl.startsWith('/en')) {
      currentLang = 'en';
      normalizedPath = currentUrl.replace('/en', '') || '/';
    }
    
    // Translate path for each language
    const languages = ['ca', 'es', 'en'];
    for (const lang of languages) {
      if (lang === currentLang) continue;
      
      let translatedPath = normalizedPath;
      
      // Translate special routes
      if (normalizedPath === '/nosaltres' || normalizedPath === '/nosotros' || normalizedPath === '/about-us') {
        translatedPath = lang === 'ca' ? '/nosaltres' : lang === 'es' ? '/nosotros' : '/about-us';
      } else if (normalizedPath === '/galeria' || normalizedPath === '/gallery') {
        translatedPath = lang === 'en' ? '/gallery' : '/galeria';
      } else if (normalizedPath.match(/\/(serveis|servicios|services)\//)) {
        const serviceWord = lang === 'ca' ? 'serveis' : lang === 'es' ? 'servicios' : 'services';
        translatedPath = normalizedPath.replace(/\/(serveis|servicios|services)\//, `/${serviceWord}/`);
      }
      
      const prefix = lang === 'ca' ? '' : `/${lang}`;
      alternates.push({
        lang: lang === 'ca' ? 'ca-ES' : lang === 'es' ? 'es-ES' : 'en-GB',
        url: `${baseUrl}${prefix}${translatedPath}`,
      });
    }
    
    // Add current language
    alternates.push({
      lang: currentLang === 'ca' ? 'ca-ES' : currentLang === 'es' ? 'es-ES' : 'en-GB',
      url: `${baseUrl}${currentUrl}`,
    });
    
    // Add x-default (default language)
    alternates.push({
      lang: 'x-default',
      url: `${baseUrl}${normalizedPath}`,
    });
    
    return alternates;
  };
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map((url) => {
    const fullUrl = `${baseUrl}${url}`;
    const lastmod = new Date().toISOString().split('T')[0];
    const alternates = getAlternateUrls(url);
    
    const hreflangTags = alternates.map((alt) => 
      `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`
    ).join('\n');
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('/blog/') || url.includes('/serveis/') || url.includes('/servicios/') || url.includes('/services/') ? '0.8' : '0.7'}</priority>
${hreflangTags}
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
