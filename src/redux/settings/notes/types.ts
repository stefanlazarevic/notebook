export type NotesSettingState = {
  softDelete: boolean;
};

export const NotesSettingsDefaultState = {
  softDelete: true
};

export enum NotesSettingsActions {
  REPLACE = "Settings/Notes/Actions/REPLACE",
  REPLACE_ALL = "Settings/Notes/Actions/REPLACE_ALL"
}
