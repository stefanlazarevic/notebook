import React, { useMemo } from "react";

import "./LabeledInput.css";
import useClassNames from "../Utils/hooks/classNames";
import utils from "../../utils";
import Label from "../Label";
import Input from "../Input";

import { LabeledInputProps, LabeledInputPropTypes } from "./LabeledInputProps";

function LabeledInput(props: LabeledInputProps) {
	const classNames = useClassNames("LabeledInput", props.className);

	const labelId = useMemo(() => utils.string.generateRandom(), []);

	const inputId = useMemo(() => props.id || utils.string.generateRandom(), [props.id]);

	return (
		<div data-testid={props.testid} className={classNames}>
			<Label id={labelId} htmlFor={inputId}>
				{props.children}
			</Label>
			<Input
				id={inputId}
				value={props.value}
				disabled={props.disabled}
				autoComplete={props.autoComplete}
				autoFocus={props.autoFocus}
				customValidity={props.customValidity}
				placeholder={props.placeholder}
				form={props.form}
				readOnly={props.readOnly}
				type={props.type}
				formNoValidate={props.formNoValidate}
				required={props.required}
				name={props.name}
				aria-labelledby={labelId}
				onChange={props.onChange}
				onInvalid={props.onInvalid}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onKeyDown={props.onKeyDown}
			/>
		</div>
	);
}

LabeledInput.propTypes = LabeledInputPropTypes;

LabeledInput.defaultProps = {};

LabeledInput.displayName = "LabeledInput";

export default React.memo(LabeledInput);
