import React from "react";

import "./Tooltip.css";

import { TooltipProps, TooltipPropTypes } from "./TooltipProps";

function Tooltip(props: TooltipProps) {
	return (
		<div id={props.id} className="Tooltip" data-position={props.position} role="tooltip" aria-describedby={props["aria-describedby"]}>
			<div className="Tooltip__Arrow" />
			<div className="Tooltip__Content">{props.children}</div>
		</div>
	);
}

Tooltip.propTypes = TooltipPropTypes;

Tooltip.defaultProps = {
	position: "left",
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
