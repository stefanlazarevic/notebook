import React from "react";

import "./Header.css";

import Icon, { Icons } from "../../../Icon";
import useClassNames from "../../../Utils/hooks/classNames";

function DatePickerHeader(props: any) {
	const className = useClassNames("DatePickerHeader", props.className);

	return (
		<header className={className}>
			<button
				aria-label="Navigate to previous year."
				onClick={
					typeof props.onPreviousYearNavigation === "function"
						? props.onPreviousYearNavigation
						: undefined
				}
			>
				<Icon icon={Icons.chevronLeft} size={14} />
			</button>
			<button
				aria-label="Navigate to previous month."
				onClick={
					typeof props.onPreviousMonthNavigation === "function"
						? props.onPreviousMonthNavigation
						: undefined
				}
			>
				<Icon icon={Icons.chevronLeft} size={14} />
			</button>
			<h2 aria-live="polite">
				<span>
					{props.month} {props.year}
				</span>
			</h2>
			<button
				aria-label="Navigate to next month."
				onClick={
					typeof props.onNextMonthNavigation === "function" ? props.onNextMonthNavigation : undefined
				}
			>
				<Icon icon={Icons.chevronRight} size={14} />
			</button>
			<button
				aria-label="Navigate to next year."
				onClick={
					typeof props.onNextYearNavigation === "function" ? props.onNextYearNavigation : undefined
				}
			>
				<Icon icon={Icons.chevronRight} size={14} />
			</button>
		</header>
	);
}

DatePickerHeader.defaultProps = {};

DatePickerHeader.displayName = "DatePickerHeader";

export default React.memo(DatePickerHeader);
