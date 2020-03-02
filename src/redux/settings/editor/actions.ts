import { IDispatch, AppState } from "../../types";
import { EditorSettingsActions, EditorTextDirection } from "./types";

export function setAutoSave(value: boolean) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: EditorSettingsActions.REPLACE,
      payload: { autoSave: value, saveAndClose: false }
    });
  };
}

export function toggleAutoSave() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;
    const { autoSave } = editor;

    dispatch(setAutoSave(!autoSave));
  };
}

export function setSaveAndClose(value: boolean) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;
    const { autoSave } = editor;

    if (autoSave) {
      return;
    }

    dispatch({
      type: EditorSettingsActions.REPLACE,
      payload: { saveAndClose: value }
    });
  };
}

export function toggleSaveAndClose() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;
    const { saveAndClose } = editor;

    dispatch(setSaveAndClose(!saveAndClose));
  };
}

export function setTextDirection(value: EditorTextDirection) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: EditorSettingsActions.REPLACE,
      payload: { direction: value }
    });
  };
}

export function toggleTextDirection() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;
    const { direction } = editor;

    dispatch({
      type: EditorSettingsActions.REPLACE,
      payload: {
        direction:
          direction === EditorTextDirection.LTR
            ? EditorTextDirection.RTL
            : EditorTextDirection.LTR
      }
    });
  };
}

export function setSpellCheck(value: boolean) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: EditorSettingsActions.REPLACE,
      payload: { spellCheck: value }
    });
  };
}

export function toggleSpellCheck(value: boolean) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;
    const { spellCheck } = editor;

    dispatch(setSpellCheck(!spellCheck));
  };
}
