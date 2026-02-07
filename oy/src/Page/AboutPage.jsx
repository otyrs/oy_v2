import React from 'react'
import { useArticlesStore } from '../libs/articleStore.js';


export default function AboutPage() {
    const articles = useArticlesStore((state) => state.articles);

    const aboutArticles = articles
        .filter(article => {
            if (!article.category) return false;
            const cats = Array.isArray(article.category) ? article.category : [article.category];
            return cats.includes("About");
        });   
  
    const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  
    // 日本語版はそのまま、英語版は画像+英語テキスト
    let displayContent;
    if (currentLanguage === 'en') {
        // 画像部分を抽出（日本語版から）
        const imageMatch = aboutArticles[0]?.content?.match(/<figure>.*?<\/figure>/s);
        const imageSection = imageMatch ? imageMatch[0] : '';
        displayContent = imageSection + (aboutArticles[0]?.content_en || '');
    } else {
        displayContent = aboutArticles[0]?.content || '';
    }

    return (
      
    <div>
          <h2 className="text-2xl m-auto text-center">About</h2>
            <div className="mb-8 p-4" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: displayContent }}></div>
    </div>
  )
}
