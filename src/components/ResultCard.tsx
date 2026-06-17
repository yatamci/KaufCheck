export default function ResultCard({ result }: any) {
  // Bestimme die Farbe basierend auf dem Score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500 dark:text-green-400";
    if (score >= 60) return "text-blue-500 dark:text-blue-400";
    if (score >= 40) return "text-orange-500 dark:text-orange-400";
    return "text-red-500 dark:text-red-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-500/10 dark:bg-green-500/10";
    if (score >= 60) return "bg-blue-500/10 dark:bg-blue-500/10";
    if (score >= 40) return "bg-orange-500/10 dark:bg-orange-500/10";
    return "bg-red-500/10 dark:bg-red-500/10";
  };

  return (
    <div className="space-y-4">
      {/* Score Card – großer, visueller Fokus */}
      <div
        className={`p-6 rounded-3xl ${getScoreBgColor(result.score)} border border-white/30 dark:border-white/10 backdrop-blur-md transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className={`text-6xl font-bold ${getScoreColor(result.score)}`}>
              {result.score}%
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#6C6C70] dark:text-[#98989E]">
                Nutzungs-Score
              </span>
              <span className="text-xs text-[#8E8E93] dark:text-[#636366]">
                {result.score >= 80
                  ? "Sehr gut genutzt"
                  : result.score >= 60
                  ? "Gut genutzt"
                  : result.score >= 40
                  ? "Durchschnittlich"
                  : "Wenig genutzt"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metriken Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nutzungszeit */}
        <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200">
          <p className="text-xs font-semibold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest mb-2">
            ⏱ Nutzungszeit
          </p>
          <p className="text-2xl font-bold text-[#1C1C1E] dark:text-white">
            {result.years}
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            Jahre
          </p>
        </div>

        {/* Kosten pro Jahr */}
        <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200">
          <p className="text-xs font-semibold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest mb-2">
            💶 Kosten/Jahr
          </p>
          <p className="text-2xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
            {result.oldCostYear} €
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            durchschnittlich
          </p>
        </div>

        {/* Kosten pro Monat */}
        <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 sm:col-span-2">
          <p className="text-xs font-semibold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest mb-2">
            💰 Kosten/Monat
          </p>
          <p className="text-2xl font-bold text-[#007AFF] dark:text-[#0A84FF]">
            {result.oldCostMonth} €
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            durchschnittlich
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 dark:border-blue-500/10">
        <p className="text-sm text-[#1C1C1E] dark:text-white leading-relaxed">
          <span className="font-semibold">ℹ️ Hinweis:</span> Ein höherer Score
          bedeutet, dass dein Gerät bereits intensiv genutzt wurde. Je höher der
          Score, desto eher könnte sich eine Neuanschaffung lohnen.
        </p>
      </div>
    </div>
  );
}