import { EditorSettingsState } from "./editor/types";
import { NotesSettingState } from "./notes/types";

export type SettingsState = {
  editor: EditorSettingsState;
  notes: NotesSettingState;
};
