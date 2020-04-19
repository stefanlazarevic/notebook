import React from "react";

import "./Tab.css";

import TabProps, { TAB_DEFAULT_PROPS } from "./TabProps";
import { CloseButton } from "../../../Button";

function Tab(props: TabProps) {
	function onClose(event: React.MouseEvent) {
		if (typeof props.onClose === "function") {
			event.stopPropagation();

			props.onClose(event, props.index);
		}
	}

	function onClick(event: React.MouseEvent) {
		if (typeof props.onClick === "function") {
			props.onClick(event, props.index);
		}
	}

	return (
		<button className="Tab" aria-pressed={props.selected} onClick={onClick} title={props.label}>
			<span>{props.children || props.label}</span>
			<CloseButton size={12} onClick={onClose} />
		</button>
	);
}

Tab.defaultProps = TAB_DEFAULT_PROPS;

export default Tab;
