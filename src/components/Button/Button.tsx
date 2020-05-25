import React from "react";

import "./Button.css";

import { ButtonProps, ButtonPropTypes } from "./ButtonProps";

import useClassNames from "../Utils/hooks/classNames";

function Button(props: ButtonProps) {
	const className = useClassNames("Button", props.className);

	return (
		<button
			id={props.id}
			data-testid={props.testid}
			className={className}
			title={props.title}
			aria-label={props["aria-label"]}
			aria-labelledby={props["aria-labelledby"]}
			aria-pressed={props["aria-pressed"]}
			aria-expanded={props["aria-expanded"]}
		>
			{props.children}
		</button>
	);
}

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {};

Button.displayName = "Button";

export default Button;
