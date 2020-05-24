import React, { useState, useMemo, useRef, useLayoutEffect, useCallback } from "react";

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

	/**
	 * Променљива која у себи садржи месец и годину коју календар приказује на екрану.
	 * Ова променљива је конструисана као `Tupple` при чему је прва вредност месец а друга година.
	 */
	const [calendarView, setCalendarView] = useState<[number, number]>([
		getSelectedMonth() || today.getMonth(),
		getSelectedYear() || today.getFullYear(),
	]);

	const navigateToPreviousYear = useCallback(function navigateToPreviousYearCallback() {
		setCalendarView((calendarView: [number, number]) => [calendarView[0], calendarView[1] - 1]);
	}, []);

	const navigateToNextYear = useCallback(function navigateToNextYearCallback() {
		setCalendarView((calendarView: [number, number]) => [calendarView[0], calendarView[1] + 1]);
	}, []);

	const navigateToPreviousMonth = useCallback(function navigateToPreviousMonthCallback() {
		setCalendarView((calendarView: [number, number]) => {
			const previousMonth = calendarView[0] === 0 ? 11 : calendarView[0] - 1;
			const previousYear = calendarView[0] === 0 ? calendarView[1] - 1 : calendarView[1];

			return [previousMonth, previousYear];
		});
	}, []);

	const navigateToNextMonth = useCallback(function navigateToNextMonthCallback() {
		setCalendarView((calendarView: [number, number]) => {
			const nextMonth = calendarView[0] === 11 ? 0 : calendarView[0] + 1;
			const nextYear = calendarView[0] === 11 ? calendarView[1] + 1 : calendarView[1];

			return [nextMonth, nextYear];
		});
	}, []);

	function getSelectedDay(): number | undefined {
		return selectedDate && selectedDate.getDate();
	}

	function getSelectedMonth(): number | undefined {
		return selectedDate && selectedDate.getMonth();
	}

	function getSelectedYear(): number | undefined {
		return selectedDate && selectedDate.getFullYear();
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

	/**
	 * Функција која обрађује акцију одабира дана у календару.
	 * Приликом одабира дана, уколико се дан налази у истом месецу где и фокусирани дан,
	 * фокус се пребацује на одабрани дан. Уколико се одабрани дан налази у претходном или
	 * следећем месецу, функција пребацује календар на месец и годину у ком се одабрани дан налази,
	 * а затим функција покушава да фокусира исти дан у новом месецу.
	 */
	function onSelect(
		event: React.SyntheticEvent,
		selectedDay: number,
		selectedMonth: number,
		selectedYear: number
	) {
		const date = new Date(selectedYear, selectedMonth, selectedDay);

		if (calendarView[0] !== selectedMonth || calendarView[1] !== selectedYear) {
			setCalendarView([selectedMonth, selectedYear]);
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

	function onPreviousYearNavigation(event: React.SyntheticEvent<HTMLButtonElement>) {
		autoFocus.current = false;
		navigateToPreviousYear();
	}

	function onPreviousMonthNavigation(event: React.SyntheticEvent<HTMLButtonElement>) {
		autoFocus.current = false;
		navigateToPreviousMonth();
	}

	function onNextMonthNavigation(event: React.SyntheticEvent<HTMLButtonElement>) {
		autoFocus.current = false;
		navigateToNextMonth();
	}

	function onNextYearNavigation(event: React.SyntheticEvent<HTMLButtonElement>) {
		autoFocus.current = false;
		navigateToNextYear();
	}

	function onCalendarPageUp(event: React.KeyboardEvent<HTMLTableElement>) {
		const { shiftKey } = event;
		autoFocus.current = true;

		if (shiftKey) {
			navigateToNextYear();
		} else {
			navigateToNextMonth();
		}
	}

	function onCalendarPageDown(event: React.KeyboardEvent<HTMLTableElement>) {
		const { shiftKey } = event;

		autoFocus.current = true;

		if (shiftKey) {
			navigateToPreviousYear();
		} else {
			navigateToPreviousMonth();
		}
	}

	function onCalendarHome(event: React.KeyboardEvent<HTMLTableElement>) {
		const { shiftKey } = event;

		if (shiftKey) {
			if (calendarButtons.current) {
				const focusedButton = calendarButtons.current[focusedButtonIndex.current];
				focusedButton.setAttribute("tabIndex", "-1");
				focusedButtonIndex.current = 0;
				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
			}

			return;
		}

		const offset = new Date(calendarView[1], calendarView[0], 0).getDay();
		const focusedDay = focusedButtonIndex.current + 1;
		const weekDay = (offset + focusedDay) % 7;

		if (weekDay === 0) {
			return;
		} else {
			if (calendarButtons.current) {
				const focusedButton = calendarButtons.current[focusedButtonIndex.current];
				focusedButton.setAttribute("tabIndex", "-1");
				focusedButtonIndex.current = focusedDay - weekDay - 1;

				if (focusedButtonIndex.current < 0) {
					focusedButtonIndex.current = 0;
				}

				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
			}
		}
	}

	function onCalendarEnd(event: React.KeyboardEvent<HTMLTableElement>) {
		const { shiftKey } = event;

		if (shiftKey) {
			if (calendarButtons.current) {
				const focusedButton = calendarButtons.current[focusedButtonIndex.current];
				focusedButton.setAttribute("tabIndex", "-1");
				focusedButtonIndex.current = calendarButtons.current.length - 1;
				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
			}

			return;
		}

		const offset = new Date(calendarView[1], calendarView[0], 0).getDay();
		const focusedDay = focusedButtonIndex.current + 1;
		const weekDay = (offset + focusedDay) % 7;

		if (weekDay === 6) {
			return;
		} else {
			if (calendarButtons.current) {
				const focusedButton = calendarButtons.current[focusedButtonIndex.current];
				focusedButton.setAttribute("tabIndex", "-1");
				focusedButtonIndex.current = focusedDay + (6 - weekDay) - 1;

				if (focusedButtonIndex.current > calendarButtons.current.length - 1) {
					focusedButtonIndex.current = calendarButtons.current.length - 1;
				}

				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
			}
		}
	}

	function onCalendarArrowLeft(event: React.KeyboardEvent<HTMLTableElement>) {
		if (calendarButtons.current) {
			const focusedButton = calendarButtons.current[focusedButtonIndex.current];
			focusedButton.setAttribute("tabIndex", "-1");

			if (focusedButtonIndex.current === 0) {
				autoFocus.current = true;
				const previousMonth = calendarView[0] === 0 ? 11 : calendarView[0] - 1;
				const previousYear = calendarView[0] === 0 ? calendarView[1] - 1 : calendarView[1];
				const lastDayIndex = 31 - new Date(previousYear, previousMonth, 32).getDate();
				focusedButtonIndex.current = lastDayIndex;
				navigateToPreviousMonth();
			} else {
				focusedButtonIndex.current = focusedButtonIndex.current - 1;
				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
			}
		}
	}

	function onCalendarArrowRight(event: React.KeyboardEvent<HTMLTableElement>) {
		if (calendarButtons.current) {
			const focusedButton = calendarButtons.current[focusedButtonIndex.current];
			focusedButton.setAttribute("tabIndex", "-1");

			if (focusedButtonIndex.current === calendarButtons.current.length - 1) {
				autoFocus.current = true;
				focusedButtonIndex.current = 0;
				navigateToNextMonth();
			} else {
				focusedButtonIndex.current = focusedButtonIndex.current + 1;
				const toFocusButton = calendarButtons.current[focusedButtonIndex.current];
				toFocusButton.setAttribute("tabIndex", "0");
				toFocusButton.focus();
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
				month={months[calendarView[0]]}
				year={calendarView[1]}
				onPreviousYearNavigation={onPreviousYearNavigation}
				onPreviousMonthNavigation={onPreviousMonthNavigation}
				onNextMonthNavigation={onNextMonthNavigation}
				onNextYearNavigation={onNextYearNavigation}
			/>
			<CalendarGrid
				ref={calendarGrid}
				selectedDay={getSelectedDay()}
				selectedMonth={getSelectedMonth()}
				selectedYear={getSelectedYear()}
				month={calendarView[0]}
				year={calendarView[1]}
				onSelect={onSelect}
				onPageUp={onCalendarPageUp}
				onPageDown={onCalendarPageDown}
				onHome={onCalendarHome}
				onEnd={onCalendarEnd}
				onArrowLeft={onCalendarArrowLeft}
				onArrowRight={onCalendarArrowRight}
			/>
		</div>
	);
}

DatePicker.defaultProps = {};

DatePicker.displayName = "DatePicker";

export default DatePicker;
