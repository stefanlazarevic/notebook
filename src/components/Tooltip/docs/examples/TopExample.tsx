import React from "react";

import "./Example.css";

import Tooltip from "../../index";

export default function TooltipTopExample() {
	return (
		<button id="top-button" className="TooltipContainer" aria-controls="tooltip-top">
			<Tooltip id="tooltip-top" position="top" aria-describedby="top-button">
				Top tooltip
			</Tooltip>
			Hover me
		</button>
	);
}
