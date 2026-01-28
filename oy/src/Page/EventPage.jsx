import React from 'react'
import { useEventPageStore } from '../libs/eventPageStore.js';
import { Link } from 'react-router-dom';

export default function EventPage() {
  const eventArticles = useEventPageStore(); // ← ここで event だけ取得

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-xl text-center font-bold mb-6">Event</h2>
      {eventArticles.map(article => (
        <div
          key={article.id}
          className="mb-3 px-4 py-2 hover:opacity-30 transition-opacity duration-200"
        >
          <Link
            to={`/event/${article.id}`}
            className="m-auto text-center"
          >
            <h3 className="text-base text-center">{article.title}</h3>
            <div>{(article.date).slice(0, 4)}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}
