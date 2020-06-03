import React, { useMemo, useCallback } from "react";

import "./LabeledCheckbox.css";

import { LabeledCheckboxProps, LabeledCheckboxPropTypes } from "./LabeledCheckboxProps";

import useClassNames from "../Utils/hooks/classNames";

import Checkbox from "../Checkbox";
import Label from "../Label";

import Utils from "../Utils";

function LabeledCheckbox(props: LabeledCheckboxProps) {
	const { className, ...checkboxProps } = props;

	const classNames = useClassNames("LabeledCheckbox", props.className);

	const labelId = useMemo(() => Utils.string.generateRandom(), []);

	const onChange = useCallback(
		function LabeledCheckboxChangeCallback(event: React.SyntheticEvent) {
			props.onChange!(event, props.checked!, props.index!);
		},
		[props.onChange, props.checked, props.index]
	);

	const CheckboxLabel = useMemo(() => {
		return function CheckboxLabel() {
			return (
				<Label
					id={labelId}
					onClick={!props.disabled && typeof props.onChange === "function" ? onChange : undefined}
					className="CheckboxLabel"
					htmlFor={props.id}
					dir={props.dir}
				>
					{props.children}
				</Label>
			);
		};
	}, [labelId, props.id, props.dir, props.children, props.onChange, onChange, props.disabled]);

	return (
		<div data-testid={props.testid} className={classNames}>
			{props.dir === "rtl" && <CheckboxLabel />}
			<Checkbox
				{...checkboxProps}
				aria-labelledby={labelId}
				onChange={!props.disabled && typeof props.onChange === "function" ? onChange : undefined}
			/>
			{props.dir !== "rtl" && <CheckboxLabel />}
		</div>
	);
}

LabeledCheckbox.propTypes = LabeledCheckboxPropTypes;

LabeledCheckbox.defaultProps = {
	checked: false,
};

LabeledCheckbox.displayName = "LabeledCheckbox";

export default React.memo(LabeledCheckbox);
