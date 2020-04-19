interface TabOptionalProps {
	/**
	 *
	 */
	selected?: boolean;

	/**
	 *
	 */
	children?: React.ReactNode;

	/**
	 *
	 */
	label?: string;
}

interface TabCallbackProps {
	/**
	 *
	 */
	onClose?: (event: React.SyntheticEvent, tabIndex: number) => void;

	/**
	 *
	 */
	onClick?: (event: React.SyntheticEvent, tabIndex: number) => void;
}

export const TAB_DEFAULT_PROPS = {
	selected: false,
};

export default interface TabProps extends TabOptionalProps, TabCallbackProps {
	/**
	 *
	 */
	index: number;
}
