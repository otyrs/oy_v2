import React from 'react'
import Menu from './Menu.jsx';
import { Link, useLocation } from "react-router-dom";
import { useArticlesStore } from '../../libs/articleStore.js';


export default function Header() {
  const currentLanguage = useArticlesStore((state) => state.currentLanguage);
  const homePath = currentLanguage === 'en' ? '/en' : '/';
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/en';
  
  return (
      <div className="header grid grid-cols-[60px_1fr_60px] h-20 px-2 py-0 sticky top-0 z-10 items-center bg-white/100">
      {!isHomePage ? (
        <Link to={homePath}>
          <img className="logo w-14 h-14 mb-4 p-0" src="/logo.png" alt="Logo" />
        </Link>
      ) : (
        <div></div>
      )}
      <div></div>
      <Menu className="justify-self-end" />
    </div>
  )
}
