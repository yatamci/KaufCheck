export default function ResultCard({ result }: any) {
  const score = parseInt(result.score);

  // Bestimme Farbe und Emoji basierend auf Score
  const getScoreStyle = (score: number) => {
    if (score >= 80) {
      return {
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-500/10 dark:bg-green-500/5",
        border: "border-green-500/30 dark:border-green-500/20",
        text: "text-green-600 dark:text-green-400",
        lightBg: "bg-green-50 dark:bg-green-950/30",
        emoji: "🎯",
        recommendation: "Lohnt sich! Ein Kauf ist sehr sinnvoll.",
        detail: "Dein Gerät hat seinen Lebenszyklus fast abgeschlossen.",
      };
    }
    if (score >= 60) {
      return {
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10 dark:bg-blue-500/5",
        border: "border-blue-500/30 dark:border-blue-500/20",
        text: "text-blue-600 dark:text-blue-400",
        lightBg: "bg-blue-50 dark:bg-blue-950/30",
        emoji: "💡",
        recommendation: "Überlegenswert. Bald könnte sich ein Neukauf lohnen.",
        detail: "Dein Gerät ist noch halbwegs nutzbar.",
      };
    }
    if (score >= 40) {
      return {
        color: "from-amber-500 to-orange-500",
        bg: "bg-amber-500/10 dark:bg-amber-500/5",
        border: "border-amber-500/30 dark:border-amber-500/20",
        text: "text-amber-600 dark:text-amber-400",
        lightBg: "bg-amber-50 dark:bg-amber-950/30",
        emoji: "⏳",
        recommendation: "Noch nicht dringend. Dein Gerät ist noch relativ neu.",
        detail: "Die Restnutzung ist noch hoch.",
      };
    }
    return {
      color: "from-red-500 to-pink-500",
      bg: "bg-red-500/10 dark:bg-red-500/5",
      border: "border-red-500/30 dark:border-red-500/20",
      text: "text-red-600 dark:text-red-400",
      lightBg: "bg-red-50 dark:bg-red-950/30",
      emoji: "✨",
      recommendation: "Sehr neu. Kauf jetzt wäre Verschwendung.",
      detail: "Dein Gerät ist noch sehr nutzbar.",
    };
  };

  const style = getScoreStyle(score);

  return (
    <div className="space-y-4">
      {/* Score Card – großer visueller Fokus mit Gradient */}
      <div
        className={`relative overflow-hidden p-8 rounded-3xl ${style.bg} border ${style.border} backdrop-blur-md`}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-5 blur-3xl`}
        ></div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-7xl font-black bg-gradient-to-br from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent">
                {result.score}%
              </span>
              <p className="text-sm font-semibold text-[#6C6C70] dark:text-[#98989E] mt-2 uppercase tracking-widest">
                Lohnt-sich-Score
              </p>
            </div>
            <div className="text-6xl">{style.emoji}</div>
          </div>

          <div className={`p-4 rounded-2xl ${style.lightBg} border ${style.border}`}>
            <p className={`font-semibold text-lg ${style.text}`}>
              {style.recommendation}
            </p>
            <p className="text-sm text-[#6C6C70] dark:text-[#98989E] mt-2">
              {style.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Metriken Grid – 3-spaltig */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Nutzungszeit */}
        <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 group">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
              ⏱️
            </span>
            <p className="text-xs font-bold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest">
              Nutzungszeit
            </p>
          </div>
          <p className="text-3xl font-black text-[#1C1C1E] dark:text-white">
            {result.years}
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            Jahre
          </p>
        </div>

        {/* Kosten pro Jahr */}
        <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 group">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
              📊
            </span>
            <p className="text-xs font-bold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest">
              Kosten/Jahr
            </p>
          </div>
          <p className="text-3xl font-black text-[#007AFF] dark:text-[#0A84FF]">
            {result.oldCostYear}€
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            Durchschnitt
          </p>
        </div>

        {/* Kosten pro Monat */}
        <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 group">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
              💰
            </span>
            <p className="text-xs font-bold text-[#8E8E93] dark:text-[#636366] uppercase tracking-widest">
              Kosten/Monat
            </p>
          </div>
          <p className="text-3xl font-black text-[#007AFF] dark:text-[#0A84FF]">
            {result.oldCostMonth}€
          </p>
          <p className="text-xs text-[#8E8E93] dark:text-[#636366] mt-1">
            Durchschnitt
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 border border-blue-500/20 dark:border-blue-500/10 backdrop-blur-md">
        <p className="text-sm leading-relaxed text-[#1C1C1E] dark:text-white">
          <span className="font-bold block mb-2">💡 Wie funktioniert der Score?</span>
          Je höher der Score, desto länger dein Gerät bereits in Nutzung ist und
          desto sinnvoller könnte ein Neukauf sein. Ein Score von 80%+ bedeutet,
          dass sich eine Neuanschaffung sehr wahrscheinlich lohnt.
        </p>
      </div>
    </div>
  );
}
