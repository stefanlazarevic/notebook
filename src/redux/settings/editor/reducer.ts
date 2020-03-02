import {
  EditorSettingsState,
  EditorSettingsDefaultState,
  EditorSettingsActions
} from "./types";

export default function editorSettingsReducer(
  state: EditorSettingsState = EditorSettingsDefaultState,
  action: any
) {
  switch (action.type) {
    case EditorSettingsActions.REPLACE:
      return { ...state, ...action.payload };
    case EditorSettingsActions.REPLACE_ALL:
      return { ...action.payload };
    default:
      return state;
  }
}
