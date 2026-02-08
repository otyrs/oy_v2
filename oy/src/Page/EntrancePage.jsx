import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function EntrancePage({ onClose }) {
  const navigate = useNavigate();

  const handleEnter = (lang) => {
    sessionStorage.setItem('visited', 'true');
    
    // アニメーション完了後にページを閉じて遷移
    setTimeout(() => {
      onClose();
      navigate(lang === 'en' ? '/en' : '/');
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="bg-white z-100 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center"
    >
      <div className="flex gap-8">
        <button
          onClick={() => handleEnter('ja')}
          className="py-4 text-sm m-auto hover:opacity-20 transition-opacity"
        >
          JP
        </button>
        <div className="m-auto">/</div>
        <button
          onClick={() => handleEnter('en')}
          className="py-4 text-sm m-auto hover:opacity-20 transition-opacity"
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}

