"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        w-12 h-12
        rounded-full
        bg-white/50 dark:bg-neutral-800/50
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        flex items-center justify-center
        text-xl
        transition-all duration-300
        hover:scale-105 active:scale-95
        shadow-sm
      "
      aria-label="Design umschalten"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}