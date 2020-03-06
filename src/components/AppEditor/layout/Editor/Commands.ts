import { DraftHandleValue, EditorState, RichUtils } from "draft-js";
import utils from "../../../../utils";

export type UpdateEditorStateCallback = (editorState: EditorState) => void;

export enum EditorCommand {
  "BOLD" = "BOLD",
  "ITALIC" = "ITALIC",
  "UNDERLINE" = "UNDERLINE",
  "STRIKETHROUGH" = "STRIKETHROUGH",
  "SAVE" = "SAVE",
  "UNDO" = "UNDO",
  "REDO" = "REDO",
  "CLEAR" = "CLEAR"
}

export function handleKeyCommands(
  updateEditorState: UpdateEditorStateCallback
) {
  return (
    command: EditorCommand,
    editorState: EditorState
  ): DraftHandleValue => {
    switch (command) {
      case EditorCommand.BOLD:
        updateEditorState(
          RichUtils.toggleInlineStyle(editorState, EditorCommand.BOLD)
        );
        return "handled";
      case EditorCommand.ITALIC:
        updateEditorState(
          RichUtils.toggleInlineStyle(editorState, EditorCommand.ITALIC)
        );
        return "handled";
      case EditorCommand.UNDERLINE:
        updateEditorState(
          RichUtils.toggleInlineStyle(editorState, EditorCommand.UNDERLINE)
        );
        return "handled";
      case EditorCommand.STRIKETHROUGH:
        updateEditorState(
          RichUtils.toggleInlineStyle(editorState, EditorCommand.STRIKETHROUGH)
        );
        return "handled";
      case EditorCommand.UNDO:
        updateEditorState(EditorState.undo(editorState));
        return "handled";
      case EditorCommand.REDO:
        updateEditorState(EditorState.redo(editorState));
        return "handled";
      case EditorCommand.SAVE:
        return "handled";
      case EditorCommand.CLEAR:
        updateEditorState(utils.editor.clear(editorState));
        return "handled";
      default:
        return "not-handled";
    }
  };
}
