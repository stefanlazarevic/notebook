import ListboxProps, { ListboxCallbackProps, ListboxOptionalProps } from "../../../Listbox/ListboxProps";

export interface OptionsOptionalProps extends ListboxOptionalProps {}

export interface OptionsCallbackProps extends ListboxCallbackProps {}

export default interface OptionsProps extends ListboxProps, OptionsOptionalProps, OptionsCallbackProps {}
