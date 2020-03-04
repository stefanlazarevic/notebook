import { RawDraftContentState } from "draft-js";

export interface TitleReference {
  getValue: () => string;
}

export interface EditorReference {
  getPlainText: () => string;
  getRawDraftContentState: () => RawDraftContentState;
  focus: () => void;
  blur: () => void;
}
