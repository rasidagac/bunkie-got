export function getResetDate(resetDayOfMonth: number) {
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let resetDate = new Date(currentYear, currentMonth, resetDayOfMonth);

  if (currentDay >= resetDayOfMonth) {
    resetDate.setMonth(resetDate.getMonth() + 1);
  }

  if (resetDayOfMonth === 31) {
    resetDate = new Date(currentYear, currentMonth + 1, 0);
  }

  return resetDate;
}
