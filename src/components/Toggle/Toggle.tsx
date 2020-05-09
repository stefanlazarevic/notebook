import React from "react";

import "./Toggle.css";

import { ToggleProps, SwitchPropTypes } from "./ToggleProps";

function Toggle(props: ToggleProps) {
	/**
	 *
	 * @param event
	 */
	function change(event: React.SyntheticEvent) {
		if (typeof props.onChange === "function") {
			props.onChange(event, Boolean(props.checked));
		}
	}

	/**
	 *
	 * @param event
	 */
	function onChange(event: React.ChangeEvent) {
		change(event);
	}

	/**
	 *
	 * @param event
	 */
	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (keyCode === 13 || keyCode === 32) {
			change(event);
		}
	}

	return (
		<label className="Toggle">
			<input type="checkbox" checked={Boolean(props.checked)} onChange={onChange} name={props.name} />
			<span className="ToggleSlider" tabIndex={0} onKeyDown={onKeyDown} />
		</label>
	);
}

Toggle.propTypes = SwitchPropTypes;

Toggle.defaultProps = {};

Toggle.displayName = "Toggle";

export default Toggle;
