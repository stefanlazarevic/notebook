import React, { useMemo } from "react";

import "./Swatches.css";

import Swatch from "./components/Swatch";

function Swatches(props: any) {
	/**
	 *
	 */
	const selectedIndex = useMemo(() => {
		return props.colors.indexOf(props.selected);
	}, [props.selected, props.colors]);

	return (
		<div className="Swatches">
			{React.Children.map(props.colors, (color: string, index: number) => {
				return (
					<Swatch
						color={color}
						onSelect={props.onSelect}
						tabIndex={selectedIndex > -1 ? (index === selectedIndex ? 0 : -1) : index === 0 ? 0 : -1}
						selected={index === selectedIndex}
					/>
				);
			})}
		</div>
	);
}

Swatches.defaultProps = {
	colors: [],
};
Swatches.displayName = "Swatches";

export default Swatches;
