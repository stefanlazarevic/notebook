import React, { useMemo, useState, useRef, useLayoutEffect } from "react";

import "./Calendar.css";

import useClassNames from "../Utils/hooks/classNames";

import Day from "./components/Day";

import useComponentDidMount from "../Utils/hooks/componentDidMount";
import useNextMonth from "../Utils/hooks/nextMonth";
import usePreviousMonth from "../Utils/hooks/previousMonth";

function Calendar(props: any) {
	const className = useClassNames("Calendar", props.className);

	/**
	 * Датум објекат који се добија из `timestamp` броја. Овај датум представља одабрани датум у календару.
	 */
	const selectedDate = useMemo(() => new Date(props.timestamp), [props.timestamp]);

	/**
	 * Одабрани дан у месецу који се приказује на календару.
	 */
	const selectedDay = selectedDate.getDate();

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
	const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

	/**
	 * Одабрани календарски месец који се приказује у заглављу.
	 */
	const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());

	const [nextMonth, nextYear] = useNextMonth(currentMonth, currentYear);

	const [previousMonth, previousYear] = usePreviousMonth(currentMonth, currentYear);

	const currentMonthOffset = getFirstDayInMonth(currentMonth, currentYear);

	const numberOfDaysInCurrentMonth = getNumberOfDaysInMonth(currentMonth, currentYear);

	const numberOfDaysInPreviousMonth = getNumberOfDaysInMonth(previousMonth, previousYear);

	const focusedDayIndex = useRef<number>(-1);

	const days = useRef<Element[]>([]);

	const calendarDaysContainer = useRef<HTMLDivElement | null>(null);

	useComponentDidMount(() => {
		focusedDayIndex.current = selectedDay - 1;
		focusDayAt(focusedDayIndex.current);
	});

	useLayoutEffect(() => {
		console.log("Layout effect");
		if (calendarDaysContainer.current) {
			days.current = Array.from(calendarDaysContainer.current.children).filter(
				(element) => !element.getAttribute("aria-hidden")
			);

			if (focusedDayIndex.current > days.current.length - 1) {
				focusedDayIndex.current = days.current.length - 1;
			}

			console.log(focusedDayIndex.current);

			focusDayAt(focusedDayIndex.current);
		}
	}, [currentMonth, currentYear]);

	function getFirstDayInMonth(month: number, year: number): number {
		return new Date(year, month, 0).getDay();
	}

	function getNumberOfDaysInMonth(month: number, year: number): number {
		return 32 - new Date(year, month, 32).getDate();
	}

	function navigateToPreviousYear() {
		setCurrentYear(currentYear - 1);
	}

	function navigateToPreviousMonth() {
		setCurrentMonth(previousMonth);
	}

	function navigateToNextMonth() {
		setCurrentMonth(nextMonth);
	}

	function navigateToNextYear() {
		setCurrentYear(currentYear + 1);
	}

	function blurFocusedDay() {
		if (typeof focusedDayIndex.current === "number") {
			const dayToBlur = days.current[focusedDayIndex.current] as HTMLButtonElement;

			if (dayToBlur) {
				dayToBlur.setAttribute("tabIndex", "-1");
				dayToBlur.classList.remove("focused");
				dayToBlur.blur();
			}
		}
	}

	function focusDayAt(index: number) {
		if (days.current && days.current.length && typeof focusedDayIndex.current === "number") {
			const dayToFocus = days.current[index] as HTMLButtonElement;

			if (dayToFocus) {
				dayToFocus.setAttribute("tabIndex", "0");
				dayToFocus.classList.add("focused");
				dayToFocus.focus();
			}
		}
	}

	function selectAndFocus(index: number) {
		focusedDayIndex.current = index;
		focusDayAt(focusedDayIndex.current);
	}

	function focusNextDay() {
		if (focusedDayIndex.current === days.current.length - 1) {
			focusedDayIndex.current = 0;
			navigateToNextMonth();
		} else {
			selectAndFocus(focusedDayIndex.current + 1);
		}
	}

	function focusPreviousDay() {
		if (focusedDayIndex.current === 0) {
			focusedDayIndex.current = numberOfDaysInPreviousMonth - 1;
			navigateToPreviousMonth();
		} else {
			selectAndFocus(focusedDayIndex.current - 1);
		}
	}

	function focusPreviousWeek() {
		const previousWeekIndex = focusedDayIndex.current - 7;

		if (previousWeekIndex < 0) {
			console.log(previousWeekIndex);
			focusedDayIndex.current = numberOfDaysInPreviousMonth - -previousWeekIndex;
			navigateToPreviousMonth();
		} else {
			selectAndFocus(previousWeekIndex);
		}
	}

	function focusNextWeek() {
		const nextWeekIndex = focusedDayIndex.current + 7;

		if (nextWeekIndex >= numberOfDaysInCurrentMonth) {
			focusedDayIndex.current = nextWeekIndex - numberOfDaysInCurrentMonth;
			navigateToNextMonth();
		} else {
			selectAndFocus(nextWeekIndex);
		}

		console.log(nextWeekIndex);
	}

	function focusFirstDay() {
		selectAndFocus(0);
	}

	function focusLastDay() {
		selectAndFocus(days.current.length - 1);
	}

	function onClick(event: React.MouseEvent<HTMLButtonElement>, index: number, timestamp: number) {
		blurFocusedDay();

		if (index < 0) {
			focusedDayIndex.current = numberOfDaysInPreviousMonth + index;
			navigateToPreviousMonth();
		} else if (index >= days.current.length) {
			focusedDayIndex.current = index - (numberOfDaysInCurrentMonth - 1) - 1;
			navigateToNextMonth();
		} else {
			selectAndFocus(index);
		}
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		const { keyCode, altKey } = event;

		// Alt + Page down
		if (altKey && keyCode === 33) {
			blurFocusedDay();
			navigateToNextYear();
		}

		// Alt + Page up
		if (altKey && keyCode === 34) {
			blurFocusedDay();
			navigateToPreviousYear();
		}

		// Page down
		if (!altKey && keyCode === 33) {
			blurFocusedDay();
			navigateToNextMonth();
		}

		// Page up
		if (!altKey && keyCode === 34) {
			blurFocusedDay();
			navigateToPreviousMonth();
		}

		// Arrow right
		if (keyCode === 39) {
			blurFocusedDay();
			focusNextDay();
		}

		// Arrow left
		if (keyCode === 37) {
			blurFocusedDay();
			focusPreviousDay();
		}

		// Arrow down
		if (keyCode === 40) {
			blurFocusedDay();
			focusNextWeek();
		}

		// Arrow up
		if (keyCode === 38) {
			blurFocusedDay();
			focusPreviousWeek();
		}

		// Home
		if (keyCode === 36) {
			blurFocusedDay();
			focusFirstDay();
		}

		if (keyCode === 35) {
			blurFocusedDay();
			focusLastDay();
		}
	}

	function renderDays() {
		const output = [];

		let index = -(currentMonthOffset + 1);

		for (let offset = currentMonthOffset; offset >= 0; offset--, index++) {
			const day = numberOfDaysInPreviousMonth - offset;
			output.push(<Day hidden={true} index={index} day={day} onClick={onClick} />);
		}

		for (let day = 1; day <= numberOfDaysInCurrentMonth; day++, index++) {
			output.push(<Day index={index} day={day} month={currentMonth} year={currentYear} onClick={onClick} />);
		}

		for (let day = 41; day > currentMonthOffset + numberOfDaysInCurrentMonth; day--, index++) {
			output.push(<Day hidden={true} index={index} day={42 - day} onClick={onClick} />);
		}

		return output;
	}

	return (
		<div role="application">
			<div id={props.id} data-testid={props.testid} className={className} role="presentation" onKeyDown={onKeyDown}>
				<div className="DayLabels">
					{dayLabels.map((dayLabel: string) => (
						<div aria-hidden={true} title={dayLabel}>
							<abbr>{dayLabel.slice(0, 2)}</abbr>
						</div>
					))}
				</div>
				<div ref={calendarDaysContainer} className="Days">
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
