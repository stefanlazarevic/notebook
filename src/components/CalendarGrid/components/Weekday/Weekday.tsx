import React from "react";

import "./Weekday.css";

import useClassNames from "../../../Utils/hooks/classNames";

function Weekday(props: any) {
	const className = useClassNames("Weekday", props.className);

	return (
		<td key={props.label} className={className} role="columnheader" aria-label={props.label}>
			<abbr title={props.label}>{props.label.slice(0, 2)}</abbr>
		</td>
	);
}

Weekday.defultProps = {};

Weekday.displayName = "Weekday";

export default Weekday;
