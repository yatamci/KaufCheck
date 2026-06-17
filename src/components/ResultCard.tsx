export default function ResultCard({ result }: any) {
  return (
    <div className="mt-2 p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      {/* Score – große Zahl + Label in einer Zeile */}
      <div className="flex items-baseline gap-3">
        <span className="text-5xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
          {result.score}%
        </span>
        <span className="text-sm font-medium text-[#8E8E93] dark:text-[#98989E]">
          Nutzungs-Score
        </span>
      </div>

      {/* Metriken – 2x2 Grid, schön lesbar */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <p className="text-xs text-[#8E8E93] dark:text-[#98989E]">Nutzung</p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.years} Jahre
          </p>
        </div>
        <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <p className="text-xs text-[#8E8E93] dark:text-[#98989E]">Restnutzung</p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.remaining} Jahre
          </p>
        </div>
        <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <p className="text-xs text-[#8E8E93] dark:text-[#98989E]">Kosten / Jahr</p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostYear} €
          </p>
        </div>
        <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <p className="text-xs text-[#8E8E93] dark:text-[#98989E]">Kosten / Monat</p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostMonth} €
          </p>
        </div>
      </div>

      {/* Kleine Zusatzinfo */}
      <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-[#8E8E93] dark:text-[#98989E]">
          Neues Gerät: <span className="font-medium text-[#1C1C1E] dark:text-white">{result.newCostYear} € / Jahr</span>
        </p>
      </div>
    </div>
  );
}