import React from "react";

import "./Checkbox.css";

import { CheckboxProps, CheckboxPropTypes } from "./CheckboxProps";

import useClassNames from "../Utils/hooks/classNames";

function Checkbox(props: CheckboxProps) {
	const className = useClassNames("Radio", props.className);

	/**
	 * Функција која приликом промене стања извршава повратни позив уколико је
	 * дефинисан.
	 *
	 * @param event Акција извршена путем миша или тастатуре.
	 */
	function change(event: React.SyntheticEvent) {
		if (typeof props.onChange === "function" && !props.disabled) {
			props.onChange(event, props.checked, props.index);
		}
	}

	/**
	 * ...
	 * @param event Акција извршена путем миша.
	 */
	function onClick(event: React.MouseEvent) {
		change(event);
	}

	/**
	 * ...
	 * @param event Акција извршена путем тастатуре.
	 */
	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (keyCode === 32) {
			change(event);
		}
	}

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			data-index={props.index}
			tabIndex={props.disabled ? undefined : 0}
			role="checkbox"
			className={className}
			aria-checked={props.checked}
			aria-labelledby={props["aria-labelledby"]}
			aria-disabled={props.disabled}
			onClick={onClick}
			onKeyDown={onKeyDown}
		/>
	);
}

Checkbox.propTypes = CheckboxPropTypes;

Checkbox.defaultProps = {
	checked: false,
	disabled: false,
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
