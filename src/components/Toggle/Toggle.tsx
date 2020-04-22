import React from "react";

import "./Toggle.css";

import ToggleProps from "./ToggleProps";

function Toggle(props: ToggleProps) {
	function onChange(event: React.ChangeEvent) {
		if (typeof props.onChange === "function") {
			props.onChange(event, !props.checked);
		}
	}

	return (
		<label className="Toggle">
			<input type="checkbox" checked={props.checked} onChange={onChange} name={props.name} />
			<span className="ToggleSlider" />
		</label>
	);
}

Toggle.defaultProps = {};

Toggle.displayName = "Toggle";

export default Toggle;
