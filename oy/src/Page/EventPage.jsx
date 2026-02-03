import React from 'react'
import { useEventPageStore } from '../libs/eventPageStore.js';
import { useArticlesStore, getLocalizedField } from '../libs/articleStore.js';
import { Link } from 'react-router-dom';

export default function EventPage() {
  const eventArticles = useEventPageStore(); // ← ここで event だけ取得
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  const basePath = currentLanguage === 'en' ? '/en/event' : '/event';

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-xl text-center font-bold mb-6">Event</h2>
      {eventArticles.map(article => (
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
  )
}
