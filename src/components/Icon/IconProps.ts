import PropTypes, { InferProps, Validator } from "prop-types";

export const IconPropTypes = {
	/**
	 * Назив `.svg` фајла који приказујемо.
	 */
	icon: PropTypes.string.isRequired as Validator<NonNullable<string>>,
	/**
	 * Величина иконице изражена у броју пиксела или произвољном CSS јединицом величине.
	 * @default 24
	 */
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
};

export type IconProps = InferProps<typeof IconPropTypes>;
