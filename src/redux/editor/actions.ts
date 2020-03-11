import { IDispatch, AppState } from "../types";
import { NoteEditorStateActions } from "./types";
import { NoteRecordID } from "../notes/records/types";

export function closeEditor() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NoteEditorStateActions.REPLACE_ALL,
      payload: {
        open: false,
        id: undefined
      }
    });
  };
}

export function openEditor(id?: NoteRecordID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NoteEditorStateActions.REPLACE,
      payload: {
        open: true,
        id
      }
    });
  };
}
