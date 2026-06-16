import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-[#f2f5fa]
      to-[#e8ecf4]
      dark:from-black
      dark:to-neutral-900
      p-5 sm:p-8
    ">
      <div className="
        w-full max-w-xl mx-auto
        glass rounded-[52px] p-6 sm:p-8
        transition-all duration-300
      ">
        {/* Header mit iOS-typischem Abstand */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="
              inline-block text-[0.7rem] font-semibold tracking-wider
              uppercase text-white bg-[#007AFF]
              px-3 py-1 rounded-full mb-3
            ">
              Beta
            </span>
            <h1 className="
              text-4xl sm:text-5xl font-bold tracking-tight
              text-[#1C1C1E] dark:text-white
              leading-[1.1]
            ">
              KaufCheck
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <p className="
          mt-3 text-lg sm:text-xl font-normal
          text-[#3A3A3C] dark:text-[#98989E]
          leading-relaxed
        ">
          Berechne, wann sich eine Neuanschaffung wirklich lohnt.
        </p>

        <div className="mt-8">
          <Calculator />
        </div>
      </div>
    </main>
  );
}