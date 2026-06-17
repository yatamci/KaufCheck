"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-12 h-12 rounded-full bg-white/30 dark:bg-white/5 animate-pulse" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center justify-center text-2xl shadow-sm active:scale-95 transition-all duration-200 hover:bg-white/60 dark:hover:bg-white/20"
      aria-label="Design umschalten"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}