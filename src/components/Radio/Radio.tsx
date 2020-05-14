import React from "react";

import "./Radio.css";

import useClassNames from "../Utils/hooks/classNames";

function Radio(props: any) {
	const className = useClassNames("Radio", props.className);

	/**
	 *
	 * @param event
	 */
	function change(event: React.SyntheticEvent) {
		if (typeof props.onChange === "function" && !props.disabled) {
			props.onChange(event, props.index);
		}
	}

	/**
	 *
	 * @param event
	 */
	function onClick(event: React.MouseEvent) {
		change(event);
	}

	/**
	 *
	 * @param event
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
			role="radio"
			tabIndex={0}
			className={className}
			aria-labelledby={props.labelledby}
			aria-describedby={props.describedby}
			aria-checked={props.checked}
			aria-disabled={props.disabled}
			aria-invalid={props.invalid}
			onClick={onClick}
			onKeyDown={onKeyDown}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		/>
	);
}

// Radio.propTypes = {};

Radio.defaultProps = {};

Radio.displayName = "Radio";

export default React.memo(Radio);
