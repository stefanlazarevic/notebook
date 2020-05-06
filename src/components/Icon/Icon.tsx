import * as React from "react";
import SVG from "react-inlinesvg";

import "./Icon.css";

import { IconProps, IconPropTypes } from "./IconProps";

function Icon(props: IconProps) {
	return <SVG src={`/icons/${props.icon}.svg`} className="Icon" width={props.size} height={props.size} />;
}

Icon.propTypes = IconPropTypes;
Icon.defaultProps = {
	size: 24,
};
Icon.displayName = "Icon";

export default Icon;
