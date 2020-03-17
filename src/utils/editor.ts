import { EditorState, Modifier, ContentState, ContentBlock } from "draft-js";

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

export function truncate(
  contentState: ContentState,
  characterCount: number
): ContentState {
  const blocks = contentState.getBlockMap();
  const truncatedBlocks: ContentBlock[] = [];

  let count = 0;
  let isTruncated = false;

  blocks.forEach(block => {
    if (!isTruncated && block) {
      const length = block.getLength();
      if (count + length > characterCount) {
        isTruncated = true;
        const truncatedText = block.getText().slice(0, characterCount - count);
        const state = ContentState.createFromText(`${truncatedText}...`);
        truncatedBlocks.push(state.getFirstBlock());
      } else {
        truncatedBlocks.push(block);
      }
      count += length + 1;
    }
  });

  if (isTruncated) {
    return ContentState.createFromBlockArray(truncatedBlocks);
  }

  return contentState;
}
