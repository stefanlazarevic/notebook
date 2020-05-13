import React, { useMemo } from "react";

import "./ProgressBar.css";

import { ProgressBarProps, ProgressBarPropTypes } from "./ProgressBarProps";

function ProgressBar(props: ProgressBarProps) {
	const className = useMemo(() => `ProgressBar ${props.className}`.trim(), [
		props.className,
	]);

	const style = useMemo(() => {
		if (!props.value || props.value < 0) {
			return { width: "0%" };
		}

		if (props.value > 100) {
			return { width: "100%" };
		}

		return { width: `${props.value}%` };
	}, [props.value]);

	return (
		<div
			id={props.id}
			tabIndex={0}
			data-testid={props.testid}
			className={className}
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={props.value}
			aria-busy={props["aria-busy"]}
			aria-describedby={props["aria-describedby"]}
			aria-valuetext={props["aria-valuetext"] || `${props.value}%`}
		>
			<div className="Progress" style={style} aria-hidden={true} />
		</div>
	);
}

ProgressBar.propTypes = ProgressBarPropTypes;

ProgressBar.defaultProps = {
	value: 0,
	label: false,
};
ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
