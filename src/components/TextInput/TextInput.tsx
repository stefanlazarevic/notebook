import React, { useMemo } from "react";

import "./TextInput.css";

import { TextInputPropTypes, TextInputProps } from "./TextInputProps";

function TextInput(props: TextInputProps) {
	const className = useMemo(() => {
		return `TextInput ${props.className || ""}`.trim();
	}, [props.className]);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (typeof props.onChange === "function" && !props.disabled) {
			props.onChange(event, event.target.value);
		}
	}

	return (
		<input
			id={props.id}
			data-testid={props.testid}
			type="text"
			className={className}
			value={props.value}
			onChange={onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			disabled={props.disabled}
			placeholder={props.placeholder}
			aria-invalid={props.invalid}
			aria-labelledby={props["aria-labelledby"]}
		/>
	);
}

TextInput.propTypes = TextInputPropTypes;

TextInput.defaultProps = {
	value: "",
	placeholder: "",
	disabled: false,
	invalid: false,
};

TextInput.displayName = "TextInput";

export default TextInput;
