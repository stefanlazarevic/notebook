import React, { useMemo, useState, useRef } from "react";

import "./Calendar.css";

import useClassNames from "../Utils/hooks/classNames";

function Calendar(props: any) {
	const previousYearButton = useRef<HTMLButtonElement | null>(null);
	const nextYearButton = useRef<HTMLButtonElement | null>(null);

	const className = useClassNames("Calendar", props.className);

	const date = useMemo(() => new Date(props.timestamp), [props.timestamp]);

	/**
	 * Дани у недељи почињу од недеље због тога што JavaScript `Date.getDay()`
	 * метода враћа тренутни дан по индексу при чему је нулти индекс недеља.
	 */
	const days = useMemo(() => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], []);

	const months = useMemo(
		() => [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		[]
	);

	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth());

	function navigateToPreviousYear() {
		setYear(year - 1);
	}

	function navigateToNextYear() {
		setYear(year + 1);
	}

	function navigateToNextMonth() {
		setMonth(month === 11 ? 0 : month + 1);
		setYear(month === 11 ? year + 1 : year);
	}

	function navigateToPreviousMonth() {
		setMonth(month === 0 ? 11 : month - 1);
		setYear(month === 0 ? year - 1 : year);
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		const { keyCode, altKey } = event;

		if (altKey && keyCode === 33) {
			event.preventDefault();

			navigateToNextYear();

			return;
		}

		if (altKey && keyCode === 34) {
			event.preventDefault();

			navigateToPreviousYear();

			return;
		}

		if (keyCode === 33) {
			navigateToNextMonth();
		}

		if (keyCode === 34) {
			navigateToPreviousMonth();
		}

		if (keyCode === 27 && typeof props.onEscape === "function") {
			props.onEscape(event);
		}
	}

	function getNumberOfDaysInMonth(year: number, month: number): number {
		return 32 - new Date(year, month, 32).getDate();
	}

	function getFirstDayInMonth(year: number, month: number): number {
		return new Date(year, month, 0).getDay();
	}

	function renderDays(): any[] {
		const currentMonth = month;
		const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
		const currentYear = year;
		const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

		const daysInCurrentMonth = getNumberOfDaysInMonth(currentYear, currentMonth);
		const daysInPreviousMonth = getNumberOfDaysInMonth(previousYear, previousMonth);

		let offsetDays = getFirstDayInMonth(year, month) + 1;

		console.log(offsetDays);

		if (offsetDays === 7) {
			offsetDays = 0;
		}

		const days = [];

		// Render days in the previous month.
		for (let index = offsetDays; index > 0; index--) {
			const day = (
				<div className="Day" aria-hidden={true} aria-disabled={true}>
					{daysInPreviousMonth - index + 1}
				</div>
			);

			days.push(day);
		}

		// Render days in the current month.
		for (let index = 0; index < daysInCurrentMonth; index++) {
			const day = <div className="Day">{index + 1}</div>;

			days.push(day);
		}

		const totalShowingDays = offsetDays + daysInCurrentMonth;

		for (let index = totalShowingDays; index < 42; index++) {
			const day = (
				<div className="Day" aria-hidden={true} aria-disabled={true}>
					{index - totalShowingDays + 1}
				</div>
			);

			days.push(day);
		}

		return days;
	}

	return (
		<div role="application">
			<div id={props.id} data-testid={props.testid} className={className} role="presentation" onKeyDown={onKeyDown}>
				<div className="YearRow" role="presentation">
					<button
						ref={previousYearButton}
						aria-label="Previous year"
						title="Previous year"
						onClick={navigateToPreviousYear}
					>
						<span aria-hidden={true}>⇐</span>
					</button>
					<div role="presentation">
						<span>{year}</span>
					</div>
					<button ref={nextYearButton} aria-label="Next year" title="Next year" onClick={navigateToNextYear}>
						<span aria-hidden={true}>⇒</span>
					</button>
				</div>
				<div className="MonthRow" role="presentation">
					<button
						ref={previousYearButton}
						aria-label="Previous month"
						title="Previous month"
						onClick={navigateToPreviousMonth}
					>
						<span aria-hidden={true}>⇐</span>
					</button>
					<div role="presentation">
						<span>{months[month]}</span>
					</div>
					<button ref={nextYearButton} aria-label="Next month" title="Next month" onClick={navigateToNextMonth}>
						<span aria-hidden={true}>⇒</span>
					</button>
				</div>
				<div className="Days">
					{days.map((dayLabel) => (
						<div aria-hidden={true} title={dayLabel}>
							<span>{dayLabel.charAt(0)}</span>
						</div>
					))}
					{renderDays()}
				</div>
			</div>
		</div>
	);
}

Calendar.defaultProps = {
	timestamp: Date.now(),
};

Calendar.displayName = "Calendar";

export default Calendar;
