import React from "react";

import "./Day.css";

import useClassNames from "../../../Utils/hooks/classNames";

function Day(props: any) {
	const className = useClassNames("Day", props.className);

	function onClick(event: React.MouseEvent<HTMLButtonElement>) {
		props.onClick(event, props.day, props.month, props.year);
	}

	return (
		<td
			className={className}
			role="gridcell"
			aria-selected={props["aria-selected"]}
			aria-current={props["aria-selected"] ? "date" : undefined}
		>
			<button
				tabIndex={-1}
				type="button"
				disabled={props.disabled}
				aria-label={props["aria-label"]}
				aria-hidden={props["aria-hidden"]}
				onClick={!props.disabled && typeof props.onClick === "function" ? onClick : undefined}
			>
				<span>{props.day}</span>
			</button>
		</td>
	);
}

Day.defaultProps = {};

Day.displayName = "Day";

export default Day;
