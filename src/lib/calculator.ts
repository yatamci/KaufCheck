export function calculateScore(
  price: number,
  date: string,
  life: number
) {
  const bought = new Date(date);
  const now = new Date();

  // Berechne Jahre seit Kauf
  const years = (now.getTime() - bought.getTime()) / 31557600000;

  // Berechne Kosten pro Jahr basierend auf Alter
  const oldCostYear = price / years;

  // Berechne Kosten pro Monat
  const oldCostMonth = oldCostYear / 12;

  // Berechne Nutzungsrate (0-1)
  const usage = Math.min(years / life, 1);

  // Berechne Score basierend auf Nutzungsrate
  // Score wird höher je näher man am Ende der Lebensdauer ist
  const score = Math.round(usage * 100);

  return {
    years: years.toFixed(1),
    oldCostYear: oldCostYear.toFixed(2),
    oldCostMonth: oldCostMonth.toFixed(2),
    score,
  };
}