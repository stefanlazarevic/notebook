import PropTypes, { InferProps, Validator } from "prop-types";

export const AccordionHeaderPropTypes = {
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
	index: PropTypes.number as Validator<number | undefined>,
	/**
	 * @default false
	 */
	expanded: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	controls: PropTypes.string as Validator<string | undefined>,
	/**
	 * @default false
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray | undefined>,
	/**
	 * @default 2
	 */
	level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]) as Validator<1 | 2 | 3 | 4 | 5 | 6 | undefined>,
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	onFocus: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onBlur: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onClick: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onArrowDown: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onArrowUp: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onHome: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
	/**
	 *
	 */
	onEnd: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void | undefined>,
};

export type AccordionHeaderProps = InferProps<typeof AccordionHeaderPropTypes>;
