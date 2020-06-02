import React from "react";

import "./IconButton.css";

import useClassNames from "../Utils/hooks/classNames";

import Button from "../Button";
import Icon from "../Icon/Icon";

import { IconButtonProps, IconButtonPropTypes } from "./IconButtonProps";

function IconButton({ size, className, icon, ...buttonProps }: IconButtonProps) {
	return (
		<Button className={useClassNames("IconButton", className)} {...buttonProps}>
			<Icon icon={icon} size={size} />
		</Button>
	);
}

IconButton.propTypes = IconButtonPropTypes;

IconButton.defaultProps = {};

IconButton.displayName = "IconButton";

export default React.memo(IconButton);
