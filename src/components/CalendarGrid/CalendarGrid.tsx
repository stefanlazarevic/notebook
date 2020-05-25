import React, { useMemo, useCallback, useLayoutEffect } from "react";

import "./CalendarGrid.css";

import { weekdays, months } from "./i18n/en";

import { CalendarGridProps } from "./CalendarGridProps";

import useClassNames from "../Utils/hooks/classNames";

import Day from "./components/Day";
import Weekday from "./components/Weekday";
import Utils from "../Utils";

interface CalendarGridRecord {
	day: number;
	month: number;
	year: number;
	dayOfWeek: number;
	hidden?: boolean;
	disabled?: boolean;
	selected?: boolean;
}

function CalendarGrid(props: CalendarGridProps, tableReference: React.Ref<HTMLTableElement>) {
	const className = useClassNames("CalendarGrid", props.className);

	const rows = useMemo(() => Array.from({ length: 6 }, (_, index: number) => index), []);

	const getGridRecords = useCallback((): CalendarGridRecord[] => {
		const today = new Date();

		const month = typeof props.month === "number" ? props.month : today.getMonth();
		const year = typeof props.year === "number" ? props.year : today.getFullYear();
		const numberOfDays = 32 - new Date(year, month, 32).getDate();
		const offset = new Date(year, month, 0).getDay();
		const previousMonth = month === 0 ? 11 : month - 1;
		const previousYear = month === 0 ? year - 1 : year;
		const lastDayInPreviousMonth = 32 - new Date(previousYear, previousMonth, 32).getDate();
		const remainingDays = 41 - (offset + numberOfDays);
		const nextMonth = month === 11 ? 0 : month + 1;
		const nextYear = month === 11 ? year + 1 : year;

		const records: CalendarGridRecord[] = [];

		// Build previous month.
		for (let day = lastDayInPreviousMonth - offset; day <= lastDayInPreviousMonth; day++) {
			records.push({
				day,
				month: previousMonth,
				year: previousYear,
				dayOfWeek: (offset + day) % 7,
				hidden: true,
				selected:
					props.selectedDay === day &&
					props.selectedMonth === previousMonth &&
					props.selectedYear === previousYear,
			});
		}

		// Build current month.
		for (let day = 1; day <= numberOfDays; day++) {
			records.push({
				day,
				month,
				year,
				dayOfWeek: (offset + day) % 7,
				selected:
					props.selectedDay === day && props.selectedMonth === month && props.selectedYear === year,
			});
		}

		// Build next month.
		for (let day = 1; day <= remainingDays; day++) {
			records.push({
				day,
				month: nextMonth,
				year: nextYear,
				dayOfWeek: day % 7,
				hidden: true,
				selected:
					props.selectedDay === day &&
					props.selectedMonth === nextMonth &&
					props.selectedYear === nextYear,
			});
		}

		return records;
	}, [props.month, props.year, props.selectedDay, props.selectedMonth, props.selectedYear]);

	function onKeyDown(event: React.KeyboardEvent<HTMLTableElement>) {
		const { keyCode } = event;
		const key = Utils.Keyboard.KeyMap.get(keyCode);

		if (key === Utils.Keyboard.Key.ESCAPE && typeof props.onEscape === "function") {
			props.onEscape(event);
		}

		if (key === Utils.Keyboard.Key.ARROW_LEFT && typeof props.onArrowLeft === "function") {
			props.onArrowLeft(event);
		}

		if (key === Utils.Keyboard.Key.ARROW_RIGHT && typeof props.onArrowRight === "function") {
			props.onArrowRight(event);
		}

		if (key === Utils.Keyboard.Key.ARROW_UP && typeof props.onArrowUp === "function") {
			props.onArrowUp(event);
		}

		if (key === Utils.Keyboard.Key.ARROW_DOWN && typeof props.onArrowDown === "function") {
			props.onArrowDown(event);
		}

		if (key === Utils.Keyboard.Key.PAGE_UP && typeof props.onPageUp === "function") {
			props.onPageUp(event);
		}

		if (key === Utils.Keyboard.Key.PAGE_DOWN && typeof props.onPageDown === "function") {
			props.onPageDown(event);
		}

		if (key === Utils.Keyboard.Key.HOME && typeof props.onHome === "function") {
			props.onHome(event);
		}

		if (key === Utils.Keyboard.Key.END && typeof props.onEnd === "function") {
			props.onEnd(event);
		}
	}

	return (
		<table
			ref={tableReference}
			id={props.id}
			data-testid={props.testid}
			role="grid"
			className={className}
			aria-multiselectable={false}
			onKeyDown={onKeyDown}
		>
			<thead>
				<tr role="row">
					{weekdays.map((label: string) => {
						return <Weekday key={label} label={label} />;
					})}
				</tr>
			</thead>
			<tbody>
				{rows.map((row: number) => {
					return (
						<tr key={row} role="row">
							{getGridRecords()
								.slice(row * 7, row * 7 + 7)
								.map((record: CalendarGridRecord) => {
									const label = `${record.day} ${months[record.month]} ${record.year} ${
										weekdays[record.dayOfWeek]
									}`;

									return (
										<Day
											key={label}
											day={record.day}
											month={record.month}
											disabled={record.disabled}
											year={record.year}
											aria-label={label}
											aria-hidden={record.hidden}
											aria-selected={record.selected}
											onClick={props.onSelect}
										/>
									);
								})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

const CalendarGridReference = React.forwardRef<HTMLTableElement, any>(CalendarGrid);

CalendarGridReference.defaultProps = {};

CalendarGridReference.displayName = "CalendarGrid";

export default CalendarGridReference;
