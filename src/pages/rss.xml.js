import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  return rss({
    xmlns: {
      h: 'http://www.w3.org/TR/html4/',
      atom: 'http://www.w3.org/2005/Atom'
    },
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await Promise.all(
      posts
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .map(async (post) => {
          // Convert the post body to HTML using marked
          const rawContent = await post.body;
          const htmlContent = marked(rawContent);

          return {
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
            content: sanitizeHtml(htmlContent, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
              allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                img: ['src', 'alt']
              }
            }),
            categories: post.data.tags
          };
        })
    ),
    customData: `<language>en-us</language>`,
  });
}