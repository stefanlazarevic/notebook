import { DraftInlineStyle } from "draft-js";
import { EditorCommand } from "../../layout/Editor/Commands";

export interface EditorControlsProps {
  inlineStyles?: DraftInlineStyle;

  onClick?: (command: EditorCommand) => void;
}
