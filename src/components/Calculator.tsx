"use client";

import { useState, useRef, useEffect } from "react";
import categories from "@/data/categories.json";
import { calculateScore } from "@/lib/calculator";
import ResultCard from "./ResultCard";

export default function Calculator() {
  const categoryList = Object.keys(categories).sort((a, b) =>
    a.localeCompare(b, "de", { sensitivity: "base" })
  );

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [result, setResult] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Finde die beste Autovervollständigung
  const getAutocomplete = () => {
    if (!searchInput) return "";
    const match = categoryList.find((cat) =>
      cat.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    return match || "";
  };

  const autocomplete = getAutocomplete();
  const autocompleteText =
    autocomplete && searchInput
      ? autocomplete.substring(searchInput.length)
      : "";

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    if (
      value &&
      categoryList.some((cat) =>
        cat.toLowerCase().startsWith(value.toLowerCase())
      )
    ) {
      setSelectedCategory(value);
    } else {
      setSelectedCategory("");
    }
  };

  const handleAutocompleteClick = () => {
    if (autocomplete) {
      setSearchInput(autocomplete);
      setSelectedCategory(autocomplete);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && autocomplete && searchInput !== autocomplete) {
      e.preventDefault();
      setSearchInput(autocomplete);
      setSelectedCategory(autocomplete);
    }
  };

  const handleCalculate = () => {
    if (!selectedCategory || !price || !date || !newPrice) {
      alert("Bitte fülle alle Felder aus.");
      return;
    }
    const life = categories[selectedCategory as keyof typeof categories];
    const resultData = calculateScore(
      Number(price),
      date,
      Number(newPrice),
      life
    );
    setResult(resultData);
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSearchInput("");
    setPrice("");
    setDate("");
    setNewPrice("");
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Kategorie mit Autovervollständigung */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[#1C1C1E] dark:text-white">
          📦 Kategorie
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="z.B. Smartwatch eingeben..."
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-6 py-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all relative z-10"
          />
          {/* Autovervollständigung Suggestion */}
          {autocompleteText && (
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center">
              <input
                type="text"
                disabled
                value={searchInput + autocompleteText}
                className="w-full px-6 py-4 rounded-2xl bg-transparent text-base text-[#8E8E93] dark:text-[#636366] pointer-events-none"
              />
            </div>
          )}
        </div>
        {selectedCategory && (
          <p className="text-xs font-medium text-[#34C759] dark:text-[#30B0C0] flex items-center gap-1.5">
            <span>✓</span> {selectedCategory} ausgewählt
          </p>
        )}
      </div>

      {/* Zwei-Spalten Layout für Eingabefelder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-3xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md">
        {/* Linke Spalte - Labels */}
        <div className="space-y-5 lg:border-r border-white/20 dark:border-white/5 lg:pr-8">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1C1C1E] dark:text-white flex items-center gap-2">
              <span>💵</span> Alter Kaufpreis
            </label>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1C1C1E] dark:text-white flex items-center gap-2">
              <span>📅</span> Kaufdatum
            </label>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1C1C1E] dark:text-white flex items-center gap-2">
              <span>🔄</span> Neuer Kaufpreis
            </label>
          </div>
        </div>

        {/* Rechte Spalte - Input-Felder */}
        <div className="space-y-5">
          <div>
            <input
              type="number"
              placeholder="z.B. 899"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
            />
          </div>
          <div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="z.B. 1199"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#007AFF] to-[#0A84FF] text-white font-semibold text-base shadow-lg shadow-[#007AFF]/30 dark:shadow-[#0A84FF]/20 active:scale-[0.97] transition-all duration-200 hover:shadow-lg hover:shadow-[#007AFF]/40 dark:hover:shadow-[#0A84FF]/30"
        >
          💹 Jetzt berechnen
        </button>
        <button
          onClick={handleReset}
          className="flex-1 py-4 px-6 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 text-[#1C1C1E] dark:text-white font-semibold text-base active:scale-[0.97] transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/20"
        >
          ↺ Zurücksetzen
        </button>
      </div>

      {/* Ergebnis */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}
