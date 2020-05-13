import PropTypes, { InferProps } from "prop-types";
import { Validator } from "react";

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
	checked: PropTypes.bool as Validator<boolean | "mixed">,
	/**
	 * Назив ознаке која описује поље за потврду.
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 * Повратни позив који се извршава када дође до промене стања поља.
	 */
	onChange: PropTypes.func as Validator<
		(
			event: React.SyntheticEvent,
			currentCheckedState: boolean | "mixed"
		) => void
	>,
	/**
	 * Називи CSS класа.
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 * Индикатор онемогућености поља.
	 */
	disabled: PropTypes.bool as Validator<boolean | undefined>,
};

export type CheckboxProps = InferProps<typeof CheckboxPropTypes>;
