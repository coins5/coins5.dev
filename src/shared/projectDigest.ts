import { getCollection } from "astro:content";

export const getAllProjects = async () => {
  let allProjects = await getCollection("project");
  // allProjects.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return allProjects;
};

export const allProjects = await getAllProjects();
