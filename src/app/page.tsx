import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "KaufCheck - Lohnt sich ein Neukauf?",
  description:
    "Berechne einfach, ob sich ein Neukauf deines Geräts lohnt. Professionelle Analyse deiner Kaufhistorie.",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="backdrop-blur-md border-b border-white/10 dark:border-white/5 sticky top-0 z-50 bg-white/50 dark:bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent">
                  KaufCheck
                </h1>
                <p className="text-xs text-[#8E8E93] dark:text-[#636366] font-medium">
                  Lohnt sich der Neukauf?
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="w-full max-w-4xl">
            {/* Hero Section */}
            <div className="mb-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-[#1C1C1E] dark:text-white mb-4">
                Sollte ich mein Gerät ersetzen?
              </h2>
              <p className="text-lg text-[#6C6C70] dark:text-[#98989E] max-w-2xl mx-auto leading-relaxed">
                KaufCheck analysiert deine Kaufhistorie und berechnet einen
                professionellen Score, der dir zeigt, ob sich eine
                Neuanschaffung lohnt.
              </p>
            </div>

            {/* Calculator Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/50">
              <Calculator />
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-[#1C1C1E] dark:text-white mb-2">
                  Präzise Berechnung
                </h3>
                <p className="text-sm text-[#6C6C70] dark:text-[#98989E]">
                  Intelligente Analyse basierend auf Kaufpreis und Nutzungsdauer
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-[#1C1C1E] dark:text-white mb-2">
                  Sofort verfügbar
                </h3>
                <p className="text-sm text-[#6C6C70] dark:text-[#98989E]">
                  Ergebnisse in Echtzeit ohne Wartezeit
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-[#1C1C1E] dark:text-white mb-2">
                  100% Privat
                </h3>
                <p className="text-sm text-[#6C6C70] dark:text-[#98989E]">
                  Keine Daten werden gespeichert oder weitergegeben
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="backdrop-blur-md border-t border-white/10 dark:border-white/5 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm text-[#8E8E93] dark:text-[#636366]">
              © 2024 KaufCheck • Erstelle bessere Kaufentscheidungen 💡
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
