/**
 *
 * @param currentMonth
 * @param currentYear
 */
export default function usePreviousMonth(currentMonth: number, currentYear: number): [number, number] {
	const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
	const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

	return [previousMonth, previousYear];
}
