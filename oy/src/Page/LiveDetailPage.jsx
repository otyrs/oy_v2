import React from 'react';
import { useArticlesStore } from '../libs/articleStore.js';
import { useParams } from 'react-router-dom';

export default function EventDetail() {
  const { id } = useParams(); // URLから取得
  const articles = useArticlesStore((state) => state.articles);

  // idに一致する記事を検索
  const articleById = articles.find(article => article.id === id);
  
  return (
      <div className="max-w-xl mx-auto py-8">
        <div>
            <h2 className="title text-2xl font-bold mb-2 text-center">{articleById.title}</h2>
            <div className='text-right mb-4'>({(articleById.date).slice(0, 4)})</div>
        </div>
        <div
        className="content py-4"
        dangerouslySetInnerHTML={{ __html: articleById.content }}
        />
    </div>
  );
}
