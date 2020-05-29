import React from "react";

import "./Alert.css";

import { AlertPropTypes, AlertProps } from "./AlertProps";

import useClassNames from "../Utils/hooks/classNames";

function Alert(props: AlertProps) {
	const className = useClassNames("Alert", props.className);

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			role="alert"
			className={className}
			lang={props.lang}
		>
			{props.children}
		</div>
	);
}

Alert.propTypes = AlertPropTypes;

Alert.defaultProps = {};

Alert.displayName = "Alert";

export default Alert;
