export interface PictureSliderOptionalProps {}

export interface PictureSliderCallbackProps {}

export interface PictureSliderProps extends PictureSliderOptionalProps, PictureSliderCallbackProps {
	/**
	 * Путање до слика које се приказују унутар слајдера.
	 */
	images: [string, string];
	/**
	 * Описи слика.
	 */
	alts: [string, string];
}
