import { EditorState } from "draft-js";

export interface EditorOptionalProps {
	/**
	 * Величина карактера.
	 */
	fontSize?: number;
	/**
	 * Проценат увеличавања текста едитора.
	 */
	zoom?: number;
	/**
	 * Текст који се приказује када унутар едитора нема унетог текста.
	 */
	placeholder?: string;
}

export interface EditorCallbackProps {
	/**
	 *
	 */
	onChange?: (editorState: EditorState) => void;
	/**
	 *
	 */
	onZoomIn?: () => void;
	/**
	 *
	 */
	onZoomOut?: () => void;
}

export default interface EditorProps extends EditorOptionalProps, EditorCallbackProps {
	/**
	 * `Draft.js` објекат који поседује све информације о тренутном стању едитора.
	 */
	editorState: EditorState;
}
