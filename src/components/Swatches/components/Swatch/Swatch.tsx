import React, { useMemo } from "react";

import "./Swatch.css";

function Swatch(props: any) {
	const style = useMemo(() => ({ backgroundColor: props.color }), [props.color]);

	/**
	 *
	 * @param event
	 */
	function onClick(event: React.MouseEvent) {
		if (typeof props.onSelect === "function") {
			props.onSelect(event, props.color);
		}
	}

	return <div className="Swatch" style={style} onClick={onClick} tabIndex={props.tabIndex} data-selected={Boolean(props.selected)} />;
}

Swatch.defaultProps = {
	color: "transparent",
};
Swatch.displayName = "Swatch";

export default React.memo(Swatch);
