'use client'

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_SCROLL = 320;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-24 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-all duration-200 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:bottom-10 md:right-28 ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
