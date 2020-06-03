import React from "react";

import "./Label.css";

import useClassNames from "../Utils/hooks/classNames";

function Label(props: any) {
	const classNames = useClassNames("Label", props.className);

	return (
		<label
			id={props.id}
			className={classNames}
			htmlFor={props.htmlFor}
			dir={props.dir}
			onClick={props.onClick}
		>
			{props.children}
		</label>
	);
}

// Label.propTypes = {};

Label.defaultProps = {};

Label.displayName = "Label";

export default React.memo(Label);
