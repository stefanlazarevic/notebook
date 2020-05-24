import React, { useState, useMemo, useRef, useLayoutEffect } from "react";

import "./DatePicker.css";

import CalendarGrid, { months } from "../CalendarGrid";
import useClassNames from "../Utils/hooks/classNames";

import Header from "./components/Header";
import useComponentDidMount from "../Utils/hooks/componentDidMount";
import useComponentWillUnmount from "../Utils/hooks/componentWillUnmount";

function DatePicker(props: any) {
	const className = useClassNames("DatePicker", props.className);

	const calendarGrid = useRef<HTMLTableElement | null>(null);

	const calendarButtons = useRef<HTMLButtonElement[] | null>([]);

	const focusedButtonIndex = useRef<number>(-1);

	const autoFocus = useRef<boolean>(true);

	const today = useMemo(function currentDateMemoCallback() {
		return new Date();
	}, []);

	const [selectedDate, setSelectedDate] = useState<Date | undefined>(props.selectedDate);

	const [month, setMonth] = useState(getSelectedMonth() || today.getMonth());

	const [year, setYear] = useState(getSelectedYear() || today.getFullYear());

	function onSelect(
		event: React.SyntheticEvent,
		selectedDay: number,
		selectedMonth: number,
		selectedYear: number
	) {
		const date = new Date(selectedYear, selectedMonth, selectedDay);

		if (month !== selectedMonth || year !== selectedYear) {
			setMonth(selectedMonth);
			setYear(selectedYear);
		} else {
			if (calendarButtons.current) {
				const focusedButton = calendarButtons.current[focusedButtonIndex.current];
				focusedButton.setAttribute("tabIndex", "-1");
			}
		}

		focusedButtonIndex.current = selectedDay - 1;
		autoFocus.current = true;

		setSelectedDate(date);
	}

	function getSelectedDay(): number | undefined {
		return selectedDate && selectedDate.getDate();
	}

	function getSelectedMonth(): number | undefined {
		return selectedDate && selectedDate.getMonth();
	}

	function getSelectedYear(): number | undefined {
		return selectedDate && selectedDate.getFullYear();
	}

	function navigateToPreviousMonth() {
		const previousMonth = month === 0 ? 11 : month - 1;
		const previousYear = month === 0 ? year - 1 : year;
		autoFocus.current = false;

		setMonth(previousMonth);
		setYear(previousYear);
	}

	function navigateToPreviousYear() {
		setYear((currentYear: number) => currentYear - 1);
		autoFocus.current = false;
	}

	function navigateToNextMonth() {
		const nextMonth = month === 11 ? 0 : month + 1;
		const nextYear = month === 11 ? year + 1 : year;
		autoFocus.current = false;

		setMonth(nextMonth);
		setYear(nextYear);
	}

	function navigateToNextYear() {
		setYear((currentYear: number) => currentYear + 1);
		autoFocus.current = false;
	}

	function updateCalendarButtons() {
		if (calendarGrid.current) {
			calendarButtons.current = Array.from(calendarGrid.current.querySelectorAll(".Day > button"));
			calendarButtons.current = calendarButtons.current.filter(
				(button: HTMLButtonElement) => !button.getAttribute("aria-hidden")
			);

			if (focusedButtonIndex.current > calendarButtons.current.length - 1) {
				focusedButtonIndex.current = calendarButtons.current.length - 1;
			}

			const focusedButton = calendarButtons.current[focusedButtonIndex.current];

			if (focusedButton) {
				focusedButton.setAttribute("tabIndex", "0");

				if (autoFocus.current) {
					focusedButton.focus();
				}
			}
		}
	}

	useComponentDidMount(function datePickerMountCallback() {
		const day = getSelectedDay() || today.getDate();
		focusedButtonIndex.current = day - 1;

		if (calendarButtons.current) {
			const focusedButton = calendarButtons.current[focusedButtonIndex.current];
			focusedButton.setAttribute("tabIndex", "0");
			focusedButton.focus();
		}
	});

	useComponentWillUnmount(function datePickerWillUnmountCallback() {
		focusedButtonIndex.current = -1;
		calendarButtons.current = null;
	});

	/**
	 * Lifecycle method called after month or year is changed as well
	 * as when date is selected.
	 */
	useLayoutEffect(function datePickerLayoutEffectCallback() {
		updateCalendarButtons();

		return function datePickerLayoutEffectCleanupCallback() {
			calendarButtons.current = null;
		};
	});

	return (
		<div id={props.id} data-testid={props.testid} className={className}>
			<Header
				month={months[month]}
				year={year}
				onPreviousYearNavigation={navigateToPreviousYear}
				onPreviousMonthNavigation={navigateToPreviousMonth}
				onNextMonthNavigation={navigateToNextMonth}
				onNextYearNavigation={navigateToNextYear}
			/>
			<CalendarGrid
				ref={calendarGrid}
				onSelect={onSelect}
				selectedDay={getSelectedDay()}
				selectedMonth={getSelectedMonth()}
				selectedYear={getSelectedYear()}
				month={month}
				year={year}
			/>
		</div>
	);
}

DatePicker.defaultProps = {};

DatePicker.displayName = "DatePicker";

export default DatePicker;
