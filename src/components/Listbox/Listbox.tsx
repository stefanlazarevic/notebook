import React from "react";

import "./Listbox.css";

import ListboxProps from "./ListboxProps";

function Listbox(props: ListboxProps) {
	const className = props.className ? `Listbox ${props.className}` : "Listbox";

	console.log(props);

	return (
		<div className={className} role="listbox" tabIndex={0} aria-multiselectable={false}>
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
					onTab: props.onTab,
				});
			})}
		</div>
	);
}

Listbox.defaultProps = { children: [] };
Listbox.displayName = "Listbox";

export default Listbox;
