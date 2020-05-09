import React from "react";

import "./Example.css";

import Tooltip from "../../Tooltip";

export default function TooltipBottomExample() {
	return (
		<button id="bottom-button" className="TooltipContainer" aria-controls="tooltip-bottom">
			<Tooltip id="tooltip-bottom" position="bottom" aria-describedby="bottom-button">
				Bottom tooltip
			</Tooltip>
			Hover me
		</button>
	);
}
