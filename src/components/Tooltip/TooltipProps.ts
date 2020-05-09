import PropTypes, { InferProps, Validator } from "prop-types";

export enum TooltipPosition {
	right = "right",
	left = "left",
	top = "top",
	bottom = "bottom",
}

export const TooltipPropTypes = {
	/**
	 * Назив родитељског елемента који контрлише појашњење. _(Намењено за АТ технологије.)_
	 */
	"aria-describedby": PropTypes.string.isRequired,
	/**
	 * Јединствени идентификатор.
	 */
	id: PropTypes.string.isRequired,
	/**
	 * Позиција на којој се појашњење налази. Показивач на појашњењу се налази на супротној страни
	 * изабране позиције.
	 */
	position: PropTypes.oneOf(["right", "left", "top", "bottom"]) as Validator<string>,
	/**
	 * Садржај појашњења.
	 */
	children: PropTypes.node,
};

export type TooltipProps = InferProps<typeof TooltipPropTypes>;
