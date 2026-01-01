import { getCollection } from 'astro:content';

export async function getServiceStaticPaths() {
  const services = await getCollection('services');
  return services.map(service => ({
    params: { slug: service.slug },
    props: { service },
  }));
}
