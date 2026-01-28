import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TopPage from './Page/TopPage.jsx';
import EventPage from './Page//EventPage.jsx';
import EventDetail from './Page/EventDetailPage.jsx';
import Header from './conponents/Header/Header.jsx';
import Footer from './conponents/Footer/Footer.jsx';
import AboutPage from './Page/AboutPage.jsx';
import LivePage from './Page/LivePage.jsx';
import LiveDetail from './Page/LiveDetailPage.jsx';

export default function Layout() {
  return (
    <div className="layout grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="content p-4 max-w-3xl w-full mx-auto">
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/Event" element={<EventPage />} />
          <Route path="/Event/:id" element={<EventDetail />} />
           <Route path="/Live" element={<LivePage />} />
           <Route path="/Live/:id" element={<LiveDetail />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
