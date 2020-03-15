import { NotesState } from "./notes/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { NoteEditorState } from "./editor/types";
import { SettingsState } from "./settings/types";
import { OverlayState } from "./overlays/types";

export type AppState = {
  notes: NotesState;
  editor: NoteEditorState;
  settings: SettingsState;
  overlays: OverlayState;
};

export interface IDispatch extends ThunkDispatch<AppState, {}, AnyAction> {}