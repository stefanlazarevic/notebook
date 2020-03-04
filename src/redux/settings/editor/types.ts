export type EditorAppearance = {
  backgroundColor: string;
};

export type EditorSettingsState = {
  autoSave?: boolean;
  saveAndClose?: boolean;
  appearance?: EditorAppearance;
  spellCheck?: boolean;
};

export const EditorSettingsDefaultState: EditorSettingsState = {
  autoSave: true,
  saveAndClose: false,
  spellCheck: false
};

export enum EditorSettingsActions {
  REPLACE = "REPLACE",
  REPLACE_ALL = "REPLACE_ALL"
}
