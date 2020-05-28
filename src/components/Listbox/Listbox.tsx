import React, { useRef, useLayoutEffect, useCallback } from "react";

import "./Listbox.css";

import { ListboxProps, ListboxPropTypes } from "./ListboxProps";
import useClassNames from "../Utils/hooks/classNames";
import useComponentDidMount from "../Utils/hooks/componentDidMount";
import useComponentWillUnmount from "../Utils/hooks/componentWillUnmount";
import Utils from "../Utils";

function Listbox(props: ListboxProps) {
	const className = useClassNames("Listbox", props.className);

	const listbox = useRef<HTMLUListElement | null>(null);

	const options = useRef<Element[]>([]);

	const focusedIndex = useRef<number>(-1);

	const blurFocusedOption = useCallback(() => {
		const focusedOption = options.current[focusedIndex.current];

		if (focusedOption) {
			focusedOption.setAttribute("tabIndex", "-1");
			focusedOption.classList.remove("focused");
		}
	}, []);

	/**
	 * Функција која претражује прву омогућено опцију у листи и фокусира је.
	 */
	const onHome = useCallback(
		function onListboxHomeCallback(event?: React.KeyboardEvent<HTMLLIElement>) {
			if (event) {
				event.preventDefault();
			}

			blurFocusedOption();

			let startIndex = 0;

			for (let index = startIndex; index < props.children!.length; index++) {
				const child = props.children![index];

				if (!child.props.disabled) {
					const option = options.current[index] as HTMLLIElement;
					focusedIndex.current = index;
					option.setAttribute("tabIndex", "0");
					option.classList.add("focused");
					option.focus();
					break;
				}
			}
		},
		[props.children, blurFocusedOption]
	);

	/**
	 * Функција која претражује последњу омогућено опцију у листи и фокусира је.
	 */
	const onEnd = useCallback(
		function onListboxEndCallback(event: React.KeyboardEvent<HTMLLIElement>) {
			event.preventDefault();

			blurFocusedOption();

			let startIndex = props.children!.length - 1;

			for (let index = startIndex; index > -1; index--) {
				const child = props.children![index];

				if (!child.props.disabled) {
					const option = options.current[index] as HTMLLIElement;
					focusedIndex.current = index;
					option.setAttribute("tabIndex", "0");
					option.classList.add("focused");
					option.focus();
					break;
				}
			}
		},
		[props.children, blurFocusedOption]
	);

	const onArrowUp = useCallback(
		function onListboxArrowUp(event: React.KeyboardEvent<HTMLLIElement>, index: number) {
			event.preventDefault();

			if (options.current) {
				if (index === 0) {
					return;
				}

				blurFocusedOption();

				let currentIndex = index - 1;

				while (currentIndex > -1) {
					const child = props.children![currentIndex];

					if (!child.props.disabled) {
						const option = options.current[currentIndex] as HTMLLIElement;
						focusedIndex.current = currentIndex;
						option.setAttribute("tabIndex", "0");
						option.classList.add("focused");
						option.focus();
						break;
					}

					currentIndex--;
				}
			}
		},
		[props.children, blurFocusedOption]
	);

	const onArrowDown = useCallback(
		function onListboxArrowUp(event: React.KeyboardEvent<HTMLLIElement>, index: number) {
			event.preventDefault();

			if (options.current) {
				if (index === props.children!.length - 1) {
					return;
				}

				blurFocusedOption();

				let currentIndex = index + 1;

				while (currentIndex < props.children!.length) {
					const child = props.children![currentIndex];

					if (!child.props.disabled) {
						const option = options.current[currentIndex] as HTMLLIElement;
						focusedIndex.current = currentIndex;
						option.setAttribute("tabIndex", "0");
						option.classList.add("focused");
						option.focus();
						break;
					}

					currentIndex++;
				}
			}
		},
		[props.children, blurFocusedOption]
	);

	const onSelect = useCallback(
		function onListboxSelect(event: React.SyntheticEvent, index: number) {
			blurFocusedOption();

			const option = options.current[index] as HTMLLIElement;
			focusedIndex.current = index;
			option.setAttribute("tabIndex", "0");
			option.classList.add("focused");

			if (typeof props.onSelect === "function") {
				props.onSelect(event, index);
			}
		},
		[props.onSelect]
	);

	useLayoutEffect(() => {
		if (listbox.current) {
			options.current = Array.from(listbox.current.querySelectorAll(".ListboxOption"));
		}
	}, [props.children]);

	useComponentDidMount(function listboxMountCallback() {
		if (options.current) {
			onHome(null);

			const toFocusOption = options.current[focusedIndex.current] as HTMLLIElement;

			toFocusOption.setAttribute("tabIndex", "0");

			if (props.autofocus) {
				toFocusOption.focus();
			}
		}
	});

	useComponentWillUnmount(function listboxUnmountCallback() {
		options.current.length = 0;
	});

	function renderOptions() {
		const options = [];

		for (let index = 0; index < props.children!.length; index++) {
			const option = props.children![index];

			if (option.props.selected) {
				focusedIndex.current = index;
			}

			options.push(
				React.cloneElement(option, {
					...option.props,
					index,
					onHome,
					onEnd,
					onArrowUp,
					onArrowDown,
					onSelect,
				})
			);
		}

		return options;
	}

	return (
		<ul
			ref={listbox}
			id={props.id}
			data-testid={props.testid}
			className={className}
			role="listbox"
			tabIndex={0}
			aria-multiselectable={false}
			aria-labelledby={props["aria-labbeledby"]}
			aria-label={props["aria-label"]}
			aria-activedescendant={props["aria-activedescendant"]}
		>
			{renderOptions()}
		</ul>
	);
}

Listbox.propTypes = ListboxPropTypes;

Listbox.defaultProps = { id: Utils.string.generateRandom(), children: [] };

Listbox.displayName = "Listbox";

export default Listbox;
