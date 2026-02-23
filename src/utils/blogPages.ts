import { getCollection } from 'astro:content';
import type { LangKey } from '../i18n/ui';
import type { CollectionEntry } from 'astro:content';

/** Slug para la URL: nombre del archivo (como en servicios), sin campo slug en frontmatter */
export function getBlogSlug(entry: CollectionEntry<'blog'>): string {
  const parts = entry.id.split('/');
  return parts.length >= 2 ? parts[1] : entry.id;
}

export async function getBlogPostsByLang(lang: LangKey) {
  const allPosts = await getCollection('blog', (entry) => entry.data.lang === lang);
  return allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getBlogPostStaticPaths(lang: LangKey) {
  const blogPosts = await getCollection('blog', (entry) => entry.data.lang === lang);
  return blogPosts.map(post => ({
    params: { slug: getBlogSlug(post) },
    props: { post },
  }));
}
