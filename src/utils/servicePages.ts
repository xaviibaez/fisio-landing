import { getCollection, type CollectionEntry } from 'astro:content';

export async function getServiceStaticPaths() {
  // Get all services from all language folders
  const allServices = await getCollection('services');
  
  // Group services by slug
  const servicesBySlug = new Map<string, {
    ca?: CollectionEntry<'services'>,
    es?: CollectionEntry<'services'>,
    en?: CollectionEntry<'services'>
  }>();
  
  allServices.forEach(service => {
    const parts = service.id.split('/');
    const lang = parts.length === 2 ? parts[0] as 'ca' | 'es' | 'en' : 'ca';
    const slug = parts.length === 2 ? parts[1].replace('.md', '') : service.slug;
    
    if (!servicesBySlug.has(slug)) {
      servicesBySlug.set(slug, {});
    }
    const serviceGroup = servicesBySlug.get(slug)!;
    serviceGroup[lang] = service;
  });
  
  // Generate paths for each slug
  const paths: any[] = [];
  servicesBySlug.forEach((services, slug) => {
    // Use Catalan version as fallback
    const service = services.ca || services.es || services.en;
    if (service) {
      paths.push({
        params: { slug },
        props: { service },
      });
    }
  });
  
  return paths;
}
