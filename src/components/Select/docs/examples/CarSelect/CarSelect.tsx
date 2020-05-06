import React, { useState } from "react";

import Select from "../../../Select";

export default function CarSelect() {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const options = [
		{ id: "volvo", value: "volvo", label: "Volvo" },
		{ id: "saab", value: "saab", label: "Saab" },
	];

	function onSelect(event: React.SyntheticEvent, index: number) {
		setSelectedIndex(index);
	}

	return <Select options={options} selectedIndex={selectedIndex} onSelect={onSelect} placeholder="Please select your favorite car" />;
}
