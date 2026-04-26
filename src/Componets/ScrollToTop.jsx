import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // instant चाहिए तो "auto" कर दो
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;