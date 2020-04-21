import { ListboxOptionCallbackProps } from "./components/ListboxOption/ListboxOptionProps";

export interface ListboxOptionalProps {
	/**
	 *
	 */
	children?: React.ReactElement;
}

export interface ListboxCallbackProps extends ListboxOptionCallbackProps {}

export default interface ListboxProps extends ListboxOptionalProps, ListboxCallbackProps {}
