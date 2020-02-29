import { IDispatch, AppState } from "../types";
import { NoteEditorStateActions } from "./types";

export function close() {
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

export function open(id?: string) {
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
