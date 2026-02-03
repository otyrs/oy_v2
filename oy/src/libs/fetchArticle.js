// src/libs/fetchArticle.js
import { createClient } from "microcms-js-sdk";

// microCMSクライアントの作成
const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || "ottyarris",
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY || "",
});

/**
 * 記事一覧を取得
 */
export const fetchArticles = async () => {
  try {
    const data = await client.get({ endpoint: "blogs" });
    return data.contents;
  } catch (error) {
    console.error("microCMS Error:", error);
    throw error;
  }
};

/**
 * 記事詳細を取得
 */
export const fetchArticleById = async (id) => {
  try {
    const data = await client.get({
      endpoint: "blogs",
      contentId: id,
    });
    return data;
  } catch (error) {
    console.error("microCMS Error:", error);
    throw error;
  }
};
