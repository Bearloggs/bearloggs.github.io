import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(posts: CollectionEntry<"posts">[]) {
  return posts.sort((a, b) => {
    const dateA =
      a.data.pubDate instanceof Date
        ? a.data.pubDate
        : new Date(a.data.pubDate);
    const dateB =
      b.data.pubDate instanceof Date
        ? b.data.pubDate
        : new Date(b.data.pubDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getUniqueTags(posts: CollectionEntry<"posts">[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags || []))].sort();
}

export function getTagCounts(posts: CollectionEntry<"posts">[]) {
  const tags = getUniqueTags(posts);
  return tags.reduce(
    (acc, tag) => {
      acc[tag] = posts.filter((post) => post.data.tags?.includes(tag)).length;
      return acc;
    },
    {} as Record<string, number>,
  );
}
