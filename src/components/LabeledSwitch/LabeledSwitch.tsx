import React, { useMemo } from "react";

import "./LabeledSwitch.css";

import useClassNames from "../Utils/hooks/classNames";

import Label from "../Label";
import Switch from "../Switch";

import utils from "../../utils";

function LabeledSwitch(props: any) {
	const className = useClassNames("LabeledSwitch", props.className);

	const labelId = useMemo(() => utils.string.generateRandom(), []);

	const SwitchLabel = useMemo(() => {
		return function SwitchLabel() {
			return (
				<Label id={labelId} className="SwitchLabel" htmlFor={props.id}>
					{props.children}
				</Label>
			);
		};
	}, [labelId, props.id, props.children]);

	return (
		<div id={props.id} data-testid={props.testid} className={className}>
			{props.dir === "rtl" && <SwitchLabel />}
			<Switch checked={props.checked} aria-labelledby={labelId} />
			{props.dir !== "rtl" && <SwitchLabel />}
		</div>
	);
}

LabeledSwitch.defaultProps = {};

LabeledSwitch.displayName = "LabeledSwitch";

export default LabeledSwitch;
