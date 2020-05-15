import React from "react";

import "./ConfirmationCodeInput.css";
import useClassNames from "../Utils/hooks/classNames";

function ConfirmationCodeInput(props: any) {
	const className = useClassNames("ConfirmationCodeInput", props.className);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (typeof props.onChange === "function" && !props.disabled) {
			if (/[0-9]*/.test(event.target.value)) {
				props.onChange(event, event.target.value);
			}
		}
	}

	return (
		<input
			id={props.id}
			data-textid={props.testid}
			value={props.value}
			className={className}
			type="text"
			inputMode="numeric"
			pattern="[0-9]*"
			placeholder={props.placeholder}
			disabled={props.disabled}
			aria-invalid={props.invalid}
			autoComplete="one-time-code"
			onChange={onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		/>
	);
}

ConfirmationCodeInput.propTypes = {};

ConfirmationCodeInput.defaultProps = {
	value: "",
	placeholder: "",
};

ConfirmationCodeInput.displayName = "ConfirmationCodeInput";

export default ConfirmationCodeInput;
