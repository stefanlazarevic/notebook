import PropTypes, { InferProps, Validator } from "prop-types";

export const TextInputPropTypes = {
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
	 * @default ""
	 */
	value: PropTypes.string as Validator<string | undefined>,
	/**
	 * @default ""
	 */
	placeholder: PropTypes.string as Validator<string | undefined>,
	/**
	 * @default false
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 * @default false
	 */
	invalid: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		(event: React.SyntheticEvent<HTMLInputElement>, value: string) => void | undefined
	>,
	/**
	 *
	 */
	onFocus: PropTypes.func as Validator<(event: React.FocusEvent<HTMLInputElement>) => void | undefined>,
	/**
	 *
	 */
	onBlur: PropTypes.func as Validator<(event: React.FocusEvent<HTMLInputElement>) => void | undefined>,
};

export type TextInputProps = InferProps<typeof TextInputPropTypes>;
