import React from 'react'
import Menu from './Menu.jsx';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import LanguageButton from '../Language/LanguageButton.jsx';
import { useArticlesStore } from '../../libs/articleStore.js';


export default function Header() {
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  const homePath = currentLanguage === 'en' ? '/en' : '/';
  
  return (
      <div className="header grid grid-cols-[60px_1fr_60px] h-20 px-2 py-0 sticky top-0 z-10 items-center bg-white/100">
      <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/en" element={<div></div>} />
                <Route path="/*" element={ <Link to={homePath}><img className="logo w-14 h-14 m-0 p-0" src="/logo.png" alt="Logo" /></Link>} />
      </Routes>

          <LanguageButton />
          <Menu  />
    </div>
  )
}
