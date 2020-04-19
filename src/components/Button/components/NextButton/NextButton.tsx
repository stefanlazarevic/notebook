import React from "react";

import "./NextButton.css";

import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";
import NextButtonProps from "./NextButtonProps";

export default function NextButton(props: NextButtonProps) {
	const { size, ...buttonProps } = props;

	return (
		<Button className="NextButton" {...buttonProps}>
			{props.children ? <span>{props.children}</span> : null}
			<Icon icon={Icons.chevronRight} size={props.size} />
		</Button>
	);
}
