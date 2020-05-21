import React, { useMemo, useState, useRef, useLayoutEffect } from "react";

import "./Calendar.css";

import useClassNames from "../Utils/hooks/classNames";

import Day from "./components/Day";

function Calendar(props: any) {
	const className = useClassNames("Calendar", props.className);

	/**
	 * Датум објекат који се добија из `timestamp` броја. Овај датум представља одабрани датум у календару.
	 */
	const date = useMemo(() => new Date(props.timestamp), [props.timestamp]);

	/**
	 * Називи дана у недељи који се приказују у заглављу календара. Дани почињу од недеље због тога
	 * што `Date.getDay()` метода враћа тренутни дан по индексу при чему је нулти индекс недеља.
	 */
	const dayLabels = useMemo(() => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], []);

	/**
	 * Називи месеци који се приказују у заглављу календара.
	 */
	const monthLabels = useMemo(
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

	/**
	 * Одабрана календарска година која се приказује у заглављу.
	 */
	const [year, setYear] = useState(date.getFullYear());

	/**
	 * Одабрани календарски месец који се приказује у заглављу.
	 */
	const [month, setMonth] = useState(date.getMonth());

	const currentDayOffset = useMemo(() => getFirstDayInMonth(year, month), [year, month]);

	/*=== Референце потребне за приступачност. ===*/

	/**
	 * Контејнер који садржи све дане у одабраном месецу и години.
	 * `daysContainer.current.children` колекција се складишти у `days` променљивој.
	 */
	const daysContainer = useRef<HTMLDivElement | null>(null);

	/**
	 * Колекција дугмића који се добављају након сваке промене године или месеца.
	 * Дугмићима се директно приступа како би се манипулисао фокус над њима.
	 */
	const days = useRef<HTMLCollection | null>(null);

	/**
	 * Индекс тренутно фокусираног дугмета.
	 */
	const focusedDayIndex = useRef<number>(-1);

	/**
	 * Пребацивање на претходну годину у календару.
	 */
	function navigateToPreviousYear() {
		setYear(year - 1);
	}

	/**
	 * Пребацивање на следећу годину у календару.
	 */
	function navigateToNextYear() {
		setYear(year + 1);
	}

	/**
	 * Пребацивање на следећи месец у календару.
	 */
	function navigateToNextMonth() {
		setMonth(month === 11 ? 0 : month + 1);
		setYear(month === 11 ? year + 1 : year);
	}

	/**
	 * Пребацивање на претходни месец у календару.
	 */
	function navigateToPreviousMonth() {
		setMonth(month === 0 ? 11 : month - 1);
		setYear(month === 0 ? year - 1 : year);
	}

	/**
	 * Уклањање фокуса са тренутно фокусираног дана.
	 */
	function blurFocusedDay() {
		if (typeof focusedDayIndex.current === "number" && days.current && days.current.length) {
			const focusedDay = days.current[focusedDayIndex.current] as HTMLButtonElement;

			if (focusedDay) {
				focusedDay.setAttribute("tabIndex", "-1");
				focusedDay.classList.remove("focused");
			}
		}
	}

	function focusDayAt(index: number) {
		if (days.current && days.current.length) {
			const dayToFocus = days.current[index] as HTMLButtonElement;

			if (dayToFocus) {
				dayToFocus.setAttribute("tabIndex", "0");
				dayToFocus.classList.add("focused");
				dayToFocus.focus();
				focusedDayIndex.current = index;
			}
		}
	}

	function focusPreviousDay() {
		const indexToFocus = focusedDayIndex.current - 1;

		blurFocusedDay();

		if (indexToFocus < 0) {
			navigateToPreviousMonth();
			focusDayAt(41);
		} else {
			focusDayAt(indexToFocus);
		}
	}

	function focusNextDay() {
		const indexToFocus = focusedDayIndex.current + 1;

		blurFocusedDay();

		if (indexToFocus > 41) {
			navigateToNextMonth();
			focusDayAt(0);
		} else {
			focusDayAt(indexToFocus);
		}
	}

	function focusPreviousWeek() {
		const indexToFocus = focusedDayIndex.current - 7;

		blurFocusedDay();

		if (indexToFocus < 0) {
			navigateToPreviousMonth();
			focusDayAt(5 * indexToFocus);
		} else {
			focusDayAt(indexToFocus);
		}
	}

	function focusNextWeek() {
		const indexToFocus = focusedDayIndex.current + 7;

		blurFocusedDay();
		focusDayAt(indexToFocus);
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

		if (keyCode === 37) {
			focusPreviousDay();
		}

		if (keyCode === 39) {
			focusNextDay();
		}

		if (keyCode === 38) {
			focusPreviousWeek();
		}

		if (keyCode === 40) {
			focusNextWeek();
		}
	}

	function getNumberOfDaysInMonth(year: number, month: number): number {
		return 32 - new Date(year, month, 32).getDate();
	}

	function getFirstDayInMonth(year: number, month: number): number {
		return new Date(year, month, 0).getDay();
	}

	useLayoutEffect(() => {
		if (daysContainer.current) {
			days.current = daysContainer.current.children;

			const focusedDay = days.current[focusedDayIndex.current] as HTMLButtonElement;

			if (focusedDay) {
				focusedDay.setAttribute("tabIndex", "0");
				focusedDay.focus();
			}
		}
	}, [year, month]);

	/**
	 *
	 */
	function renderDays() {
		const previousMonth = month === 0 ? 11 : month - 1;
		const previousYear = month === 0 ? year - 1 : year;

		const currentMonth = month;
		const currentYear = year;

		const nextMonth = month === 11 ? 0 : month + 1;
		const nextYear = month === 11 ? year + 1 : year;

		const previousDays = getNumberOfDaysInMonth(previousYear, previousMonth);
		const numberOfDaysInSelectedMonth = getNumberOfDaysInMonth(year, month);

		const selectedDay = date.getDate();
		const selectedMonth = date.getMonth();
		const selectedYear = date.getFullYear();

		const remainingDays = 42 - (currentDayOffset + 1) - numberOfDaysInSelectedMonth;

		const output = [];

		let index = 0;

		while (index <= currentDayOffset) {
			const day = previousDays - currentDayOffset + index;
			const selected = selectedDay === day && selectedMonth === previousMonth && selectedYear === previousYear;

			if (selected && focusedDayIndex.current === -1) {
				focusedDayIndex.current = index;
			}

			output.push(<Day index={index} day={day} month={previousMonth} year={previousYear} selected={selected} />);
			index++;
		}

		for (let day = 1; day <= numberOfDaysInSelectedMonth; day++, index++) {
			const selected = selectedDay === day && selectedMonth === currentMonth && selectedYear === currentYear;

			if (selected && focusedDayIndex.current === -1) {
				focusedDayIndex.current = index;
			}

			output.push(<Day index={index} day={day} month={currentMonth} year={currentYear} selected={selected} />);
		}

		for (let day = 1; day <= remainingDays; day++) {
			const selected = selectedDay === day && selectedMonth === nextMonth && selectedYear === nextYear;

			if (selected && focusedDayIndex.current === -1) {
				focusedDayIndex.current = index;
			}

			output.push(<Day index={index} day={day} month={nextMonth} year={nextYear} selected={selected} />);
		}

		return output;
	}

	return (
		<div role="application">
			<div id={props.id} data-testid={props.testid} className={className} role="presentation" onKeyDown={onKeyDown}>
				{/* <div className="YearRow" role="presentation">
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
						<span>{monthLabels[month]}</span>
					</div>
					<button ref={nextYearButton} aria-label="Next month" title="Next month" onClick={navigateToNextMonth}>
						<span aria-hidden={true}>⇒</span>
					</button>
				</div> */}
				<div className="DayLabels">
					{dayLabels.map((dayLabel: string) => (
						<div aria-hidden={true} title={dayLabel}>
							<abbr>{dayLabel.slice(0, 2)}</abbr>
						</div>
					))}
				</div>
				<div ref={daysContainer} className="Days">
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
