import React from "react";

import "./Avatar.css";

import useClassNames from "../Utils/hooks/classNames";

function Avatar(props: any) {
	const className = useClassNames("Avatar", props.className);

	return (
		<img
			id={props.id}
			data-testid={props.testid}
			src={props.src}
			alt={props.alt}
			className={className}
		/>
	);
}

Avatar.propTypes = {};

Avatar.defaultProps = {};

Avatar.displayName = "Avatar";

export default Avatar;
