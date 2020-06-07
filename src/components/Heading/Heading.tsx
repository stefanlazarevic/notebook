import React from "react";

function Heading(props: any) {
	return (
		<span className="Heading" role="heading" aria-level={props.level}>
			{props.children}
		</span>
	);
}

Heading.defaultProps = {
	level: 1,
};

Heading.displayName = "Heading";

export default Heading;
