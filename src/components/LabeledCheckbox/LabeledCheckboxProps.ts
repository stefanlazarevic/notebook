import PropTypes, { InferProps, Validator } from "prop-types";
import { ReactElement } from "react";

export const LabeledCheckboxPropTypes = {
	/**
	 * Јединствени идентификатор.
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 * Јединствени идентификатор намењен за Unit и E2E тестове.
	 */
	testid: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	checked: PropTypes.oneOf([true, false, "true", "false", "mixed"]) as Validator<
		React.AriaAttributes["aria-checked"]
	>,
	/**
	 *
	 */
	index: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<string | ReactElement | ReactElement[] | undefined>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		((event: React.SyntheticEvent, checked: boolean, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onContext: PropTypes.func as Validator<((event: React.SyntheticEvent) => void) | undefined>,
};

export type LabeledCheckboxProps = InferProps<typeof LabeledCheckboxPropTypes>;
