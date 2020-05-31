import React, { useCallback } from "react";

import "./SearchInput.css";

import useClassNames from "../Utils/hooks/classNames";
import IconButton from "../IconButton";
import { Icons } from "../Icon";
import Key from "../Utils/keyboard/key";
import { SearchInputProps, SearchInputPropTypes } from "./SearchInputProps";

function SearchInput(props: SearchInputProps) {
	const className = useClassNames("SearchInput", props.className);

	const search = useCallback(
		function SearchInputSearchCallback() {
			props.onSearch!();
		},
		[props.onSearch]
	);

	const clear = useCallback(
		function SearchInputClearCallback() {
			props.onClear!();
		},
		[props.onClear]
	);

	const onChange = useCallback(
		function SearchInputChangeCallback(event: React.ChangeEvent<HTMLInputElement>) {
			props.onChange!(event, event.target.value);
		},
		[props.onChange]
	);

	const onKeyDown = useCallback(
		function SearchInputKeyDownCallback(event: React.KeyboardEvent<HTMLInputElement>) {
			const { keyCode } = event;

			if (keyCode === Key.ENTER && typeof props.onSearch === "function") {
				event.preventDefault();

				search();
			}

			if (keyCode === Key.ESCAPE && typeof props.onClear === "function") {
				event.preventDefault();

				clear();
			}
		},
		[search, clear, props.onSearch, props.onClear]
	);

	return (
		<div id={props.id} data-testid={props.testid} className={className}>
			<input
				type="search"
				value={typeof props.onChange === "function" ? props.value : undefined}
				defaultValue={typeof props.onChange !== "function" ? props.value : undefined}
				placeholder={props.placeholder}
				aria-label={props["aria-label"]}
				aria-describedby={props["aria-describedby"]}
				onKeyDown={onKeyDown}
				onChange={typeof props.onChange === "function" ? onChange : undefined}
			/>
			{props.value!.length ? (
				<IconButton
					size={16}
					icon={Icons.close}
					aria-label="Clear search box."
					onClick={typeof props.onClear === "function" ? clear : undefined}
				/>
			) : null}
			<IconButton
				size={16}
				icon={Icons.searchAlt}
				tabIndex={-1}
				onClick={typeof props.onSearch === "function" ? search : undefined}
				title="Search"
			/>
		</div>
	);
}

SearchInput.propTypes = SearchInputPropTypes;

SearchInput.defaultProps = {
	value: "",
} as Partial<SearchInputProps>;

SearchInput.displayName = "SearchInput";

export default SearchInput;
