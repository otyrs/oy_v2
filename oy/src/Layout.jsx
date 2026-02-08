import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useArticlesStore } from './libs/articleStore.js';
import ScrollToTop from './libs/ScrollToTop.jsx';
import AppRoutes from './AppRoutes.jsx';
import EntrancePage from './Page/EntrancePage.jsx';

export default function Layout() {
  const location = useLocation();
  const setLanguage = useArticlesStore((state) => state.setLanguage);
  const [showEntrance, setShowEntrance] = useState(!sessionStorage.getItem('visited'));

  // URLが変わるたびに言語を判定してStoreを更新
  useEffect(() => {
    const lang = location.pathname.startsWith('/en') ? 'en' : 'ja';
    setLanguage(lang);
  }, [location.pathname, setLanguage]);

  // 初回訪問時のチェック
  useEffect(() => {
    setShowEntrance(!sessionStorage.getItem('visited'));
  }, []);

  return (
    <>
      <AnimatePresence>
        {showEntrance && (
          <EntrancePage onClose={() => setShowEntrance(false)} />
        )}
      </AnimatePresence>
      
      {!showEntrance && (
        <div className="layout grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <main className="content p-4 max-w-3xl w-full mx-auto">
            <ScrollToTop />
            <AppRoutes />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}