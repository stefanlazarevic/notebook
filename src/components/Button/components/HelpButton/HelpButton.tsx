import React from "react";

import "./HelpButton.css";

import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";
import HelpButtonProps from "./HelpButtonProps";

export default function HelpButton(props: HelpButtonProps) {
	const { size, ...buttonProps } = props;

	return (
		<Button className="HelpButton" {...buttonProps}>
			{props.children ? <span>{props.children}</span> : null}
			<Icon icon={Icons.questionCircle} size={props.size} />
		</Button>
	);
}
