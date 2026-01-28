import { useArticlesStore } from "./articleStore";

export const useCategories = () => {
    const articles = useArticlesStore((state) => state.articles);
    
  const categories = [
    ...new Set(
      articles
        .flatMap((a) => (Array.isArray(a.category) ? a.category : [a.category]))
        .filter((cat) => typeof cat === "string" && cat.trim() !== "")
        .map((cat) => cat.trim().toLowerCase()),
    ),
  ];
  return categories;
};
