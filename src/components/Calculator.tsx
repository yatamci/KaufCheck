"use client";

import { useState } from "react";
import categories from "@/data/categories.json";
import { calculateScore } from "@/lib/calculator";
import ResultCard from "./ResultCard";

export default function Calculator() {
  const list = Object.keys(categories).sort((a, b) => a.localeCompare(b));

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [data, setData] = useState({
    price: "",
    date: "",
    newPrice: "",
  });
  const [result, setResult] = useState<any>();

  const filtered = list.filter((x) =>
    x.toLowerCase().includes(search.toLowerCase())
  );

  function reset() {
    setSearch("");
    setSelected("");
    setData({ price: "", date: "", newPrice: "" });
    setResult(undefined);
  }

  return (
    <div className="space-y-4">
      {/* Kategorie-Suche – jetzt mit klarem Label */}
      <div className="relative">
        <label className="text-sm font-medium text-[#8E8E93] dark:text-[#98989E] px-1 block mb-1">
          Kategorie
        </label>
        <input
          placeholder="z.B. Smartphone"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected("");
          }}
          className="w-full px-4 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-base focus:outline-none focus:border-[#007AFF] dark:focus:border-[#0A84FF] transition-colors"
        />

        {search && !selected && filtered.length > 0 && (
          <div className="absolute z-20 w-full mt-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
            {filtered.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelected(item);
                  setSearch(item);
                }}
                className="block w-full text-left px-4 py-3.5 text-base hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-0"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Eingabefelder – jetzt mit Labels und als zusammenhängende Gruppe */}
      <div className="space-y-3 bg-white/60 dark:bg-neutral-900/60 rounded-3xl p-4 backdrop-blur-sm">
        <div>
          <label className="text-sm font-medium text-[#8E8E93] dark:text-[#98989E] block mb-1">
            Alter Kaufpreis (€)
          </label>
          <input
            placeholder="z.B. 899"
            className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-base focus:outline-none focus:border-[#007AFF] dark:focus:border-[#0A84FF] transition-colors"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            inputMode="decimal"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#8E8E93] dark:text-[#98989E] block mb-1">
            Kaufdatum
          </label>
          <input
            type="date"
            className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-base focus:outline-none focus:border-[#007AFF] dark:focus:border-[#0A84FF] transition-colors"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#8E8E93] dark:text-[#98989E] block mb-1">
            Preis neues Gerät (€)
          </label>
          <input
            placeholder="z.B. 1199"
            className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-base focus:outline-none focus:border-[#007AFF] dark:focus:border-[#0A84FF] transition-colors"
            value={data.newPrice}
            onChange={(e) => setData({ ...data, newPrice: e.target.value })}
            inputMode="decimal"
          />
        </div>
      </div>

      {/* Buttons – jetzt nebeneinander, gleich breit */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            const life = categories[selected as keyof typeof categories];
            if (!selected || !data.price || !data.date || !data.newPrice) {
              alert("Bitte fülle alle Felder aus.");
              return;
            }
            setResult(
              calculateScore(
                Number(data.price),
                data.date,
                Number(data.newPrice),
                life
              )
            );
          }}
          className="flex-1 py-4 rounded-2xl bg-[#007AFF] dark:bg-[#0A84FF] text-white font-semibold text-base active:scale-[0.98] transition-transform"
        >
          Berechnen
        </button>

        <button
          onClick={reset}
          className="flex-1 py-4 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-[#1C1C1E] dark:text-white font-semibold text-base active:scale-[0.98] transition-transform"
        >
          Zurücksetzen
        </button>
      </div>

      {/* Ergebnis */}
      {result && (
        <div className="mt-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}