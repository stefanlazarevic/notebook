import { EditorState } from "draft-js";

export interface IEditorCallbackFunctionProps {
  onZoomIn?: () => void;

  onZoomOut?: () => void;

  onChange?: (editorState: EditorState) => void;
}

export default interface IEditorProps extends IEditorCallbackFunctionProps {
  /**
   * `Draft.js` објекат који поседује све информације о тренутном стању едитора.
   */
  editorState: EditorState;

  /**
   * Величина карактера.
   */
  fontSize: number;

  /**
   * Проценат увеличавања текста едитора.
   */
  zoom: number;

  /**
   * Текст који се приказује када унутар едитора нема унетог текста.
   */
  placeholder?: string;
}
