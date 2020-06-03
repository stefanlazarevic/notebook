import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";

export const LabeledInputPropTypes = {
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
	name: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	type: PropTypes.string as Validator<"email" | "text" | "password" | "url" | "tel" | "search">,
	/**
	 *
	 */
	autoFocus: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	autoComplete: PropTypes.string as Validator<"on" | "off" | undefined>,
	/**
	 *
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	readOnly: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	required: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	form: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	placeholder: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	autoValidate: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	customValidity: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	value: PropTypes.string.isRequired as Validator<string>,
	/**
	 *
	 */
	formNoValidate: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<ReactNodeLike | string>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<React.AriaAttributes["aria-describedby"]>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<React.AriaAttributes["aria-label"]>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<React.AriaAttributes["aria-labelledby"]>,
	/**
	 *
	 */
	"aria-controls": PropTypes.string as Validator<React.AriaAttributes["aria-controls"]>,
	/**
	 *
	 */
	"aria-invalid": PropTypes.string as Validator<React.AriaAttributes["aria-invalid"]>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onFocus: PropTypes.func as Validator<
		((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onBlur: PropTypes.func as Validator<
		((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onKeyDown: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onInvalid: PropTypes.func as Validator<
		((event: React.InvalidEvent<HTMLInputElement>) => void) | undefined
	>,
};

export type LabeledInputProps = InferProps<typeof LabeledInputPropTypes>;
