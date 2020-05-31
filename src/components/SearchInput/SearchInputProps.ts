import PropTypes, { InferProps, Validator } from "prop-types";

export const SearchInputPropTypes = {
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
	placeholder: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	value: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<React.AriaAttributes["aria-label"]>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<React.AriaAttributes["aria-describedby"]>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		((event: React.ChangeEvent<HTMLInputElement>, newValue: string) => void) | undefined
	>,
	/**
	 *
	 */
	onClear: PropTypes.func as Validator<(() => void) | undefined>,
	/**
	 *
	 */
	onSearch: PropTypes.func as Validator<(() => void) | undefined>,
};

export type SearchInputProps = InferProps<typeof SearchInputPropTypes>;
