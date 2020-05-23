import PropTypes, { Validator, InferProps } from "prop-types";

export const CalendarGridPropTypes = {
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
	month: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	year: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	selectedDay: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	selectedMonth: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	selectedYear: PropTypes.number as Validator<number | undefined>,
	/**
	 *
	 */
	onSelect: PropTypes.func as Validator<
		(event: React.SyntheticEvent, day: number, month: number, year: number) => void
	>,
};

export type CalendarGridProps = InferProps<typeof CalendarGridPropTypes>;
