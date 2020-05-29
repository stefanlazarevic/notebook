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
	icon: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	size: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	onClick: PropTypes.func as Validator<
		((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
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
};

export type IconButtonProps = InferProps<typeof IconButtonPropTypes>;
