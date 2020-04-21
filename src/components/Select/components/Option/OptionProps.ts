import ListboxOptionProps, {
	ListboxOptionOptionalProps,
	ListboxOptionCallbackProps,
} from "../../../Listbox/components/ListboxOption/ListboxOptionProps";

export interface IOptionData {
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	value: string;
	/**
	 *
	 */
	label: string;
}

export interface OptionOptionalProps extends ListboxOptionOptionalProps {}

export interface OptionCallbackProps extends ListboxOptionCallbackProps {}

export default interface OptionProps extends ListboxOptionProps, OptionOptionalProps, OptionCallbackProps {}
