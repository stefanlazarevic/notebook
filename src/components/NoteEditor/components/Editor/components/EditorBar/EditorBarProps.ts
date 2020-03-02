import { DraftInlineStyle } from "draft-js";
import { EditorInlineStyleTypes } from "../../StyleMap";

export type EditorBarProps = {
  currentInlineStyles: DraftInlineStyle;

  onAction: (event: React.MouseEvent, action?: EditorInlineStyleTypes) => void;
  onReset: (event: React.MouseEvent) => void;
};
