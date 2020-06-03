import PropTypes, { InferProps, Validator } from "prop-types";

export const LabeledSwitchPropTypes = {
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
	 *
	 */
	dir: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	checked: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	index: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<React.AriaAttributes["aria-labelledby"]>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<React.AriaAttributes["aria-label"]>,
	/**
	 *
	 */
	"aria-haspopup": PropTypes.oneOf([true, false, "true", "false"]) as Validator<
		React.AriaAttributes["aria-haspopup"]
	>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<React.AriaAttributes["aria-describedby"]>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLDivElement>, currentState: boolean) => void) | undefined
	>,
	/**
	 *
	 */
	onContext: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLDivElement>) => void) | undefined
	>,
};

export type LabeledSwitchProps = InferProps<typeof LabeledSwitchPropTypes>;
