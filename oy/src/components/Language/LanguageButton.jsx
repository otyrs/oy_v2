import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useArticlesStore } from '../../libs/articleStore.js';

export default function LanguageButton() {
  const navigate = useNavigate();
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  
    const handleLanguageSwitch = () => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/en')) {
          const newPath = currentPath.replace('/en', '') || '/';
            navigate(newPath);
        } else {
            const newPath = '/en' + currentPath;
            navigate(newPath);
        }
    }
  return (
    <div className='m-auto'>
      <button onClick={handleLanguageSwitch}>
        <span className={`language-jp ${lang === 'jp' ? 'font-bold' : ''}`}>JP</span>
        <span> / </span>
        <span className={`language-en ${lang === 'en' ? 'font-bold' : ''}`}>EN</span>
      </button>
    </div>
  )
}
