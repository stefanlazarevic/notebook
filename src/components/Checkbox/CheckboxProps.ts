import PropTypes, { InferProps } from "prop-types";
import { Validator } from "react";

export const CheckboxPropTypes = {
	/**
	 * Јединствени идентификатор.
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 * Стање поља ѕа потврду.
	 *
	 * @default false
	 */
	checked: PropTypes.bool as Validator<boolean>,
	/**
	 * Назив ознаке која описује поље за потврду.
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 * Повратни позив који се извршава када дође до промене стања поља.
	 */
	onChange: PropTypes.func as Validator<(event: React.SyntheticEvent, currentCheckedState: boolean) => void>,
};

export type CheckboxProps = InferProps<typeof CheckboxPropTypes>;
