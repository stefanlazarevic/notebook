import PropTypes, { InferProps, Validator } from "prop-types";

export const ProgressBarPropTypes = {
	/**
	 * Јединствени идентификатор.
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 * Јединствени идентификатор који се користи у сврхе тестирања.
	 */
	testid: PropTypes.string as Validator<string | undefined>,
	/**
	 * Назив CSS класа које се надовезују на "ProgressBar" класу.
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 * Проценат који треба попунити од 0 до 100.
	 * @default 0
	 */
	value: PropTypes.number as Validator<number | undefined>,
	/**
	 * Идентификатор поља које описује ову компоненту.
	 */
	"aria-describedby": PropTypes.string as Validator<string | undefined>,
	/**
	 * Индикатор који указује да је процес у току.
	 */
	"aria-busy": PropTypes.bool as Validator<boolean | undefined>,
	/**
	 * Текст који се приказује на траци.
	 * @default ... ${value}%
	 */
	"aria-valuetext": PropTypes.string as Validator<string | undefined>,
};

export type ProgressBarProps = InferProps<typeof ProgressBarPropTypes>;
