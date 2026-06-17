"use client";

import { useState } from "react";
import categories from "@/data/categories.json";
import { calculateScore } from "@/lib/calculator";
import ResultCard from "./ResultCard";

export default function Calculator() {
  const categoryList = Object.keys(categories).sort((a, b) => a.localeCompare(b));

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [result, setResult] = useState<any>(null);

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
    setPrice("");
    setDate("");
    setNewPrice("");
    setResult(null);
  };

  return (
    <div className="space-y-5">
      {/* Kategorie-Dropdown */}
      <div>
        <label className="block text-sm font-medium text-[#6C6C70] dark:text-[#98989E] mb-1.5">
          Kategorie
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236C6C70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1.5rem center",
            backgroundSize: "1.2rem",
          }}
        >
          <option value="">Kategorie wählen</option>
          {categoryList.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Eingabefelder – mit leichtem Glas-Hintergrund */}
      <div className="space-y-4 p-5 rounded-3xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/5">
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

        <div>
          <label className="block text-sm font-medium text-[#6C6C70] dark:text-[#98989E] mb-1.5">
            Preis neues Gerät (€)
          </label>
          <input
            type="number"
            placeholder="z.B. 1199"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-base text-[#1C1C1E] dark:text-white placeholder:text-[#8E8E93] dark:placeholder:text-[#636366] focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
          />
        </div>
      </div>

      {/* Buttons – jetzt mit schönerem Hover/Active-Feedback */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 py-4 rounded-2xl bg-[#007AFF] dark:bg-[#0A84FF] text-white font-semibold text-base shadow-lg shadow-[#007AFF]/30 dark:shadow-[#0A84FF]/20 active:scale-[0.97] transition-all duration-200 hover:bg-[#0055CC] dark:hover:bg-[#0066DD]"
        >
          Berechnen
        </button>
        <button
          onClick={handleReset}
          className="flex-1 py-4 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 text-[#1C1C1E] dark:text-white font-semibold text-base active:scale-[0.97] transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/20"
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