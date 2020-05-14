import React, { useState } from "react";

import "./BasicExample.css";

import Radio from "../../Radio";

export default function BasicExample() {
	const [states, setStates] = useState([false, false, false]);

	function onChange(event: React.SyntheticEvent, index: number) {
		const newStates = states.map((state) => false);

		newStates[index] = true;

		setStates(newStates);
	}

	return (
		<div className="BasicExample">
			<span id="BasicExampleLabel">Choose one of the options:</span>
			<div>
				<Radio checked={states[0]} index={0} onChange={onChange} labelledby="BasicExampleLabel" />
				<Radio checked={states[1]} index={1} onChange={onChange} labelledby="BasicExampleLabel" />
				<Radio checked={states[2]} index={2} onChange={onChange} labelledby="BasicExampleLabel" />
			</div>
		</div>
	);
}
