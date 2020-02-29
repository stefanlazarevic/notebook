import { NotesState } from "./notes/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { NoteEditorState } from "./editor/types";

export type AppState = {
  notes: NotesState;
  editor: NoteEditorState;
};

export interface IDispatch extends ThunkDispatch<AppState, {}, AnyAction> {}
