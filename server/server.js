const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { createClient } = require("microcms-js-sdk");

const app = express();
const PORT = process.env.PORT || 5000;

const client = createClient({
  serviceDomain: "ottyarris",
  apiKey: process.env.MICROCMS_API_KEY,
});

app.use(cors());
app.use(express.json());

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, "../oy/dist")));

/* 記事一覧 */
app.get("/api/article", async (req, res) => {
  try {
    const data = await client.get({ endpoint: "blogs" });
    res.json(data.contents);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch articles" });
  }
});

/* 記事詳細 */
app.get("/api/article/:id", async (req, res) => {
  try {
    const data = await client.get({
      endpoint: "blogs",
      contentId: req.params.id,
    });
    res.json(data);
  } catch {
    res.status(404).json({ message: "Article not found" });
  }
});

// SPAのルーティングサポート - すべてのルートをindex.htmlにリダイレクト
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../oy/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
