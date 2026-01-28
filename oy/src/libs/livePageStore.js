import { useArticlesStore } from "./articleStore.js";

// MUST export the function with this exact name
export const useLivePageStore = () => {
  const articles = useArticlesStore((state) => state.articles || []);

  console.log("All articles from store:", articles);

  const liveArticles = articles.filter((article) => {
    return Array.isArray(article.category)
      ? article.category.some((cat) => cat.toLowerCase() === "live") // lowercase
      : article.category.toLowerCase() === "live"; // lowercase
  });

  console.log("Filtered liveArticles:", liveArticles);

  return liveArticles;
}
