export default function ResultCard({ result }: any) {
  return (
    <div className="mt-4 p-6 rounded-3xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-sm">
      {/* Score – große Zahl + Label */}
      <div className="flex items-baseline gap-3">
        <span className="text-5xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
          {result.score}%
        </span>
        <span className="text-base font-medium text-[#6C6C70] dark:text-[#98989E]">
          Nutzungs-Score
        </span>
      </div>

      {/* Metriken – 2x2 Grid, ohne Restnutzung */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Nutzung
          </p>
          <p className="text-xl font-semibold text-[#1C1C1E] dark:text-white">
            {result.years} Jahre
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Kosten / Jahr
          </p>
          <p className="text-xl font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostYear} €
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Kosten / Monat
          </p>
          <p className="text-xl font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostMonth} €
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Neugerät / Jahr
          </p>
          <p className="text-xl font-semibold text-[#1C1C1E] dark:text-white">
            {result.newCostYear} €
          </p>
        </div>
      </div>
    </div>
  );
}