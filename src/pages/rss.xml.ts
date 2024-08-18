import rss, { type RSSOptions } from '@astrojs/rss';

import { Client as Voidfull } from '../lib/voidfull.ts';

export async function GET(context: RSSOptions) {
  const data = await Voidfull.sites.posts.list();

  const feedGeneratedAt = import.meta.env.FEED_GENERATION_DATE;

  return rss({
    xmlns: {
      dc: 'http://purl.org/dc/elements/1.1/',
      content: 'http://purl.org/rss/1.0/modules/content/',
      atom: 'http://www.w3.org/2005/Atom',
      media: 'http://search.yahoo.com/mrss/',
    },
    title: 'Verbals Blog',
    description: 'Blog posts from the Verbals team',
    site: context.site,
    customData:
      `
      <language>en</language>
      <atom:link href="${context.site}/rss.xml" rel="self" type="application/rss+xml"/>
      <link href="${context.site}" rel="alternate" type="text/html"/>` +
      `${
        typeof feedGeneratedAt !== 'undefined'
          ? `<lastBuildDate>${feedGeneratedAt}</lastBuildDate>`
          : ''
      }
      <copyright>Copyright © ${new Date().getFullYear()} CodeCarrot. All rights reserved.</copyright>
      <ttl>60</ttl>
      <image><url>${context.site}/favicon.ico</url>\n
      <title>Verbals Blog</title>\n
      <link>${context.site}</link></image>
      <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    `,
    trailingSlash: false,
    items: data.posts
      .filter((item) => item.publishedAt !== null)
      .map((post) => ({
        title: post.title,
        pubDate: post.publishedAt,
        description: post.excerpt,
        link: `/p/${post.slug}`,
      })),
  });
}
