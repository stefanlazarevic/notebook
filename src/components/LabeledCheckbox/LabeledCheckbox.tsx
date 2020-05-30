import React, { useMemo, useCallback } from "react";

import "./LabeledCheckbox.css";

import Checkbox from "../Checkbox";
import Utils from "../Utils";
import { LabeledCheckboxProps, LabeledCheckboxPropTypes } from "./LabeledCheckboxProps";
import useClassNames from "../Utils/hooks/classNames";
import Key from "../Utils/keyboard/key";

function LabeledCheckbox(props: LabeledCheckboxProps) {
	const id = useMemo(() => Utils.string.generateRandom(), []);

	const className = useClassNames("LabeledCheckbox", props.className);

	const onChange = useCallback(
		function LabeledCheckboxChangeCallback(event: React.SyntheticEvent) {
			props.onChange!(event, props.checked!, props.index!);
		},
		[props.onChange, props.checked, props.index]
	);

	const onKeyDown = useCallback(
		function LabeledCheckboxKeyDownCallback(event: React.KeyboardEvent) {
			const { keyCode, shiftKey } = event;

			if (shiftKey && keyCode === Key.F10 && typeof props.onContext === "function") {
				props.onContext!(event);
			}
		},
		[props.onContext]
	);

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			className={className}
			onKeyDown={props.disabled ? undefined : onKeyDown}
		>
			<Checkbox
				aria-labelledby={id}
				disabled={props.disabled}
				onChange={!props.disabled && typeof props.onChange === "function" ? onChange : undefined}
				checked={props.checked}
			/>
			<label
				id={id}
				onClick={!props.disabled && typeof props.onChange === "function" ? onChange : undefined}
			>
				{props.children}
			</label>
		</div>
	);
}

LabeledCheckbox.propTypes = LabeledCheckboxPropTypes;

LabeledCheckbox.defaultProps = {
	checked: false,
	index: -1,
};

LabeledCheckbox.displayName = "LabeledCheckbox";

export default LabeledCheckbox;
