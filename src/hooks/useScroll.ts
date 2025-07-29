
import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // For background color change
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // For progress bar
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled, scrollProgress };
};
