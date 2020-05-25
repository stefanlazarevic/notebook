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
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray>,
	/**
	 *
	 */
	title: PropTypes.string as Validator<string | undefined>,
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
};

export type ButtonProps = InferProps<typeof ButtonPropTypes>;
