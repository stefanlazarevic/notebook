export type EditorAppearance = {
  backgroundColor: string;
};

export enum EditorTextDirection {
  LTR = "LTR",
  RTL = "RTL"
}

export type EditorSettingsState = {
  autoSave?: boolean;
  saveAndClose?: boolean;
  appearance?: EditorAppearance;
  direction: EditorTextDirection;
  spellCheck?: boolean;
};

export const EditorSettingsDefaultState: EditorSettingsState = {
  autoSave: false,
  saveAndClose: false,
  direction: EditorTextDirection.LTR,
  spellCheck: false
};

export enum EditorSettingsActions {
  REPLACE = "REPLACE",
  REPLACE_ALL = "REPLACE_ALL"
}
