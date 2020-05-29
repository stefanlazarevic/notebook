import PropTypes, { InferProps, Validator } from "prop-types";
import { ReactElement } from "react";

export const ButtonPropTypes = {
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
	children: PropTypes.node as Validator<ReactElement | ReactElement[] | undefined>,
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
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
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
	"aria-haspopup": PropTypes.oneOf([true, false, "true", "false", "menu"]) as Validator<
		React.AriaAttributes["aria-haspopup"]
	>,
};

export type ButtonProps = InferProps<typeof ButtonPropTypes>;
