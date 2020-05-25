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
	"aria-label": PropTypes.string as Validator<string | undefined>,
};

export type ButtonProps = InferProps<typeof ButtonPropTypes>;
