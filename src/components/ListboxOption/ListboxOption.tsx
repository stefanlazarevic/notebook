import React, { useMemo } from "react";

import "./ListboxOption.css";

import { ListboxOptionProps, ListboxOptionPropTypes } from "./ListboxOptionProps";

import Key from "../Utils/keyboard/key";
import Utils from "../Utils";
import useClassNames from "../Utils/hooks/classNames";

function ListboxOption(props: ListboxOptionProps) {
	const className = useClassNames("ListboxOption", props.className);

	const id = useMemo(() => props.id || Utils.string.generateRandom(), [props.id]);

	function onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
		const { keyCode } = event;

		if (props.disabled) {
			return;
		}

		if (keyCode === Key.ARROW_UP && typeof props.onArrowUp === "function") {
			props.onArrowUp(event, props.index);
		}

		if (keyCode === Key.ARROW_DOWN && typeof props.onArrowDown === "function") {
			props.onArrowDown(event, props.index);
		}

		if (keyCode === Key.HOME && typeof props.onHome === "function") {
			props.onHome(event);
		}

		if (keyCode === Key.END && typeof props.onEnd === "function") {
			props.onEnd(event);
		}

		if (keyCode === Key.ENTER && typeof props.onEnter === "function") {
			props.onEnter(event, props.index);
		}

		if (keyCode === Key.SPACE && typeof props.onSpace === "function") {
			props.onSpace(event, props.index);
		}

		if (keyCode === Key.ESCAPE && typeof props.onEscape === "function") {
			props.onEscape(event);
		}

		if (keyCode === Key.TAB && typeof props.onTab === "function") {
			props.onTab(event, props.index);
		}
	}

	function onClick(event: React.MouseEvent<HTMLLIElement>) {
		if (props.disabled) {
			return;
		}

		if (typeof props.onClick === "function") {
			props.onClick(event, props.index);
		}
	}

	return (
		<li
			id={id}
			data-testid={props.testid}
			className={className}
			role="option"
			onKeyDown={onKeyDown}
			tabIndex={props.disabled ? undefined : -1}
			onClick={onClick}
			aria-selected={props.selected}
			aria-disabled={props.disabled}
		>
			{props.children}
		</li>
	);
}

ListboxOption.propTypes = ListboxOptionPropTypes;

ListboxOption.defaultProps = {};

ListboxOption.displayName = "ListboxOption";

export default React.memo(ListboxOption);
