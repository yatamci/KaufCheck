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
    <div className="space-y-5">
      {/* Suchfeld mit verbessertem Dropdown */}
      <div className="relative">
        <input
          placeholder="Kategorie suchen..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected("");
          }}
          className="glassInput"
        />

        {search && !selected && filtered.length > 0 && (
          <div className="absolute z-20 w-full mt-3 search-dropdown">
            {filtered.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelected(item);
                  setSearch(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Eingabefelder mit besseren Labels */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-[#3A3A3C] dark:text-[#98989E] px-1">
          Alter Kaufpreis (€)
        </label>
        <input
          placeholder="z.B. 899"
          className="glassInput"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          inputMode="decimal"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#3A3A3C] dark:text-[#98989E] px-1">
          Kaufdatum
        </label>
        <input
          type="date"
          className="glassInput"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#3A3A3C] dark:text-[#98989E] px-1">
          Preis neues Gerät (€)
        </label>
        <input
          placeholder="z.B. 1199"
          className="glassInput"
          value={data.newPrice}
          onChange={(e) => setData({ ...data, newPrice: e.target.value })}
          inputMode="decimal"
        />
      </div>

      {/* Button-Gruppe – jetzt mit besserem Abstand und Responsiveness */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          className="mainButton"
          onClick={() => {
            const life = categories[selected as keyof typeof categories];
            if (!selected || !data.price || !data.date || !data.newPrice) {
              // Einfaches Feedback – in einer echten App würdest du hier einen Toast einblenden
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
        >
          Berechnen
        </button>

        <button className="secondButton" onClick={reset}>
          Zurücksetzen
        </button>
      </div>

      {/* Ergebnis mit Animation */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}