export interface ListboxOptionOptionalProps {
	/**
	 *
	 */
	selected?: boolean;
}

export interface ListboxOptionCallbackProps {
	/**
	 *
	 */
	onArrowUp?: (event: React.SyntheticEvent, index: number) => void;
	/**
	 *
	 */
	onArrowDown?: (event: React.SyntheticEvent, index: number) => void;
	/**
	 *
	 */
	onHome?: (event: React.SyntheticEvent) => void;
	/**
	 *
	 */
	onEnd?: (event: React.SyntheticEvent) => void;
	/**
	 *
	 */
	onEsc?: (event: React.SyntheticEvent) => void;
	/**
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, index: number) => void;
	/**
	 *
	 */
	onFocus?: (event: React.SyntheticEvent, index: number) => void;
}

export default interface ListboxOptionProps extends ListboxOptionOptionalProps, ListboxOptionCallbackProps {
	/**
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 */
	index: number;
}
