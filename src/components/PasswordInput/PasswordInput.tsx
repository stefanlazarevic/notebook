import React, { useState, useMemo } from "react";

import "./PasswordInput.css";

import { EyeButton } from "../Button";

function PasswordInput(props: any) {
	const className = useMemo(() => `PasswordInput ${props.className || ""}`.trim(), [props.className]);

	const [hidden, setHidden] = useState(true);

	function onClick(event: React.MouseEvent) {
		setHidden(!hidden);
	}

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (typeof props.onChange === "function") {
			props.onChange(event, event.target.value);
		}
	}

	return (
		<div className={className}>
			<input
				id={props.id}
				data-testid={props.testid}
				type={hidden ? "password" : "text"}
				value={props.value}
				placeholder={props.placeholder}
				disabled={props.disabled}
				onChange={onChange}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				aria-invalid={props.invalid}
				aria-labelledby={props["aria-labelledby"]}
				autoComplete={props.autoComplete}
			/>
			<EyeButton
				onClick={onClick}
				size={16}
				aria-pressed={hidden}
				title="Reveal typed password"
				aria-label="Reveal typed password"
			/>
		</div>
	);
}

PasswordInput.propTypes = {};

PasswordInput.defaultProps = {
	value: "",
	placeholder: "",
	disabled: false,
	invalid: false,
};

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
