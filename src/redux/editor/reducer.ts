import {
  NoteEditorState,
  NoteEditorDefaultState,
  NoteEditorStateActions
} from "./types";

export default function editorReducer(
  state: NoteEditorState = NoteEditorDefaultState,
  action: any
): NoteEditorState {
  switch (action.type) {
    case NoteEditorStateActions.REPLACE:
      return { ...state, ...action.payload };
    case NoteEditorStateActions.REPLACE_ALL:
      return { ...action.payload };
    default:
      return state;
  }
}
