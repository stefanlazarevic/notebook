export type NoteGroupID = string;

export interface NoteGroup {
  id: NoteGroupID;
  parent?: string;
  title: string;
  children: string[];
}

export interface NotesGroups {
  [id: string]: NoteGroup;
}

export enum NotesGroupsActions {
  REPLACE = "Notes/Groups/Actions/REPLACE",
  REPLACE_ALL = "Notes/Groups/Actions/REPLACE_ALL"
}

export const DEFAULT_NOTES_GROUPS_STATE: NotesGroups = {
  root: {
    id: "root",
    parent: undefined,
    title: "/",
    children: []
  }
};
