import React from "react";

import EyeButtonProps from "./EyeButtonProps";
import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";

export default function EyeButton(props: EyeButtonProps) {
	const { size, ...buttonProps } = props;

	return (
		<Button className="EyeButton" {...buttonProps}>
			{props.children ? <span>{props.children}</span> : null}
			<Icon icon={Icons.eye} size={props.size} />
		</Button>
	);
}
