import { EditorState, Modifier, ContentState } from "draft-js";

export function clear(editorState: EditorState): EditorState {
  const selection = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const styles = editorState.getCurrentInlineStyle();

  const unstyledContentState = styles.reduce((state, style) => {
    return Modifier.removeInlineStyle(
      state as ContentState,
      selection,
      style as string
    );
  }, contentState);

  return EditorState.push(
    editorState,
    Modifier.setBlockType(unstyledContentState, selection, "unstyled"),
    "change-block-type"
  );
}
