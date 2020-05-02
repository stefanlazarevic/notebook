/**
 * Удица за прављење новог веб аудио контекста.
 */
export default function useAudioContext(contextOptions?: AudioContextOptions): AudioContext {
	// @ts-ignore `webkitAudioContext` у тренутку писања није препознатљив од стране `Typescript` језика.
	const AudioContext = window.AudioContext || window.webkitAudioContext;

	return new AudioContext(contextOptions);
}
