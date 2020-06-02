import React, { useRef, useCallback, useEffect } from "react";

import "./Input.css";

import useClassNames from "../Utils/hooks/classNames";

import { InputPropTypes, InputProps } from "./InputProps";

function Input(props: InputProps) {
	const { id, testid, className, customValidity, ...inputProps } = props;

	const input = useRef<HTMLInputElement | null>(null);

	const classNames = useClassNames("Input", className);

	const onInvalid = useCallback(
		function InputInvalidCallback(event: React.InvalidEvent<HTMLInputElement>) {
			if (typeof props.onInvalid === "function") {
				props.onInvalid!(event);
			}
		},
		[props.onInvalid]
	);

	useEffect(
		function InputUpdateCustomValidityEffect() {
			if (input.current) {
				input.current.setCustomValidity(customValidity!);
			}
		},
		[customValidity]
	);

	return (
		<div>
			<input
				ref={input}
				id={id}
				data-testid={testid}
				className={classNames}
				{...inputProps}
				onInvalid={onInvalid}
			/>
		</div>
	);
}

Input.propTypes = InputPropTypes;

Input.defaultProps = {
	type: "text",
	autoValidate: false,
	validityMessage: "",
	formNoValidate: true,
};

Input.displayName = "Input";

export default Input;
