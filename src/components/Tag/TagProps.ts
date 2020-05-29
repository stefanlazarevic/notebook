import PropTypes, { InferProps, Validator } from "prop-types";
import { ReactElement } from "react";

export const TagPropTypes = {
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
	children: PropTypes.node as Validator<ReactElement[] | undefined>,
	/**
	 * @default 0
	 */
	tabIndex: PropTypes.number as Validator<number | undefined>,
	/**
	 * Величина иконице за уклањање компоненте.
	 *
	 * @default 14
	 */
	size: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	onRemove: PropTypes.func as Validator<((event: React.SyntheticEvent) => void) | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<string | undefined>,
};

export type TagProps = InferProps<typeof TagPropTypes>;
