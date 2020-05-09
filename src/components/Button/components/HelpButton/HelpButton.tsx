import React from "react";

import "./HelpButton.css";

import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";
import HelpButtonProps from "./HelpButtonProps";

export default function HelpButton(props: HelpButtonProps) {
	const { size, className, ...buttonProps } = props;

	return (
		<Button className={className ? `HelpButton ${className}` : "HelpButton"} {...buttonProps}>
			{props.children ? props.children : null}
			<Icon icon={Icons.questionCircle} size={props.size} />
		</Button>
	);
}
