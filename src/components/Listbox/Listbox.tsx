import React from "react";

import "./Listbox.css";

import ListboxProps from "./ListboxProps";

function Listbox(props: ListboxProps) {
	return (
		<div className="Listbox" role="listbox" tabIndex={0}>
			{React.Children.map(props.children!, (child, index: number) => {
				return React.cloneElement(child, {
					...child.props,
					index,
					onHome: props.onHome,
					onEnd: props.onEnd,
					onSelect: props.onSelect,
					onFocus: props.onFocus,
					onEsc: props.onEsc,
					onArrowUp: props.onArrowUp,
					onArrowDown: props.onArrowDown,
				});
			})}
		</div>
	);
}

Listbox.defaultProps = { children: [] };
Listbox.displayName = "Listbox";

export default Listbox;
