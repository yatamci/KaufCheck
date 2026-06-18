export function calculateScore(
  price: number,
  date: string,
  newPrice: number,
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

  // Berechne Restnutzung (0-1)
  const restnutzung = Math.max(1 - Math.min(years / life, 1), 0);

  // Berechne den Lohnt-sich-Score
  // Je höher die Restnutzung und je niedriger die Kosten pro Jahr, desto niedriger der Score (lohnt sich nicht)
  // Je niedriger die Restnutzung und je höher die Kosten pro Jahr, desto höher der Score (lohnt sich zu kaufen)
  const normalizedOldCostYear = Math.min(oldCostYear / 500, 1);
  const score = Math.round(
    (1 - restnutzung) * 100 * Math.min(normalizedOldCostYear, 1)
  );

  return {
    years: years.toFixed(1),
    oldCostYear: oldCostYear.toFixed(2),
    oldCostMonth: oldCostMonth.toFixed(2),
    score,
    newPrice: newPrice.toFixed(2),
  };
}
