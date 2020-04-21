import React, { memo } from "react";

import "./ListboxOption.css";

import ListboxOptionProps from "./ListboxOptionProps";

function ListboxOption(props: ListboxOptionProps) {
	const className = props.className ? `ListboxOption ${props.className}` : "ListboxOption";

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (props.disabled) {
			return;
		}

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

		if (keyCode === 9 && typeof props.onTab === "function") {
			props.onTab(event);
		}
	}

	function onFocus(event: React.SyntheticEvent) {
		if (props.disabled) {
			return;
		}

		if (typeof props.onFocus === "function") {
			props.onFocus(event, props.index);
		}
	}

	function onClick(event: React.MouseEvent) {
		if (props.disabled) {
			return;
		}

		if (typeof props.onSelect === "function") {
			props.onSelect(event, props.index);
		}
	}

	return (
		<div
			className={className}
			role="option"
			onKeyDown={onKeyDown}
			tabIndex={-1}
			onFocus={onFocus}
			onClick={onClick}
			aria-selected={props.selected}
			aria-disabled={props.disabled}
		>
			{props.children}
		</div>
	);
}

ListboxOption.defaultProps = {};
ListboxOption.displayName = "ListboxOption";

export default memo(ListboxOption);
