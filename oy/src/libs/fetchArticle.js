// src/api/articles.js

export const fetchArticles = async () => {
  const res = await fetch("/api/article");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const fetchArticleById = async (id) => {
  const res = await fetch(`/api/article/${id}`);
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
};
