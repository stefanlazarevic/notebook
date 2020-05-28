export interface ListboxOptionOptionalProps {
	/**
	 *
	 */
	selected?: boolean;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	className?: string;
	/**
	 *
	 */
	id?: string;
	/**
	 *
	 */
	testid?: string;
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
	/**
	 *
	 */
	onTab?: (event: React.SyntheticEvent) => void;
}

export default interface ListboxOptionProps
	extends ListboxOptionOptionalProps,
		ListboxOptionCallbackProps {
	/**
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 */
	index: number;
}
