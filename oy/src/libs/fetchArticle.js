// src/api/articles.js

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchArticles = async () => {
  const res = await fetch(`${API_BASE_URL}/article`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const fetchArticleById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/article/${id}`);
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
};
