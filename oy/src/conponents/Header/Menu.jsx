import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";
import { useCategories } from "../../libs/categories.js";
import { useArticlesStore } from "../../libs/articleStore.js";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
    const location = useLocation(); // URL 監視
    const categories = useCategories();
    const fetchArticles = useArticlesStore((state) => state.fetchArticles);

    useEffect(() => {
    fetchArticles();
    }, []);

    // URL が変わったらメニューを閉じる
    useEffect(() => {
        setOpen(false);
    }, [location]);

      const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  return (
    <div className="menu relative flex justify-end px-4">
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
            className="menu-items absolute mt-12 w-40 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {sortedCategories.map((category) => (
              <Link
                key={category}
                to={`/${category}`}
                className="block py-2 hover:opacity-70 text-right capitalize z-50"
              >
                {category}
              </Link>
            ))}
          </motion.div>

          {/* 背景クリックで閉じる */}
          <motion.div
            className="fixed inset-0 w-screen h-screen z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </div>
  );
}
