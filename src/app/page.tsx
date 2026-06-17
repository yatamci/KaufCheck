import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f5fa] dark:bg-black p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Header – jetzt ohne Glass, klar und bündig */}
        <div className="flex justify-between items-center mb-2 px-1">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#1C1C1E] dark:text-white">
              KaufCheck
            </h1>
            <p className="text-base text-[#8E8E93] dark:text-[#98989E] mt-0.5">
              Berechne, wann sich eine Neuanschaffung lohnt.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Calculator – ohne zusätzliche Glass-Karte, direkt im Flow */}
        <div className="mt-4">
          <Calculator />
        </div>
      </div>
    </main>
  );
}