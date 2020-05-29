import PropTypes, { InferProps, Validator } from "prop-types";

export const SliderPropTypes = {
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
	 * @default 0
	 */
	min: PropTypes.number as Validator<number | undefined>,
	/**
	 * @default 1
	 */
	max: PropTypes.number as Validator<number | undefined>,
	/**
	 * @default 0.1
	 */
	step: PropTypes.number as Validator<number | undefined>,
	/**
	 * @default 0.5
	 */
	value: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	onChange: PropTypes.func as Validator<
		((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
	>,
};

export type SliderProps = InferProps<typeof SliderPropTypes>;
