export type EditorSettingsState = {
  autoSave?: boolean;
  saveAndClose?: boolean;
  spellCheck?: boolean;
};

export const EditorSettingsDefaultState: EditorSettingsState = {
  autoSave: true,
  saveAndClose: false,
  spellCheck: false
};

export enum EditorSettingsActions {
  REPLACE = "Settings/Editor/Actions/REPLACE",
  REPLACE_ALL = "Settings/Editor/Actions/REPLACE_ALL"
}
