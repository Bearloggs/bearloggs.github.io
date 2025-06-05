import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://www.hacknwatch.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
        wrap: true,
      },
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              className: ["anchor-link"],
              ariaLabel: "Anchor link",
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {
                className: ["anchor-icon"],
              },
              children: [
                {
                  type: "text",
                  value: "#",
                },
              ],
            },
          },
        ],
      ],
    }),
    sitemap({
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(),
      customPages: ["https://www.hacknwatch.com/posts/"],
    }),
    tailwind(),
  ],
});
