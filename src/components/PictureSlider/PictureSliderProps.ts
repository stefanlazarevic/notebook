import { StringTupple } from "../types/Tupple";

export interface PictureSliderOptionalProps {
	/**
	 * Проценат сакривености десне слике.
	 */
	offsetLeft?: number;
}

export interface PictureSliderCallbackProps {
	/**
	 *
	 * @param event
	 * @param offsetLeft Тренутни проценат сакривености десне слике од 0 до 100.
	 */
	onLeftArrow?: (event: React.KeyboardEvent, offsetLeft: number) => void;
	/**
	 *
	 * @param event
	 * @param offsetLeft Тренутни проценат сакривености десне слике од 0 до 100.
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
