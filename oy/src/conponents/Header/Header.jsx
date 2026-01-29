import React from 'react'
import Menu from './Menu.jsx';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'


export default function Header() {
  return (
      <div className="header flex items-center justify-between h-20 px-4 py-2">
          <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/*" element={ <Link to="/"><img className="logo w-14 h-14 m-0 p-0" src="/logo.png" alt="Logo" /></Link>} />
          </Routes>
          <Menu  />
    </div>
  )
}
