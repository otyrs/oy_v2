import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MenuButton from "./MenuButton.jsx";
import { useCategories } from "../../libs/categories.js";
import { useArticlesStore } from "../../libs/articleStore.js";
import LanguageButton from "../Language/LanguageButton.jsx";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
    const location = useLocation(); // URL 監視
    const categories = useCategories();
    const fetchArticles = useArticlesStore((state) => state.fetchArticles);
    const currentLanguage = useArticlesStore((state) => state.currentLanguage);
    const langPrefix = currentLanguage === 'en' ? '/en' : '';

    useEffect(() => {
    fetchArticles();
    }, []);

    // URL が変わったらメニューを閉じる
    useEffect(() => {
        setOpen(false);
    }, [location]);

      const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  return (
    <div className="menu relative flex justify-end block">
      {/* メニューボタン */}
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        className="ml-8 cursor-pointer"
      />

      {/* メニュー */}
      {isOpen && (
        <>
          <motion.div
            className="menu-items absolute mt-12 w-40 z-100 mr-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ staggerChildren: 0.8 }}
          >
            {sortedCategories.map((category) => (
              <Link
                key={category}
                to={`${langPrefix}/${category}`}
                className="block py-2 hover:opacity-70 text-right capitalize z-50"
              >
                {category}
              </Link>
            ))}
            <div className="block py-4 hover:opacity-70 text-right capitalize z-50">
              <LanguageButton/>
            </div>
          </motion.div>

          {/* 背景クリックで閉じる */}
          <motion.div
            className="fixed inset-0 w-screen h-screen z-40 bg-white/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </div>
  );
}
