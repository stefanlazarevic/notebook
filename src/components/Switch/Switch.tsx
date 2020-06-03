import React, { useCallback } from "react";

import "./Switch.css";

import { SwitchProps, SwitchPropTypes } from "./SwitchProps";
import useClassNames from "../Utils/hooks/classNames";
import Key from "../Utils/keyboard/key";

function Switch(props: SwitchProps) {
	const classNames = useClassNames("Switch", props.className);

	/**
	 *
	 * @param event
	 */
	const change = useCallback(
		function SwitchChangeCallback(event: React.SyntheticEvent<HTMLDivElement>) {
			props.onChange!(event, Boolean(props.checked));
		},
		[props.onChange, props.checked]
	);

	/**
	 *
	 * @param event
	 */
	const onClick = useCallback(
		function SwitchClickCallback(event: React.MouseEvent<HTMLDivElement>) {
			change(event);
		},
		[change]
	);

	/**
	 *
	 * @param event
	 */
	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		const { keyCode, shiftKey } = event;

		if (keyCode === Key.ENTER || keyCode === Key.SPACE) {
			change(event);
		}

		if (shiftKey && keyCode === Key.F10 && typeof props.onContext === "function") {
			props.onContext(event);
		}
	}

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			className={classNames}
			tabIndex={props.tabIndex}
			role="switch"
			aria-checked={props.checked}
			aria-disabled={props.disabled}
			aria-labelledby={props["aria-labelledby"]}
			aria-label={props["aria-label"]}
			aria-haspopup={props["aria-haspopup"]}
			aria-describedby={props["aria-describedby"]}
			onClick={!props.disabled && typeof props.onChange === "function" ? onClick : undefined}
			onKeyDown={props.disabled ? undefined : onKeyDown}
		/>
	);
}

Switch.propTypes = SwitchPropTypes;

Switch.defaultProps = {
	tabIndex: 0,
};

Switch.displayName = "Switch";

export default React.memo(Switch);
