import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // useLocation を使う
import TopPage from './Page/TopPage.jsx';
import EventPage from './Page/EventPage.jsx';
import EventDetail from './Page/EventDetailPage.jsx';
import Header from './components/Header/Header.jsx'; // typo修正: components
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './Page/AboutPage.jsx';
import LivePage from './Page/LivePage.jsx';
import LiveDetail from './Page/LiveDetailPage.jsx';
import { useArticlesStore } from './libs/articleStore.js';
import ScrollToTop from './libs/ScrollToTop.jsx';

export default function Layout() {
  // 1. React Router のフックで現在のパスを取得
  const location = useLocation(); 
  const setLanguage = useArticlesStore((state) => state.setLanguage);

  // 2. URLが変わるたびに言語を判定してStoreを更新
  useEffect(() => {
    const lang = location.pathname.startsWith('/en') ? 'en' : 'ja';
    setLanguage(lang);
  }, [location.pathname, setLanguage]);

  // ルート構成（共通）
  const routesConfig = (
    <>
      <Route index element={<TopPage />} />
      <Route path="Event" element={<EventPage />} />
      <Route path="Event/:id" element={<EventDetail />} />
      <Route path="Live" element={<LivePage />} />
      <Route path="Live/:id" element={<LiveDetail />} />
      <Route path="About" element={<AboutPage />} />
    </>
  );

  return (
    <div className="layout grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="content p-4 max-w-3xl w-full mx-auto">
        <ScrollToTop /> 
        <Routes>
          {/* 日本語ルート */}
          <Route path="/">
            {routesConfig}
          </Route>

          {/* 英語ルート: path="/en/*" にすると、子ルートが正しくマッチします */}
          <Route path="/en/*">
              {routesConfig}
          </Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}