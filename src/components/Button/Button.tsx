import React, { useCallback } from "react";

import "./Button.css";

import { ButtonProps, ButtonPropTypes } from "./ButtonProps";

import useClassNames from "../Utils/hooks/classNames";
import Key from "../Utils/keyboard/key";

function Button(props: ButtonProps) {
	const className = useClassNames("Button", props.className);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLButtonElement>) => {
			const { keyCode } = event;

			if ((keyCode === Key.ENTER || keyCode === Key.SPACE) && typeof props.onClick === "function") {
				event.preventDefault();

				props.onClick(event);
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
			disabled={props.disabled}
			aria-label={props["aria-label"]}
			aria-labelledby={props["aria-labelledby"]}
			aria-pressed={props["aria-pressed"]}
			aria-expanded={props["aria-expanded"]}
			aria-haspopup={props["aria-haspopup"]}
			onClick={props.onClick}
			onKeyDown={onKeyDown}
		>
			{props.children}
		</button>
	);
}

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {};

Button.displayName = "Button";

export default Button;
