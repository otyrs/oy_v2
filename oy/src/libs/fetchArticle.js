// src/api/articles.js

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const fetchArticles = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/article`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetchArticleById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/article/${id}`);
    if (!res.ok) throw new Error("Failed to fetch article");
    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
