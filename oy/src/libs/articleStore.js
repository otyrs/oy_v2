import { create } from "zustand";
import { fetchArticles } from "./fetchArticle";

// store は named export
export const useArticlesStore = create((set) => ({
  articles: [],
  fetchArticles: async () => {
    const data = await fetchArticles();
    set({ articles: data });
  }
}));
