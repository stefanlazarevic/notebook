import React, { useState, useEffect, useCallback, useRef } from "react";

import "./Select.css";

import SelectProps from "./SelectProps";

import Option from "./components/Option";
import Options from "./components/Options";
import { IOptionData } from "./components/Option/OptionProps";

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
	function onHome(event: React.SyntheticEvent) {
		event.stopPropagation();

		if (options.current) {
			options.current[0].focus();
		}
	}

	/**
	 *
	 * @param event
	 */
	function onEnd(event: React.SyntheticEvent) {
		event.stopPropagation();

		if (options.current) {
			options.current[options.current.length - 1].focus();
		}
	}

	/**
	 *
	 * @param event
	 */
	function onEsc(event: React.SyntheticEvent) {
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

	/**
	 *
	 * @param event
	 * @param index
	 */
	function onArrowDown(event: React.SyntheticEvent, index: number) {
		event.stopPropagation();

		const indexToFocus = index + 1;

		if (options.current) {
			if (indexToFocus < options.current.length) {
				options.current[indexToFocus].focus();
			} else {
				options.current[0].focus();
			}
		}
	}

	/**
	 *
	 * @param event
	 * @param index
	 */
	function onArrowUp(event: React.SyntheticEvent, index: number) {
		event.stopPropagation();

		const indexToFocus = index - 1;

		if (options.current) {
			if (indexToFocus >= 0) {
				options.current[indexToFocus].focus();
			} else {
				options.current[options.current.length - 1].focus();
			}
		}
	}

	return (
		<button
			ref={buttonReference}
			className={className}
			tabIndex={0}
			aria-haspopup="listbox"
			onKeyDown={onKeyDown}
			aria-expanded={expanded}
			onClick={onClick}
		>
			{props.options[props.selectedIndex!] ? props.options[props.selectedIndex!].label : props.placeholder}
			{expanded && !props.disabled && (
				<Options
					onSelect={onSelect}
					onHome={onHome}
					onEnd={onEnd}
					onEsc={onEsc}
					onArrowDown={onArrowDown}
					onArrowUp={onArrowUp}
					onTab={onTab}
				>
					{props.options.map((optionData: IOptionData, index: number) => {
						return (
							<Option key={optionData.id} index={index} selected={props.selectedIndex === index}>
								{optionData.label}
							</Option>
						);
					})}
				</Options>
			)}
		</button>
	);
}

Select.defaultProps = {
	selectedIndex: 0,
	placeholder: "Select value",
} as SelectProps;

export default Select;
