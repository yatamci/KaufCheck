export default function ResultCard({ result }: any) {
  return (
    <div className="
      mt-8 p-6 rounded-3xl
      bg-white/70 dark:bg-neutral-900/70
      backdrop-filter backdrop-blur-xl
      border border-white/20 dark:border-white/5
      shadow-lg shadow-black/5 dark:shadow-black/20
      transition-all duration-300
    ">
      <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1E] dark:text-white">
        Ergebnis
      </h2>

      {/* Score als große, hervorgehobene Zahl */}
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
          {result.score}%
        </span>
        <span className="text-sm font-medium text-[#8E8E93] dark:text-[#636366]">
          Nutzungs-Score
        </span>
      </div>

      {/* Metriken in einem Grid – übersichtlicher auf mobil */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Nutzung
          </p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.years} Jahre
          </p>
        </div>
        <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Restnutzung
          </p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.remaining} Jahre
          </p>
        </div>
        <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Kosten / Jahr
          </p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostYear} €
          </p>
        </div>
        <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5">
          <p className="text-xs font-medium text-[#8E8E93] dark:text-[#636366] uppercase tracking-wider">
            Kosten / Monat
          </p>
          <p className="text-lg font-semibold text-[#1C1C1E] dark:text-white">
            {result.oldCostMonth} €
          </p>
        </div>
      </div>

      {/* Zusätzliche Info – geschätzte Kosten für Neugerät */}
      <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
        <p className="text-sm text-[#8E8E93] dark:text-[#636366]">
          Neues Gerät: <span className="font-medium text-[#1C1C1E] dark:text-white">{result.newCostYear} € / Jahr</span>
        </p>
      </div>
    </div>
  );
}