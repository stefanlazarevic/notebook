import React from "react";

import "./Option.css";

import OptionProps from "./OptionProps";

import { ListboxOption } from "../../../Listbox";

export default function Option(props: OptionProps) {
	return (
		<ListboxOption
			className="Option"
			index={props.index}
			onSelect={props.onSelect}
			onHome={props.onHome}
			onEnd={props.onEnd}
			onEsc={props.onEsc}
			onArrowDown={props.onArrowDown}
			onArrowUp={props.onArrowUp}
			onTab={props.onTab}
		>
			{props.children}
		</ListboxOption>
	);
}
