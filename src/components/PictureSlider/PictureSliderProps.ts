import { StringTupple } from "../types/Tupple";

export interface PictureSliderOptionalProps {
	/**
	 * Проценат ширине слике
	 */
	offsetLeft?: number;
}

export interface PictureSliderCallbackProps {
	/**
	 *
	 */
	onLeftArrow?: (event: React.KeyboardEvent, offsetLeft: number) => void;
	/**
	 *
	 */
	onRightArrow?: (event: React.KeyboardEvent, offsetLeft: number) => void;
}

export interface PictureSliderProps extends PictureSliderOptionalProps, PictureSliderCallbackProps {
	/**
	 * Путање до слика које се приказују унутар слајдера.
	 */
	images: StringTupple;
	/**
	 * Описи слика.
	 */
	alts: StringTupple;
}
