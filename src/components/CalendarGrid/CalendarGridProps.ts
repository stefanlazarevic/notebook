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
	/**
	 *
	 */
	onEscape: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onArrowLeft: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onArrowRight: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onPageUp: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onPageDown: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onHome: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
	/**
	 *
	 */
	onEnd: PropTypes.func as Validator<(event: React.SyntheticEvent) => void>,
};

export type CalendarGridProps = InferProps<typeof CalendarGridPropTypes>;
