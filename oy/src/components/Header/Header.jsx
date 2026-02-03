import React from 'react'
import Menu from './Menu.jsx';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import LanguageButton from '../Language/LanguageButton.jsx';


export default function Header() {
  
  return (
      <div className="header grid grid-cols-[60px_1fr_60px] h-20 px-2 py-2 sticky top-0 
                bg-gradient-to-b from-white/10 to-transparent 
                backdrop-blur-2xl z-10 items-center 
                border-b border-white/10
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
      <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/en" element={<div></div>} />
                <Route path="/*" element={ <Link to="/"><img className="logo w-14 h-14 m-0 p-0" src="/logo.png" alt="Logo" /></Link>} />
      </Routes>

          <LanguageButton />
          <Menu  />
    </div>
  )
}
