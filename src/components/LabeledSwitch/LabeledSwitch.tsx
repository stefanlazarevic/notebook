import React, { useMemo, useCallback } from "react";

import "./LabeledSwitch.css";

import useClassNames from "../Utils/hooks/classNames";

import Label from "../Label";
import Switch from "../Switch";

import utils from "../../utils";

function LabeledSwitch(props: any) {
	const classNames = useClassNames("LabeledSwitch", props.className);

	const labelId = useMemo(() => utils.string.generateRandom(), []);

	const onChange = useCallback(
		function LabeledSwitchChangedCallback(event: React.SyntheticEvent) {
			props.onChange!(event, props.checked, props.index);
		},
		[props.onChange, props.checked, props.index]
	);

	const SwitchLabel = useMemo(() => {
		return function SwitchLabel() {
			return (
				<Label
					id={labelId}
					className="SwitchLabel"
					htmlFor={props.id}
					dir={props.dir}
					onClick={!props.disabled ? onChange : undefined}
				>
					{props.children}
				</Label>
			);
		};
	}, [labelId, props.id, props.children, props.dir, props.disabled, onChange]);

	return (
		<div data-testid={props.testid} className={classNames}>
			{props.dir === "rtl" && <SwitchLabel />}
			<Switch {...props} aria-labelledby={labelId} onChange={onChange} />
			{props.dir !== "rtl" && <SwitchLabel />}
		</div>
	);
}

// LabeledSwitch.propTypes = {};

LabeledSwitch.defaultProps = {};

LabeledSwitch.displayName = "LabeledSwitch";

export default React.memo(LabeledSwitch);
