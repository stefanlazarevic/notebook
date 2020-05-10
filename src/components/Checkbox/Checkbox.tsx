import React from "react";

import "./Checkbox.css";

import { CheckboxProps, CheckboxPropTypes } from "./CheckboxProps";

function Checkbox(props: CheckboxProps) {
	function change(event: React.SyntheticEvent) {
		if (typeof props.onChange === "function") {
			props.onChange(event, props.checked);
		}
	}

	function onClick(event: React.MouseEvent) {
		change(event);
	}

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (keyCode === 32) {
			change(event);
		}
	}

	return (
		<div
			id={props.id}
			tabIndex={0}
			role="checkbox"
			className="Checkbox"
			aria-checked={props.checked}
			aria-labelledby={props["aria-labelledby"]}
			onClick={onClick}
			onKeyDown={onKeyDown}
		/>
	);
}

Checkbox.propTypes = CheckboxPropTypes;

Checkbox.defaultProps = {
	checked: false,
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
