import { ListboxOptionCallbackProps } from "./components/ListboxOption/ListboxOptionProps";

export interface ListboxOptionalProps {
	/**
	 *
	 */
	children?: React.ReactElement | React.ReactElement[];
	/**
	 *
	 */
	className?: string;
}

export interface ListboxCallbackProps extends ListboxOptionCallbackProps {}

export default interface ListboxProps extends ListboxOptionalProps, ListboxCallbackProps {}
