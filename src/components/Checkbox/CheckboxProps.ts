import PropTypes, { InferProps } from "prop-types";
import { Validator, AriaAttributes } from "react";

export const CheckboxPropTypes = {
	/**
	 * Јединствени идентификатор.
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 * Јединствени идентификатор намењен за Unit и E2E тестове.
	 */
	testid: PropTypes.string as Validator<string | undefined>,
	/**
	 * Вредност овог атрибута дефинише стање поља за потврду.
	 * Вредности могу бити `true`, `false` и "mixed".
	 *
	 * "mixed" вредност представља неодређено стање.
	 *
	 * @default false
	 */
	checked: PropTypes.oneOf([true, false, "true", "false", "mixed"]) as Validator<AriaAttributes["aria-checked"]>,
	/**
	 * Назив ознаке која описује поље за потврду.
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-haspopup": PropTypes.oneOf([true, false, "true", "false"]) as Validator<boolean | "false" | "true" | undefined>,
	/**
	 * Повратни позив који се извршава када дође до промене стања поља.
	 */
	onChange: PropTypes.func as Validator<
		(
			event: React.SyntheticEvent,
			currentCheckedState: boolean | "false" | "mixed" | "true" | undefined,
			index?: number
		) => void | undefined
	>,
	/**
	 * Повратни позив који се извршава приликом употребе `Shift` + `F10` пречице.
	 */
	onContext: PropTypes.func as Validator<(event: React.SyntheticEvent) => void | undefined>,
	/**
	 * Називи CSS класа.
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 * Индикатор онемогућености поља.
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 * Информација о позицији поља у колекцији.
	 * Уколико је вредност дефинисана, приликом промене стања поља, ова информација
	 * се прослеђује као трећи параметар.
	 */
	index: PropTypes.number as Validator<number | undefined>,
};

export type CheckboxProps = InferProps<typeof CheckboxPropTypes>;
