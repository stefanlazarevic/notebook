import React, { useState } from "react";

import Swatches from "../../../index";

export default function RainbowSwatches() {
	const [color, setColor] = useState("");

	const colors = [
		"transparent",
		"rgb(231, 37, 37)",
		"rgba(244, 135, 0, 1)",
		"rgba(236, 167, 29, 0.9)",
		"rgba(241, 241, 41, 0.85)",
		"rgba(169, 228, 24, 0.8)",
		"rgb(6, 213, 6)",
		"rgb(14, 203, 155)",
		"rgba(26, 224, 224, 0.9)",
		"rgb(11, 187, 245)",
		"rgb(31, 85, 248)",
		"rgb(0, 0, 255)",
		"rgba(127, 0, 255, 0.75)",
		"rgb(191, 0, 255)",
		"rgb(234, 6, 177)",
	];

	function onSelect(event: React.MouseEvent, color: string) {
		setColor(color);
	}

	return <Swatches colors={colors} selected={color} onSelect={onSelect} />;
}
