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
	icon: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	size: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray>,
};

export type IconButtonProps = InferProps<typeof IconButtonPropTypes>;
