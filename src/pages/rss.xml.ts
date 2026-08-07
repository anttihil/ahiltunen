import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog");
  return rss({
    title: "Antti Hiltunen Blog",
    description:
      "Essays and technical insights on AI, engineering, and human value.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: `<author>${post.data.author}</author>`,
      link: `/blog/${post.id}/`,
    })),
  });
}
