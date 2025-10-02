import { getCollection } from "astro:content";

export const getAllSeries = async () => {
  let allPosts = await getCollection("blog");
  let allSeries = await getCollection("serie");

  const firstEntries = allSeries.map((s) => s.data.firstEntry.id);

  const firstsPosts = allPosts
    .filter((p) => firstEntries.includes(p.id))
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());

  // ordenar allSeries basandose en la fecha de firstsPosts
  const orderedSeries = allSeries.sort((a, b) => {
    const aFirstPost = firstsPosts.find((p) => p.id === a.data.firstEntry.id);
    const bFirstPost = firstsPosts.find((p) => p.id === b.data.firstEntry.id);
    return (
      bFirstPost!.data.pubDate.valueOf() - aFirstPost!.data.pubDate.valueOf()
    );
  });

  return orderedSeries;
};

export const allSeries = await getAllSeries();
