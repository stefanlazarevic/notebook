import PropTypes, { InferProps, Validator } from "prop-types";

export const AlertPropTypes = {
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
	lang: PropTypes.string as Validator<string | undefined>,
};

export type AlertProps = InferProps<typeof AlertPropTypes>;
