import { getCollection } from "astro:content";

export const getAllPosts = async () => {
  let allPosts = await getCollection("blog");
  allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return allPosts;
};

export const allPosts = await getAllPosts();
