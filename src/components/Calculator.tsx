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
  const [result, setResult] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filterte Kategorien basierend auf Eingabe
  const filteredCategories = categoryList.filter((cat) =>
    cat.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Schließe Dropdown wenn außerhalb geklickt
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setSearchInput(category);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setSelectedCategory("");
    setIsDropdownOpen(true);
  };

  const handleCalculate = () => {
    if (!selectedCategory || !price || !date) {
      alert("Bitte fülle alle Felder aus und wähle eine Kategorie.");
      return;
    }
    const life = categories[selectedCategory as keyof typeof categories];
    const resultData = calculateScore(Number(price), date, life);
    setResult(resultData);
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSearchInput("");
    setPrice("");
    setDate("");
    setResult(null);
    setIsDropdownOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Kategorie Input mit Dropdown */}
      <div ref={dropdownRef} className="relative">
        <label className="block text-sm font-medium text-[#6C6C70] dark:text-[#98989E] mb-1.5">
          Kategorie
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Kategorie eingeben (z.B. 'Sma' für Smartphone)"
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            className="w-full px-5 py-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
          />

          {/* Dropdown Liste */}
          {isDropdownOpen && filteredCategories.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-white/30 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/50 backdrop-blur-lg overflow-hidden">
              <ul className="max-h-64 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleSelectCategory(category)}
                      className="w-full text-left px-5 py-3.5 hover:bg-[#007AFF]/10 dark:hover:bg-[#0A84FF]/10 text-[#1C1C1E] dark:text-white font-medium transition-colors border-b border-white/10 dark:border-white/5 last:border-b-0"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Keine Ergebnisse */}
          {isDropdownOpen &&
            searchInput.length > 0 &&
            filteredCategories.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-white/30 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/50 p-4">
                <p className="text-center text-[#8E8E93] dark:text-[#636366]">
                  Keine Kategorien gefunden
                </p>
              </div>
            )}
        </div>

        {/* Ausgewählte Kategorie anzeigen */}
        {selectedCategory && (
          <p className="mt-2 text-xs font-medium text-[#0A84FF] flex items-center gap-1">
            ✓ {selectedCategory} ausgewählt
          </p>
        )}
      </div>

      {/* Eingabefelder – Glass-Karte */}
      <div className="space-y-4 p-5 rounded-3xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md transition-all duration-300">
        <div>
          <label className="block text-sm font-medium text-[#6C6C70] dark:text-[#98989E] mb-1.5">
            Alter Kaufpreis (€)
          </label>
          <input
            type="number"
            placeholder="z.B. 899"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C6C70] dark:text-[#98989E] mb-1.5">
            Kaufdatum
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#007AFF] to-[#0A84FF] dark:from-[#0A84FF] dark:to-[#0066DD] text-white font-semibold text-base shadow-lg shadow-[#007AFF]/30 dark:shadow-[#0A84FF]/20 active:scale-[0.97] transition-all duration-200 hover:shadow-lg hover:shadow-[#007AFF]/40 dark:hover:shadow-[#0A84FF]/30"
        >
          Berechnen
        </button>
        <button
          onClick={handleReset}
          className="flex-1 py-4 px-6 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 text-[#1C1C1E] dark:text-white font-semibold text-base active:scale-[0.97] transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/20"
        >
          Zurücksetzen
        </button>
      </div>

      {/* Ergebnis – mit Animation */}
      {result && (
        <div className="pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}