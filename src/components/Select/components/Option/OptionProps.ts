import PropTypes, { Validator, InferProps } from "prop-types";
import { ReactElement } from "react";

export const OptionPropTypes = {
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	index: PropTypes.number.isRequired as Validator<number>,
	/**
	 *
	 */
	selected: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<ReactElement[] | undefined>,
};

export type OptionProps = InferProps<typeof OptionPropTypes>;
