export interface ITabData {
	/**
	 *
	 */
	id: string;

	/**
	 *
	 */
	label: string;

	/**
	 *
	 */
	value: string;
}

interface TabsOptionalProps {
	/**
	 *
	 */
	selectedTabIndex?: number;

	/**
	 *
	 */
	tabs?: ITabData[];

	/**
	 *
	 */
	max?: number;
}

interface TabsCallbackProps {
	/**
	 *
	 */
	onClose?: (event: React.SyntheticEvent, tabIndex: number) => void;

	/**
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, tabIndex: number) => void;
}

export const TABS_DEFAULT_PROPS = {
	selectedTabIndex: 0,

	max: 5,

	tabs: [],
};

export default interface TabsProps extends TabsOptionalProps, TabsCallbackProps {}
