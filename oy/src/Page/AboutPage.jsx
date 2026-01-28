import React from 'react'
import { useEffect } from 'react';
import { useArticlesStore } from '../libs/articleStore.js';

export default function AboutPage() {
    const articles = useArticlesStore((state) => state.articles);
    const fetchArticles = useArticlesStore((state) => state.fetchArticles);

    const aboutArticles = articles
        .filter(article => {
            if (!article.category) return false;
            const cats = Array.isArray(article.category) ? article.category : [article.category];
            return cats.includes("About");
    });

   
    console.log("AboutPage articles", aboutArticles);
    return (
      
    <div>
          <h2 className="text-2xl m-auto text-center">About</h2>
          <div className="mb-8 p-4" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{__html: aboutArticles[0]?.content}}></div>
    </div>
  )
}
