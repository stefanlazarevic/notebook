import { IDispatch, AppState } from "../../types";
import { EditorSettingsActions, EditorSettingsState } from "./types";

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

export function update(editorSettings: Partial<EditorSettingsState>) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { settings } = getState();
    const { editor } = settings;

    dispatch({
      type: EditorSettingsActions.REPLACE_ALL,
      payload: {
        ...editor,
        ...editorSettings
      }
    });
  };
}
