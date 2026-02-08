import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopPage from './Page/TopPage.jsx';
import EventPage from './Page/EventPage.jsx';
import EventDetail from './Page/EventDetailPage.jsx';
import AboutPage from './Page/AboutPage.jsx';
import LivePage from './Page/LivePage.jsx';
import LiveDetail from './Page/LiveDetailPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 日本語ルート */}
      <Route path="/" element={<TopPage />} />
      <Route path="/Event" element={<EventPage />} />
      <Route path="/Event/:id" element={<EventDetail />} />
      <Route path="/Live" element={<LivePage />} />
      <Route path="/Live/:id" element={<LiveDetail />} />
      <Route path="/About" element={<AboutPage />} />

      {/* 英語ルート */}
      <Route path="/en" element={<TopPage />} />
      <Route path="/en/Event" element={<EventPage />} />
      <Route path="/en/Event/:id" element={<EventDetail />} />
      <Route path="/en/Live" element={<LivePage />} />
      <Route path="/en/Live/:id" element={<LiveDetail />} />
      <Route path="/en/About" element={<AboutPage />} />
    </Routes>
  );
}
