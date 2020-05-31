import PropTypes, { InferProps, Validator } from "prop-types";

export const AvatarPropTypes = {
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
	src: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	alt: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	name: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
};

export type AvatarProps = InferProps<typeof AvatarPropTypes>;
