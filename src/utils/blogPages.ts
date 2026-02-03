import { getCollection } from 'astro:content';
import type { LangKey } from '../i18n/ui';

export async function getBlogPostsByLang(lang: LangKey) {
  const allPosts = await getCollection('blog', (entry) => entry.data.lang === lang);
  return allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getBlogPostStaticPaths(lang: LangKey) {
  const blogPosts = await getCollection('blog', (entry) => entry.data.lang === lang);
  return blogPosts.map(post => ({
    params: { slug: post.data.slug ?? post.slug },
    props: { post },
  }));
}
