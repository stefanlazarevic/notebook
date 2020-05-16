import React from "react";

import "./AccordionHeader.css";

import { AccordionHeaderProps, AccordionHeaderPropTypes } from "./AccordionHeaderProps";

import useClassNames from "../Utils/hooks/classNames";

/**
 * Компонента која представља наслов секције који служи за контролисање
 * видљивости секције.
 *
 * @see https://www.w3.org/TR/wai-aria-practices/#accordion
 */
function AccordionHeader(props: AccordionHeaderProps) {
	const className = useClassNames("AccordionHeader", props.className);

	/**
	 *
	 * @param event
	 */
	function onClick(event: React.MouseEvent<HTMLButtonElement>) {
		if (typeof props.onClick === "function" && !props.disabled) {
			props.onClick(event, props.index);
		}
	}

	/**
	 *
	 * @param event
	 */
	function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
		if (props.disabled) {
			return;
		}

		const { keyCode } = event;

		if ((keyCode === 32 || keyCode === 13) && typeof props.onClick === "function") {
			event.preventDefault();

			props.onClick(event, props.index);
		}

		if (keyCode === 40 && typeof props.onArrowDown === "function") {
			props.onArrowDown(event, props.index);
		}

		if (keyCode === 38 && typeof props.onArrowUp === "function") {
			props.onArrowUp(event, props.index);
		}

		if (keyCode === 36 && typeof props.onHome === "function") {
			props.onHome(event, props.index);
		}

		if (keyCode === 35 && typeof props.onEnd === "function") {
			props.onEnd(event, props.index);
		}
	}

	return (
		<div role="heading" aria-level={props.level}>
			<button
				id={props.id}
				data-testid={props.testid}
				data-index={props.index}
				tabIndex={0}
				className={className}
				aria-expanded={props.expanded}
				aria-controls={props.controls}
				disabled={props.disabled}
				onKeyDown={onKeyDown}
				onClick={onClick}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			>
				{props.children}
			</button>
		</div>
	);
}

AccordionHeader.propTypes = AccordionHeaderPropTypes;

AccordionHeader.defaultProps = {
	expanded: false,
	disabled: false,
	level: 2,
};

AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;
