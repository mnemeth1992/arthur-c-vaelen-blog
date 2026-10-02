import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Arthur C. Vaelen – Gondolatok, rendszerek és csend',
    description: 'Kutatási esszék, AuDHD rendszerszemlélet, tudomány és elkötelezett egyházi szolgálat.',
    site: context.site || 'https://arthur-c-vaelen.pages.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>hu-HU</language>',
    stylesheet: '/rss-style.xsl',
  });
}
