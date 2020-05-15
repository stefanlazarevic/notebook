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
	 * @default -1
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
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray>,
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
	onFocus: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onBlur: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onClick: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onArrowDown: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onArrowUp: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onHome: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
	/**
	 *
	 */
	onEnd: PropTypes.func as Validator<(event: React.SyntheticEvent, index?: number) => void>,
};

export type AccordionHeaderProps = InferProps<typeof AccordionHeaderPropTypes>;
