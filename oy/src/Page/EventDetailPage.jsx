import React, { useState, useEffect } from 'react';
import { useArticlesStore, getLocalizedArticle } from '../libs/articleStore.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchArticleById } from '../libs/fetchArticle.js';

export default function EventDetail() {
  const { id } = useParams();
  const articles = useArticlesStore((state) => state.articles);
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        // まずストアから探す
        const articleFromStore = articles.find(a => a.id === id);
        if (articleFromStore) {
          setArticle(articleFromStore);
          setLoading(false);
        } else {
          // ストアになければAPIから取得
          const data = await fetchArticleById(id);
          setArticle(data);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadArticle();
  }, [id, articles]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!article) return <div className="text-center py-8">Article not found</div>;

  // 言語に応じた記事データを取得（英語がなければ日本語にフォールバック）
  const localizedArticle = getLocalizedArticle(article, currentLanguage);
  const backPath = currentLanguage === 'en' ? '/en/event' : '/event';

  return (
      <div className="max-w-xl mx-auto py-4">
        <div>
            <h2 className="title text-xl font-bold mb-1 text-center">{localizedArticle.title}</h2>
            <div className='text-right mb-4'>({(article.date).slice(0, 4)})</div>
        </div>
        <div
          className="article-content py-4 mx-auto"
          dangerouslySetInnerHTML={{ __html: localizedArticle.content }}
        />
      <div className="otherList my-4">
        <ul>
          {articles
            .filter(a => {
              if (!a.category) return false;
              const cats = Array.isArray(a.category) ? a.category : [a.category];
              return cats.includes("Event") && a.id !== article.id;
            })
            .map(a => {
              const localizedA = getLocalizedArticle(a, currentLanguage);
              const eventLink = currentLanguage === 'en' ? `/en/event/${a.id}` : `/event/${a.id}`;
              return (
                <li key={a.id} className="mb-2">
                  <Link to={eventLink} className="opacity-50 hover:opacity-70">
                    {localizedA.title} ({a.date.slice(0, 4)})
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      
        <div className='py-4'>
             <Link to={backPath} className='hover:opacity-50'>Back</Link>
        </div>
    </div>
  );
}
