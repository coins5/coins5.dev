import { allPosts } from "@/shared/postsDigest";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = allPosts;

  return rss({
    title: "Coins5",
    description: "Digital Experiences, Thoughtful & Scalable",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
