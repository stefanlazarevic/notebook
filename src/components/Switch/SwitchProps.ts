import PropTypes, { InferProps, Validator } from "prop-types";

export const SwitchPropTypes = {
	/**
	 *
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	testid: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 * Стање у ком се прекидач налази. `true` представља упаљен прекидач док `false`
	 * означава супротно стање.
	 *
	 * @default false
	 */
	checked: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 * @default false
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	index: PropTypes.number as Validator<number | undefined>,
	/**
	 * @default 0
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-haspopup": PropTypes.oneOf([true, false, "true", "false"]) as Validator<
		boolean | "true" | "false" | undefined
	>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<string | undefined>,
	/**
	 * Повратни позив уколико се стање прекидача промени.
	 */
	onChange: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLDivElement>, changedChecked: boolean) => void) | undefined
	>,
	/**
	 *
	 */
	onContext: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLDivElement>) => void) | undefined
	>,
};

export type SwitchProps = InferProps<typeof SwitchPropTypes>;
