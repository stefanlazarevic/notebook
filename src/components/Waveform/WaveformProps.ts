export interface WaveformOptionalProps {
	/**
	 * Низ бројева извучених из `AudioBuffer` класе путем `getChannelData` методе.
	 * И ако је овај атрибут намењен да се користи за податке из `getChannelData` методе,
	 * компонента не спречава да се користи произвољан низ бројева.
	 */
	channelData?: number[];
	/**
	 * Број исцртаних линија на екрану које представљају `channelData`.
	 */
	samples?: number;
	/**
	 * X координата која представља границу између линија обојених у `sampleColor`
	 * и линија обојених у `progressColor`.
	 */
	progressX?: number;
	/**
	 * Боја линија које се налаѕе од 0 до `progressX`.
	 */
	progressColor?: string;
	/**
	 * Боја линија које се налазе од `progressX` до краја канваса.
	 */
	sampleColor?: string;
}

export interface WaveformCallbackProps {
	/**
	 *
	 */
	onClick?: (event: MouseEvent, x?: number, y?: number) => void;
}

export default interface WaveformProps extends WaveformOptionalProps, WaveformCallbackProps {}
