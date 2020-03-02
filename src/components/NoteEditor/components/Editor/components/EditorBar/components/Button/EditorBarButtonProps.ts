import { EditorInlineStyleTypes } from "../../../../StyleMap";

export type EditorBarButtonProps = {
  children?: React.ReactNode;
  title?: string;
  active?: boolean;

  /** Action name used as the parameter in the onClick callback. */
  action?: EditorInlineStyleTypes;

  /** Fallback text if component's children are absent. */
  text?: string;

  onClick: (event: React.MouseEvent, action?: EditorInlineStyleTypes) => void;
};
