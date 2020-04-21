import React, { memo } from "react";

import "./ListboxOption.css";

import ListboxOptionProps from "./ListboxOptionProps";

function ListboxOption(props: ListboxOptionProps) {
	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		console.log(keyCode);

		if (keyCode === 38 && typeof props.onArrowUp === "function") {
			props.onArrowUp(event, props.index);
		}

		if (keyCode === 40 && typeof props.onArrowDown === "function") {
			props.onArrowDown(event, props.index);
		}

		if (keyCode === 36 && typeof props.onHome === "function") {
			props.onHome(event);
		}

		if (keyCode === 35 && typeof props.onEnd === "function") {
			props.onEnd(event);
		}

		if ((keyCode === 13 || keyCode === 32) && typeof props.onSelect === "function") {
			props.onSelect(event, props.index);
		}

		if (keyCode === 27 && typeof props.onEsc === "function") {
			props.onEsc(event);
		}
	}

	function onFocus(event: React.SyntheticEvent) {
		if (typeof props.onFocus === "function") {
			props.onFocus(event, props.index);
		}
	}

	function onClick(event: React.SyntheticEvent) {
		if (typeof props.onSelect === "function") {
			props.onSelect(event, props.index);
		}
	}

	return (
		<div
			className="ListboxOption"
			role="option"
			onKeyDown={onKeyDown}
			tabIndex={0}
			onFocus={onFocus}
			onClick={onClick}
			aria-selected={props.selected}
		>
			{props.children}
		</div>
	);
}

ListboxOption.defaultProps = {};
ListboxOption.displayName = "ListboxOption";

export default memo(ListboxOption);
