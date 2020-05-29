import PropTypes, { InferProps, Validator } from "prop-types";
import { ReactElement } from "react";

export const ListboxOptionPropTypes = {
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
	selected: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	index: PropTypes.number.isRequired as Validator<number>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<ReactElement[] | undefined>,
	/**
	 *
	 */
	onArrowUp: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onArrowDown: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onHome: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onEnd: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onEnter: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onSpace: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onEscape: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onTab: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onClick: PropTypes.func as Validator<
		((event: React.MouseEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
};

export type ListboxOptionProps = InferProps<typeof ListboxOptionPropTypes>;
