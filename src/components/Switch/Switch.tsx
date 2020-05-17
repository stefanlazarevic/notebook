import React from "react";

import "./Switch.css";

import { SwitchProps, SwitchPropTypes } from "./SwitchProps";
import useClassNames from "../Utils/hooks/classNames";

function Switch(props: SwitchProps) {
	const className = useClassNames("Switch", props.className);

	/**
	 *
	 * @param event
	 */
	function change(event: React.SyntheticEvent<HTMLDivElement>) {
		if (typeof props.onChange === "function" && !props.disabled) {
			props.onChange(event, Boolean(props.checked));
		}
	}

	/**
	 *
	 * @param event
	 */
	function onClick(event: React.MouseEvent<HTMLDivElement>) {
		change(event);
	}

	/**
	 *
	 * @param event
	 */
	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		const { keyCode, shiftKey } = event;

		if (props.disabled) {
			return;
		}

		if (keyCode === 13 || keyCode === 32) {
			change(event);
		}

		if (shiftKey && keyCode === 121 && typeof props.onContext === "function") {
			props.onContext(event);
		}
	}

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			className={className}
			tabIndex={0}
			role="switch"
			aria-checked={props.checked}
			aria-disabled={props.disabled}
			aria-labelledby={props["aria-labelledby"]}
			aria-label={props["aria-label"]}
			aria-haspopup={props["aria-haspopup"]}
			aria-describedby={props["aria-describedby"]}
			onClick={props.disabled ? undefined : onClick}
			onKeyDown={props.disabled ? undefined : onKeyDown}
		/>
	);
}

Switch.propTypes = SwitchPropTypes;

Switch.defaultProps = {};

Switch.displayName = "Switch";

export default Switch;
