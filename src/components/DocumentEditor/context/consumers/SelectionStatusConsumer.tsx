import React, { useContext } from "react";
import { EditorStateContext } from "../providers/EditorStateContext";
import { EditorState } from "draft-js";
import SelectionStatus from "../../components/SelectionStatus";

export default function SelectionStatusConsumer() {
  const [editorState]: [EditorState] = useContext(EditorStateContext);

  const selectionState = editorState.getSelection();

  const focusedBlockKey = selectionState.getFocusKey();

  const line =
    editorState
      .getCurrentContent()
      .getBlocksAsArray()
      .findIndex(block => block.getKey() === focusedBlockKey) + 1;

  const column = selectionState.getFocusOffset();

  return <SelectionStatus line={line} column={column} />;
}
