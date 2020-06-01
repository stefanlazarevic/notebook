import React, { useRef, useState, useCallback, useMemo, useEffect } from "react";

import "./Input.css";

import useClassNames from "../Utils/hooks/classNames";
import utils from "../../utils";
import { InputPropTypes, InputProps } from "./InputProps";

function Input(props: InputProps) {
	const { id, testid, className, validityMessage, autoValidate, ...inputProps } = props;

	const input = useRef<HTMLInputElement | null>(null);

	const classNames = useClassNames("Input", className);

	const [error, setError] = useState<string>("");

	const errorId = useMemo(() => utils.string.generateRandom(), []);

	const onInvalid = useCallback(function InputInvalidCallback(
		event: React.InvalidEvent<HTMLInputElement>
	) {
		setError(event.target.validationMessage);
	},
	[]);

	useEffect(
		function InputUpdateCustomValidityEffect() {
			if (input.current) {
				if (validityMessage) {
					input.current.setCustomValidity(validityMessage);
				} else {
					input.current.setCustomValidity("");
				}
			}

			if (autoValidate && validityMessage) {
				setError(validityMessage);
			} else {
				setError("");
			}
		},
		[autoValidate, validityMessage]
	);

	return (
		<div id={id} data-testid={testid} className={classNames}>
			<input
				{...inputProps}
				ref={input}
				onInvalid={onInvalid}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? errorId : props["aria-describedby"]}
				formNoValidate={true}
			/>
			{error && (
				<small id={errorId} className="InputValidationMessage">
					{error}
				</small>
			)}
		</div>
	);
}

Input.propTypes = InputPropTypes;

Input.defaultProps = {
	type: "text",
	autoValidate: false,
};

Input.displayName = "Input";

export default Input;
