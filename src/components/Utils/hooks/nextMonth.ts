/**
 *
 * @param currentMonth
 * @param currentYear
 */
export default function useNextMonth(currentMonth: number, currentYear: number): [number, number] {
	const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
	const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

	return [nextMonth, nextYear];
}
