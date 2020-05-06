import PropTypes, { InferProps } from "prop-types";

export const IconPropTypes = {
	/**
	 * Назив `.svg` фајла који приказујемо.
	 */
	icon: PropTypes.string.isRequired,
	/**
	 * Величина иконице изражена у броју пиксела или произвољном CSS јединицом величине.
	 * @default 24
	 */
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export type IconProps = InferProps<typeof IconPropTypes>;
