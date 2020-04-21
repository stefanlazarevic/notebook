import React from "react";

import "./Options.css";

import OptionsProps from "./OptionsProps";

import Listbox from "../../../Listbox";

export default function Options(props: OptionsProps) {
	return (
		<Listbox
			className="Options"
			onSelect={props.onSelect}
			onHome={props.onHome}
			onEnd={props.onEnd}
			onEsc={props.onEsc}
			onArrowDown={props.onArrowDown}
			onArrowUp={props.onArrowUp}
			onTab={props.onTab}
		>
			{props.children}
		</Listbox>
	);
}
