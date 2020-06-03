import React, { useMemo } from "react";

import "./LabeledInput.css";
import useClassNames from "../Utils/hooks/classNames";
import utils from "../../utils";
import Label from "../Label";
import Input from "../Input";

import { LabeledInputProps, LabeledInputPropTypes } from "./LabeledInputProps";

function LabeledInput(props: LabeledInputProps) {
	const { testid, className, children, id, ...inputProps } = props;

	const classNames = useClassNames("LabeledInput", className);

	const labelId = useMemo(() => utils.string.generateRandom(), []);

	const inputId = useMemo(() => id || utils.string.generateRandom(), [id]);

	return (
		<div data-testid={testid} className={classNames}>
			<Label id={labelId} htmlFor={inputId}>
				{children}
			</Label>
			<Input {...inputProps} id={inputId} aria-labelledby={labelId} />
		</div>
	);
}

LabeledInput.propTypes = LabeledInputPropTypes;

LabeledInput.defaultProps = {};

LabeledInput.displayName = "LabeledInput";

export default React.memo(LabeledInput);
