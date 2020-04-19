import React from "react";

import "./PreviousButton.css";

import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";
import PreviousButtonProps from "./PreviousButtonProps";

export default function PreviousButton(props: PreviousButtonProps) {
	const { size, ...buttonProps } = props;

	return (
		<Button className="PreviousButton" {...buttonProps}>
			{props.children ? <span>{props.children}</span> : null}
			<Icon icon={Icons.chevronLeft} size={props.size} />
		</Button>
	);
}
