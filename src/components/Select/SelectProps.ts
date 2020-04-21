import { IOptionData } from "./components/Option/OptionProps";

export interface SelectOptionalProps {
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	selectedIndex?: number;
	/**
	 *
	 */
	placeholder?: string;
	/**
	 *
	 */
	className?: string;
}

export interface SelectCallbackProps {
	/**
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, index: number) => void;
}

export default interface SelectProps extends SelectOptionalProps, SelectCallbackProps {
	/**
	 *
	 */
	options: IOptionData[];
}
