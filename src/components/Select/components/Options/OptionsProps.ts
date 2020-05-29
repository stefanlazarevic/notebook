import PropTypes, { InferProps, Validator } from "prop-types";
import { ReactElement } from "react";

export const OptionsPropTypes = {
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<ReactElement[] | undefined>,
	/**
	 *
	 */
	onSelect: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onEscape: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
};

export type OptionsProps = InferProps<typeof OptionsPropTypes>;
