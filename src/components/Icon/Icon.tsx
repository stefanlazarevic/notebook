import * as React from "react";
import SVG from "react-inlinesvg";

import "./Icon.css";

import { IconProps, IconPropTypes } from "./IconProps";

import useClassNames from "../Utils/hooks/classNames";

function Icon(props: IconProps) {
	const className = useClassNames("Icon", props.className);

	return (
		<SVG
			src={`/icons/${props.icon}.svg`}
			className={className}
			width={props.size}
			height={props.size}
			aria-hidden={true}
		/>
	);
}

Icon.propTypes = IconPropTypes;

Icon.defaultProps = {
	size: 24,
};

Icon.displayName = "Icon";

export default Icon;
