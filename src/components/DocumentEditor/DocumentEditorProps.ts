import { EditorState } from "draft-js";

export interface IDocumentEditorCallbackProps {
  /**
   * Повратни позив који се извршава приликом акције затварања едитора.
   */
  onClose?: () => void;

  /**
   * Повратни позив који се извршава пре затварања едитора уколико постоје несачуване промене.
   * Уколико овај повратни позив није дефинисан, или повратни позив врати `true` вредност, `onCLose` повратни позив
   * се позива, док у супротном акција затварања едитора се обуставља.
   */
  beforeClose?: () => boolean;
}

export default interface IDocumentEditorProps {
  /**
   * Назив документа који се обрађује унутар едитора.
   */
  name: string;

  /**
   * `Draft.js` објекат који поседује информације о садржају који се
   * обрађује унутар едитора.
   */
  editorState?: EditorState;

  /**
   * Произвољне css класе
   */
  className?: string;
}
