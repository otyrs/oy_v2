import React from 'react';
import { useLivePageStore } from '../libs/livePageStore.js';
import { Link } from 'react-router-dom';

export default function LivePage() {
  const liveArticles = useLivePageStore();

  console.log("Live articles:", liveArticles);

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-xl text-center font-bold mb-6">Live</h2>
      {liveArticles.map(article => (
        <div
          key={article.id}
          className="mb-3 px-4 py-2 hover:opacity-30 transition-opacity duration-200"
        >
          <Link
            to={`/live/${article.id}`}
            className="m-auto text-center"
          >
            <h3 className="text-base text-center">{article.title}</h3>
            <div>{(article.date).slice(0, 4)}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
