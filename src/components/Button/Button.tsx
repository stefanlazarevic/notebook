import React, { useCallback } from "react";

import "./Button.css";

import { ButtonProps, ButtonPropTypes } from "./ButtonProps";

import useClassNames from "../Utils/hooks/classNames";
import Key from "../Utils/keyboard/key";

function Button(props: ButtonProps) {
	const className = useClassNames("Button", props.className);

	const onKeyDown = useCallback(
		function ButtonKeyDownCallback(event: React.KeyboardEvent<HTMLButtonElement>) {
			const { keyCode } = event;

			if (keyCode === Key.ENTER || keyCode === Key.SPACE) {
				event.preventDefault();

				props.onClick!(event);
			}
		},
		[props.onClick]
	);

	return (
		<button
			id={props.id}
			data-testid={props.testid}
			className={className}
			title={props.title}
			lang={props.lang}
			tabIndex={!props.disabled && typeof props.tabIndex === "number" ? props.tabIndex : undefined}
			disabled={props.disabled}
			aria-label={props["aria-label"]}
			aria-labelledby={props["aria-labelledby"]}
			aria-pressed={props["aria-pressed"]}
			aria-expanded={props["aria-expanded"]}
			aria-haspopup={props["aria-haspopup"]}
			onClick={!props.disabled ? props.onClick : undefined}
			onKeyDown={!props.disabled ? onKeyDown : undefined}
		>
			{props.children}
		</button>
	);
}

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {};

Button.displayName = "Button";

export default React.memo(Button);
