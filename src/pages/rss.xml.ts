import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      customData: `
        <author>${post.data.author || 'Bearloggs'}</author>
        <category>${post.data.tags.join(', ')}</category>
      `,
    })),
    customData: `<language>en-us</language>`,
  });
} 