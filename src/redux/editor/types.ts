export type NoteEditorState = {
  open: boolean;
  id?: string;
};

export const NoteEditorDefaultState = {
  open: true,
  id: undefined
};

export enum NoteEditorStateActions {
  REPLACE = "Editor/Actions/REPLACE",
  REPLACE_ALL = "Editor/Actions/REPLACE_ALL"
}
