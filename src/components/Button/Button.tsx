import React, { useCallback } from "react";

import "./Button.css";

import { ButtonProps, ButtonPropTypes } from "./ButtonProps";

import useClassNames from "../Utils/hooks/classNames";

function Button(props: ButtonProps) {
	const className = useClassNames("Button", props.className);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLButtonElement>) => {
			if (typeof props.onClick === "function") {
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

Button.defaultProps = {
	onClick: undefined,
};

Button.displayName = "Button";

export default Button;
