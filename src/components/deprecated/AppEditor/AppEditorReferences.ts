import { RawDraftContentState } from "draft-js";

export interface NameInputReference {
  getValue: () => string;
}

export interface EditorReference {
  getPlainText: () => string;
  getRawDraftContentState: () => RawDraftContentState;
  focusEditor: () => void;
  blurEditor: () => void;
}
