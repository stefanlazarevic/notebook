import PropTypes, { InferProps, Validator } from "prop-types";

export const SwitchPropTypes = {
	/**
	 * Стање у ком се прекидач налази. `true` представља упаљен прекидач док `false`
	 * означава супротно стање.
	 *
	 * @default false
	 */
	checked: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 * Назив елемента форме.
	 *
	 * @default "fagascq23" Насумично добијена ниска.
	 */
	name: PropTypes.string as Validator<string | undefined>,
	/**
	 * Повратни позив уколико се стање прекидача промени.
	 */
	onChange: PropTypes.func as Validator<(event: React.SyntheticEvent, changedChecked: boolean) => void>,
};

export type ToggleProps = InferProps<typeof SwitchPropTypes>;
