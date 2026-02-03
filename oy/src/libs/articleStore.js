import { create } from "zustand";
import { fetchArticles } from "./fetchArticle";

// store は named export
export const useArticlesStore = create((set) => ({
  currentLanguage: "ja", // デフォルトは日本語
  setLanguage: (lang) => set({ currentLanguage: lang }),
  articles: [],
  fetchArticles: async () => {
    const data = await fetchArticles();
    set({ articles: data });
  },
}));

/**
 * 言語に応じたフィールドを取得するヘルパー
 * 英語版がなければ日本語版にフォールバック
 */
export const getLocalizedField = (article, fieldName, lang) => {
  if (!article) return "";

  if (lang === "en") {
    const enField = article[`${fieldName}_en`];
    // 英語版があればそれを返す、なければ日本語版にフォールバック
    return enField && enField.trim() !== ""
      ? enField
      : article[fieldName] || "";
  }

  // 日本語の場合はそのまま
  return article[fieldName] || "";
};

/**
 * 記事全体をローカライズするヘルパー
 */
export const getLocalizedArticle = (article, lang) => {
  if (!article) return null;

  return {
    ...article,
    title: getLocalizedField(article, "title", lang),
    content: getLocalizedField(article, "content", lang),
  };
};
