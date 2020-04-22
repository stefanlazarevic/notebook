export interface ToggleOptionalProps {
	/**
	 *
	 */
	checked?: boolean;
	/**
	 *
	 */
	name?: string;
}

export interface ToggleCallbackProps {
	/**
	 *
	 */
	onChange: (event: React.SyntheticEvent, changedChecked: boolean) => void;
}

export default interface ToggleProps extends ToggleOptionalProps, ToggleCallbackProps {}
