import PropTypes, { InferProps, Validator } from "prop-types";

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
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray | undefined>,
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
	onClick: PropTypes.func as Validator<
		(event: React.SyntheticEvent<HTMLButtonElement>) => void | undefined
	>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-pressed": PropTypes.oneOf([true, false, "true", "false", "mixed"]) as Validator<
		boolean | "false" | "mixed" | "true" | undefined
	>,
	/**
	 *
	 */
	"aria-expanded": PropTypes.oneOf([true, false, "true", "false"]) as Validator<
		boolean | "false" | "true" | undefined
	>,
	/**
	 *
	 */
	"aria-haspopup": PropTypes.oneOf([true, false, "true", "false", "menu"]) as Validator<
		boolean | "true" | "false" | "menu" | undefined
	>,
};

export type ButtonProps = InferProps<typeof ButtonPropTypes>;
