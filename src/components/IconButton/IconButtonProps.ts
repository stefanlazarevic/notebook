import PropTypes, { Validator, InferProps } from "prop-types";

export const IconButtonPropTypes = {
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
	title: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	lang: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	icon: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	size: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	onClick: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLButtonElement>) => void) | undefined
	>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<React.AriaAttributes["aria-label"]>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<React.AriaAttributes["aria-labelledby"]>,
	/**
	 *
	 */
	"aria-pressed": PropTypes.oneOf([true, false, "true", "false", "mixed"]) as Validator<
		React.AriaAttributes["aria-pressed"]
	>,
	/**
	 *
	 */
	"aria-expanded": PropTypes.oneOf([true, false, "true", "false"]) as Validator<
		React.AriaAttributes["aria-expanded"]
	>,
	/**
	 *
	 */
	"aria-haspopup": PropTypes.oneOf([
		true,
		false,
		"false",
		"true",
		"menu",
		"listbox",
		"tree",
		"grid",
		"dialog",
	]) as Validator<React.AriaAttributes["aria-haspopup"]>,
};

export type IconButtonProps = InferProps<typeof IconButtonPropTypes>;
