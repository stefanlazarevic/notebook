import React from "react";

import "./Example.css";

import Tooltip from "../../Tooltip";

export default function TooltipRightExample() {
	return (
		<button id="right-button" className="TooltipContainer" aria-controls="tooltip-right">
			<Tooltip id="tooltip-right" position="right" aria-describedby="right-button">
				Right tooltip
			</Tooltip>
			Hover me
		</button>
	);
}
