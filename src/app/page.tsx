import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6ecf5] to-[#d5dde8] dark:from-[#0a0a0a] dark:to-[#1a1a1a] p-4 sm:p-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* Glass-Karte – jetzt mit richtigem Glasmorphismus */}
        <div className="relative rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/40 p-6 sm:p-10 transition-all duration-300">
          
          {/* Header mit Titel und ThemeToggle */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1C1E] dark:text-white">
                KaufCheck
              </h1>
              <p className="text-base sm:text-lg text-[#6C6C70] dark:text-[#98989E] mt-1 font-normal">
                Berechne, wann sich eine Neuanschaffung lohnt.
              </p>
            </div>
            <ThemeToggle />
          </div>

          {/* Calculator – jetzt ohne weitere Kapselung, direkt in der Glass-Karte */}
          <Calculator />
        </div>
      </div>
    </main>
  );
}