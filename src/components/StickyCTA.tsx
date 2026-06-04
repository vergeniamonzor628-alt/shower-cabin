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
      <div className="bg-background/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_40px_rgba(0,0,0,0.4)]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:flex flex-col">
            <span className="text-white/90 text-sm font-medium">
              Чертеж стекла — <span className="text-primary font-bold">1 500 ₽</span>
            </span>
            <span className="text-white/40 text-xs">
              Готово за 24 часа · Гарантия точности
            </span>
          </div>
          <a
            href="#configurator"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] sm:ml-auto animate-pulse-subtle"
          >
            Заказать сейчас
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
