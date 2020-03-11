import { RawDraftContentState } from "draft-js";

export interface EditorProps {
  spellCheck: boolean;
  rawContentState?: RawDraftContentState;

  onChange?: () => void;
}
