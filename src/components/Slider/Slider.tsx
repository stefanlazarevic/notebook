import React from "react";

import "./Slider.css";

import { SliderProps, SliderPropTypes } from "./SliderProps";
import useClassNames from "../Utils/hooks/classNames";

function Slider(props: SliderProps) {
	const className = useClassNames("Slider", props.className);

	return (
		<input
			id={props.id}
			data-testid={props.testid}
			className={className}
			type="range"
			min={props.min}
			max={props.max}
			step={props.step}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

Slider.propTypes = SliderPropTypes;

Slider.defaultProps = {
	min: 0,
	max: 1,
	step: 0.1,
	value: 0.5,
} as Partial<SliderProps>;

Slider.displayName = "Slider";

export default Slider;
