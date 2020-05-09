import React from "react";

import "./Example.css";

import Tooltip from "../../Tooltip";

export default function TooltipLeftExample() {
	return (
		<button id="left-button" className="TooltipContainer" aria-controls="tooltip-left">
			<Tooltip id="tooltip-left" position="left" aria-describedby="left-button">
				Left tooltip
			</Tooltip>
			Hover me
		</button>
	);
}
