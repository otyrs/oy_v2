import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LanguageButton() {

  const [lang, setLang] = React.useState(window.location.pathname.startsWith('/en') ? 'en' : 'jp');
  
  const navigate = useNavigate();
  
    const handleLanguageSwitch = () => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/en')) {
          const newPath = currentPath.replace('/en', '') || '/';
            setLang('jp');
            navigate(newPath);
        } else {
            const newPath = '/en' + currentPath;
            navigate(newPath);
            setLang(lang === 'en' ? 'jp' : 'en');
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
