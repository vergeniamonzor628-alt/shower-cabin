"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 90vh)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-8px_40px_rgba(0,0,0,0.4)]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:flex flex-col">
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
              чертеж стекла: <span className="text-white font-bold ml-1">от 2 000 ₽</span> <span className="text-white/40 font-normal ml-2">| инд. замеры: 4 000 ₽</span>
            </span>
            <span className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
              готово за 24 часа · гарантия точности
            </span>
          </div>
          <a
            href="#configurator"
            className="bg-white hover:bg-slate-200 text-slate-900 px-8 py-3 rounded-none font-bold text-sm transition-all flex items-center gap-2 shadow-lg sm:ml-auto uppercase tracking-widest"
          >
            рассчитать проект
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
