import React, { useState, useEffect, useCallback, useRef } from "react";

import "./Select.css";

import SelectProps from "./SelectProps";

import Option from "./components/Option";
import Options from "./components/Options";

function Select(props: SelectProps) {
	const [expanded, setExpanded] = useState(false);

	const options = useRef<any>(null);

	const buttonReference = useRef<HTMLButtonElement>(null);

	const outsideClickCallback = useCallback(() => {
		setExpanded(false);
	}, []);

	const className = props.className ? `Select ${props.className}` : "Select";

	useEffect(
		function componentUpdated() {
			if (expanded) {
				window.addEventListener("click", outsideClickCallback);
			}

			if (buttonReference.current) {
				options.current = buttonReference.current.getElementsByClassName("Option");

				if (options.current.length && options.current[props.selectedIndex!]) {
					options.current[props.selectedIndex!].focus();
				}
			}

			return function componentWillUnmount() {
				if (window) {
					window.removeEventListener("click", outsideClickCallback);
				}

				if (options.current) {
					options.current = null;
				}
			};
		},
		[expanded, buttonReference, outsideClickCallback, props.selectedIndex]
	);

	/**
	 *
	 */
	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (keyCode === 40) {
			open();
		}

		if (keyCode === 27) {
			close();
		}
	}

	/**
	 *
	 */
	function onClick(event: React.MouseEvent) {
		event.stopPropagation();

		if (!expanded) {
			open();
		} else {
			close();
		}
	}

	/**
	 *
	 */
	function open() {
		setExpanded(true);

		if (window) {
			window.addEventListener("click", outsideClickCallback);
		}
	}

	/**
	 *
	 */
	function close() {
		if (expanded) {
			setExpanded(false);
		}

		if (buttonReference.current) {
			buttonReference.current.focus();
		}

		window.removeEventListener("click", outsideClickCallback);
	}

	/**
	 *
	 * @param event
	 * @param index
	 */
	function onSelect(event: React.SyntheticEvent, index: number) {
		event.preventDefault();
		event.stopPropagation();

		if (typeof props.onSelect === "function") {
			props.onSelect(event, index);
		}

		close();
	}

	/**
	 *
	 * @param event
	 */
	function onEscape(event: React.SyntheticEvent) {
		event.stopPropagation();

		close();
	}

	/**
	 *
	 * @param event
	 */
	function onTab(event: React.SyntheticEvent) {
		event.preventDefault();
		event.stopPropagation();

		close();
	}

	return (
		<div className={className}>
			<button
				ref={buttonReference}
				tabIndex={0}
				aria-haspopup="listbox"
				onKeyDown={onKeyDown}
				aria-expanded={expanded}
				onClick={onClick}
			>
				<span>
					{props.options[props.selectedIndex!]
						? props.options[props.selectedIndex!].label
						: props.placeholder}
				</span>
			</button>
			{expanded && !props.disabled && (
				<Options
					className="Options"
					onSelect={onSelect}
					onEscape={onEscape}
					onTab={onTab}
					autofocus={true}
				>
					{props.options.map((optionData: IOptionData, index: number) => {
						return (
							<Option
								key={optionData.id}
								className="Option"
								index={index}
								selected={props.selectedIndex === index}
								disabled={optionData.disabled}
							>
								{optionData.label}
							</Option>
						);
					})}
				</Options>
			)}
		</div>
	);
}

Select.defaultProps = {
	placeholder: "Select value",
} as SelectProps;

export default Select;
