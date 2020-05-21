import React from "react";

import "./Day.css";

function Day(props: any) {
	function getTimecode() {
		return new Date(props.year, props.month, props.day);
	}

	function onClick(event: React.MouseEvent<HTMLButtonElement>) {
		if (typeof props.onClick === "function" && !props.disabled) {
			props.onClick(event, getTimecode());
		}
	}

	return (
		<button tabIndex={-1} className="Day" aria-current={props.selected ? "date" : undefined} onClick={onClick}>
			<span>{props.day}</span>
		</button>
	);
}

Day.defaultProps = {};

Day.displayName = "Day";

export default Day;
