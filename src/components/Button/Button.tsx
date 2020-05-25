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
			aria-label={props["aria-label"]}
		>
			{props.children}
		</button>
	);
}

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {};

Button.displayName = "Button";

export default Button;
