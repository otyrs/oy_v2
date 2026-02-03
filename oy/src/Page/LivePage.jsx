import React from 'react';
import { useLivePageStore } from '../libs/livePageStore.js';
import { useArticlesStore, getLocalizedField } from '../libs/articleStore.js';
import { Link } from 'react-router-dom';

export default function LivePage() {
  const liveArticles = useLivePageStore();
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  const basePath = currentLanguage === 'en' ? '/en/live' : '/live';

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-xl text-center font-bold mb-6">Live</h2>
      {liveArticles.map(article => (
        <div
          key={article.id}
          className="mb-3 px-4 py-2 hover:opacity-30 transition-opacity duration-200"
        >
          <Link
            to={`${basePath}/${article.id}`}
            className="m-auto text-center"
          >
            <h3 className="text-base text-center">{getLocalizedField(article, 'title', currentLanguage)}</h3>
            <div>{(article.date).slice(0, 4)}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
