import {
  NotesSettingState,
  NotesSettingsDefaultState,
  NotesSettingsActions
} from "./types";

export default function notesSettingsReducer(
  state: NotesSettingState = NotesSettingsDefaultState,
  action: any
) {
  switch (action.type) {
    case NotesSettingsActions.REPLACE:
      return { ...state, ...action.payload };
    case NotesSettingsActions.REPLACE_ALL:
      return { ...action.payload };
    default:
      return state;
  }
}
