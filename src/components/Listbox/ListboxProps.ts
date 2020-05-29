import PropTypes, { InferProps, Validator } from "prop-types";

export const ListboxPropTypes = {
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
	children: PropTypes.node as Validator<React.ReactElement[] | undefined>,
	/**
	 * Опција која говори компоненти да фокусира селектовани артикал или први артикал у листи
	 * приликом спровођења.
	 */
	autofocus: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	"aria-labbeledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-activedescendant": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	onSelect: PropTypes.func as Validator<
		((event: React.SyntheticEvent<HTMLLIElement>, index: number) => void) | undefined
	>,
	/**
	 *
	 */
	onEscape: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
	/**
	 *
	 */
	onTab: PropTypes.func as Validator<
		((event: React.KeyboardEvent<HTMLLIElement>) => void) | undefined
	>,
};

export type ListboxProps = InferProps<typeof ListboxPropTypes>;
