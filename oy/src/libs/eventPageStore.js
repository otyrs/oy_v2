import { useArticlesStore } from "./articleStore.js";

// named export にしておくと統一的に使いやすい
export const useEventPageStore = () => {
  const articles = useArticlesStore((state) => state.articles || []);

  const eventArticles = articles.filter((article) => {
    return Array.isArray(article.category)
      ? article.category.some(
          (cat) => typeof cat === "string" && cat.toLowerCase() === "event",
        )
      : typeof article.category === "string" &&
          article.category.toLowerCase() === "event";
  });

  return eventArticles;
};
