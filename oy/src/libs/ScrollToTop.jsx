import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移（pathnameの変化）を検知して最上部へ移動
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 画面には何も表示しない
};

export default ScrollToTop;